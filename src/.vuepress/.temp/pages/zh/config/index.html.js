export const data = JSON.parse("{\"key\":\"v-7c2919f6\",\"path\":\"/zh/config/\",\"title\":\"Config\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebar\":\"auto\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"foo\",\"slug\":\"foo\",\"children\":[]},{\"level\":2,\"title\":\"bar\",\"slug\":\"bar\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zh/config/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
