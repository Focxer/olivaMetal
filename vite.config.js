import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { DEFAULT_OPTIONS } from "./viteImageOptimizer";

export default defineConfig({
  plugins: [react(), ViteImageOptimizer(DEFAULT_OPTIONS)],
  base: "/",
});
