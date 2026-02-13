import type { Meta, StoryObj } from '@storybook/web-components';
import '../../components/atoms/option/option';

const meta: Meta = {
  title: 'Atoms/Option',
  component: 'wc-option',
  argTypes: {
    value: {
      control: 'text',
    },

    selected: {
      control: 'boolean',
    },

    label: { 
        control: 'text' 
    }
  },
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => {

  return `
    <wc-option ${args.selected ? 'selected' : ''} value="${args.value}">
      ${args.label}
    </wc-option>
  `;
};

export const Default: Story = {
  args: {
    value: '1',
    label: 'Opción simple',
  },
  render: Template,
};

export const WithContent: Story = {
  args: {
    value: '2',
    label: `
      <div style="text-align:center">
        <img src="https://placehold.co/600x400" />
        <h1>Opción con imagen</h1>
      </div>
    `,
  },
  render: Template,
};

export const Selected: Story = {
  args: {
    selected: true,
    value: '3',
    label: 'Seleccionada',
  },
  render: Template,
};
