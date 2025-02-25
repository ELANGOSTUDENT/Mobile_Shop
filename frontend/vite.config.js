
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // ✅ Set frontend to run on port 3000
    proxy: {
      "/api": {
        target: "http://localhost:5000", // ✅ Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

