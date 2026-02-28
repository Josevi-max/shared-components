// data-table.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { within, expect, waitFor } from '@storybook/test';
import '../../components/organisms/data-table/data-table';
import '../../components/molecules/search-bar/search-bar';
import '../../components/molecules/paginator/paginator';
import '../../components/atoms/table/table';
import '../../components/atoms/input/input';
import '../../components/atoms/button/button';
import '../../components/atoms/option/option';
import type { TableColumn } from '../../components/atoms/table/table.model';

// Extendemos el tipo para incluir todas las propiedades y CSS variables
type DataTableArgs = {
  // Propiedades del componente
  searchTerm?: string;
  placeholder?: string;
  columns: TableColumn[];
  data: any[];
  pageSize?: number;
  pageSizeOptions?: number[];
  loading?: boolean;
  currentPage?: number;
  showStats?: boolean;
  
  // Eventos
  onRowClick?: (e: CustomEvent) => void;
  onSearch?: (e: CustomEvent<string>) => void;
  onPageChange?: (e: CustomEvent) => void;
  
  // CSS Custom Properties - Contenedor principal
  datatablePadding?: string;
  datatableBackground?: string;
  datatableBorderRadius?: string;
  datatableBoxShadow?: string;
  datatableBorder?: string;
  datatableFontFamily?: string;
  
  // CSS Custom Properties - Search Container
  searchContainerPadding?: string;
  searchContainerBackground?: string;
  searchContainerBorderBottom?: string;
  searchContainerGap?: string;
  
  // CSS Custom Properties - Table Container
  tableContainerPadding?: string;
  tableContainerBackground?: string;
  tableContainerMaxHeight?: string;
  tableContainerOverflow?: string;
  
  // CSS Custom Properties - Results Info
  resultsInfoPadding?: string;
  resultsInfoBackground?: string;
  resultsInfoBorderTop?: string;
  resultsInfoFontSize?: string;
  resultsInfoColor?: string;
  
  // CSS Custom Properties - Loading State
  loadingOverlayBackground?: string;
  loadingOverlayBlur?: string;
  loadingTextColor?: string;
  loadingTextFontSize?: string;
  
  // CSS Custom Properties - Empty State
  emptyMinHeight?: string;
  emptyTextColor?: string;
  emptyTextFontSize?: string;
  emptyBorder?: string;
  emptyBackground?: string;
  
  // CSS Custom Properties - Responsive
  mobileBreakpoint?: string;
  mobileSearchPadding?: string;
  mobileTableMinWidth?: string;
  mobilePaginatorPadding?: string;
};

// Datos de ejemplo ampliados
const generateSampleData = (count: number) => {
  const names = ['Juan', 'Ana', 'Luis', 'Marta', 'Carlos', 'Sofía', 'Pedro', 'Lucía', 'Jorge', 'Elena', 
                 'Miguel', 'Laura', 'David', 'Cristina', 'Antonio', 'Isabel', 'Francisco', 'Carmen', 
                 'Javier', 'Patricia', 'Daniel', 'Rosa', 'Alejandro', 'Sara', 'Manuel', 'Paula', 
                 'Rafael', 'Eva', 'Álvaro', 'Claudia'];
  const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Granada', 'Zaragoza', 
                  'Valladolid', 'Málaga', 'Alicante', 'Murcia', 'Córdoba', 'Palma', 'Salamanca', 
                  'Toledo', 'Huelva', 'Almería', 'Cádiz', 'Jaén', 'León'];
  const roles = ['Admin', 'Usuario', 'Editor', 'Invitado', 'Supervisor', 'Analista'];
  const departments = ['Ventas', 'Marketing', 'IT', 'RRHH', 'Finanzas', 'Operaciones'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length] + ' ' + ['García', 'López', 'Martínez', 'Sánchez', 'Rodríguez'][i % 5],
    age: 20 + (i % 40),
    city: cities[i % cities.length],
    email: `usuario${i + 1}@empresa.com`,
    role: roles[i % roles.length],
    department: departments[i % departments.length],
    active: i % 3 !== 0,
    salary: 25000 + (i * 500),
    hireDate: new Date(2020 + (i % 4), i % 12, (i % 28) + 1).toLocaleDateString('es-ES')
  }));
};

// Columnas básicas
const basicColumns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'age', label: 'Edad' },
  { key: 'city', label: 'Ciudad' },
  { key: 'email', label: 'Email' }
];

// Columnas con render personalizado
const advancedColumns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { 
    key: 'name', 
    label: 'Nombre',
    render: (row) => html`<strong style="color: #2563eb;">${row.name}</strong>`
  },
  { 
    key: 'age', 
    label: 'Edad',
    render: (row) => html`<span style="background: #dbeafe; padding: 2px 8px; border-radius: 12px;">${row.age} años</span>`
  },
  { key: 'city', label: 'Ciudad' },
  { 
    key: 'email', 
    label: 'Email',
    render: (row) => html`<a href="mailto:${row.email}" style="color: #059669; text-decoration: none;">${row.email}</a>`
  },
  { 
    key: 'role', 
    label: 'Rol',
    render: (row) => {
      const colors: Record<string, string> = {
        'Admin': '#fee2e2',
        'Usuario': '#dbeafe',
        'Editor': '#dcfce7',
        'Invitado': '#f3f4f6',
        'Supervisor': '#fef9c3',
        'Analista': '#e0e7ff'
      };
      const textColors: Record<string, string> = {
        'Admin': '#991b1b',
        'Usuario': '#1e40af',
        'Editor': '#166534',
        'Invitado': '#1f2937',
        'Supervisor': '#854d0e',
        'Analista': '#3730a3'
      };
      return html`
        <span style="
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          background: ${colors[row.role] || '#f3f4f6'};
          color: ${textColors[row.role] || '#1f2937'};
        ">
          ${row.role}
        </span>
      `;
    }
  },
  { 
    key: 'active', 
    label: 'Estado',
    render: (row) => row.active 
      ? html`<span style="color: #059669;">✓ Activo</span>` 
      : html`<span style="color: #dc2626;">✗ Inactivo</span>`
  }
];

// Columnas con formato de moneda y fecha
const financeColumns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { 
    key: 'salary', 
    label: 'Salario',
    render: (row) => html`<span style="font-weight: 600; color: #059669;">€${row.salary.toLocaleString()}</span>`
  },
  { 
    key: 'department', 
    label: 'Departamento',
    render: (row) => html`<span style="
      background: #e0e7ff;
      color: #3730a3;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
    ">${row.department}</span>`
  },
  { 
    key: 'hireDate', 
    label: 'Fecha Contratación',
    render: (row) => html`<span style="color: #6b7280;">${row.hireDate}</span>`
  },
  { 
    key: 'active', 
    label: 'Estado',
    render: (row) => row.active 
      ? html`<span style="color: #059669;">✓ Activo</span>` 
      : html`<span style="color: #dc2626;">✗ Inactivo</span>`
  }
];

const meta: Meta<DataTableArgs> = {
  title: 'Organisms/DataTable',
  component: 'wc-data-table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DataTable Component

Componente de tabla de datos completo que integra búsqueda, paginación y visualización de datos.

## Características

- 🔍 **Búsqueda integrada** con SearchBar component
- 📄 **Paginación** automática con Paginator component
- 📊 **Tabla dinámica** con Table component
- 🎨 **Estados visuales**: carga, vacío, con datos
- 🔄 **Filtrado en tiempo real** mientras se escribe
- 📱 **Diseño responsivo** adaptable a móviles
- ⚡ **Eventos completos**: clic en fila, búsqueda, cambio de página
- 🧩 **Totalmente personalizable** mediante CSS Custom Properties
- 🌓 **Soporte para tema oscuro** (mediante clase .dark-theme)

## Arquitectura

El DataTable está compuesto por:

- **SearchBar**: Para filtrar datos
- **Table**: Para mostrar los datos paginados
- **Paginator**: Para navegar entre páginas

## Uso básico

\`\`\`typescript
const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'email', label: 'Email' }
];

const data = [
  { id: 1, name: 'Juan', email: 'juan@email.com' },
  { id: 2, name: 'Ana', email: 'ana@email.com' }
];
\`\`\`

\`\`\`html
<wc-data-table
  .data=\${data}
  .columns=\${columns}
  pageSize="10"
></wc-data-table>
\`\`\`


## Filtrado

El filtrado se realiza sobre todas las columnas automáticamente.
        `,
      },
    },
  },
  argTypes: {
    searchTerm: {
      control: 'text',
      description: 'Término de búsqueda actual',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Props',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del input de búsqueda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Búsqueda...'" },
        category: 'Props',
      },
    },
    columns: {
      control: 'object',
      description: 'Configuración de columnas',
      table: {
        type: { summary: 'TableColumn[]' },
        category: 'Props',
      },
    },
    data: {
      control: 'object',
      description: 'Datos a mostrar',
      table: {
        type: { summary: 'any[]' },
        category: 'Props',
      },
    },
    pageSize: {
      control: { type: 'number', min: 1, max: 50 },
      description: 'Elementos por página',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
        category: 'Props',
      },
    },
    pageSizeOptions: {
      control: 'object',
      description: 'Opciones de tamaño de página',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[5, 10, 15]' },
        category: 'Props',
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carga',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'States',
      },
    },
    currentPage: {
      control: { type: 'number', min: 0 },
      description: 'Página actual (base 0)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Props',
      },
    },
    showStats: {
      control: 'boolean',
      description: 'Mostrar estadísticas de resultados',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Props',
      },
    },

    onRowClick: {
      action: 'row-click',
      description: 'Evento al hacer clic en una fila',
      table: {
        type: { summary: 'CustomEvent<any>' },
        category: 'Events',
      },
    },
    onSearch: {
      action: 'search',
      description: 'Evento al realizar una búsqueda',
      table: {
        type: { summary: 'CustomEvent<string>' },
        category: 'Events',
      },
    },
    onPageChange: {
      action: 'page-change',
      description: 'Evento al cambiar de página',
      table: {
        type: { summary: 'CustomEvent<PageEvent>' },
        category: 'Events',
      },
    },

    datatablePadding: {
      name: '--datatable-padding',
      control: 'text',
      description: 'Padding del contenedor principal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '20px' },
        category: 'CSS Custom Properties',
      },
    },
    datatableBackground: {
      name: '--datatable-background',
      control: 'color',
      description: 'Color de fondo',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    datatableBorderRadius: {
      name: '--datatable-border-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px' },
        category: 'CSS Custom Properties',
      },
    },
    datatableBoxShadow: {
      name: '--datatable-box-shadow',
      control: 'text',
      description: 'Sombra del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' },
        category: 'CSS Custom Properties',
      },
    },
    datatableBorder: {
      name: '--datatable-border',
      control: 'text',
      description: 'Borde del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid rgba(229, 231, 235, 0.5)' },
        category: 'CSS Custom Properties',
      },
    },
    datatableFontFamily: {
      name: '--datatable-font-family',
      control: 'text',
      description: 'Familia tipográfica',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
        category: 'CSS Custom Properties',
      },
    },

    searchContainerPadding: {
      name: '--datatable-search-padding',
      control: 'text',
      description: 'Padding del contenedor de búsqueda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '20px 24px' },
        category: 'CSS Custom Properties',
      },
    },
    searchContainerBackground: {
      name: '--datatable-search-background',
      control: 'text',
      description: 'Fondo del contenedor de búsqueda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'linear-gradient(135deg, #f9fafc 0%, #f3f4f6 100%)' },
        category: 'CSS Custom Properties',
      },
    },
    searchContainerBorderBottom: {
      name: '--datatable-search-border-bottom',
      control: 'text',
      description: 'Borde inferior del contenedor de búsqueda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid rgba(229, 231, 235, 0.8)' },
        category: 'CSS Custom Properties',
      },
    },
    searchContainerGap: {
      name: '--datatable-search-gap',
      control: 'text',
      description: 'Espacio entre elementos de búsqueda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px' },
        category: 'CSS Custom Properties',
      },
    },

    tableContainerPadding: {
      name: '--datatable-table-padding',
      control: 'text',
      description: 'Padding del contenedor de tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 24px' },
        category: 'CSS Custom Properties',
      },
    },
    tableContainerBackground: {
      name: '--datatable-table-background',
      control: 'color',
      description: 'Fondo del contenedor de tabla',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    tableContainerMaxHeight: {
      name: '--datatable-table-max-height',
      control: 'text',
      description: 'Altura máxima del contenedor de tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'CSS Custom Properties',
      },
    },
    tableContainerOverflow: {
      name: '--datatable-table-overflow',
      control: 'select',
      options: ['auto', 'scroll', 'hidden', 'visible'],
      description: 'Overflow del contenedor de tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
        category: 'CSS Custom Properties',
      },
    },

    resultsInfoPadding: {
      name: '--datatable-info-padding',
      control: 'text',
      description: 'Padding de la información de resultados',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px 24px' },
        category: 'CSS Custom Properties',
      },
    },
    resultsInfoBackground: {
      name: '--datatable-info-background',
      control: 'text',
      description: 'Fondo de la información de resultados',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'linear-gradient(180deg, #ffffff, #f8fafc)' },
        category: 'CSS Custom Properties',
      },
    },
    resultsInfoBorderTop: {
      name: '--datatable-info-border-top',
      control: 'text',
      description: 'Borde superior de la información',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid #e2e8f0' },
        category: 'CSS Custom Properties',
      },
    },
    resultsInfoFontSize: {
      name: '--datatable-info-font-size',
      control: 'text',
      description: 'Tamaño de fuente de la información',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '14px' },
        category: 'CSS Custom Properties',
      },
    },
    resultsInfoColor: {
      name: '--datatable-info-color',
      control: 'color',
      description: 'Color de la información',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#4b5563' },
        category: 'CSS Custom Properties',
      },
    },

    loadingOverlayBackground: {
      name: '--datatable-loading-overlay',
      control: 'text',
      description: 'Fondo del overlay de carga',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rgba(255, 255, 255, 0.7)' },
        category: 'CSS Custom Properties',
      },
    },
    loadingOverlayBlur: {
      name: '--datatable-loading-blur',
      control: 'text',
      description: 'Blur del overlay de carga',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '4px' },
        category: 'CSS Custom Properties',
      },
    },
    loadingTextColor: {
      name: '--datatable-loading-color',
      control: 'color',
      description: 'Color del texto de carga',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#6366f1' },
        category: 'CSS Custom Properties',
      },
    },
    loadingTextFontSize: {
      name: '--datatable-loading-font-size',
      control: 'text',
      description: 'Tamaño de fuente del texto de carga',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '16px' },
        category: 'CSS Custom Properties',
      },
    },

    emptyMinHeight: {
      name: '--datatable-empty-min-height',
      control: 'text',
      description: 'Altura mínima del estado vacío',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '200px' },
        category: 'CSS Custom Properties',
      },
    },
    emptyTextColor: {
      name: '--datatable-empty-color',
      control: 'color',
      description: 'Color del texto de estado vacío',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#94a3b8' },
        category: 'CSS Custom Properties',
      },
    },
    emptyTextFontSize: {
      name: '--datatable-empty-font-size',
      control: 'text',
      description: 'Tamaño de fuente del texto vacío',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '16px' },
        category: 'CSS Custom Properties',
      },
    },
    emptyBorder: {
      name: '--datatable-empty-border',
      control: 'text',
      description: 'Borde del estado vacío',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2px dashed #e2e8f0' },
        category: 'CSS Custom Properties',
      },
    },
    emptyBackground: {
      name: '--datatable-empty-background',
      control: 'color',
      description: 'Fondo del estado vacío',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#f8fafc' },
        category: 'CSS Custom Properties',
      },
    },

    mobileBreakpoint: {
      name: '--datatable-mobile-breakpoint',
      control: 'text',
      description: 'Breakpoint para vista móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '768px' },
        category: 'CSS Custom Properties',
      },
    },
    mobileSearchPadding: {
      name: '--datatable-mobile-search-padding',
      control: 'text',
      description: 'Padding del search en móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '16px' },
        category: 'CSS Custom Properties',
      },
    },
    mobileTableMinWidth: {
      name: '--datatable-mobile-table-min-width',
      control: 'text',
      description: 'Ancho mínimo de la tabla en móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '600px' },
        category: 'CSS Custom Properties',
      },
    },
    mobilePaginatorPadding: {
      name: '--datatable-mobile-paginator-padding',
      control: 'text',
      description: 'Padding del paginador en móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '16px' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<DataTableArgs>;

const Template = (args: DataTableArgs) => {
  const styles = `
    ${args.datatablePadding ? `--datatable-padding: ${args.datatablePadding};` : ''}
    ${args.datatableBackground ? `--datatable-background: ${args.datatableBackground};` : ''}
    ${args.datatableBorderRadius ? `--datatable-border-radius: ${args.datatableBorderRadius};` : ''}
    ${args.datatableBoxShadow ? `--datatable-box-shadow: ${args.datatableBoxShadow};` : ''}
    ${args.datatableBorder ? `--datatable-border: ${args.datatableBorder};` : ''}
    ${args.datatableFontFamily ? `--datatable-font-family: ${args.datatableFontFamily};` : ''}
    ${args.searchContainerPadding ? `--datatable-search-padding: ${args.searchContainerPadding};` : ''}
    ${args.searchContainerBackground ? `--datatable-search-background: ${args.searchContainerBackground};` : ''}
    ${args.searchContainerBorderBottom ? `--datatable-search-border-bottom: ${args.searchContainerBorderBottom};` : ''}
    ${args.searchContainerGap ? `--datatable-search-gap: ${args.searchContainerGap};` : ''}
    ${args.tableContainerPadding ? `--datatable-table-padding: ${args.tableContainerPadding};` : ''}
    ${args.tableContainerBackground ? `--datatable-table-background: ${args.tableContainerBackground};` : ''}
    ${args.tableContainerMaxHeight ? `--datatable-table-max-height: ${args.tableContainerMaxHeight};` : ''}
    ${args.tableContainerOverflow ? `--datatable-table-overflow: ${args.tableContainerOverflow};` : ''}
    ${args.resultsInfoPadding ? `--datatable-info-padding: ${args.resultsInfoPadding};` : ''}
    ${args.resultsInfoBackground ? `--datatable-info-background: ${args.resultsInfoBackground};` : ''}
    ${args.resultsInfoBorderTop ? `--datatable-info-border-top: ${args.resultsInfoBorderTop};` : ''}
    ${args.resultsInfoFontSize ? `--datatable-info-font-size: ${args.resultsInfoFontSize};` : ''}
    ${args.resultsInfoColor ? `--datatable-info-color: ${args.resultsInfoColor};` : ''}
    ${args.loadingOverlayBackground ? `--datatable-loading-overlay: ${args.loadingOverlayBackground};` : ''}
    ${args.loadingOverlayBlur ? `--datatable-loading-blur: ${args.loadingOverlayBlur};` : ''}
    ${args.loadingTextColor ? `--datatable-loading-color: ${args.loadingTextColor};` : ''}
    ${args.loadingTextFontSize ? `--datatable-loading-font-size: ${args.loadingTextFontSize};` : ''}
    ${args.emptyMinHeight ? `--datatable-empty-min-height: ${args.emptyMinHeight};` : ''}
    ${args.emptyTextColor ? `--datatable-empty-color: ${args.emptyTextColor};` : ''}
    ${args.emptyTextFontSize ? `--datatable-empty-font-size: ${args.emptyTextFontSize};` : ''}
    ${args.emptyBorder ? `--datatable-empty-border: ${args.emptyBorder};` : ''}
    ${args.emptyBackground ? `--datatable-empty-background: ${args.emptyBackground};` : ''}
    ${args.mobileBreakpoint ? `--datatable-mobile-breakpoint: ${args.mobileBreakpoint};` : ''}
    ${args.mobileSearchPadding ? `--datatable-mobile-search-padding: ${args.mobileSearchPadding};` : ''}
    ${args.mobileTableMinWidth ? `--datatable-mobile-table-min-width: ${args.mobileTableMinWidth};` : ''}
    ${args.mobilePaginatorPadding ? `--datatable-mobile-paginator-padding: ${args.mobilePaginatorPadding};` : ''}
  `;

  return html`
    <wc-data-table
      style="${styles}"
      .searchTerm=${args.searchTerm ?? ''}
      .placeholder=${args.placeholder ?? 'Buscar...'}
      .columns=${args.columns ?? basicColumns}
      .data=${args.data ?? generateSampleData(50)}
      .pageSize=${args.pageSize ?? 10}
      .pageSizeOptions=${args.pageSizeOptions ?? [5, 10, 15, 25, 50]}
      ?loading=${args.loading}
      .currentPage=${args.currentPage ?? 0}
      ?showStats=${args.showStats}
      @row-click=${(e: CustomEvent) => {
        if (args.onRowClick) args.onRowClick(e);
      }}
      @search=${(e: CustomEvent<string>) => {
        if (args.onSearch) args.onSearch(e);
      }}
      @page-change=${(e: CustomEvent) => {
        if (args.onPageChange) args.onPageChange(e);
      }}
    ></wc-data-table>
  `;
};

export const Default: Story = {
  args: {
    pageSize: 10,
    showStats: true,
    placeholder: 'Buscar por nombre, email, ciudad...',
    columns: basicColumns,
    data: generateSampleData(50),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable básico con 50 elementos, 10 por página y columnas simples.',
      },
    },
  },
};

export const ManyRows: Story = {
  args: {
    pageSize: 10,
    showStats: true,
    columns: basicColumns,
    data: generateSampleData(250),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable con 250 elementos para probar la paginación.',
      },
    },
  },
};

export const AdvancedColumns: Story = {
  args: {
    pageSize: 10,
    showStats: true,
    columns: advancedColumns,
    data: generateSampleData(50),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable con columnas que usan render personalizado (badges, colores, enlaces).',
      },
    },
  },
};

export const WithSearchTerm: Story = {
  args: {
    searchTerm: 'Ana',
    pageSize: 10,
    showStats: true,
    columns: basicColumns,
    data: generateSampleData(50),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable con un término de búsqueda inicial ("Ana") que filtra los resultados.',
      },
    },
  },
};

export const CustomPageSizeOptions: Story = {
  args: {
    pageSize: 25,
    pageSizeOptions: [10, 25, 50, 100],
    showStats: true,
    columns: basicColumns,
    data: generateSampleData(250),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable con opciones de paginación personalizadas: 10, 25, 50, 100.',
      },
    },
  },
};

export const StartingPage: Story = {
  args: {
    currentPage: 3,
    pageSize: 10,
    showStats: true,
    columns: basicColumns,
    data: generateSampleData(100),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable comenzando en la página 4 (índice 3).',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    pageSize: 10,
    showStats: true,
    columns: basicColumns,
    data: generateSampleData(50),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable en estado de carga (útil para operaciones asíncronas).',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    pageSize: 10,
    showStats: true,
    columns: basicColumns,
    data: [],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable sin datos (muestra estado vacío).',
      },
    },
  },
};

export const NoResults: Story = {
  args: {
    searchTerm: 'xyz123',
    pageSize: 10,
    showStats: true,
    columns: basicColumns,
    data: generateSampleData(50),
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'DataTable con búsqueda que no encuentra resultados.',
      },
    },
  },
};

export const MobileView: Story = {
  args: {
    pageSize: 5,
    showStats: true,
    columns: advancedColumns,
    data: generateSampleData(30),
    mobileBreakpoint: '768px',
  },
  render: (args) => html`
    <div style="width: 375px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
      <wc-data-table
        style="--datatable-mobile-breakpoint: ${args.mobileBreakpoint};"
        .searchTerm=${args.searchTerm ?? ''}
        .placeholder=${args.placeholder ?? 'Buscar...'}
        .columns=${args.columns ?? advancedColumns}
        .data=${args.data ?? generateSampleData(30)}
        .pageSize=${args.pageSize ?? 5}
        .pageSizeOptions=${args.pageSizeOptions ?? [5, 10, 15]}
        ?loading=${args.loading}
        ?showStats=${args.showStats}
      ></wc-data-table>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Vista móvil del DataTable (los elementos se apilan y la tabla permite scroll horizontal).',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithEventLog: Story = {
  args: {
    pageSize: 5,
    showStats: true,
    columns: advancedColumns,
    data: generateSampleData(25),
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <wc-data-table
        id="interactive-table"
        .searchTerm=${args.searchTerm ?? ''}
        .placeholder=${args.placeholder ?? 'Buscar...'}
        .columns=${args.columns ?? advancedColumns}
        .data=${args.data ?? generateSampleData(25)}
        .pageSize=${args.pageSize ?? 5}
        .pageSizeOptions=${args.pageSizeOptions ?? [5, 10, 15]}
        ?loading=${args.loading}
        ?showStats=${args.showStats}
        @row-click=${(e: CustomEvent) => {
          const logDiv = document.getElementById('datatable-log');
          if (logDiv) {
            logDiv.innerHTML = `
              <strong>🔹 Fila clicada:</strong><br>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 8px; border-radius: 4px; margin: 4px 0 0 0;">${JSON.stringify(e.detail, null, 2)}</pre>
            `;
          }
        }}
        @search=${(e: CustomEvent<string>) => {
          const logDiv = document.getElementById('datatable-log');
          if (logDiv) {
            logDiv.innerHTML = `
              <strong>🔍 Búsqueda:</strong> "${e.detail}"<br>
              <small style="color: #6b7280;">Filtrando datos...</small>
            `;
          }
        }}
        @page-change=${(e: CustomEvent) => {
          const logDiv = document.getElementById('datatable-log');
          if (logDiv) {
            logDiv.innerHTML = `
              <strong>📄 Cambio de página:</strong><br>
              Página: ${e.detail.pageIndex + 1}, Tamaño: ${e.detail.pageSize}
            `;
          }
        }}
      ></wc-data-table>
      
      <div 
        id="datatable-log" 
        style="padding: 1rem; background: #f8fafc; border-radius: 8px; font-family: monospace; min-height: 100px; border: 1px solid #e2e8f0;"
      >
        Haz clic en una fila, busca o cambia de página para ver los eventos
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra todos los eventos del DataTable.',
      },
    },
  },
};
