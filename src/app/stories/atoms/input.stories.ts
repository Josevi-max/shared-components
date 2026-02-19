import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../../components/atoms/input/input';
import { WcInput } from '../../components/atoms/input/input';

const meta: Meta = {
  title: 'Atoms/Input',
  component: 'wc-input',
    argTypes: {
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    inputPadding: {
      name: '--wc-input-padding',
      control: 'text',
      table: { category: 'CSS Tokens' },
    },
    inputRadius: {
      name: '--wc-input-radius',
      control: 'text',
      table: { category: 'CSS Tokens' },
    },
    inputFontSize: {
      name: '--wc-input-font-size',
      control: 'text',
      table: { category: 'CSS Tokens' },
    },
    inputBorder: {
      name: '--wc-input-border',
      control: 'text',
      table: { category: 'CSS Tokens' },
    },
    inputDisplay: {
      name: '--wc-input-display',
      control: 'text',
      table: { category: 'CSS Tokens' },
    }

  },
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => {
  const styles = `
    ${args.inputPadding ? `--wc-input-padding: ${args.inputPadding};` : ''}
    ${args.inputRadius ? `--wc-input-radius: ${args.inputRadius};` : ''}
    ${args.inputFontSize ? `--wc-input-font-size: ${args.inputFontSize};` : ''}
    ${args.inputBorder ? `--wc-input-border: ${args.inputBorder};` : ''}
    ${args.inputDisplay ? `--wc-input-display: ${args.inputDisplay};` : ''}
  `;

  const el = document.createElement('wc-input') as WcInput;

  el.setAttribute('style', styles);
  el.value = args.value ?? '';
  el.placeholder = args.placeholder ?? '';

  el.addEventListener('value-change', (e: Event) => {
    const customEvent = e as CustomEvent<string>;
    el.value = customEvent.detail;
  });

  return el;
};


export const Default: Story = {
  args: {
    value: 'text me',
    placeholder: 'Type something...',
  },
  render: Template,
};
