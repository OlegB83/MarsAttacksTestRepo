import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      'preview-dec5-ffa3-725f-d225.preview.matter.labs.jb.gg'
    ]
  }
})
