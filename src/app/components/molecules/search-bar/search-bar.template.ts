import { html } from 'lit';
import type { WcSearchBar } from './search-bar';

export const searchBarTemplate = (host: WcSearchBar) => html`
  <div class="search-bar">
    <slot name="input"></slot>
    <slot name="button"></slot>
  </div>
`;
