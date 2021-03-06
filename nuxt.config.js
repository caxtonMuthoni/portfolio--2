import colors from 'vuetify/es5/util/colors'
// import ogImage from '/imgs/home.png';

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s - Caxton G. Muthoni|Software developer ',
    title: 'Caxton G. Muthoni|Software developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: ' I’m an innovative software engineer with 7+ years of experience managing all aspects of the development process for small to medium-sized companies'
      },
      { name: 'google-site-verification', content: 'YSkrq7cuBs2kFj7hPwp897439El7SDuib85NvSYYpwE' }
      // { hid: 'og:image', property: 'og:image', content: this.BASE_URL+ ogImage }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Rubik:wght@500&display=swap'
      }
    ]
  },
  loading: {
    color: 'orange',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-sweetalert2/nuxt',
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      generate: true,
      hostname: 'https://www.cagimoto.ml',
      routes: [
        '/',
        '/about',
        '/portfolio',
        '/services',
        '/contact'
      ]
    }],
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCj2YBPsVY0iQsxc_eKZCFxhdckZEMpg4k',
          authDomain: 'portfolio-3236a.firebaseapp.com',
          databaseURL: 'https://portfolio-3236a.firebaseio.com',
          projectId: 'portfolio-3236a',
          storageBucket: 'portfolio-3236a.appspot.com',
          messagingSenderId: '505597378741',
          appId: '1:505597378741:web:860aa8dcb726d6449abefc',
          measurementId: 'G-FXPMTJTK6T'
        },
        services: {
          auth: true,
          firestore: true, // Just as example. Can be any other service.
          messaging: true
        }
      }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }

  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
