import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: ["**/*.e2e.{test,spec}.{ts,tsx}", "node_modules"],
    setupFiles: "./src/setupTests.ts",
  },
});
