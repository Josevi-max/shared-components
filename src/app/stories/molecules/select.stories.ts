
import { html, type TemplateResult } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../../components/molecules/select/select';
import '../../components/atoms/option/option';

type SelectArgs = {
  value?: string | null;
  open?: boolean;
  closeWhenClickOutside?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  options: { value: string; label: string | TemplateResult<1>; disabled?: boolean }[];
  displayContent?: string;
  onChange?: (e: CustomEvent) => void;
  selectWidth?: string;
  selectMaxWidth?: string;
  selectBackground?: string;
  selectBorder?: string;
  selectBorderRadius?: string;
  selectBorderColor?: string;
  selectBorderColorFocus?: string;
  selectBorderColorError?: string;
  selectBorderColorSuccess?: string;
  selectBoxShadow?: string;
  selectBoxShadowFocus?: string;
  selectPadding?: string;
  selectFontSize?: string;
  selectColor?: string;
  selectPlaceholderColor?: string;
  selectArrowColor?: string;
  selectArrowSize?: string;
  optionsContainerMaxHeight?: string;
  optionsContainerMinWidth?: string;
  optionsContainerBackground?: string;
  optionsContainerBorder?: string;
  optionsContainerBorderRadius?: string;
  optionsContainerBoxShadow?: string;
  optionsContainerZIndex?: string;
  animationDuration?: string;
  animationTiming?: string;
};

const meta: Meta<SelectArgs> = {
  title: 'Molecules/Select',
  component: 'wc-select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Select Component

Componente de select personalizable que utiliza wc-option como hijos.

## Características

- 🔽 Desplegable con animación suave
- 🎯 Selección de opciones con wc-option
- 🖱️ Cierre al hacer clic fuera (configurable)
- 🎨 Totalmente personalizable mediante CSS Custom Properties
- 📱 Diseño responsivo
- 🏷️ Slot para display personalizado
- ⚡ Eventos de cambio y selección
- 📏 Múltiples tamaños (small, medium, large)

## Uso básico

\`\`\`html
<wc-select>
  <wc-option value="1">Opción 1</wc-option>
  <wc-option value="2">Opción 2</wc-option>
  <wc-option value="3">Opción 3</wc-option>
</wc-select>
\`\`\`

## Con valor seleccionado

\`\`\`html
<wc-select value="2">
  <wc-option value="1">Opción 1</wc-option>
  <wc-option value="2">Opción 2</wc-option>
  <wc-option value="3">Opción 3</wc-option>
</wc-select>
\`\`\`

## Display personalizado

\`\`\`html
<wc-select>
  <span slot="displayName">👤 Selecciona usuario</span>
  <wc-option value="1">👨 Juan Pérez</wc-option>
  <wc-option value="2">👩 Ana García</wc-option>
</wc-select>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor seleccionado actualmente',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
        category: 'Props',
      },
    },
    open: {
      control: 'boolean',
      description: 'Controla si el select está abierto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    closeWhenClickOutside: {
      control: 'boolean',
      description: 'Cierra el select al hacer clic fuera',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Props',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'States',
      },
    },
    error: {
      control: 'boolean',
      description: 'Estado de error',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'States',
      },
    },
    success: {
      control: 'boolean',
      description: 'Estado de éxito',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'States',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Props',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder cuando no hay selección',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Selecciona una opción' },
        category: 'Props',
      },
    },
    displayContent: {
      control: 'text',
      description: 'Contenido HTML para el slot displayName',
      table: {
        type: { summary: 'string' },
        category: 'Slots',
      },
    },

    onChange: {
      action: 'change',
      description: 'Evento disparado al cambiar la selección',
      table: {
        type: { summary: 'CustomEvent<{ value: string }>' },
        category: 'Events',
      },
    },

    selectWidth: {
      name: '--wc-select-width',
      control: 'text',
      description: 'Ancho del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
        category: 'CSS Custom Properties',
      },
    },
    selectMaxWidth: {
      name: '--wc-select-max-width',
      control: 'text',
      description: 'Ancho máximo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '300px' },
        category: 'CSS Custom Properties',
      },
    },
    selectBackground: {
      name: '--wc-select-background',
      control: 'color',
      description: 'Color de fondo',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    selectBorder: {
      name: '--wc-select-border',
      control: 'text',
      description: 'Borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid #d1d5db' },
        category: 'CSS Custom Properties',
      },
    },
    selectBorderRadius: {
      name: '--wc-select-border-radius',
      control: 'text',
      description: 'Radio del borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px' },
        category: 'CSS Custom Properties',
      },
    },
    selectBorderColorFocus: {
      name: '--wc-select-border-color-focus',
      control: 'color',
      description: 'Color del borde en focus',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#3b82f6' },
        category: 'CSS Custom Properties',
      },
    },
    selectBorderColorError: {
      name: '--wc-select-border-color-error',
      control: 'color',
      description: 'Color del borde en estado error',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ef4444' },
        category: 'CSS Custom Properties',
      },
    },
    selectBorderColorSuccess: {
      name: '--wc-select-border-color-success',
      control: 'color',
      description: 'Color del borde en estado success',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#10b981' },
        category: 'CSS Custom Properties',
      },
    },
    selectBoxShadow: {
      name: '--wc-select-box-shadow',
      control: 'text',
      description: 'Sombra',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'CSS Custom Properties',
      },
    },
    selectBoxShadowFocus: {
      name: '--wc-select-box-shadow-focus',
      control: 'text',
      description: 'Sombra en focus',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 0 0 3px rgba(59, 130, 246, 0.1)' },
        category: 'CSS Custom Properties',
      },
    },
    selectPadding: {
      name: '--wc-select-padding',
      control: 'text',
      description: 'Padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '10px 14px' },
        category: 'CSS Custom Properties',
      },
    },
    selectFontSize: {
      name: '--wc-select-font-size',
      control: 'text',
      description: 'Tamaño de fuente',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '14px' },
        category: 'CSS Custom Properties',
      },
    },
    selectColor: {
      name: '--wc-select-color',
      control: 'color',
      description: 'Color del texto',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#1f2937' },
        category: 'CSS Custom Properties',
      },
    },
    selectPlaceholderColor: {
      name: '--wc-select-placeholder-color',
      control: 'color',
      description: 'Color del placeholder',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#9ca3af' },
        category: 'CSS Custom Properties',
      },
    },
    selectArrowColor: {
      name: '--wc-select-arrow-color',
      control: 'color',
      description: 'Color de la flecha',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#6b7280' },
        category: 'CSS Custom Properties',
      },
    },
    selectArrowSize: {
      name: '--wc-select-arrow-size',
      control: 'text',
      description: 'Tamaño de la flecha',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px' },
        category: 'CSS Custom Properties',
      },
    },

    optionsContainerMaxHeight: {
      name: '--wc-select-options-max-height',
      control: 'text',
      description: 'Altura máxima del contenedor de opciones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '250px' },
        category: 'CSS Custom Properties',
      },
    },
    optionsContainerMinWidth: {
      name: '--wc-select-options-min-width',
      control: 'text',
      description: 'Ancho mínimo del contenedor de opciones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '180px' },
        category: 'CSS Custom Properties',
      },
    },
    optionsContainerBackground: {
      name: '--wc-select-options-background',
      control: 'color',
      description: 'Color de fondo del contenedor',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#ffffff' },
        category: 'CSS Custom Properties',
      },
    },
    optionsContainerBorder: {
      name: '--wc-select-options-border',
      control: 'text',
      description: 'Borde del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1px solid #e5e7eb' },
        category: 'CSS Custom Properties',
      },
    },
    optionsContainerBorderRadius: {
      name: '--wc-select-options-border-radius',
      control: 'text',
      description: 'Radio del borde del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px' },
        category: 'CSS Custom Properties',
      },
    },
    optionsContainerBoxShadow: {
      name: '--wc-select-options-box-shadow',
      control: 'text',
      description: 'Sombra del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
        category: 'CSS Custom Properties',
      },
    },
    optionsContainerZIndex: {
      name: '--wc-select-options-z-index',
      control: 'text',
      description: 'Z-index del contenedor',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1000' },
        category: 'CSS Custom Properties',
      },
    },

    animationDuration: {
      name: '--wc-select-animation-duration',
      control: 'text',
      description: 'Duración de la animación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.15s' },
        category: 'CSS Custom Properties',
      },
    },
    animationTiming: {
      name: '--wc-select-animation-timing',
      control: 'text',
      description: 'Función de temporización de la animación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ease' },
        category: 'CSS Custom Properties',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SelectArgs>;

const generateOptions = (options: { value: string; label: string | TemplateResult<1>; disabled?: boolean }[]) => {
  return options.map(opt => html`
    <wc-option value="${opt.value}" ?disabled=${opt.disabled}>
      ${opt.label}
    </wc-option>
  `);
};

const Template = (args: SelectArgs) => {
  const styles = `
    ${args.selectWidth ? `--wc-select-width: ${args.selectWidth};` : ''}
    ${args.selectMaxWidth ? `--wc-select-max-width: ${args.selectMaxWidth};` : ''}
    ${args.selectBackground ? `--wc-select-background: ${args.selectBackground};` : ''}
    ${args.selectBorder ? `--wc-select-border: ${args.selectBorder};` : ''}
    ${args.selectBorderRadius ? `--wc-select-border-radius: ${args.selectBorderRadius};` : ''}
    ${args.selectBorderColorFocus ? `--wc-select-border-color-focus: ${args.selectBorderColorFocus};` : ''}
    ${args.selectBorderColorError ? `--wc-select-border-color-error: ${args.selectBorderColorError};` : ''}
    ${args.selectBorderColorSuccess ? `--wc-select-border-color-success: ${args.selectBorderColorSuccess};` : ''}
    ${args.selectBoxShadow ? `--wc-select-box-shadow: ${args.selectBoxShadow};` : ''}
    ${args.selectBoxShadowFocus ? `--wc-select-box-shadow-focus: ${args.selectBoxShadowFocus};` : ''}
    ${args.selectPadding ? `--wc-select-padding: ${args.selectPadding};` : ''}
    ${args.selectFontSize ? `--wc-select-font-size: ${args.selectFontSize};` : ''}
    ${args.selectColor ? `--wc-select-color: ${args.selectColor};` : ''}
    ${args.selectPlaceholderColor ? `--wc-select-placeholder-color: ${args.selectPlaceholderColor};` : ''}
    ${args.selectArrowColor ? `--wc-select-arrow-color: ${args.selectArrowColor};` : ''}
    ${args.selectArrowSize ? `--wc-select-arrow-size: ${args.selectArrowSize};` : ''}
    ${args.optionsContainerMaxHeight ? `--wc-select-options-max-height: ${args.optionsContainerMaxHeight};` : ''}
    ${args.optionsContainerMinWidth ? `--wc-select-options-min-width: ${args.optionsContainerMinWidth};` : ''} {/* AÑADIDO */}
    ${args.optionsContainerBackground ? `--wc-select-options-background: ${args.optionsContainerBackground};` : ''}
    ${args.optionsContainerBorder ? `--wc-select-options-border: ${args.optionsContainerBorder};` : ''}
    ${args.optionsContainerBorderRadius ? `--wc-select-options-border-radius: ${args.optionsContainerBorderRadius};` : ''}
    ${args.optionsContainerBoxShadow ? `--wc-select-options-box-shadow: ${args.optionsContainerBoxShadow};` : ''}
    ${args.optionsContainerZIndex ? `--wc-select-options-z-index: ${args.optionsContainerZIndex};` : ''}
    ${args.animationDuration ? `--wc-select-animation-duration: ${args.animationDuration};` : ''}
    ${args.animationTiming ? `--wc-select-animation-timing: ${args.animationTiming};` : ''}
  `;

  const options = args.options || [
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
    { value: '3', label: 'Opción 3' },
  ];

  return html`
    <wc-select
      style="${styles}"
      .value=${args.value ?? null}
      .open=${args.open}
      .closeWhenClickOutside=${args.closeWhenClickOutside}
      ?disabled=${args.disabled}
      ?error=${args.error}
      ?success=${args.success}
      size=${args.size || 'medium'}
      data-placeholder=${args.placeholder || 'Selecciona una opción'}
      @change=${(e: CustomEvent) => {
        if (args.onChange) args.onChange(e);
      }}
    >
      ${args.displayContent ? html`
        <span slot="displayName">${args.displayContent}</span>
      ` : ''}
      ${generateOptions(options)}
    </wc-select>
  `;
};

export const Default: Story = {
  args: {
    value: null,
    displayContent: '👤 Selecciona usuario',
    options: [
      { value: '1', label: '👨 Juan Pérez' },
      { value: '2', label: '👩 Ana García' },
    ],
  },
  render: Template,

}


export const withImages: Story = {
  args: {
    value: null,
    displayContent: '🌍 Selecciona país',
    options: [
      {value: 'us', label: html`<span style="display: flex; align-items: center; gap: 8px;"><img src="https://flagcdn.com/us.svg" alt="US" width="20"> Estados Unidos</span>`},
      {value: 'mx', label: html`<span style="display: flex; align-items: center; gap: 8px;"><img src="https://flagcdn.com/mx.svg" alt="MX" width="20"> México</span>`},
      {value: 'es', label: html`<span style="display: flex; align-items: center; gap: 8px;"><img src="https://flagcdn.com/es.svg" alt="ES" width="20"> España</span>`},
      {value: 'other', label: html`<div style="text-align:center">
        <img src="https://media.giphy.com/media/l0HlDtKPoYJhFtgQ4/giphy.gif" style="width:200px; height:auto;" alt="animated gif" />
        <h1>Opción con gift</h1>
      </div>`},
    ],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Select con opciones que incluyen imágenes (banderas) junto al texto.',
      },
    },
  },
};

export const SmallSelect: Story = {
  args: {
    value: null,
    placeholder: 'Select pequeño',
    selectMaxWidth: '50px',
    optionsContainerMinWidth: '250px',
    options: [
      { value: '1', label: 'Opción con texto extremadamente largo que se desborda' },
      { value: '2', label: 'Otra opción también muy larga para probar' },
      { value: '3', label: 'Y una tercera opción larga' },
    ],
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Select pequeño (150px) pero las opciones tienen un ancho mínimo de 250px, permitiendo leer todo el contenido sin scroll horizontal.',
      },
    },
  },
};