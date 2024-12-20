import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  publicDir: "public",
  plugins: [react(), TanStackRouterVite(), tsconfigPaths({ loose: true })],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
