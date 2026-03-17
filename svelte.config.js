import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
// 1. Importamos las utilidades de Node para manejar rutas
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// 2. Calculamos la ruta absoluta de la raíz de tu proyecto
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      layout: {
        // 3. Unimos la raíz absoluta con la ubicación de tu layout
        blog: join(__dirname, "./src/lib/PostLayout.svelte")
      }
    }),
  ],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
  },
};

export default config;