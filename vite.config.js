import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    build: {
      outDir: 'dist',     
      assetsDir: 'assets' 
    }
  };

  if (command === 'build') {
    config.base = '/portfolio-web/'; 
  }
  return config;
});