import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import dts from "vite-plugin-dts";
import renameNodeModules from "rollup-plugin-rename-node-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), renameNodeModules("ext", false)],
  resolve: {
    dedupe: ["vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      name: "Vue component lib",
      fileName: (format) => `vue-component-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          dir: "dist",
          preserveModules: true,
        },
      ],
    },
  },
});
