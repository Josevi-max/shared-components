import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit';
import '../../components/atoms/option/option';

type OptionArgs = {
  value: string;
  selected?: boolean;
  disabled?: boolean;
  label?: string;
  content?: string | TemplateResult;
  optionPadding?: string;
  optionHoverBg?: string;
  optionSelectedBg?: string;
  optionDisabledOpacity?: string;
  optionColor?: string;
  optionHoverColor?: string;
  optionSelectedColor?: string;
  optionFontSize?: string;
  optionFontFamily?: string;
  optionBorderRadius?: string;
  optionTransition?: string;
};

const meta: Meta<OptionArgs> = {
  title: 'Atoms/Option',
  component: 'wc-option',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Option Component

Componente de opción individual para ser utilizado dentro de un Select o lista de opciones.

## Características

- 🔘 Estado seleccionado visual
- 🖱️ Evento de clic personalizado
- 🎨 Totalmente personalizable mediante CSS Custom Properties
- 📦 Contenido flexible mediante slot
- 🔄 Transiciones suaves

## Uso básico

\`\`\`html
<wc-option value="1">Opción 1</wc-option>
<wc-option value="2" selected>Opción seleccionada</wc-option>
<wc-option value="3" disabled>Opción deshabilitada</wc-option>
\`\`\`

        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor asociado a la opción',
      table: {
        type: { summary: 'string' },
        category: 'Props',
      },
    },
    selected: {
      control: 'boolean',
      description: 'Marca la opción como seleccionada',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la opción',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    label: {
      control: 'text',
      description: 'Texto de la opción (contenido del slot)',
      table: {
        type: { summary: 'string' },
        category: 'Slots',
      },
    },
    content: {
      control: 'text',
      description: 'Contenido HTML para el slot (ejemplo avanzado)',
      table: {
        type: { summary: 'string | TemplateResult' },
        category: 'Slots',
      },
    },

    optionPadding: {
      name: '--wc-select-option-padding',
      control: 'text',
      description: 'Padding de la opción',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '10px 14px' },
        category: 'CSS Custom Properties',
      },
    },
    optionHoverBg: {
      name: '--wc-select-option-hover-bg',
      control: 'color',
      description: 'Color de fondo al hacer hover',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#f5f5f5' },
        category: 'CSS Custom Properties',
      },
    },
    optionSelectedBg: {
      name: '--wc-select-option-selected-bg',
      control: 'color',
      description: 'Color de fondo cuando está seleccionado',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#eaeaea' },
        category: 'CSS Custom Properties',
      },
    },
    optionDisabledOpacity: {
      name: '--wc-select-option-disabled-opacity',
      control: 'text',
      description: 'Opacidad cuando está deshabilitado',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.5' },
        category: 'CSS Custom Properties',
      },
    },
    optionColor: {
      name: '--wc-select-option-color',
      control: 'color',
      description: 'Color del texto',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#1f2937' },
        category: 'CSS Custom Properties',
      },
    },
    optionHoverColor: {
      name: '--wc-select-option-hover-color',
      control: 'color',
      description: 'Color del texto al hacer hover',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#111827' },
        category: 'CSS Custom Properties',
      },
    },
    optionSelectedColor: {
      name: '--wc-select-option-selected-color',
      control: 'color',
      description: 'Color del texto cuando está seleccionado',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#000000' },
        category: 'CSS Custom Properties',
      },
    },
    optionFontSize: {
      name: '--wc-select-option-font-size',
      control: 'text',
      description: 'Tamaño de fuente',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '14px' },
        category: 'CSS Custom Properties',
      },
    },
    optionFontFamily: {
      name: '--wc-select-option-font-family',
      control: 'text',
      description: 'Familia tipográfica',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
        category: 'CSS Custom Properties',
      },
    },
    optionBorderRadius: {
      name: '--wc-select-option-border-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '4px' },
        category: 'CSS Custom Properties',
      },
    },
    optionTransition: {
      name: '--wc-select-option-transition',
      control: 'text',
      description: 'Transición',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'background-color 0.15s ease, color 0.15s ease' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<OptionArgs>;

const Template = (args: OptionArgs) => {
  const styles = `
    ${args.optionPadding ? `--wc-select-option-padding: ${args.optionPadding};` : ''}
    ${args.optionHoverBg ? `--wc-select-option-hover-bg: ${args.optionHoverBg};` : ''}
    ${args.optionSelectedBg ? `--wc-select-option-selected-bg: ${args.optionSelectedBg};` : ''}
    ${args.optionDisabledOpacity ? `--wc-select-option-disabled-opacity: ${args.optionDisabledOpacity};` : ''}
    ${args.optionColor ? `--wc-select-option-color: ${args.optionColor};` : ''}
    ${args.optionHoverColor ? `--wc-select-option-hover-color: ${args.optionHoverColor};` : ''}
    ${args.optionSelectedColor ? `--wc-select-option-selected-color: ${args.optionSelectedColor};` : ''}
    ${args.optionFontSize ? `--wc-select-option-font-size: ${args.optionFontSize};` : ''}
    ${args.optionFontFamily ? `--wc-select-option-font-family: ${args.optionFontFamily};` : ''}
    ${args.optionBorderRadius ? `--wc-select-option-border-radius: ${args.optionBorderRadius};` : ''}
    ${args.optionTransition ? `--wc-select-option-transition: ${args.optionTransition};` : ''}
  `;

  return html`
    <wc-option
      style="${styles}"
      value="${args.value}"
      ?selected=${args.selected}
      ?disabled=${args.disabled}
    >
      ${args.content ? html`${args.content}` : html`${args.label}`}
    </wc-option>
  `;
};

export const Default: Story = {
  args: {
    value: '1',
    label: 'Opción simple',
    selected: false,
    disabled: false,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción básica con texto simple.',
      },
    },
  },
};

export const Selected: Story = {
  args: {
    value: '2',
    label: 'Opción seleccionada',
    selected: true,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción en estado seleccionado.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: '3',
    label: 'Opción deshabilitada',
    disabled: true,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción deshabilitada que no puede ser seleccionada.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    value: '4',
    content: html`
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">🔵</span>
        <span>Opción con icono</span>
      </div>
    `,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción que incluye un icono usando HTML personalizado.',
      },
    },
  },
};

export const WithAvatar: Story = {
  args: {
    value: '5',
    content: html`
      <div style="display: flex; align-items: center; gap: 10px;">
        <img 
          src="https://i.pravatar.cc/30?img=7" 
          alt="Avatar"
          style="width: 24px; height: 24px; border-radius: 50%;"
        />
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 600;">Juan Pérez</span>
          <span style="font-size: 12px; color: #6b7280;">juan@email.com</span>
        </div>
      </div>
    `,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción con avatar y subtítulo, ideal para listas de usuarios.',
      },
    },
  },
};

export const WithBadge: Story = {
  args: {
    value: '6',
    content: html`
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
        <span>Opción con notificación</span>
        <span style="
          background: #3b82f6;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        ">3</span>
      </div>
    `,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción con badge o contador.',
      },
    },
  },
};

export const CustomStyles: Story = {
  args: {
    value: '7',
    label: 'Opción con estilos personalizados',
    selected: false,
    optionPadding: '12px 20px',
    optionHoverBg: '#3b82f6',
    optionHoverColor: '#ffffff',
    optionSelectedBg: '#1d4ed8',
    optionSelectedColor: '#ffffff',
    optionColor: '#1f2937',
    optionBorderRadius: '8px',
    optionFontSize: '16px',
    optionTransition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Opción con CSS Custom Properties personalizados.',
      },
    },
  },
};