import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import paginatorStyles from './paginator.scss?inline';
import { paginatorTemplate } from './paginator.template';
import { PageEvent, PaginationDisplayItem } from './paginator.model';

@customElement('wc-paginator')
export class WcPaginator extends LitElement {
    static override styles = css`${unsafeCSS(paginatorStyles)}`;

    @property({ type: Number, reflect: true })
    declare actualPage: number;

    @property({ type: Number, reflect: true })
    declare pageSize: number;

    @property({ type: Number, reflect: true })
    declare maxPage: number;

    @property({ type: Array })
    declare pageSizeOptions: number[];

    @property({ type: Number })
    declare minPage: number;

    @property({ type: String, reflect: true })
    declare icon: string;

    @property({ type: Number })
    declare totalItems: number;

    constructor() {
        super();
        this.totalItems = 0;
        this.actualPage = 0;
        this.pageSize = 10;
        this.maxPage = 0;
        this.pageSizeOptions = [5, 10, 15];
        this.minPage = 0;
        this.icon = '';
    }


    override render() {
        return paginatorTemplate(this);
    }

    override updated(changedProps: Map<string, unknown>) {
    if (
        changedProps.has('totalItems') ||
        changedProps.has('pageSize')
    ) {
        this.recalculateMaxPage();
    }
    }

    public previousPage(): void {
        this.setPreviousPage();
    }

    public nextPage(): void {
        this.setNextPage();
    }

    public onPageSizeChange(event: Event): void {
        const newPageSize = Number((event.target as HTMLSelectElement).value);
        this.setPageSize(newPageSize);
    }

    public goToPage(pageIndex: number): void {
        this.actualPage = pageIndex;
        this.emitPageEvent();
    }

    public isFirstPage() {
        return this.actualPage === this.minPage;
    }
    public isLastPage() {
        return this.actualPage >= this.maxPage - 1;
    }

    public paginationDisplay() {
        const totalPages = this.maxPage;
        const current = this.actualPage;
        const pages: (number | PaginationDisplayItem)[] = [];
        debugger;
        if (totalPages <= 1) {
            return [0];
        }

        const last = this.maxPage - 1;
        const slidesValues = 2;

        let start = this.minPage;

        if ((current - slidesValues) >= this.minPage) {
            start = current - slidesValues;
        }

        let end = last;

        if ((current + slidesValues) <= last) {
            end = current + slidesValues;
        }

        pages.push(this.minPage);

        if (start > this.minPage + 1) {
            pages.push(PaginationDisplayItem.Dots);
        }

        for (let i = start; i <= end; i++) {
            if (i !== this.minPage && i !== last) pages.push(i);
        }

        if (end < last - 1) {
            pages.push(PaginationDisplayItem.Dots);
        }

        pages.push(last);

        return pages;
    }

    public getMaxPage() {
        return this.maxPage;
    }

    public getPageSizeOptions() {
        return this.pageSizeOptions;
    }

    public getPageSize() {
        return this.pageSize;
    }

    public getActualPage() {
        return this.actualPage;
    }

    public setPageSize(size: number): void {
        this.pageSize = size;
        this.recalculateMaxPage();
        this.goToPage(this.minPage);
        this.emitPageEvent();
    }

    public onPageChange(event: PageEvent): void {
        this.goToPage(event.pageIndex);
        this.setPageSize(event.pageSize);
    }

    public setNextPage(): void {
        if ((this.actualPage + 1) < this.maxPage) {
            this.actualPage += 1;
        }
        this.emitPageEvent();

    }

    public setPreviousPage(): void {
        if ((this.actualPage - 1) >= this.minPage) {
            this.actualPage -= 1;
        }
        this.emitPageEvent();

    }

    private recalculateMaxPage(): void {
        const totalItems = this.totalItems;
        this.maxPage = totalItems > 0
            ? Math.ceil(totalItems / this.pageSize)
            : 0;
    }

    private emitPageEvent() {
        this.dispatchEvent(
            new CustomEvent<PageEvent>('page-change', {
                detail: {
                    pageIndex: this.actualPage,
                    pageSize: this.pageSize,
                    length: this.totalItems
                },
                bubbles: true,
                composed: true
            })
        );
    }

}
