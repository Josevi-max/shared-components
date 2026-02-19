import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../../components/atoms/button/button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: 'wc-button',
  argTypes: {
    disabled: {
      control: 'boolean',
    },

    bgColor: {
      name: '--wc-button-bg',
      control: 'color',
      table: { category: 'CSS Tokens' },
    },

    radius: {
      name: '--wc-button-radius',
      control: 'text',
      table: { category: 'CSS Tokens' },
    },

    paddingX: {
      name: '--wc-button-padding-x',
      control: 'text',
      table: { category: 'CSS Tokens' },
    },

    color: {
      name: '--wc-button-color',
      control: 'color',
      table: { category: 'CSS Tokens' },
    },

    hoverColor: {
      name: '--wc-button-bg-hover',
      control: 'color',
      table: { category: 'CSS Tokens' },
    }
  },
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => {
  const styles = `
    ${args.bgColor ? `--wc-button-bg: ${args.bgColor};` : ''}
    ${args.radius ? `--wc-button-radius: ${args.radius};` : ''}
    ${args.paddingX ? `--wc-button-padding-x: ${args.paddingX};` : ''}
    ${args.color ? `--wc-button-color: ${args.color};` : ''}
    ${args.hoverColor ? `--wc-button-bg-hover: ${args.hoverColor};` : ''}
  `;

  return `
    <wc-button ${args.disabled ? 'disabled' : ''} style="${styles}">
      ${args.label}
    </wc-button>
  `;
};

export const Default: Story = {
  args: {
    label: 'Click me',
  },
  render: Template,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
  render: Template,
};

export const CustomTokens: Story = {
  args: {
    label: 'Custom',
    bgColor: '#ec4899',
    radius: '0',
    paddingX: '20px',
  },
  render: Template,
};
