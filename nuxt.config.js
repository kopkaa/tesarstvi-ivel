export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'spa',

  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tesařství Ivel',
    htmlAttrs: {
      lang: 'cs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tesařství Ivel. Tesařské práce všeho druhu. Rekonstrukce střech, podlah, dřevěnic, srubů, pokrývačské práce.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'content="tesařství, ivel, střechy, stavby, pokrývačství, krovy, dřevo, ploty, altány, pergoly, dřevo, dřevostavby, podlahy, střechy, valašsko"' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/scroll.js'],
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/sitemap'
  ],

  purgeCSS: {
    mode: 'postcss', // or 'webpack'
    enabled: true,
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css', '.scss'],
    whitelist: ['whitelisted-class'],
    whitelistPatterns: [/^whitelist-pattern/]
  },

  sitemap: {
    hostname: 'https://tesarstvi-ivel.cz'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: true,
    extractCSS: false,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
