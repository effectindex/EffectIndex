const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 'type': 'text/css', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:400i,700,700i,400' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  auth: {
    redirect: {
      login: '/user/login',
      home: '/',
      logout: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/users/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/users/logout', method: 'post' },
          user: { url: '/api/users/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    },
    scopeKey: 'scope'
  },

  workbox: {
    runtimeCaching: [
        {
            urlPattern: 'https://fonts.googleapis.com/.*',
            handler: 'cacheFirst',
            method: 'GET',
            strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        },
        {
            urlPattern: 'https://fonts.gstatic.com/.*',
            handler: 'cacheFirst',
            method: 'GET',
            strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        },
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/font-awesome',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    typographer: true,
    quotes: '“”‘’'
  },

  /*
  ** Axios module configuration
  */
  axios: {
	baseURL: 'https://beta.effectindex.com'
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  
  server: {
    jwtSecret: 'a00znn302mMM#sn33az',
    salt: 'z99zm2m0a0h3b8gf8llx$kd9',
    users: [
      {
        username: 'josie',
        password: 'simplepass'
      }
    ],
    mongooseUri: 'mongodb://localhost:27017/effectindex'
  }
}
