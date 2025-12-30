import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'

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
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
        },
        format: {
          comments: false, // Remove comments
        },
      },
      cssMinify: true,
      reportCompressedSize: false, // Faster builds
    },
  },
  site: "https://crisokonkwo.github.io",
  base: "/okonkwocare/",
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});

