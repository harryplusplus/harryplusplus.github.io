import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Harry++",
  description: "Harry's Homepage",
  lastUpdated: true,
  locales: {
    root: {
      label: "한국어",
      lang: "ko",
    },
    en: {
      label: "English",
      lang: "en",
    },
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "포트폴리오",
        items: [
          {
            text: "TypeScript 백엔드",
            link: "/portfolio/typescript-backend",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/harryplusplus" }],
  },
});
