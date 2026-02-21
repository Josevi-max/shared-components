// table.model.ts
import { TemplateResult } from 'lit';

export interface TableColumn {
  /** Clave del campo en los datos */
  key: string;
  
  /** Texto a mostrar en el encabezado */
  label: string;
  
  /** Función opcional para renderizado personalizado */
  render?: (row: any) => unknown | TemplateResult;
  
  /** Clase CSS adicional para la columna */
  className?: string;
  
  /** Ancho de la columna (ej: '100px', '20%') */
  width?: string;
  
  /** Si la columna es ordenable */
  sortable?: boolean;
  
  /** Alineación del texto */
  align?: 'left' | 'center' | 'right';
}

export interface TableSortConfig {
  column: string;
  direction: 'asc' | 'desc';
}