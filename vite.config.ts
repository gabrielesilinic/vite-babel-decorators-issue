import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    babel({
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
