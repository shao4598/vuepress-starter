import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: '组件',
      collapsible: true,
      children: [
        '/guide/components/button.md',
        '/guide/components/color-picker.md',
        '/guide/components/collapse.md',
        '/guide/components/empty.md',
        '/guide/components/list.md',
        '/guide/components/popover.md',
        '/guide/components/tabs.md',
        '/guide/components/tooltip.md',
        '/guide/components/cascader.md',
        '/guide/components/radio.md',
        '/guide/components/checkbox.md',
        '/guide/components/switch.md',
        '/guide/components/textarea.md',
        '/guide/components/date-picker.md',
        '/guide/components/input.md',
        '/guide/components/input-number.md',
        '/guide/components/upload.md',
        '/guide/components/form.md',
        '/guide/components/modal.md',
        '/guide/components/drawer.md',
        '/guide/components/message.md',
        '/guide/components/spin.md',
        '/guide/components/skeleton.md',
        '/guide/components/dropdown.md',
        '/guide/components/table.md',
        '/guide/components/tree.md',
        '/guide/components/transfer.md',
      ],
    },
    {
      text: '交互',
      collapsible: true,
      children: [
        '/guide/behavior/layout.md',
        '/guide/behavior/search.md',
        '/guide/behavior/sensitive.md',
        '/guide/behavior/i18n.md',
      ],
    },
  ],
}
