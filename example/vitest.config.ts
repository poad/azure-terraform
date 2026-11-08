import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
    exclude: ["**/node_modules/**", "**/*.d.ts", "**/cdktf.out/**"],
    setupFiles: ["./setup-vitest.ts"],
    clearMocks: true,
  },
});
