import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../../components/atoms/table/table';
import type { TableColumn } from '../../components/atoms/table/table.model';

type TableArgs = {
  data: any[];
  columns: TableColumn[];
  tableBorder?: string;
  tableBorderRadius?: string;
  tableBackground?: string;
  tableHeaderBg?: string;
  tableHeaderColor?: string;
  tableRowHoverBg?: string;
  tableRowOddBg?: string;
  tableRowEvenBg?: string;
  tablePadding?: string;
  tableFontSize?: string;
  tableFontFamily?: string;
  tableBoxShadow?: string;
};

const meta: Meta<TableArgs> = {
  title: 'Atoms/Table',
  component: 'wc-table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Table Component

Componente de tabla reutilizable y altamente personalizable construido con LitElement.

## Características

- 📊 Renderizado dinámico de columnas
- 🔄 Soporte para render personalizado por celda
- 🖱️ Evento de clic en fila
- 🎨 Totalmente personalizable mediante CSS Custom Properties
- 📱 Diseño responsivo

## Uso básico

\`\`\`typescript
import { TableColumn } from './table.model';

const columns: TableColumn[] = [
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
<wc-table .data=\${data} .columns=\${columns}></wc-table>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Array de datos a mostrar en la tabla',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
        category: 'Props',
      },
    },
    columns: {
      control: 'object',
      description: 'Configuración de columnas',
      table: {
        type: { summary: 'TableColumn[]' },
        defaultValue: { summary: '[]' },
        category: 'Props',
      },
    },

    tableBorder: {
      name: '--wc-table-border',
      control: 'text',
      description: 'Borde de la tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid #e5e7eb' },
        category: 'CSS Custom Properties',
      },
    },
    tableBorderRadius: {
      name: '--wc-table-border-radius',
      control: 'text',
      description: 'Radio del borde de la tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px' },
        category: 'CSS Custom Properties',
      },
    },
    tableBackground: {
      name: '--wc-table-background',
      control: 'color',
      description: 'Color de fondo de la tabla',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    tableHeaderBg: {
      name: '--wc-table-header-bg',
      control: 'color',
      description: 'Color de fondo del encabezado',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#f9fafb' },
        category: 'CSS Custom Properties',
      },
    },
    tableHeaderColor: {
      name: '--wc-table-header-color',
      control: 'color',
      description: 'Color del texto del encabezado',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#374151' },
        category: 'CSS Custom Properties',
      },
    },
    tableRowHoverBg: {
      name: '--wc-table-row-hover-bg',
      control: 'color',
      description: 'Color de fondo al hacer hover sobre la fila',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#f3f4f6' },
        category: 'CSS Custom Properties',
      },
    },
    tableRowOddBg: {
      name: '--wc-table-row-odd-bg',
      control: 'color',
      description: 'Color de fondo para filas impares',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    tableRowEvenBg: {
      name: '--wc-table-row-even-bg',
      control: 'color',
      description: 'Color de fondo para filas pares',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#f9fafb' },
        category: 'CSS Custom Properties',
      },
    },
    tablePadding: {
      name: '--wc-table-padding',
      control: 'text',
      description: 'Padding de las celdas',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px 16px' },
        category: 'CSS Custom Properties',
      },
    },
    tableFontSize: {
      name: '--wc-table-font-size',
      control: 'text',
      description: 'Tamaño de fuente',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.875rem' },
        category: 'CSS Custom Properties',
      },
    },
    tableFontFamily: {
      name: '--wc-table-font-family',
      control: 'text',
      description: 'Familia tipográfica',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
        category: 'CSS Custom Properties',
      },
    },
    tableBoxShadow: {
      name: '--wc-table-box-shadow',
      control: 'text',
      description: 'Sombra de la tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 1px 3px rgba(0,0,0,0.1)' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TableArgs>;

const Template = (args: TableArgs) => {
  const styles = `
    ${args.tableBorder ? `--wc-table-border: ${args.tableBorder};` : ''}
    ${args.tableBorderRadius ? `--wc-table-border-radius: ${args.tableBorderRadius};` : ''}
    ${args.tableBackground ? `--wc-table-background: ${args.tableBackground};` : ''}
    ${args.tableHeaderBg ? `--wc-table-header-bg: ${args.tableHeaderBg};` : ''}
    ${args.tableHeaderColor ? `--wc-table-header-color: ${args.tableHeaderColor};` : ''}
    ${args.tableRowHoverBg ? `--wc-table-row-hover-bg: ${args.tableRowHoverBg};` : ''}
    ${args.tableRowOddBg ? `--wc-table-row-odd-bg: ${args.tableRowOddBg};` : ''}
    ${args.tableRowEvenBg ? `--wc-table-row-even-bg: ${args.tableRowEvenBg};` : ''}
    ${args.tablePadding ? `--wc-table-padding: ${args.tablePadding};` : ''}
    ${args.tableFontSize ? `--wc-table-font-size: ${args.tableFontSize};` : ''}
    ${args.tableFontFamily ? `--wc-table-font-family: ${args.tableFontFamily};` : ''}
    ${args.tableBoxShadow ? `--wc-table-box-shadow: ${args.tableBoxShadow};` : ''}
  `;

  return html`
    <wc-table
      style="${styles}"
      .data=${args.data}
      .columns=${args.columns}
    ></wc-table>
  `;
};

const sampleColumns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'age', label: 'Edad' },
  { key: 'city', label: 'Ciudad' },
  { key: 'email', label: 'Email' },
];

const sampleData = [
  { id: 1, name: 'Juan Pérez', age: 28, city: 'Madrid', email: 'juan@email.com' },
  { id: 2, name: 'Ana García', age: 34, city: 'Barcelona', email: 'ana@email.com' },
  { id: 3, name: 'Carlos López', age: 42, city: 'Valencia', email: 'carlos@email.com' },
  { id: 4, name: 'María Rodríguez', age: 31, city: 'Sevilla', email: 'maria@email.com' },
  { id: 5, name: 'David Martínez', age: 45, city: 'Bilbao', email: 'david@email.com' },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Tabla básica con configuración por defecto.',
      },
    },
  },
};

const customRenderColumns: TableColumn[] = [
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
];

export const CustomRender: Story = {
  args: {
    data: sampleData,
    columns: customRenderColumns,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con renderizado personalizado usando la función `render` por columna.',
      },
    },
  },
};

export const CustomStyles: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    tableBorder: '2px solid #3b82f6',
    tableBorderRadius: '12px',
    tableBackground: '#ffffff',
    tableHeaderBg: '#3b82f6',
    tableHeaderColor: '#ffffff',
    tableRowHoverBg: '#dbeafe',
    tableRowOddBg: '#ffffff',
    tableRowEvenBg: '#f8fafc',
    tablePadding: '16px 20px',
    tableFontSize: '1rem',
    tableBoxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Tabla con estilos personalizados mediante CSS Custom Properties.',
      },
    },
  },
};

export const Compact: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    tablePadding: '6px 12px',
    tableFontSize: '0.75rem',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Versión compacta de la tabla, ideal para espacios reducidos.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: sampleColumns,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Comportamiento de la tabla cuando no hay datos.',
      },
    },
  },
};

const mixedData = [
  { id: 1, name: 'Producto A', price: 29.99, inStock: true, category: 'Electrónica' },
  { id: 2, name: 'Producto B', price: 49.99, inStock: false, category: 'Hogar' },
  { id: 3, name: 'Producto C', price: 19.99, inStock: true, category: 'Ropa' },
];

const mixedColumns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Producto' },
  { 
    key: 'price', 
    label: 'Precio',
    render: (row) => html`€${row.price.toFixed(2)}`
  },
  { 
    key: 'inStock', 
    label: 'Stock',
    render: (row) => row.inStock 
      ? html`<span style="color: #059669;">✓ En stock</span>` 
      : html`<span style="color: #dc2626;">✗ Sin stock</span>`
  },
  { key: 'category', label: 'Categoría' },
];

export const MixedData: Story = {
  args: {
    data: mixedData,
    columns: mixedColumns,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con diferentes tipos de datos y renders condicionales.',
      },
    },
  },
};

const userData = [
  { 
    id: 1, 
    name: 'Juan Pérez', 
    role: 'Admin', 
    status: 'active',
    lastLogin: '2024-01-15',
    avatar: '👤'
  },
  { 
    id: 2, 
    name: 'Ana García', 
    role: 'User', 
    status: 'inactive',
    lastLogin: '2024-01-10',
    avatar: '👩'
  },
  { 
    id: 3, 
    name: 'Carlos López', 
    role: 'Editor', 
    status: 'active',
    lastLogin: '2024-01-14',
    avatar: '👨'
  },
];

const userColumns: TableColumn[] = [
  { 
    key: 'avatar', 
    label: '', 
    render: (row) => html`<span style="font-size: 1.5rem;">${row.avatar}</span>`
  },
  { key: 'name', label: 'Nombre' },
  { key: 'role', label: 'Rol' },
  { 
    key: 'status', 
    label: 'Estado',
    render: (row) => html`
      <span style="
        display: inline-block;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        background: ${row.status === 'active' ? '#dcfce7' : '#fee2e2'};
        color: ${row.status === 'active' ? '#166534' : '#991b1b'};
      ">
        ${row.status === 'active' ? 'Activo' : 'Inactivo'}
      </span>
    `
  },
  { 
    key: 'lastLogin', 
    label: 'Último acceso',
    render: (row) => html`<span style="color: #6b7280;">${row.lastLogin}</span>`
  },
];

export const UserTable: Story = {
  args: {
    data: userData,
    columns: userColumns,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo realista de tabla de usuarios con badges de estado y avatares.',
      },
    },
  },
};

export const WithInteraction: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <wc-table
        .data=${args.data}
        .columns=${args.columns}
        @row-click=${(e: CustomEvent) => {
          const logDiv = document.getElementById('click-log');
          if (logDiv) {
            logDiv.innerHTML = `Última fila clicada: <pre style="background: #1f2937; color: #fff; padding: 8px; border-radius: 4px;">${JSON.stringify(e.detail, null, 2)}</pre>`;
          }
        }}
      ></wc-table>
      <div 
        id="click-log" 
        style="padding: 1rem; background: #f3f4f6; border-radius: 4px; font-family: monospace; min-height: 100px;">
        Haz clic en cualquier fila para ver los datos
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra los datos de la fila clicada.',
      },
    },
  },
};