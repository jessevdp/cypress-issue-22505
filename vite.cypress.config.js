// separate config file for Cypress, since it does not play nice with ViteRuby

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
});
