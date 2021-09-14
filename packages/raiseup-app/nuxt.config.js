import path from 'path'
const srcDir = path.resolve(__dirname + '/src')
const rootDir = path.resolve(__dirname)

export default {
  srcDir,
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-env',
      {
        keys: []
      }
    ]
  ],
  dotenv: {
    path: rootDir
  },
  axios: {
    baseURL: 'http://localhost:4009' // Used as fallback if no runtime config is provided
  },

  plugins: [],
  tailwindcss: {
    cssPath: path.join(srcDir, '/assets/css/tailwind.css'),
    configPath: path.join(srcDir, 'tailwind.config.js'),
    exposeConfig: false,
    config: {}
  },
  typescript: {
    ignoreNotFoundWarnings: true
  },
  build: {
    extend(config) {
      const alias = (config.resolve.alias = config.resolve.alias || {})
      alias.Shared = path.join(rootDir, '../raiseup-shared/src')
    }
  }
}
