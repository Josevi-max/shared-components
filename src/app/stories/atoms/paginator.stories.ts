import type { Meta, StoryObj } from '@storybook/web-components';
import '../../components/atoms/paginator/paginator';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Paginator',
  component: 'wc-paginator',
  argTypes: {
    actualPage: { control: 'number' },
    pageSize: { control: 'number' },
    totalItems: { control: 'number' },
    pageSizeOptions: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<{
  actualPage: number;
  pageSize: number;
  totalItems: number;
  pageSizeOptions: number[];
}>;

export const Default: Story = {
  args: {
    actualPage: 0,
    pageSize: 10,
    totalItems: 100,
    pageSizeOptions: [5, 10, 20],
    
  },

  render: (args) => html`
    <wc-paginator
      .actualPage=${args.actualPage}
      .pageSize=${args.pageSize}
      .totalItems=${args.totalItems}
      .pageSizeOptions=${args.pageSizeOptions}
    ></wc-paginator>
  `,
};
