import { defineClientConfig } from '@vuepress/client'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon/index';
import { createI18n } from 'vue-i18n'
import '@arco-design/web-vue/dist/arco.css';
import { setupDarkMode } from './setup'
import { onMounted } from 'vue';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      has_select_units: 'None agent has been select | {0} agent has been select | {0} agents has been select',
    }
  }
})

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ArcoVue)
    app.use(ArcoVueIcon)
    app.use(i18n)
  },
  setup() {
    onMounted(setupDarkMode)
  },
  rootComponents: [],
})
