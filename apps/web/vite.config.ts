import { resolve } from "node:path";
import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true, routesDirectory: "./src/routes" }),
    react({
      babel: {
        plugins: [
          [
            "@stylexjs/babel-plugin",
            {
              dev: process.env.NODE_ENV === "development",
              runtimeInjection: true,
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
  resolve: { alias: { "@": resolve(__dirname, "./src"), "@ruflas/ui": resolve(__dirname, "../../packages/ui/src") } },
  server: { port: 5173 },
  // Do not pre-bundle the local design-system package; let Vite
  // compile it with the project's Babel plugins so StyleX transforms run.
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
});
