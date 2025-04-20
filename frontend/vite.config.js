import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { //whenever you visit /api, it will be replaced by localhost
        target: "http://localhost:5000"
      }
    }
  }
})
