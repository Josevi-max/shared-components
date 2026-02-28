import { html } from 'lit';
import { WcPaginator } from './paginator';
import { PaginationDisplayItem } from './paginator.model';
import { repeat } from 'lit/directives/repeat.js';

export const paginatorTemplate = (host: WcPaginator) => html`
    <nav class="paginator">
        <div class="paginator__controls">
            <button @click=${() => host.previousPage()} ?disabled=${host.isFirstPage()}
                class="paginator__button paginator__button--nav">Ant</button>

            ${repeat(
    host.paginationDisplay(),
    (page: any, idx: number) => `${String(page)}-${idx}`,
    (page: any) => {
        if (page === PaginationDisplayItem.Dots) {
            return html`<span class="paginator__dots">...</span>`;
        }

        if (page === host.getActualPage()) {
            return html`<button class="paginator__button paginator__button--active">${page + 1}</button>`;
        }

        return html`<button @click=${() => host.goToPage(page)} class="paginator__button paginator__button--page">${page + 1}</button>`;
    }
)}

            <button @click=${() => host.nextPage()} ?disabled=${host.isLastPage()} class="paginator__button paginator__button--nav">Sig</button>
        </div>

        <div class="paginator__info">
            <wc-select
            .value=${host.getPageSize()}
            @change=${host.onPageSizeChange}
            >
            <span slot="displayName">Elementos</span>
                ${repeat(host.pageSizeOptions, (option: number) => html`
                    <div class="paginator__option">
                        <wc-option .value="${option}">${option} elementos</wc-option>
                    </div>
                `)}
            </wc-select>
        </div>
    </nav>
`;
