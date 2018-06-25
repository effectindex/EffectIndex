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
      login: '/admin/',
      home: '/admin/',
      logout: '/admin/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
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
    users: [
      {
        username: 'josie',
        password: 'simplepass'
      }
    ],
    mongooseUri: 'mongodb://localhost:27017/effectindex'
  }
}
