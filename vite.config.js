import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:4]",
    },
  },
});
