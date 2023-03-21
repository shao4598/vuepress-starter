import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import type { ThemeData } from '@vuepress/plugin-theme-data/client'
import { computed, watch } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

type MyThemeData = ThemeData<{
  foo: string
}>

export function setupDarkMode(): void {
  const themeLocale = useThemeLocaleData<MyThemeData>()
  const isDarkPreferred = usePreferredDark()
  const darkStorage = useStorage(
    'vuepress-color-scheme',
    themeLocale.value.colorMode
  )

  const isDarkMode = computed<boolean>(() => {
    // disable color mode switching
    if (!themeLocale.value.colorModeSwitch) {
      return themeLocale.value.colorMode === 'dark'
    }
    // auto detected from prefers-color-scheme
    if (darkStorage.value === 'auto') {
      return isDarkPreferred.value
    }
    // storage value
    return darkStorage.value === 'dark'
  })

  watch(isDarkMode, (val) => {
    if (val) {
      // 设置为暗黑主题
      document.body.setAttribute('arco-theme', 'dark')
      return
    }
    // 恢复亮色主题
    document.body.removeAttribute('arco-theme');
  }, { immediate: true })
}
