import compressor from "astro-compressor";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kiliangaertner.de",

  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Table of Contents", maxDepth: 3 }]],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "de",
        locales: {
          en: "en-US",
          de: "de-DE",
        },
      },
    }),
    compressor({
      zstd: true,
      brotli: true,
      gzip: true,
      // Default + .pdf
      fileExtensions: [
        ".css",
        ".js",
        ".html",
        ".xml",
        ".cjs",
        ".mjs",
        ".svg",
        ".txt",
        ".pdf",
      ],
    }),
  ],
});
