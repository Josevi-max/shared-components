
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import optionStyles from './option.scss?inline';

@customElement('wc-option')
export class WcOption extends LitElement {
  static override styles = css`${unsafeCSS(optionStyles)}`;

  @property({ type: String, reflect: true })
  declare value: string;

  @property({ type: Boolean, reflect: true })
  declare selected: boolean;

  constructor() {
    super();
    this.selected = false;
  }

  override render() {
    return html`<slot></slot>`;
  }

  private handleClick = () => {
    this.dispatchEvent(
      new CustomEvent('option-selected', {
        detail: {
          value: this.value,
          option: this,
        },
        bubbles: true,
        composed: true,
      })
    );
  };

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }

  override disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
    super.disconnectedCallback();
  }
}

