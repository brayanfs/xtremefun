import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/xtremefun/', // Reemplaza "tu-repositorio" exactamente por el nombre que le des a tu repositorio en GitHub
})