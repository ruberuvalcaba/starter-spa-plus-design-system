import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@ruflas/ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@stylexjs/babel-plugin",
            {
              dev: true,
              runtimeInjection: true,
              genConditionalClasses: true,
              treeshakeCompensation: true,
              unstable_moduleResolution: {
                type: "commonJS",
                rootDir: path.resolve(__dirname, "../../packages/ui/src"),
              },
            },
          ],
        ],
      },
    }),
  ],
});
