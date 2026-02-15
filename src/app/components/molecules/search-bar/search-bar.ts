import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import  searchBarStyles  from './search-bar.scss?inline';
import  {searchBarTemplate}  from './search-bar.template';

@customElement('wc-search-bar')
export class WcSearchBar extends LitElement {
  static override styles = css`${unsafeCSS(searchBarStyles)}`;

  @property({ type: String })
  declare value: string;

  constructor() {
    super();
    this.value = '';
  }

  override render() {
    return searchBarTemplate(this);
  }

  onValueChange(e: CustomEvent<string>) {
    this.value = e.detail;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('value-change', this.onValueChange as EventListener);
    this.addEventListener('button-clicked', this.onSearch as EventListener);
  }

  override disconnectedCallback() {
    this.removeEventListener('value-change', this.onValueChange as EventListener);
    this.removeEventListener('button-clicked', this.onSearch as EventListener);
    super.disconnectedCallback();
  }

  onSearch() {
    this.dispatchEvent(
      new CustomEvent('search', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }
}

