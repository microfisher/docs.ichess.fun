export const themeData = JSON.parse("{\"docsDir\":\"src\",\"docsBranch\":\"main\",\"repo\":\"kelepool/docs.kelepool.com\",\"logo\":\"/images/logo.png\",\"colorMode\":\"light\",\"colorModeSwitch\":false,\"editLink\":true,\"contributors\":false,\"lastUpdated\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"editLinkText\":\"Edit this page on GitHub\",\"navbar\":[{\"text\":\"Guides\",\"link\":\"/en/guides/\"},{\"text\":\"For Developers\",\"link\":\"/en/developers/\"},{\"text\":\"Website\",\"link\":\"https://www.kelepool.com\"}],\"sidebar\":{\"/en/guides/\":[{\"text\":\"Guides\",\"children\":[\"/en/guides/README.md\"]}],\"/en/developers/\":[{\"text\":\"Ethereum\",\"collapsible\":false,\"children\":[\"/en/developers/ethereum/introductions/README.md\",\"/en/developers/ethereum/contracts/README.md\",\"/en/developers/ethereum/api/README.md\"]},{\"text\":\"Mina\",\"collapsible\":true,\"children\":[\"/en/developers/mina/api/README.md\"]},{\"text\":\"PlatON\",\"collapsible\":true,\"children\":[\"/en/developers/platon/api/README.md\"]}]}},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"语言\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"navbar\":[{\"text\":\"挖矿指南\",\"link\":\"/zh/guides/\"},{\"text\":\"开发者文档\",\"link\":\"/zh/developers/\"},{\"text\":\"官方网站\",\"link\":\"https://www.kelepool.com\"}],\"sidebar\":{\"/zh/guides/\":[{\"text\":\"挖矿指南\",\"children\":[\"/zh/guides/README.md\"]}],\"/zh/developers/\":[{\"text\":\"Ethereum\",\"collapsible\":false,\"children\":[\"/zh/developers/ethereum/introductions/README.md\",\"/zh/developers/ethereum/contracts/README.md\",\"/zh/developers/ethereum/api/README.md\"]},{\"text\":\"Mina\",\"collapsible\":true,\"children\":[\"/zh/developers/mina/api/README.md\"]},{\"text\":\"PlatON\",\"collapsible\":true,\"children\":[\"/zh/developers/platon/api/README.md\"]}]}}},\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
