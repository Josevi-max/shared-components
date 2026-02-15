import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/atoms/table/table';
import { TableColumn } from '../../components/atoms/table/table.model';


const meta: Meta = {
  title: 'Atoms/Table',
  component: 'wc-table',
  argTypes: {
    data: {
      control: 'object',
    },
    columns: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<{
  data: any[];
  columns: TableColumn[];
}>;

const columns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'age', label: 'Edad' },
  { key: 'city', label: 'Ciudad' },
];

const data: any[] = [
  { id: 1, name: 'Juan', age: 25, city: 'Madrid' },
  { id: 2, name: 'Ana', age: 32, city: 'Barcelona' },
];

export const Default: Story = {
  args: {
    data,
    columns,
  },
  render: (args) => html`
    <wc-table
      .data=${args.data}
      .columns=${args.columns}
      @row-click=${(e: CustomEvent<any>) =>
        console.log('Fila clicada:', e.detail)}
    ></wc-table>
  `,
};
