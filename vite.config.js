import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss()],
  server:{
    port:3000,
  },
  screens: {
    'xs': '480px',  // Adding an extra-small breakpoint
    '3xl': '1600px', // Adding an extra-large breakpoint
  }
});
