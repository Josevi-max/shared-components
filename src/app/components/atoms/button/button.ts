import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './button.scss?inline';

@customElement('wc-button')
export class WcButton extends LitElement {
  static override styles = css`${unsafeCSS(buttonStyles)}`;

  @property({ type: Boolean, reflect: true })
   declare disabled: boolean;
   
  override render() {
    return html`<button ?disabled=${this.disabled} ><slot></slot></button>`;
  }
}
