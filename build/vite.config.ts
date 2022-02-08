import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  resolve: {
    alias: {
      'vue-request': path.resolve(__dirname, '../src/index.ts'),
      vue: 'vue3',
    },
  },
  plugins: [vue(), vueJsx()],
});
