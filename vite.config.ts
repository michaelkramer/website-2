import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/website-2/",
  plugins: [reactRouter(), tailwindcss(), tsconfigPaths()],
  // publicDir: "./public",
  // build: {
  //   emptyOutDir: true,
  //   outDir: "./dist",
  //   sourcemap: true,
  //   manifest: true,
  // },
});
