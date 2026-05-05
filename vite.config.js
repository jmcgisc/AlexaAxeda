import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://www.desarrollosdiamante.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [
    react(),
    // permite importar .md como raw string
    {
      name: 'markdown-raw-loader',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return {
            code: `export default ${JSON.stringify(code)}`,
            map: null,
          };
        }
      },
    },
  ],
  assetsInclude: ["**/*.md"],
});