export interface TableColumn {
  key: string;
  label: string;
  render?: (row: any) => unknown;
}
