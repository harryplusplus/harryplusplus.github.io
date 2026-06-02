// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://harryplusplus.github.io',
  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Noto Sans KR',
      cssVariable: '--font-body',
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin', 'korean'],
    },
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
})
