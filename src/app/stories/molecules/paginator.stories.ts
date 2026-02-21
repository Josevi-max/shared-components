// paginator.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { within, expect, waitFor } from '@storybook/test';
import '../../components/molecules/paginator/paginator';
import '../../components/molecules/select/select';
import '../../components/atoms/option/option';
import type { PageEvent } from '../../components/molecules/paginator/paginator.model';

// Extendemos el tipo para incluir todas las propiedades y CSS variables
type PaginatorArgs = {
  // Propiedades del componente
  actualPage: number;
  pageSize: number;
  totalItems: number;
  pageSizeOptions?: number[];
  minPage?: number;
  icon?: string;
  
  // Eventos
  onPageChange?: (e: CustomEvent<PageEvent>) => void;
  
  // CSS Custom Properties - Contenedor principal
  paginatorDisplay?: string;
  paginatorMargin?: string;
  paginatorPadding?: string;
  paginatorGap?: string;
  paginatorBackground?: string;
  paginatorBorderRadius?: string;
  
  // CSS Custom Properties - Controles (botones)
  controlsGap?: string;
  controlsJustify?: string;
  
  // CSS Custom Properties - Botones
  buttonBorder?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  buttonFontSize?: string;
  buttonBackground?: string;
  buttonColor?: string;
  buttonHoverBackground?: string;
  buttonHoverColor?: string;
  buttonActiveBackground?: string;
  buttonActiveColor?: string;
  buttonDisabledOpacity?: string;
  buttonMinWidth?: string;
  buttonTransition?: string;
  
  // CSS Custom Properties - Dots
  dotsDisplay?: string;
  dotsColor?: string;
  dotsPadding?: string;
  
  // CSS Custom Properties - Info/Select container
  infoDisplay?: string;
  infoJustify?: string;
  infoWidth?: string;
  infoMargin?: string;
  
  // CSS Custom Properties - Responsive
  mobileBreakpoint?: string;
  mobileControlsJustify?: string;
  mobileInfoMargin?: string;
};

const meta: Meta<PaginatorArgs> = {
  title: 'Molecules/Paginator',
  component: 'wc-paginator',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Paginator Component

Componente de paginación completo que permite navegar entre páginas y cambiar el tamaño de página.

## Características

- 📄 Navegación entre páginas (anterior/siguiente)
- 🔢 Visualización inteligente de páginas con puntos suspensivos
- 📏 Selector de tamaño de página integrado
- 🎯 Evento de cambio de página con información completa
- 📱 Diseño responsivo (stack en móvil, horizontal en desktop)
- 🎨 Totalmente personalizable mediante CSS Custom Properties
- 🔄 Cálculo automático del número de páginas

## Uso básico

\`\`\`html
<wc-paginator
  .totalItems="100"
  .pageSize="10"
  .actualPage="0"
  .pageSizeOptions="[5, 10, 20]"
></wc-paginator>
\`\`\`

## Lógica de visualización

El componente muestra:
- Primera página siempre visible
- Última página siempre visible
- Páginas alrededor de la actual (2 a cada lado)
- Puntos suspensivos cuando hay saltos grandes
        `,
      },
    },
  },
  argTypes: {
    actualPage: {
      control: { type: 'number', min: 0 },
      description: 'Página actual (base 0)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Props',
      },
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: 'Número de elementos por página',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
        category: 'Props',
      },
    },
    totalItems: {
      control: { type: 'number', min: 0 },
      description: 'Total de elementos a paginar',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Props',
      },
    },
    pageSizeOptions: {
      control: 'object',
      description: 'Opciones de tamaño de página disponibles',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[5, 10, 15]' },
        category: 'Props',
      },
    },
    minPage: {
      control: { type: 'number', min: 0 },
      description: 'Página mínima (normalmente 0)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Props',
      },
    },
    icon: {
      control: 'text',
      description: 'Icono personalizado (no utilizado actualmente)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Props',
      },
    },

    // Eventos
    onPageChange: {
      action: 'page-change',
      description: 'Evento disparado al cambiar de página o tamaño',
      table: {
        type: { summary: 'CustomEvent<PageEvent>' },
        category: 'Events',
      },
    },

    // CSS Custom Properties - Contenedor principal
    paginatorDisplay: {
      name: '--paginator-display',
      control: 'select',
      options: ['block', 'flex', 'grid'],
      description: 'Display del contenedor principal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
        category: 'CSS Custom Properties',
      },
    },
    paginatorMargin: {
      name: '--paginator-margin',
      control: 'text',
      description: 'Margen del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.5rem 0 0 0' },
        category: 'CSS Custom Properties',
      },
    },
    paginatorPadding: {
      name: '--paginator-padding',
      control: 'text',
      description: 'Padding del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
        category: 'CSS Custom Properties',
      },
    },
    paginatorGap: {
      name: '--paginator-gap',
      control: 'text',
      description: 'Gap entre controles e info',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.5rem' },
        category: 'CSS Custom Properties',
      },
    },
    paginatorBackground: {
      name: '--paginator-background',
      control: 'color',
      description: 'Color de fondo',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: 'transparent' },
        category: 'CSS Custom Properties',
      },
    },
    paginatorBorderRadius: {
      name: '--paginator-border-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
        category: 'CSS Custom Properties',
      },
    },

    // CSS Custom Properties - Controles
    controlsGap: {
      name: '--paginator-controls-gap',
      control: 'text',
      description: 'Espacio entre botones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.25rem' },
        category: 'CSS Custom Properties',
      },
    },
    controlsJustify: {
      name: '--paginator-controls-justify',
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
      description: 'Alineación de los controles',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
        category: 'CSS Custom Properties',
      },
    },

    // CSS Custom Properties - Botones
    buttonBorder: {
      name: '--paginator-button-border',
      control: 'text',
      description: 'Borde de los botones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid #cbd5e1' },
        category: 'CSS Custom Properties',
      },
    },
    buttonBorderRadius: {
      name: '--paginator-button-border-radius',
      control: 'text',
      description: 'Radio del borde de los botones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '9999px' },
        category: 'CSS Custom Properties',
      },
    },
    buttonPadding: {
      name: '--paginator-button-padding',
      control: 'text',
      description: 'Padding de los botones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.375rem 0.5rem' },
        category: 'CSS Custom Properties',
      },
    },
    buttonFontSize: {
      name: '--paginator-button-font-size',
      control: 'text',
      description: 'Tamaño de fuente',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.875rem' },
        category: 'CSS Custom Properties',
      },
    },
    buttonBackground: {
      name: '--paginator-button-background',
      control: 'color',
      description: 'Color de fondo de botones normales',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: 'transparent' },
        category: 'CSS Custom Properties',
      },
    },
    buttonColor: {
      name: '--paginator-button-color',
      control: 'color',
      description: 'Color de texto',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#475569' },
        category: 'CSS Custom Properties',
      },
    },
    buttonHoverBackground: {
      name: '--paginator-button-hover-background',
      control: 'color',
      description: 'Fondo al hacer hover',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#0f172a' },
        category: 'CSS Custom Properties',
      },
    },
    buttonHoverColor: {
      name: '--paginator-button-hover-color',
      control: 'color',
      description: 'Color de texto al hacer hover',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    buttonActiveBackground: {
      name: '--paginator-button-active-background',
      control: 'color',
      description: 'Fondo del botón activo (página actual)',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#0f172a' },
        category: 'CSS Custom Properties',
      },
    },
    buttonActiveColor: {
      name: '--paginator-button-active-color',
      control: 'color',
      description: 'Color del botón activo',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    buttonDisabledOpacity: {
      name: '--paginator-button-disabled-opacity',
      control: 'text',
      description: 'Opacidad de botones deshabilitados',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.5' },
        category: 'CSS Custom Properties',
      },
    },
    buttonMinWidth: {
      name: '--paginator-button-min-width',
      control: 'text',
      description: 'Ancho mínimo de los botones numéricos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2rem' },
        category: 'CSS Custom Properties',
      },
    },
    buttonTransition: {
      name: '--paginator-button-transition',
      control: 'text',
      description: 'Transición de los botones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'all .15s ease' },
        category: 'CSS Custom Properties',
      },
    },

    // CSS Custom Properties - Dots
    dotsDisplay: {
      name: '--paginator-dots-display',
      control: 'select',
      options: ['none', 'inline', 'inline-block', 'block'],
      description: 'Display de los puntos suspensivos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'CSS Custom Properties',
      },
    },
    dotsColor: {
      name: '--paginator-dots-color',
      control: 'color',
      description: 'Color de los puntos',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#64748b' },
        category: 'CSS Custom Properties',
      },
    },
    dotsPadding: {
      name: '--paginator-dots-padding',
      control: 'text',
      description: 'Padding de los puntos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 0.5rem' },
        category: 'CSS Custom Properties',
      },
    },

    // CSS Custom Properties - Info/Select
    infoDisplay: {
      name: '--paginator-info-display',
      control: 'select',
      options: ['flex', 'block', 'grid'],
      description: 'Display del contenedor de información',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'flex' },
        category: 'CSS Custom Properties',
      },
    },
    infoJustify: {
      name: '--paginator-info-justify',
      control: 'select',
      options: ['flex-start', 'center', 'flex-end'],
      description: 'Alineación del contenedor de información',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
        category: 'CSS Custom Properties',
      },
    },
    infoWidth: {
      name: '--paginator-info-width',
      control: 'text',
      description: 'Ancho del contenedor de información',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '20%' },
        category: 'CSS Custom Properties',
      },
    },
    infoMargin: {
      name: '--paginator-info-margin',
      control: 'text',
      description: 'Margen del contenedor de información',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.5rem 0 0 0' },
        category: 'CSS Custom Properties',
      },
    },

    // CSS Custom Properties - Responsive
    mobileBreakpoint: {
      name: '--paginator-mobile-breakpoint',
      control: 'text',
      description: 'Breakpoint para vista móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1024px' },
        category: 'CSS Custom Properties',
      },
    },
    mobileControlsJustify: {
      name: '--paginator-mobile-controls-justify',
      control: 'select',
      options: ['center', 'flex-start', 'flex-end'],
      description: 'Alineación de controles en móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
        category: 'CSS Custom Properties',
      },
    },
    mobileInfoMargin: {
      name: '--paginator-mobile-info-margin',
      control: 'text',
      description: 'Margen de info en móvil',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.5rem 0 0 0' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<PaginatorArgs>;

// Template base
const Template = (args: PaginatorArgs) => {
  const styles = `
    ${args.paginatorDisplay ? `--paginator-display: ${args.paginatorDisplay};` : ''}
    ${args.paginatorMargin ? `--paginator-margin: ${args.paginatorMargin};` : ''}
    ${args.paginatorPadding ? `--paginator-padding: ${args.paginatorPadding};` : ''}
    ${args.paginatorGap ? `--paginator-gap: ${args.paginatorGap};` : ''}
    ${args.paginatorBackground ? `--paginator-background: ${args.paginatorBackground};` : ''}
    ${args.paginatorBorderRadius ? `--paginator-border-radius: ${args.paginatorBorderRadius};` : ''}
    ${args.controlsGap ? `--paginator-controls-gap: ${args.controlsGap};` : ''}
    ${args.controlsJustify ? `--paginator-controls-justify: ${args.controlsJustify};` : ''}
    ${args.buttonBorder ? `--paginator-button-border: ${args.buttonBorder};` : ''}
    ${args.buttonBorderRadius ? `--paginator-button-border-radius: ${args.buttonBorderRadius};` : ''}
    ${args.buttonPadding ? `--paginator-button-padding: ${args.buttonPadding};` : ''}
    ${args.buttonFontSize ? `--paginator-button-font-size: ${args.buttonFontSize};` : ''}
    ${args.buttonBackground ? `--paginator-button-background: ${args.buttonBackground};` : ''}
    ${args.buttonColor ? `--paginator-button-color: ${args.buttonColor};` : ''}
    ${args.buttonHoverBackground ? `--paginator-button-hover-background: ${args.buttonHoverBackground};` : ''}
    ${args.buttonHoverColor ? `--paginator-button-hover-color: ${args.buttonHoverColor};` : ''}
    ${args.buttonActiveBackground ? `--paginator-button-active-background: ${args.buttonActiveBackground};` : ''}
    ${args.buttonActiveColor ? `--paginator-button-active-color: ${args.buttonActiveColor};` : ''}
    ${args.buttonDisabledOpacity ? `--paginator-button-disabled-opacity: ${args.buttonDisabledOpacity};` : ''}
    ${args.buttonMinWidth ? `--paginator-button-min-width: ${args.buttonMinWidth};` : ''}
    ${args.buttonTransition ? `--paginator-button-transition: ${args.buttonTransition};` : ''}
    ${args.dotsDisplay ? `--paginator-dots-display: ${args.dotsDisplay};` : ''}
    ${args.dotsColor ? `--paginator-dots-color: ${args.dotsColor};` : ''}
    ${args.dotsPadding ? `--paginator-dots-padding: ${args.dotsPadding};` : ''}
    ${args.infoDisplay ? `--paginator-info-display: ${args.infoDisplay};` : ''}
    ${args.infoJustify ? `--paginator-info-justify: ${args.infoJustify};` : ''}
    ${args.infoWidth ? `--paginator-info-width: ${args.infoWidth};` : ''}
    ${args.infoMargin ? `--paginator-info-margin: ${args.infoMargin};` : ''}
    ${args.mobileBreakpoint ? `--paginator-mobile-breakpoint: ${args.mobileBreakpoint};` : ''}
    ${args.mobileControlsJustify ? `--paginator-mobile-controls-justify: ${args.mobileControlsJustify};` : ''}
    ${args.mobileInfoMargin ? `--paginator-mobile-info-margin: ${args.mobileInfoMargin};` : ''}
  `;

  return html`
    <wc-paginator
      style="${styles}"
      .actualPage=${args.actualPage ?? 0}
      .pageSize=${args.pageSize ?? 10}
      .totalItems=${args.totalItems ?? 100}
      .pageSizeOptions=${args.pageSizeOptions ?? [5, 10, 15]}
      .minPage=${args.minPage ?? 0}
      .icon=${args.icon ?? ''}
      @page-change=${(e: CustomEvent) => {
        if (args.onPageChange) args.onPageChange(e);
      }}
    ></wc-paginator>
  `;
};

// Historia por defecto
export const Default: Story = {
  args: {
    actualPage: 0,
    pageSize: 10,
    totalItems: 100,
    pageSizeOptions: [5, 10, 20],
    minPage: 0,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador básico con 100 elementos, 10 por página.',
      },
    },
  },
};

// Historia con diferentes totales de elementos
export const DifferentTotals: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">50 elementos (5 páginas)</h4>
        <wc-paginator .totalItems=${50} .pageSize=${10} .actualPage=${0}></wc-paginator>
      </div>
      <div>
        <h4 style="margin-bottom: 0.5rem;">100 elementos (10 páginas)</h4>
        <wc-paginator .totalItems=${100} .pageSize=${10} .actualPage=${0}></wc-paginator>
      </div>
      <div>
        <h4 style="margin-bottom: 0.5rem;">250 elementos (25 páginas)</h4>
        <wc-paginator .totalItems=${250} .pageSize=${10} .actualPage=${0}></wc-paginator>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Paginador con diferentes cantidades totales de elementos.',
      },
    },
  },
};

// Historia con página actual en medio
export const MiddlePage: Story = {
  args: {
    actualPage: 5,
    pageSize: 10,
    totalItems: 200,
    pageSizeOptions: [5, 10, 20, 50],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador con la página actual en medio (página 6 de 20, mostrando lógica de puntos suspensivos).',
      },
    },
  },
};

// Historia con página actual cerca del final
export const NearEndPage: Story = {
  args: {
    actualPage: 17,
    pageSize: 10,
    totalItems: 200,
    pageSizeOptions: [5, 10, 20, 50],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador con la página actual cerca del final (página 18 de 20).',
      },
    },
  },
};

// Historia con página actual al inicio
export const FirstPage: Story = {
  args: {
    actualPage: 0,
    pageSize: 10,
    totalItems: 100,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador en la primera página (botón "Ant" deshabilitado).',
      },
    },
  },
};

// Historia con página actual al final
export const LastPage: Story = {
  args: {
    actualPage: 9,
    pageSize: 10,
    totalItems: 100,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador en la última página (botón "Sig" deshabilitado).',
      },
    },
  },
};

// Historia con diferentes opciones de tamaño de página
export const PageSizeOptions: Story = {
  args: {
    actualPage: 0,
    pageSize: 25,
    totalItems: 500,
    pageSizeOptions: [10, 25, 50, 100],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador con opciones de tamaño de página personalizadas: 10, 25, 50, 100 elementos.',
      },
    },
  },
};

// Historia sin elementos
export const Empty: Story = {
  args: {
    actualPage: 0,
    pageSize: 10,
    totalItems: 0,
    pageSizeOptions: [5, 10, 20],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador sin elementos (maxPage = 0, no se muestran controles numéricos).',
      },
    },
  },
};

export const CustomStyles: Story = {
  args: {
    actualPage: 3,
    pageSize: 10,
    totalItems: 200,
    pageSizeOptions: [5, 10, 20, 50],
    buttonBackground: '#3b82f6',
    buttonColor: '#ffffff',
    buttonHoverBackground: '#1d4ed8',
    buttonHoverColor: '#ffffff',
    buttonActiveBackground: '#1e3a8a',
    buttonActiveColor: '#ffffff',
    buttonBorderRadius: '6px',
    buttonPadding: '0.5rem 0.75rem',
    buttonFontSize: '0.875rem',
    controlsGap: '0.5rem',
    dotsColor: '#3b82f6',
    paginatorBackground: '#f8fafc',
    paginatorBorderRadius: '12px',
    paginatorPadding: '1rem',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Paginador con estilos personalizados mediante CSS Custom Properties.',
      },
    },
  },
};

export const Minimalist: Story = {
  args: {
    actualPage: 2,
    pageSize: 10,
    totalItems: 100,
    pageSizeOptions: [10, 25, 50],
    buttonBorder: 'none',
    buttonBackground: 'transparent',
    buttonColor: '#64748b',
    buttonHoverBackground: '#e2e8f0',
    buttonHoverColor: '#334155',
    buttonActiveBackground: '#334155',
    buttonActiveColor: '#ffffff',
    buttonBorderRadius: '4px',
    controlsGap: '0.125rem',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Versión minimalista del paginador con bordes sutiles.',
      },
    },
  },
};

// Historia con vista móvil
export const MobileView: Story = {
  args: {
    actualPage: 2,
    pageSize: 10,
    totalItems: 150,
    pageSizeOptions: [5, 10, 20, 50],
    mobileBreakpoint: '768px',
  },
  render: (args) => html`
    <div style="width: 375px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; background: white;">
      <wc-paginator
        .actualPage=${args.actualPage}
        .pageSize=${args.pageSize}
        .totalItems=${args.totalItems}
        .pageSizeOptions=${args.pageSizeOptions}
        style="--paginator-mobile-breakpoint: ${args.mobileBreakpoint};"
      ></wc-paginator>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Vista móvil del paginador (los controles y el selector se apilan verticalmente).',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Historia con evento en tiempo real
export const WithEventLog: Story = {
  args: {
    actualPage: 0,
    pageSize: 10,
    totalItems: 100,
    pageSizeOptions: [5, 10, 20],
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <wc-paginator
        .actualPage=${args.actualPage}
        .pageSize=${args.pageSize}
        .totalItems=${args.totalItems}
        .pageSizeOptions=${args.pageSizeOptions}
        @page-change=${(e: CustomEvent) => {
          const logDiv = document.getElementById('paginator-log');
          if (logDiv) {
            const detail = e.detail;
            logDiv.innerHTML = `
              📄 Página: ${detail.pageIndex + 1}/${Math.ceil(detail.length / detail.pageSize)}<br>
              📏 Tamaño: ${detail.pageSize} elementos<br>
              📊 Total: ${detail.length} elementos
            `;
          }
        }}
      ></wc-paginator>
      <div 
        id="paginator-log" 
        style="padding: 1rem; background: #f3f4f6; border-radius: 4px; font-family: monospace; min-height: 4rem; border-left: 4px solid #3b82f6;">
        Haz clic en los controles para ver los eventos
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra los detalles del evento page-change en tiempo real.',
      },
    },
  },
};