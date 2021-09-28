import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ['packages/*/src/**/*.{html,jsx,tsx}'],
    exclude: ['node_modules', '.git', 'dist']
  },
  darkMode: false,
  theme: {
    extend: {},
  },
});
