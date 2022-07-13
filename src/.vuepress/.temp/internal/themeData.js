export const themeData = JSON.parse("{\"docsDir\":\"src\",\"docsBranch\":\"main\",\"repo\":\"kelepooloffice/docs.kelepool.com\",\"editLink\":true,\"contributors\":false,\"lastUpdated\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"editLinkText\":\"Edit this page on GitHub\",\"navbar\":[{\"text\":\"Guides\",\"link\":\"/guides/\"},{\"text\":\"For Developers\",\"link\":\"/developers/\"},{\"text\":\"Website\",\"link\":\"https://www.kelepool.com\"}],\"sidebar\":{\"/guides/\":[{\"text\":\"Guide\",\"children\":[{\"text\":\"github\",\"link\":\"https://github.com\",\"children\":[]}]}],\"/developers/\":[{\"text\":\"Developers\",\"children\":[{\"text\":\"github\",\"link\":\"https://github.com\",\"children\":[]}]}]}},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"语言\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/zh/guides/\"},{\"text\":\"开发者文档\",\"link\":\"/zh/developers/\"},{\"text\":\"官方网站\",\"link\":\"https://www.kelepool.com\"}],\"sidebar\":{\"/guides/\":[],\"/developers/\":[]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
