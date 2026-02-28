import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import dataTableStyles from './data-table.scss?inline';
import { dataTableTemplate } from './data-table.template';
import { TableColumn } from '../../atoms/table/table.model';
import { PageEvent } from '../../molecules/paginator/paginator.model';

@customElement('wc-data-table')
export class WcDataTable extends LitElement {
  static override styles = css`${unsafeCSS(dataTableStyles)}`;

  @property({ type: String }) declare searchTerm: string;
  @property({ type: Array }) declare columns: TableColumn[];
  @property({ type: Array }) declare data: any[];
  @property({ type: Array }) declare allFilteredData: any[];
  @property({ type: Array }) declare paginatedData: any[];
  @property({ type: Number }) declare pageSize: number;
  @property({ type: Array }) declare pageSizeOptions: number[];
  @property({ type: String }) declare placeholder: string;

  @property({ type: Boolean }) declare loading: boolean;
  @property({ type: Number }) declare currentPage: number;
  @property({ type: Boolean }) declare showStats: boolean;

  constructor() {
    super();
    this.searchTerm = '';
    this.placeholder = 'Búsqueda...';
    this.columns = [];
    this.data = [];
    this.allFilteredData = [];
    this.paginatedData = [];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 15];
    this.loading = false;
    this.currentPage = 0;
    this.showStats = true;
  }

  override render() {
    return dataTableTemplate(this);
  }

  public handlePageChange(e: CustomEvent<PageEvent>) {
    this.currentPage = e.detail.pageIndex;
    this.onPageChange(e);
  }

  override willUpdate(changed: Map<string, unknown>) {
    if (changed.has('data')) {
      this.allFilteredData = [...this.data];
    }
    if (changed.has('data') || changed.has('currentPage') || changed.has('pageSize')) {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      this.paginatedData = this.allFilteredData.slice(start, end);
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('search', this.onSearch as EventListener);
    this.addEventListener('page-change', this.onPageChange as EventListener);
  }

  override disconnectedCallback() {
    this.removeEventListener('search', this.onSearch as EventListener);
    this.removeEventListener('page-change', this.onPageChange as EventListener);
    super.disconnectedCallback();
  }

  private onSearch = (e: CustomEvent<string>) => {
    this.searchTerm = e.detail;
    this.allFilteredData = this.data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
    this.currentPage = 0;
    this.requestUpdate();
  };

  private onPageChange = (e: CustomEvent<PageEvent>) => {
    const { pageIndex, pageSize } = e.detail;
    this.currentPage = pageIndex;
    this.pageSize = pageSize;
    this.requestUpdate();
  };

}
