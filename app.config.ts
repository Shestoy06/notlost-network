import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["@telegram-apps/telegram-ui"],
    },
  },
})