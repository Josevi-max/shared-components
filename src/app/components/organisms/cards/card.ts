import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import  cardStyles  from './card.scss?inline';
import { cardTemplate } from './card.template';

@customElement('wc-user-card')
export class WcUserCard extends LitElement {
  static override styles = css`${unsafeCSS(cardStyles)}`;

  @property({ type: String })
  declare username: string;

  @property({ type: String })
  declare avatar:string;
 
  constructor() {
    super();
    this.username = 'User';
    this.avatar = '';
  }

  override render() {
    return cardTemplate(this);
  }
}

