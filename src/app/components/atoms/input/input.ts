import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import inputStyles from './input.scss?inline';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('wc-input')
export class WcInput extends LitElement {
  static override styles = css`${unsafeCSS(inputStyles)}`;

  @property({ type: String, reflect: true })
  declare value: string;

  @property({ type: String, reflect: true })
  declare placeholder: string;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ type: String, reflect: true })
  declare type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

  @query('input')
  inputElement!: HTMLInputElement;

  constructor() {
    super();
    this.value = '';
    this.disabled = false;
    this.type = 'text';
    this.placeholder = '';
  }

  override render() {
    return html`
      <input
        .value=${this.value}
        ?disabled=${this.disabled}
        @input=${this.onInput}
        type=${this.type}
        placeholder="${this.placeholder}"
        aria-label=${ifDefined(this.placeholder || undefined)}
      />
    `;
  }

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string): void {
    this.value = value;
    if (this.inputElement) {
      this.inputElement.value = value;
    }
  }

  override focus(): void {
    if (this.inputElement && !this.disabled) {
      this.inputElement.focus();
    }
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
