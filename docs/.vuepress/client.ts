import { defineClientConfig } from '@vuepress/client'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon/index';
import '@arco-design/web-vue/dist/arco.css';
import { setupDarkMode } from './setup'
import { onMounted } from 'vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ArcoVue)
    app.use(ArcoVueIcon)
  },
  setup() {
    onMounted(setupDarkMode)
  },
  rootComponents: [],
})
