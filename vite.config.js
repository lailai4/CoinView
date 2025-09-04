import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CoinView/',    // 👈 关键：GitHub Pages 的子路径
  plugins: [react()],
  server: { host: true, port: 5173 }
})
