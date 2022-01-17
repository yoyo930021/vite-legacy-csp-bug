import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    preserveSymlinks: true
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
