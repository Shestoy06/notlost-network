import { defineConfig } from '@tanstack/start/config'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["@telegram-apps/telegram-ui"],
    },
    plugins: [tsconfigPaths()],
  },
  server: {
    preset: 'vercel',
  },
})