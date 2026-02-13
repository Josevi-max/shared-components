import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/app/stories/**/*.stories.ts'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
};

export default config;
