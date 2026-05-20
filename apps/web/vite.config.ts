import { resolve } from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true, routesDirectory: "./src/routes" }),
    react({
      babel: {
        plugins: [
          ["@stylexjs/babel-plugin", { dev: false, runtimeInjection: true, treeshakeCompensation: true }],
        ],
      },
    }),
  ],
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
  server: { port: 5173 },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
});
