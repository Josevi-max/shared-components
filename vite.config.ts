import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SharedComponents',
      formats: ['es', 'umd'],
      fileName: (format) => `shared-components.${format}.js`
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  },
  server: {
    port: 5173
  }
});
