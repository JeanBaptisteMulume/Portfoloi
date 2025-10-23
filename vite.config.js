import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ✅ Configuration sans vueDevTools
export default defineConfig({
  plugins: [vue()],
})

