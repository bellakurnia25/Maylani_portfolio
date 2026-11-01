import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" agar hasil build bisa di-hosting di folder/subpath mana pun
export default defineConfig({
  base: "./",
  plugins: [react()],
});
