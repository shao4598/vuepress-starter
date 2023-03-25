import { defaultTheme } from 'vuepress'
import { sidebar } from './sidebar'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  base: '/ue/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'UE标准化',
      description: '指挥中心产品UE交互标准',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        logo: '/images/hero.png',
        sidebar,
      }
    }
  }),
  plugins: [
    shikiPlugin({
      theme: 'one-dark-pro',
    })
  ],
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['@arco-design/web-vue']
      }
    }
  })
})
