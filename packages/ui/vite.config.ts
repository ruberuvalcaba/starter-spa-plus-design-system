import { resolve } from "node:path";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@stylexjs/babel-plugin",
            {
              dev: process.env.NODE_ENV === "development",
              runtimeInjection: false,
              genConditionalClasses: true,
              treeshakeCompensation: true,
              unstable_moduleResolution: {
                type: "commonJS",
                rootDir: path.resolve(__dirname), // ← this is the key
              },
            },
          ],
        ],
        // plugins: [
        //   [
        //     "@stylexjs/babel-plugin",
        //     { dev: false, runtimeInjection: true, treeshakeCompensation: true },
        //   ],
        // ],
      },
    }),
    dts({ include: ["src"], exclude: ["**/*.test.*", "**/*.stories.*"] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: { external: ["react", "react-dom", "react/jsx-runtime"] },
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
});
