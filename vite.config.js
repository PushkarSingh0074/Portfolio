import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths so the site works under any repo name / Pages sub-path.
  base: "./",
  plugins: [react()],
});
