import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/template1-appiest/",
  plugins: [
    tailwindcss(),
  ],

})