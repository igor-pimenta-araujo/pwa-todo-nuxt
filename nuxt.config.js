export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Todo List',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  database: {
    emulatorPort: 9000,
    emulatorHost: 'localhost',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAi3h9PlBuDp2-6u0fItmNdU-dW907Us2g",
          authDomain: "todo-10069.firebaseapp.com",
          projectId: "todo-10069",
          storageBucket: "todo-10069.appspot.com",
          messagingSenderId: "897309634850",
          appId: "1:897309634850:web:a213cca2087a71ef5a757b",
          measurementId: "G-N7DR0V38EM"
        },
        services: {
          database: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  pwa: {
    manifest: {
      name: 'todolist',
      short_name: 'todolist',
      lang: 'en'
    },
    meta: {
      name: 'todolist',
      author: 'Igor'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
