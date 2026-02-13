import { html } from 'lit';
import type { WcSearchBar } from './search-bar';

export const searchBarTemplate = (host: WcSearchBar) => html`
  <wc-input
    .value=${host.value}
    @valueChange=${(e: CustomEvent<string>) => host.onValueChange(e)}
  ></wc-input>

  <wc-button @click=${() => host.onSearch()}>
    Search
  </wc-button>
`;
