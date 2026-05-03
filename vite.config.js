import { defineConfig } from 'vite'

// Для GitHub Pages (project site): задайте VITE_BASE_PATH=/имя-репозитория/
// Локально по умолчанию base: '/'
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
})
