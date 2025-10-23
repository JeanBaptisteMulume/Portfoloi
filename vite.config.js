import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// ✅ Configuration standard pour Vue 3 avec Vite
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // le dossier où seront générés les fichiers
  },
  server: {
    port: 5173, // tu peux changer le port si tu veux
  },
})
