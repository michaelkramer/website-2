import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/website-2/",
  plugins: [tailwindcss(), reactRouter()],
  publicDir: "./public",
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    sourcemap: true,
    manifest: true,
  },
});
