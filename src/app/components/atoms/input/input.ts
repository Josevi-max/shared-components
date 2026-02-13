import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import inputStyles from './input.scss?inline';

@customElement('wc-input')
export class WcInput extends LitElement {
  static override styles = css`${unsafeCSS(inputStyles)}`;

  @property({ type: String, reflect: true })
  declare value: string;

  @property({ type: String, reflect: true })
  declare placeholder: string;

  @query('input')
  inputElement!: HTMLInputElement;

  constructor() {
    super();
    this.value = '';
  }

  override render() {
    return html`
      <input
        .value=${this.value}
        @input=${this.onInput}
        placeholder="${this.placeholder}"
      />
    `;
  }

  private onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(
    new CustomEvent('value-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    })
  );
  }
}
