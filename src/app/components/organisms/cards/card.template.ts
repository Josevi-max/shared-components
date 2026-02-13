import { html } from 'lit';
import type { WcUserCard } from './card';

export const cardTemplate = (host: WcUserCard) => html`
   <div class="card">
    <h3>${host.username}</h3>
    ${host.avatar ? html`<img src=${host.avatar} alt="Avatar" width="50"/>` : ''}
    <slot></slot>
    <wc-button @click=${() => host.dispatchEvent(new CustomEvent('follow', { detail: host.username }))}>
        Follow
    </wc-button>
    </div>
`;
