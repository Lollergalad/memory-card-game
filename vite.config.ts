import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

type ViteConfigInput = {
  mode: string;
  command: string;
  ssrBuild: boolean;
};

export default (args: ViteConfigInput) => {
  const { mode } = args;
  const generateScopedName = mode === "production" ? "[hash:base64:2]" : "[name]_[local]";

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
      modules: {
        generateScopedName,
      },
    },
  });
};
