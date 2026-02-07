import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - split large libraries
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          firebase: ["firebase/app", "firebase/auth"],
          "ui-libs": ["swiper", "aos", "react-hot-toast"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
