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

        <div class="paginator__page-size">
            <div class="paginator__page-size-inner">
                <p class="paginator__label">Elementos</p>
                <select @change=${(e: Event) => host.onPageSizeChange(e)} class="paginator__select">
                    ${repeat(host.getPageSizeOptions(), (size: number) => size, (size: number) => html`<option value=${size}>${size}</option>`)}
                </select>
                <slot name="icon" class="paginator__icon""></slot>
            </div>
        </div>
    </nav>
`;
