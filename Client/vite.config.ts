import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    envPrefix: ["NICO_"],
    define: {
        "process.env": {},
        global: "window",
    },
    build: {
        rollupOptions: {
            plugins: [inject({ Buffer: ["Buffer", "Buffer"] })],
        },
    },
});
