import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/wesley/Documents/GitHub/docs.ichess.fun/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/wesley/Documents/GitHub/docs.ichess.fun/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
