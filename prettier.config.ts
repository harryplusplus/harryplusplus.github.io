import { type Config } from 'prettier'

const config: Config = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
}

export default config
