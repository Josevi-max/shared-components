import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../../components/atoms/button/button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: 'wc-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 
        `
          # Button Component

          El componente Button es un elemento interactivo que permite a los usuarios realizar acciones y tomar decisiones con un solo clic o toque.

          ## Características

          - ✨ Totalmente personalizable mediante CSS Custom Properties
          - 🎨 Múltiples estados: normal, hover, active, disabled
          - 📱 Responsivo por defecto
          - 🔧 Fácil de integrar en cualquier proyecto
          - ♿ Accesible (ARIA attributes incluidos)
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    label: {
      control: 'text',
      description: 'Texto del botón (contenido del slot)',
      table: {
        type: { summary: 'string' },
        category: 'Slots',
      },
    },
    
    onButtonClick: {
      action: 'button-clicked',
      description: 'Evento disparado al hacer clic en el botón',
      table: {
        type: { summary: 'CustomEvent' },
        category: 'Events',
      },
    },

    bgColor: {
      name: '--wc-button-bg',
      control: 'color',
      description: 'Color de fondo del botón',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--color-primary, #007bff)' },
      },
    },
    hoverColor: {
      name: '--wc-button-bg-hover',
      control: 'color',
      description: 'Color de fondo en estado hover',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--color-primary-hover, #0056b3)' },
      },
    },
    activeColor: {
      name: '--wc-button-bg-active',
      control: 'color',
      description: 'Color de fondo en estado active',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--color-primary-active, #004085)' },
      },
    },
    disabledColor: {
      name: '--wc-button-bg-disabled',
      control: 'color',
      description: 'Color de fondo cuando está deshabilitado',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--color-disabled, #6c757d)' },
      },
    },
    color: {
      name: '--wc-button-color',
      control: 'color',
      description: 'Color del texto',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--color-bg, #ffffff)' },
      },
    },
    radius: {
      name: '--wc-button-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--radius-md, 4px)' },
      },
    },
    paddingY: {
      name: '--wc-button-padding-y',
      control: 'text',
      description: 'Padding vertical',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--space-sm, 0.5rem)' },
      },
    },
    paddingX: {
      name: '--wc-button-padding-x',
      control: 'text',
      description: 'Padding horizontal',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--space-md, 1rem)' },
      },
    },
    fontSize: {
      name: '--wc-button-font-size',
      control: 'text',
      description: 'Tamaño de fuente',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--font-size-md, 1rem)' },
      },
    },
    fontFamily: {
      name: '--wc-button-font-family',
      control: 'text',
      description: 'Familia tipográfica',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--font-family, sans-serif)' },
      },
    },
    transition: {
      name: '--wc-button-transition',
      control: 'text',
      description: 'Duración de la transición',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: 'var(--transition-medium, 0.3s)' },
      },
    },
    width: {
      name: '--wc-button-width',
      control: 'text',
      description: 'Ancho del botón',
      table: {
        category: 'CSS Custom Properties',
        defaultValue: { summary: '100%' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => {
  const styles = `
    ${args.bgColor ? `--wc-button-bg: ${args.bgColor};` : ''}
    ${args.hoverColor ? `--wc-button-bg-hover: ${args.hoverColor};` : ''}
    ${args.activeColor ? `--wc-button-bg-active: ${args.activeColor};` : ''}
    ${args.disabledColor ? `--wc-button-bg-disabled: ${args.disabledColor};` : ''}
    ${args.radius ? `--wc-button-radius: ${args.radius};` : ''}
    ${args.paddingY ? `--wc-button-padding-y: ${args.paddingY};` : ''}
    ${args.paddingX ? `--wc-button-padding-x: ${args.paddingX};` : ''}
    ${args.fontSize ? `--wc-button-font-size: ${args.fontSize};` : ''}
    ${args.fontFamily ? `--wc-button-font-family: ${args.fontFamily};` : ''}
    ${args.color ? `--wc-button-color: ${args.color};` : ''}
    ${args.transition ? `--wc-button-transition: ${args.transition};` : ''}
    ${args.width ? `--wc-button-width: ${args.width};` : ''}
  `;

  return html`
    <wc-button 
      ?disabled=${args.disabled} 
      style="${styles}"
      @button-clicked=${args.onButtonClick}
    >
      ${args.label}
    </wc-button>
  `;
};

export const Default: Story = {
  args: {
    label: 'Click me',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Botón en su estado por defecto con los estilos base.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Botón deshabilitado. No se puede hacer clic y tiene estilos específicos.',
      },
    },
  },
};

export const CustomTokens: Story = {
  args: {
    label: 'Custom Button',
    bgColor: '#ec4899',
    hoverColor: '#db2777',
    activeColor: '#be185d',
    radius: '9999px',
    paddingX: '24px',
    paddingY: '12px',
    fontSize: '16px',
    color: '#ffffff',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de personalización completa usando CSS Custom Properties.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    bgColor: '#3b82f6',
  },
  render: Template,
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    bgColor: '#8b5cf6',
  },
  render: Template,
};

export const Small: Story = {
  args: {
    label: 'Small',
    paddingY: '4px',
    paddingX: '12px',
    fontSize: '14px',
  },
  render: Template,
};

export const Large: Story = {
  args: {
    label: 'Large',
    paddingY: '12px',
    paddingX: '24px',
    fontSize: '18px',
  },
  render: Template,
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    width: '100%',
  },
  render: Template,
  decorators: [(story) => html`<div style="width: 300px;">${story()}</div>`],
};