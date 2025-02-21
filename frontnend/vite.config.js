import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allow external access if needed
    port: 5173,
  },
  build: {
    outDir: "dist", // Ensure output goes to "dist"
  },
});
