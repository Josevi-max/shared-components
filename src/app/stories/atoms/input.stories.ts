// input.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../../components/atoms/input/input';
import type { WcInput } from '../../components/atoms/input/input';

type InputArgs = Partial<WcInput> & {
  inputDisplay?: string;
  inputPadding?: string;
  inputRadius?: string;
  inputFontSize?: string;
  inputBorder?: string;
  inputBorderColorFocus?: string;
  inputBg?: string;
  inputColor?: string;
  inputPlaceholderColor?: string;
  inputShadowFocus?: string;
};

const meta: Meta<InputArgs> = {
  title: 'Atoms/Input',
  component: 'wc-input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Input Component

El componente Input es un elemento interactivo que permite a los usuarios ingresar texto o datos.

## Propiedades

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| \`value\` | string | '' | Valor del input |
| \`placeholder\` | string | '' | Texto placeholder |
| \`disabled\` | boolean | false | Deshabilita el input |
| \`type\` | string | 'text' | Tipo de input |

## Eventos

| Evento | Descripción |
|--------|-------------|
| \`value-change\` | Se dispara cuando el valor del input cambia |

## CSS Custom Properties

| Propiedad | Default | Descripción |
|-----------|---------|-------------|
| \`--wc-input-display\` | block | Display del input |
| \`--wc-input-padding\` | 0.75em 1em | Padding |
| \`--wc-input-radius\` | var(--radius-sm, 6px) | Radio del borde |
| \`--wc-input-font-size\` | var(--font-size-md, 1rem) | Tamaño de fuente |
| \`--wc-input-border\` | 1px solid #d1d5db | Borde |
| \`--wc-input-border-color-focus\` | #3b82f6 | Color del borde en focus |
| \`--wc-input-bg\` | white | Color de fondo |
| \`--wc-input-color\` | #1f2937 | Color del texto |
| \`--wc-input-placeholder-color\` | #9ca3af | Color del placeholder |
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Props',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Props',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description: 'Tipo de input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
        category: 'Props',
      },
    },
    
    inputDisplay: {
      name: '--wc-input-display',
      control: 'select',
      options: ['block', 'inline-block', 'flex', 'inline-flex'],
      description: 'Display del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
        category: 'CSS Custom Properties',
      },
    },
    inputPadding: {
      name: '--wc-input-padding',
      control: 'text',
      description: 'Padding del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.75em 1em' },
        category: 'CSS Custom Properties',
      },
    },
    inputRadius: {
      name: '--wc-input-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'var(--radius-sm, 6px)' },
        category: 'CSS Custom Properties',
      },
    },
    inputFontSize: {
      name: '--wc-input-font-size',
      control: 'text',
      description: 'Tamaño de fuente',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'var(--font-size-md, 1rem)' },
        category: 'CSS Custom Properties',
      },
    },
    inputBorder: {
      name: '--wc-input-border',
      control: 'text',
      description: 'Borde del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid #d1d5db' },
        category: 'CSS Custom Properties',
      },
    },
    inputBorderColorFocus: {
      name: '--wc-input-border-color-focus',
      control: 'color',
      description: 'Color del borde en focus',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#3b82f6' },
        category: 'CSS Custom Properties',
      },
    },
    inputBg: {
      name: '--wc-input-bg',
      control: 'color',
      description: 'Color de fondo',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    inputColor: {
      name: '--wc-input-color',
      control: 'color',
      description: 'Color del texto',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#1f2937' },
        category: 'CSS Custom Properties',
      },
    },
    inputPlaceholderColor: {
      name: '--wc-input-placeholder-color',
      control: 'color',
      description: 'Color del placeholder',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#9ca3af' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputArgs>;

const Template = (args: InputArgs) => {
  const styles = `
    ${args.inputDisplay ? `--wc-input-display: ${args.inputDisplay};` : ''}
    ${args.inputPadding ? `--wc-input-padding: ${args.inputPadding};` : ''}
    ${args.inputRadius ? `--wc-input-radius: ${args.inputRadius};` : ''}
    ${args.inputFontSize ? `--wc-input-font-size: ${args.inputFontSize};` : ''}
    ${args.inputBorder ? `--wc-input-border: ${args.inputBorder};` : ''}
    ${args.inputBorderColorFocus ? `--wc-input-border-color-focus: ${args.inputBorderColorFocus};` : ''}
    ${args.inputBg ? `--wc-input-bg: ${args.inputBg};` : ''}
    ${args.inputColor ? `--wc-input-color: ${args.inputColor};` : ''}
    ${args.inputPlaceholderColor ? `--wc-input-placeholder-color: ${args.inputPlaceholderColor};` : ''}
  `;

  return html`
    <wc-input
      style="${styles}"
      .value="${args.value ?? ''}"
      .placeholder="${args.placeholder ?? ''}"
      ?disabled="${args.disabled}"
      type="${args.type ?? 'text'}"
    >
    </wc-input>
  `;
};

export const Default: Story = {
  args: {
    placeholder: 'Escribe algo...',
  },
  render: Template,
};

export const WithValue: Story = {
  args: {
    value: 'Valor inicial',
    placeholder: 'Escribe algo...',
  },
  render: Template,
};

export const Disabled: Story = {
  args: {
    value: 'Input deshabilitado',
    placeholder: 'No puedes escribir aquí',
    disabled: true,
  },
  render: Template,
};

export const Types: Story = {
  args: {
    placeholder: 'Escribe algo...',
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      ${['text', 'password', 'email', 'number', 'tel', 'url'].map(type => html`
        <div>
          <div style="margin-bottom: 0.25rem; font-size: 0.875rem; color: #4b5563;">${type}</div>
          <wc-input
            style="${args.inputPadding ? `--wc-input-padding: ${args.inputPadding};` : ''}"
            type="${type}"
            placeholder="${type} input"
          ></wc-input>
        </div>
      `)}
    </div>
  `,
};

export const CustomStyles: Story = {
  args: {
    placeholder: 'Input personalizado',
    value: '',
    inputPadding: '1em',
    inputRadius: '12px',
    inputBorder: '2px solid #ec4899',
    inputBorderColorFocus: '#db2777',
    inputBg: '#fdf2f8',
    inputColor: '#831843',
    inputPlaceholderColor: '#ec4899',
    inputFontSize: '18px',
  },
  render: Template,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      <wc-input 
        style="--wc-input-padding: 0.25em 0.5em; --wc-input-font-size: 0.875rem;" 
        placeholder="Small input">
      </wc-input>
      <wc-input 
        style="--wc-input-padding: 0.75em 1em; --wc-input-font-size: 1rem;" 
        placeholder="Default input">
      </wc-input>
      <wc-input 
        style="--wc-input-padding: 1em 1.5em; --wc-input-font-size: 1.25rem;" 
        placeholder="Large input">
      </wc-input>
    </div>
  `,
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Input ancho completo',
    inputDisplay: 'block',
  },
  render: (args) => {
    const styles = `
      ${args.inputDisplay ? `--wc-input-display: ${args.inputDisplay};` : ''}
      ${args.inputPadding ? `--wc-input-padding: ${args.inputPadding};` : ''}
    `;
    
    return html`
      <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <wc-input
          style="${styles}"
          placeholder="${args.placeholder}"
        ></wc-input>
      </div>
    `;
  },
};

export const WithEventLog: Story = {
  args: {
    placeholder: 'Escribe para ver el evento',
  },
  render: (args) => {
    const styles = `
      ${args.inputPadding ? `--wc-input-padding: ${args.inputPadding};` : ''}
      ${args.inputRadius ? `--wc-input-radius: ${args.inputRadius};` : ''}
    `;

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
        <wc-input
          style="${styles}"
          .value="${args.value ?? ''}"
          .placeholder="${args.placeholder ?? ''}"
          ?disabled="${args.disabled}"
          type="${args.type ?? 'text'}"
          @value-change="${(e: CustomEvent) => {
            const logDiv = document.getElementById('event-log');
            if (logDiv) {
              logDiv.textContent = `Valor: "${e.detail}"`;
            }
          }}"
        >
        </wc-input>
        <div 
          id="event-log" 
          style="padding: 0.5rem; background: #f3f4f6; border-radius: 4px; font-family: monospace; min-height: 2rem;">
          Esperando...
        </div>
      </div>
    `;
  },
};