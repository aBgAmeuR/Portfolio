// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://antoinejosset.fr',
  integrations: [icon(), sitemap({
    filter: (page) => {
      const excludePatterns = ['404', '500', 'dev', 'test'];
      return !excludePatterns.some(pattern => page.includes(pattern));
    },
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date()
  }), robotsTxt()],
  vite: {
    // @ts-ignore - tailwindcss is not typed
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      weights: [400, 500, 600, 700, 800, 900],
      cssVariable: "--font-sans",
      subsets: ["latin"],
    }]
  },
  image: {
    service: passthroughImageService(),
  },
});