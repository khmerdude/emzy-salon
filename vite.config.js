import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works at khmerdude.github.io/emzy-salon/ or on a custom domain
export default defineConfig({
  base: './',
  plugins: [react()],
});
