import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import selectStyles from './select.scss?inline';
import { selectTemplate } from './select.template';
import { WcOption } from '../../atoms/option/option';

@customElement('wc-select')
export class WcSelect extends LitElement {
  static override styles = css`${unsafeCSS(selectStyles)}`;

  @property({ type: String, reflect: true })
  declare value: string | null;

  @property({ type: Boolean })
  declare open: boolean;

  @property({ type: Boolean })
  declare closeWhenClickOutside: boolean;

  constructor() {
    super();
    this.value = null;
    this.open = false;
    this.closeWhenClickOutside = true;
  }

  get options(): WcOption[] {
    return Array.from(
      this.querySelectorAll('wc-option')
    ) as WcOption[];
  }

  override render() {
    return selectTemplate(this);
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('value')) {
      this.syncOptionsWithValue();
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      'option-selected',
      this.handleOptionSelected as EventListener
    );
    document.addEventListener('click', this.handleClickOutside);
  }

  override disconnectedCallback() {
    this.removeEventListener(
      'option-selected',
      this.handleOptionSelected as EventListener
    );
    document.removeEventListener('click', this.handleClickOutside);
    super.disconnectedCallback();
  }

  public toggleSelect() {
    this.open = !this.open;
  }

  private syncOptionsWithValue() {
    this.options.forEach(opt => {
      opt.selected = opt.value === this.value;
    });
  }

  private handleClickOutside = (event: MouseEvent) => {
    const path = event.composedPath();

    if (!path.includes(this) && this.closeWhenClickOutside) {
      this.open = false;
    }
  };

  private handleOptionSelected = (e: CustomEvent) => {
    const { value, option } = e.detail;

    this.value = value;

    this.options.forEach(opt => (opt.selected = false));
    option.selected = true;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value },
        bubbles: true,
        composed: true,
      })
    );
  };

   
}

