import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      // Опции SVGR
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false, // Сохранять viewBox
                },
              },
            },
          ],
        },
      },
    }),
  ],
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
      '@ui': '/src/shared/ui',
      '@lib': '/src/shared/lib',
      '@entities': '/src/entities',
      '@pages': '/src/pages',
      '@assets': '/src/shared/assets/',
    },
  },
})
