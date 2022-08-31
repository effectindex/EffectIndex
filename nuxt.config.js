require("dotenv").config();
const pkg = require("./package");
const axios = require('axios');

const env = {
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  PORT: process.env.WEB_PORT || "3000",
  BROWSER_BASE_URL: process.env.BROWSER_BASE_URL || "/",
  JWT_SECRET: process.env.jwtSecret || "eefiejfirjfr",
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/",
  DATABASE_NAME: process.env.DATABASE_NAME || "effectindex",
  HOST: process.env.HOST || "127.0.0.1",
  HOST_NAME: process.env.HOST_NAME || "https://www.effectindex.com",
  NODE_ENV: process.env.NODE_ENV || "development"
};



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
  env,

  publicRuntimeConfig:{
    BASE_URL:env.BASE_URL,

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  router: {
    middleware: ['redirect', 'closeNavOnNav']
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
        },
        token: {
          maxAge: 60 * 60 * 24 * 30
        }
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    },
    scopeKey: "permissions"
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
    { src: "~/plugins/vcode-parse" },
    { src: "~/plugins/vcode" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
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
    baseURL: env.BASE_URL,
    browserBaseURL: env.BROWSER_BASE_URL
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
    jwtSecret: env.JWT_SECRET,
    mongooseUri: env.MONGO_URL+env.DATABASE_NAME,
    port: env.PORT,
    host: env.HOST
  },

  sitemap: {
    hostname: env.HOST_NAME,
    exclude: [
      '/admin/**'
    ],
    routes: async function() {
      try {
        const results = await Promise.all([
          axios.get(`${env.BASE_URL}/api/effects`),
          axios.get(`${env.BASE_URL}/api/articles`),
          axios.get(`${env.BASE_URL}/api/blog`),
          axios.get(`${env.BASE_URL}/api/reports`),
        ]);

        const [{ effects }, { articles }, { posts }, { reports }] = results.map(result => result.data);

        const routes = [
          ...effects.map(effect => `/effects/${effect.url}`),
          ...reports.map(report => `/reports/${report.slug}`),
          ...posts.map(post => `/blog/${post.slug}`),
          ...articles.map(article => `/articles/${article.slug}`)
        ];

        return routes;
      } catch (error) {
        console.log(`Could not generate sitemap. `, error);
        return [];
      }
    }
  }
};
