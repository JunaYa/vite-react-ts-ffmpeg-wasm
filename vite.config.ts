import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '/assets': `${path.resolve(__dirname, 'src/assets')}/`,
    },
  },
  plugins: [
    react(),
    crossOriginIsolation(),
  ],
})
