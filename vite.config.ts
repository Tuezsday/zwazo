import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Allows access from external networks
    port: 5173, // Make sure this matches your Vite dev server
    allowedHosts: ['.ngrok-free.app'], // Allow ngrok subdomains
  }
});
