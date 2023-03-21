import { defaultTheme } from 'vuepress'
import { sidebar } from './sidebar'

export default {
  base: '/ue',
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
}
