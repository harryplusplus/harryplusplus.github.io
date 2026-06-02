// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://harryplusplus.github.io',
  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Sans',
      cssVariable: '--font-noto-sans',
      weights: [400, 700],
      subsets: ['latin', 'latin-ext'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Sans KR',
      cssVariable: '--font-noto-sans-kr',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['korean'],
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
