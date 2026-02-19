import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../../components/organisms/data-table/data-table';
import { html } from 'lit';

const meta: Meta = {
  title: 'Organisms/DataTable',
  component: 'wc-data-table',
  argTypes: {
    searchTerm: { control: 'text' },
    pageSize: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj;

const sampleData = [
  { id: 1, name: 'Juan', age: 25, city: 'Madrid' },
  { id: 2, name: 'Ana', age: 32, city: 'Barcelona' },
  { id: 3, name: 'Luis', age: 28, city: 'Valencia' },
  { id: 4, name: 'Marta', age: 22, city: 'Sevilla' },
  { id: 5, name: 'Carlos', age: 40, city: 'Bilbao' },
  { id: 6, name: 'Sofía', age: 27, city: 'Granada' },
  { id: 7, name: 'Pedro', age: 35, city: 'Zaragoza' },
  { id: 8, name: 'Lucía', age: 30, city: 'Valladolid' },
  { id: 9, name: 'Jorge', age: 29, city: 'Málaga' },
  { id: 10, name: 'Elena', age: 31, city: 'Alicante' },
];

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'age', label: 'Edad' },
  { key: 'city', label: 'Ciudad' },
];

const Template = (args: any) => html`
  <wc-data-table
    .data=${sampleData}
    .columns=${columns}
    .pageSize=${args.pageSize}
    @row-click=${(e: CustomEvent) => console.log('Fila clicada:', e.detail)}
  ></wc-data-table>
`;

export const Default: Story = {
  args: {
    pageSize: 5,
  },
  render: Template,
};
