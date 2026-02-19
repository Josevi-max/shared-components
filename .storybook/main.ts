import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['storybook/test', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  }
};

export default config;