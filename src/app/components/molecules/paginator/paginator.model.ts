export interface PaginationState {
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[];
}

export interface PageEvent {
    pageIndex: number;
    previousPageIndex?: number;
    pageSize: number;
    length: number;
}

export enum PaginationDisplayItem {
  Dots = 'dots',
}

