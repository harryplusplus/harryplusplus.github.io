// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://harryplusplus.github.io',
  integrations: [
    starlight({
      title: 'harryplusplus',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        ko: { label: '한국어', lang: 'ko' },
      },
      customCss: ['./src/styles/custom.css', './src/styles/fonts.css'],
      head: [
        {
          tag: 'script',
          content:
            "document.documentElement.dataset.theme='light';localStorage.setItem('starlight-theme','light')",
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: '/fonts/Inter-Variable.woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: '/fonts/Inter-Variable-Italic.woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: '/fonts/JetBrainsMono-Variable.woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: '/fonts/JetBrainsMono-Variable-Italic.woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: '/fonts/D2Coding.woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: '/fonts/D2Coding-Bold.woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
        { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/harryplusplus',
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/harryplusplus',
        },
      ],
      sidebar: [
        { label: 'Career', link: '/', translations: { ko: '경력기술서' } },
        {
          label: 'Portfolio',
          translations: { ko: '포트폴리오' },
          items: [
            { label: 'High-Performance Backend', slug: 'portfolio/concept-a' },
            { label: 'Data Engineering', slug: 'portfolio/concept-b' },
          ],
        },
      ],
    }),
  ],
})
