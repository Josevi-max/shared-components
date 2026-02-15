import { html } from 'lit';
import { WcDataTable } from './data-table';

export const dataTableTemplate = (host: WcDataTable) => html`
  <div class="data-table">
    <wc-search-bar
    .value=${host.searchTerm}
    >
    <wc-input
      slot="input"
      .value=${host.searchTerm}
      placeholder=${host.placeholder}
    ></wc-input>

    <wc-button slot="button">
      Search
    </wc-button>
  </wc-search-bar>

    <wc-table 
      .columns=${host.columns} 
      .data=${host.paginatedData} 
      @row-click=${(e: CustomEvent) => host.dispatchEvent(
  new CustomEvent('row-click', { detail: e.detail, bubbles: true, composed: true })
)}>
    </wc-table>

    <wc-paginator 
      .totalItems=${host.allFilteredData.length} 
      .pageSize=${host.pageSize} 
      .pageSizeOptions=${host.pageSizeOptions}>
    </wc-paginator>
  </div>
`;
