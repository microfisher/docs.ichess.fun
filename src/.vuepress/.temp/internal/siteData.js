export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Kele Pool\",\"description\":\"Kele Pool Documentation - Decentralised Proof of Stake Protocol\",\"head\":[[\"meta\",{\"name\":\"\",\"content\":\"\"}],[\"link\",{\"rel\":\"\",\"href\":\"\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Kele Pool\",\"description\":\"Kele Pool Documentation - Decentralised Proof of Stake Protocol\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"可乐矿池\",\"description\":\"可乐矿池文档 - Pow & Pos 一站式质押管理平台\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
