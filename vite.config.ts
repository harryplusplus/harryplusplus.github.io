import { defineConfig } from 'vite-plus'
import oxfmtConfig from './oxfmt.config.js'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: oxfmtConfig,
  lint: {
    options: {
      typeAware: true,
    },
  },
})
