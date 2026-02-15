import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/molecules/search-bar/search-bar';
import '../../components/atoms/input/input';
import '../../components/atoms/button/button';

const meta: Meta = {
  title: 'Molecules/Search Bar',
  component: 'wc-search-bar',
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => html`
  <wc-search-bar
    .value=${args.value}
    @search=${args.onSearch}
  >
    <wc-input
      slot="input"
      .value=${args.value}
      placeholder=${args.placeholder}
    ></wc-input>

    <wc-button slot="button">
      Search
    </wc-button>
  </wc-search-bar>
`;

export const Default: Story = {
  args: {
    value: 'text me',
    placeholder: 'Search...',
    onSearch: (e: CustomEvent) => console.log('Search:', e.detail),
  },
  render: Template,
};
