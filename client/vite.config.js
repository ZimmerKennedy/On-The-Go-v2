import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   '/': 'https://on-the-go.onrender.com',
    // },
  },
});