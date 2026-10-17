import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages serve il sito da https://<utente>.github.io/<NOME-REPOSITORY>/
// Il workflow calcola da solo il percorso (VITE_BASE_PATH); in locale si usa "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? process.env.VITE_BASE_PATH || "/" : "/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
