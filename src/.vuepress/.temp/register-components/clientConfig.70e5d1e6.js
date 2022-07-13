import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("home", defineAsyncComponent(() => import("/Users/wesley/Documents/GitHub/docs.ichess.fun/src/.vuepress/components/home.vue")))
  },
}
