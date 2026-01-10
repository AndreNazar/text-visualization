import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@styles': '/src/app/styles',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets',
      '@features': '/src/features',
    },
  },
})
