// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    // @ts-ignore - tailwindcss is not typed
    plugins: [tailwindcss(), visualizer({ emitFile: true, filename: "stats.html" })],
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      weights: [400, 500, 600, 700, 800, 900],
      cssVariable: "--font-sans",
      subsets: ["latin"],
    }]
  }
});