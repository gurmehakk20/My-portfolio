import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Hashed bundles go to /static so they can be cached immutably without touching public/assets.
    assetsDir: 'static',
    sourcemap: true,
  },
})
