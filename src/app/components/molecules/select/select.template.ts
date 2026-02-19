import { html } from 'lit';
import type { WcSelect } from './select';

export const selectTemplate = (host: WcSelect) => html`
  <div>
    <div 
      class="select-display" 
      @click=${host.toggleSelect}
      data-placeholder="Selecciona una opción"
    >
      <slot name="displayName"></slot>
    </div>
    <div class="options-container ${host.open ? 'open' : ''}">
      <slot></slot>
    </div>
  </div>
`;