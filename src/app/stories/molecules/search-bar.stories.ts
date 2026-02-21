// search-bar.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { within, expect } from '@storybook/test';
import '../../components/molecules/search-bar/search-bar';
import '../../components/atoms/input/input';
import '../../components/atoms/button/button';

// Extendemos el tipo para incluir CSS variables y propiedades adicionales
type SearchBarArgs = {
  value: string;
  placeholder: string;
  buttonText?: string;
  disabled?: boolean;
  onSearch?: (e: CustomEvent) => void;
  // CSS Custom Properties
  searchBarGap?: string;
  searchBarPadding?: string;
  searchBarBackground?: string;
  searchBarBorderRadius?: string;
  searchBarBoxShadow?: string;
  searchBarWidth?: string;
  searchBarMaxWidth?: string;
  // Responsive
  mobileBreakpoint?: string;
};

const meta: Meta<SearchBarArgs> = {
  title: 'Molecules/Search Bar',
  component: 'wc-search-bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Search Bar Component

Componente de barra de búsqueda que combina un input y un botón para crear una experiencia de búsqueda completa.

## Características

- 🔍 Integración perfecta con Input y Button atoms
- 📱 Diseño responsivo (stack vertical en móvil)
- 🎨 Totalmente personalizable mediante CSS Custom Properties
- 🔄 Eventos de búsqueda y cambio de valor
- ♿ Accesible con slots nombrados
- 🎯 Soporte para tecla Enter

## Uso básico

\`\`\`html
<wc-search-bar>
  <wc-input slot="input" placeholder="Buscar..."></wc-input>
  <wc-button slot="button">Buscar</wc-button>
</wc-search-bar>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor actual de búsqueda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Props',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Search...'" },
        category: 'Props',
      },
    },
    buttonText: {
      control: 'text',
      description: 'Texto del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Search'" },
        category: 'Slots',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la búsqueda',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },

    onSearch: {
      action: 'search',
      description: 'Evento disparado al realizar la búsqueda',
      table: {
        type: { summary: 'CustomEvent<string>' },
        category: 'Events',
      },
    },

    searchBarGap: {
      name: '--search-bar-gap',
      control: 'text',
      description: 'Espacio entre input y botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.5em' },
        category: 'CSS Custom Properties',
      },
    },
    searchBarPadding: {
      name: '--search-bar-padding',
      control: 'text',
      description: 'Padding del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
        category: 'CSS Custom Properties',
      },
    },
    searchBarBackground: {
      name: '--search-bar-background',
      control: 'color',
      description: 'Color de fondo',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: 'transparent' },
        category: 'CSS Custom Properties',
      },
    },
    searchBarBorderRadius: {
      name: '--search-bar-border-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
        category: 'CSS Custom Properties',
      },
    },
    searchBarBoxShadow: {
      name: '--search-bar-box-shadow',
      control: 'text',
      description: 'Sombra del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'CSS Custom Properties',
      },
    },
    searchBarWidth: {
      name: '--search-bar-width',
      control: 'text',
      description: 'Ancho del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
        category: 'CSS Custom Properties',
      },
    },
    searchBarMaxWidth: {
      name: '--search-bar-max-width',
      control: 'text',
      description: 'Ancho máximo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'CSS Custom Properties',
      },
    },
    mobileBreakpoint: {
      name: '--search-bar-mobile-breakpoint',
      control: 'text',
      description: 'Breakpoint para vista móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '640px' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SearchBarArgs>;

const Template = (args: SearchBarArgs) => {
  const styles = `
    ${args.searchBarGap ? `--search-bar-gap: ${args.searchBarGap};` : ''}
    ${args.searchBarPadding ? `--search-bar-padding: ${args.searchBarPadding};` : ''}
    ${args.searchBarBackground ? `--search-bar-background: ${args.searchBarBackground};` : ''}
    ${args.searchBarBorderRadius ? `--search-bar-border-radius: ${args.searchBarBorderRadius};` : ''}
    ${args.searchBarBoxShadow ? `--search-bar-box-shadow: ${args.searchBarBoxShadow};` : ''}
    ${args.searchBarWidth ? `--search-bar-width: ${args.searchBarWidth};` : ''}
    ${args.searchBarMaxWidth ? `--search-bar-max-width: ${args.searchBarMaxWidth};` : ''}
    ${args.mobileBreakpoint ? `--search-bar-mobile-breakpoint: ${args.mobileBreakpoint};` : ''}
  `;

  return html`
    <wc-search-bar
      style="${styles}"
      .value=${args.value ?? ''}
    >
      <wc-input
        slot="input"
        .value=${args.value ?? ''}
        placeholder=${args.placeholder ?? 'Buscar...'}
        ?disabled=${args.disabled}
      ></wc-input>

      <wc-button slot="button" ?disabled=${args.disabled}>
        ${args.buttonText || 'Buscar'}
      </wc-button>
    </wc-search-bar>
  `;
};

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Buscar productos, artículos...',
    buttonText: 'Buscar',
    disabled: false,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Barra de búsqueda básica con input y botón por defecto.',
      },
    },
  },
};

export const WithInitialValue: Story = {
  args: {
    value: 'zapatillas deportivas',
    placeholder: 'Buscar...',
    buttonText: 'Buscar',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Barra de búsqueda con un valor inicial predefinido.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: 'Búsqueda deshabilitada',
    placeholder: 'No puedes buscar...',
    buttonText: 'Buscar',
    disabled: true,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Barra de búsqueda deshabilitada, ni el input ni el botón son interactivos.',
      },
    },
  },
};

export const CustomButtonText: Story = {
  args: {
    value: '',
    placeholder: 'Buscar en la web...',
    buttonText: '🔍 Ir',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Personalización del texto del botón.',
      },
    },
  },
};

export const CustomStyles: Story = {
  args: {
    value: '',
    placeholder: 'Buscar...',
    buttonText: 'Buscar',
    searchBarGap: '1rem',
    searchBarPadding: '0.5rem',
    searchBarBackground: '#f3f4f6',
    searchBarBorderRadius: '9999px',
    searchBarBoxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    searchBarWidth: '100%',
    searchBarMaxWidth: '600px',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Barra de búsqueda con estilos personalizados mediante CSS Custom Properties.',
      },
    },
  },
};

export const WithEventLog: Story = {
  args: {
    value: '',
    placeholder: 'Escribe y presiona buscar...',
    buttonText: 'Buscar',
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
      <wc-search-bar
        .value=${args.value}
        @search=${(e: CustomEvent) => {
          const logDiv = document.getElementById('search-log');
          if (logDiv) {
            logDiv.innerHTML = `🔍 Búsqueda: "${e.detail}"`;
          }
        }}
      >
        <wc-input
          slot="input"
          .value=${args.value}
          placeholder=${args.placeholder}
        ></wc-input>
        <wc-button slot="button">${args.buttonText}</wc-button>
      </wc-search-bar>
      <div 
        id="search-log" 
        style="padding: 1rem; background: #f3f4f6; border-radius: 4px; font-family: monospace; min-height: 3rem; border-left: 4px solid #3b82f6;">
        Esperando búsqueda...
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra el término de búsqueda en tiempo real.',
      },
    },
  },
};