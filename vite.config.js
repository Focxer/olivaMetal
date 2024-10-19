import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Use polling para garantir que o Vite detecte as mudanças
    },
    hmr: true,  // Habilitar HMR explicitamente
  },
})