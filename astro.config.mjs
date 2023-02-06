// https://astro.build/config
import { defineConfig } from "astro/config";

// Framework integrations
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://biem97.github.io",
});
