import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import pluginRewriteAll from 'vite-plugin-rewrite-all'; //add to remove dot from token

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  pluginRewriteAll()],
})
