const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Kele Pool',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#e57147' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * ref：https://v1.vuepress.vuejs.org/config/#theme
   */
  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'rocket-pool/docs.kelepool.net',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    editLinkText: '',
    lastUpdated: false,
    logo: '/images/logo-small.png',
    smoothScroll: true,
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Guides',
        link: '/guides/'
      },
      {
        text: 'For Developers',
        link: '/developers/'
      },
      {
        text: 'Website',
        link: 'https://www.kelepool.net'
      },
      {
        text: 'Discord',
        link: 'https://discord.com/invite/kelepool'
      }
    ],
    sidebar: {
      '/overview/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '',
            'explainer-series',
            'faq',
            'contracts-integrations',
            'glossary',
          ]
        }
      ],
      '/guides/': [
        {
          title: 'Guides',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            '',
            {
              title: 'Staking with Kele Pool',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                'staking/overview',
                'staking/via-rp',
                'staking/via-l1',
                'staking/via-l2'
              ]
            },
            {
              title: 'Running a Kele Pool Node',
              sidebarDepth: 2,
              collapsable: true,
              children: [
                'node/responsibilities',
                'node/platform',
                {
                  title: 'Preparing a Local Node',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'node/local/hardware',
                    'node/local/prepare-pc',
                    'node/local/prepare-mac',
                    'node/local/prepare-pi',
                    'node/ssh'
                  ]
                },
                {
                  title: 'Preparing a Cloud (VPS) Node',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'node/vps/providers',
                    'node/vps/os'
                  ]
                },
                {
                  title: 'Installing Kele Pool',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'node/eth-clients',
                    'node/install-modes',
                    'node/docker',
                    'node/native',
                  ]
                },
                {
                  title: 'Configuring Kele Pool',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'node/config-docker',
                    'node/config-native',
                    'node/advanced-config',
                  ]
                },
                'node/securing-your-node',
                'node/starting-rp',
                'node/recovering-rp',
                'node/cli-intro',
                'node/prepare-node',
                'node/create-validator',
                {
                  title: 'Monitoring and Maintenance',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'node/performance',
                    'node/grafana',
                    'node/updates',
                    'node/backups',
                    'node/geth-pruning',
                    'node/change-clients'
                  ]
                },
                'node/rewards',
                'node/troubleshooting',
                'node/faq'
              ]
            },
            {
              title: 'Testing Kele Pool with the Prater Test Network',
              sidebarDepth: 2,
              collapsable: true,
              children: [
                'testnet/overview',
                'testnet/upgrading',
              ]
            },
            'node/mainnet',
            'node/v1.3-update.md',
            'node/v1.5-update.md',
          ]
        }
      ],
      '/developers/': [
        {
          title: 'For Developers',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            '',
            {
              title: 'Integration Usage and Examples',
              sidebarDepth: 2,
              collapsable: true,
              children: [
                'usage/contracts/contracts',
                'usage/go/go',
                'usage/js/js',
              ]
            },
            {
              title: 'API Reference',
              sidebarDepth: 2,
              collapsable: true,
              children: [
                'api/contracts',
                {
                  title: 'Go Bindings',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'api/go/auction',
                    'api/go/contracts',
                    {
                      title: 'dao',
                      children: [
                        'api/go/dao',
                        'api/go/dao-protocol',
                        'api/go/dao-trustednode',

                      ]
                    },
                    'api/go/deposit',
                    'api/go/minipool',
                    'api/go/network',
                    'api/go/node',
                    'api/go/rewards',
                    'api/go/kelepool',
                    {
                      title: 'settings',
                      sidebarDepth: 2,
                      collapsable: true,
                      children: [
                        'api/go/settings-protocol',
                        'api/go/settings-trustednode',
                      ]
                    },
                    'api/go/storage',
                    'api/go/tokens',
                    'api/go/types',
                    {
                      title: 'utils',
                      children: [
                        'api/go/utils',
                        'api/go/utils-eth',
                        'api/go/utils-strings',
                      ]
                    }
                  ]
                },
                {
                  title: 'JS Reference',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    {
                      title: 'Auction',
                      children: [
                        'api/js/Auction',
                      ]
                    },
                    {
                      title: 'Contracts',
                      children: [
                        'api/js/Contracts',
                      ]
                    },
                    {
                      title: 'DAO',
                      children: [
                        'api/js/DAONodeTrusted',
                        'api/js/DAONodeTrustedActions',
                        'api/js/DAONodeTrustedProposals',
                        'api/js/DAONodeTrustedSettings',
                        'api/js/DAOProposal',
                      ]
                    },
                    {
                      title: 'Deposit',
                      children: [
                        'api/js/Deposit',
                      ]
                    },
                    {
                      title: 'Minipool',
                      children: [
                        'api/js/Minipool',
                        'api/js/MinipoolContract',
                      ]
                    },
                    {
                      title: 'Network',
                      children: [
                        'api/js/Network',
                      ]
                    },
                    {
                      title: 'Node',
                      children: [
                        'api/js/Node',
                      ]
                    },
                    {
                      title: 'Rewards',
                      children: [
                        'api/js/Rewards',
                        'api/js/Pool',
                      ]
                    },
                    {
                      title: 'Settings',
                      children: [
                        'api/js/AuctionSettings',
                        'api/js/DepositSettings',
                        'api/js/MinipoolSettings',
                        'api/js/NetworkSettings',
                        'api/js/NodeSettings',
                      ]
                    },
                    {
                      title: 'Tokens',
                      children: [
                        'api/js/ERC20',
                        'api/js/LegacyRPL',
                        'api/js/RETH',
                        'api/js/RPL',
                      ]
                    },
                    {
                      title: 'Vault',
                      children: [
                        'api/js/Vault',
                      ]
                    },
                    {
                      title: 'Kelepool',
                      children: [
                        'api/js/RocketPool',
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
      ],
    }
  },

  // Import markdown plugins
  markdown: {
    extendMarkdown: md => {
      // Import include plugin, ref: https://www.npmjs.com/package/markdown-it-include
      md.use(require('markdown-it-include'), {
        root: `${__dirname}/../`,
      }),
        md.use(require('markdown-it-html5-embed'), {
          html5embed: {
            useImageSyntax: true,
            useLinkSyntax: false
          }
        })
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    ['vuepress-plugin-zooming', {
      options: {
        bgColor: 'black',
        zIndex: 10000,
      }
    }
    ],
    ['vuepress-plugin-code-copy', {
      color: '#ffbca5',
      staticIcon: true,
      backgroundColor: '#ffbca5'
    }
    ],
    'vuepress-plugin-element-tabs'
  ]
}
