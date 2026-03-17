import adapter from "@sveltejs/adapter-static"; // Asegúrate de tener el adapter-static
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Le decimos a Svelte que procese archivos .svelte y .md
  extensions: [".svelte", ".md"],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
    }),
  ],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: "404.html", // Importante para que no falle en refrescos
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
