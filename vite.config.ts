import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://danielamayaenvbo.github.io/daniels-personal-website/
  base: '/daniels-personal-website/',
  plugins: [react()],
})
