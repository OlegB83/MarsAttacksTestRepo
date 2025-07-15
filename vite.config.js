import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/demo-project/', // Replace with your repo name
  plugins: [react()],
})
