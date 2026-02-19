import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../../components/molecules/select/select';

const meta: Meta = {
  title: 'Molecules/Select',
  component: 'wc-select',
  argTypes: {
    value: { control: 'text' },
    closeWhenClickOutside: { control: 'boolean' },
    displayContent: { control: 'text' },
    optionsContent: { control: 'text' },
    change: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => html`
  <wc-select 
    .value=${args.value} 
    @change=${args.change} 
    .closeWhenClickOutside=${args.closeWhenClickOutside}
  >
    <span slot="displayName">${unsafeHTML(args.displayContent)}</span>
    ${unsafeHTML(args.optionsContent)}
  </wc-select>
`;

export const Default: Story = {
  args: {
    value: '',
    closeWhenClickOutside: true,
    displayContent: 'Selecciona una opción',
    optionsContent: `
      <wc-option value="1">Opción 1</wc-option>
      <wc-option value="2">Opción 2</wc-option>
      <wc-option value="3">Opción 3</wc-option>
    `,
  },
  render: Template,
};
 