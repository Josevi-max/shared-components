// data-table.template.ts
import { html } from 'lit';
import { WcDataTable } from './data-table';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export const dataTableTemplate = (host: WcDataTable) => {
  const tableClasses = {
    'data-table': true,
    'loading': host.loading,
    'empty': !host.loading && host.allFilteredData.length === 0
  };

  return html`
    <div class=${classMap(tableClasses)}>
      <div class="search-container">
        <wc-search-bar .value=${host.searchTerm}>
          <wc-input
            slot="input"
            .value=${host.searchTerm}
            placeholder=${host.placeholder}
            ?disabled=${host.loading}
          ></wc-input>
          
          <wc-button 
            slot="button"
            ?disabled=${host.loading}
          >
            ${host.loading ? 'Buscando...' : 'Buscar'}
          </wc-button>
        </wc-search-bar>
      </div>
      
      <div class="table-container">
        <wc-table 
          .columns=${host.columns} 
          .data=${host.paginatedData}
          ?loading=${host.loading}
          @row-click=${(e: CustomEvent) => host.dispatchEvent(
            new CustomEvent('row-click', { 
              detail: e.detail, 
              bubbles: true, 
              composed: true 
            })
          )}
        >
          ${host.loading ? html`
            <div slot="loading" class="table-loading">
              <span>Cargando datos...</span>
            </div>
          ` : ''}
        </wc-table>
      </div>
      
      ${!host.loading && host.allFilteredData.length > 0 ? html`
        <wc-paginator 
          .totalItems=${host.allFilteredData.length} 
          .pageSize=${host.pageSize} 
          .pageSizeOptions=${host.pageSizeOptions}
          .currentPage=${host.currentPage}
          @page-change=${(e: CustomEvent) => host.handlePageChange(e)}
        >
        </wc-paginator>
      ` : ''}
      <div class="results-info">
      ${host.showStats ? html`
        <div class="table-stats">
          Mostrando ${host.paginatedData.length} de ${host.allFilteredData.length} resultados
        </div>
      ` : ''}
      </div>
    </div>
  `;
};