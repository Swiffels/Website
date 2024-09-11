import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    build: {
      sourcemap: true,
    },
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name]-[hash][extname]`,
      },
    },
  },
});
