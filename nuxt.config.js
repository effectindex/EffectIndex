const pkg = require("./package");
// import {default as MinifyPlugin} from "babel-minify-webpack-plugin";
require("dotenv").config();
const axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Titillium+Web:400i,700,700i,400"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  router: {
    middleware: 'redirect'
  },

  serverMiddleware: [{
    path: '/api',
    handler: '~/server/index.js'
  }],

  /*
  ** Global CSS
  */
  css: [],
  telemetry: false,
  auth: {
    redirect: {
      login: "/user/login",
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/users/login",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/api/users/logout", method: "post" },
          user: { url: "/api/users/user", method: "get", propertyName: "user" }
        }
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    },
    scopeKey: "scope"
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-toasted", mode: 'client' },
    { src: "~/plugins/vue2-touch-events", mode: 'client' },
    { src: "~/plugins/vcode2-parse" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    ["vue-scrollto/nuxt", { force: true, duration: 500 }],
    "@nuxtjs/dotenv",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-123348003-1"
      }
    ]
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    typographer: true,
    html: true,
    quotes: "“”‘’"
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    browserBaseURL: process.env.BROWSER_BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Build configuration
  */
  build: {
    analyse: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin');
      // if (!ctx.isDev) config.plugins.push(new MinifyPlugin());
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  server: {
    jwtSecret: process.env.jwtSecret,
    mongooseUri: `mongodb://localhost:27017/${process.env.DATABASE_NAME ? process.env.DATABASE_NAME : 'effectindex'}`
  },

  sitemap: {
    hostname: "https://www.effectindex.com",
    exclude: [
      '/admin/**'
    ],
    routes: async function() {
      let results = await axios.get('http://localhost:3000/api/effects');
      const { effects } = results.data;

      results = await axios.get('http://localhost:3000/api/reports');
      const { reports } = results.data;

      results = await axios.get('http://localhost:3000/api/blog');
      const { posts } = results.data;

      const routes = [
        ...effects.map(effect => `/effects/${effect.url}`),
        ...reports.map(report => `/reports/${report.slug}`),
        ...posts.map(post => `/blog/${post.slug}`)
      ];

      return routes;
    }
  }
};
