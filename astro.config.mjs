import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.info", "console.debug"],
        },
        format: { comments: false },
      },
      cssMinify: true,
      reportCompressedSize: false,
    },
  },

  // per-host
  site: isNetlify
    ? "https://okonkwocarepediatrics.netlify.app" // change to actual domain later
    : "https://crisokonkwo.github.io",

  base: isNetlify ? "/" : "/okonkwocare/",

  compressHTML: true,
  build: { inlineStylesheets: "auto" },
});


