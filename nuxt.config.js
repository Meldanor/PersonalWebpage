export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kilian Gärtner Portfolio',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Persönliches Portfolio von Kilian Gärtner - Software Engineer in Java und Elixir Fullstack Apps mit 10+ Jahren Berufserfahrung.' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Kilian Gärtner Portfolio' },
      { hid: 'og:description', name: 'og:description', content: 'Persönliches Portfolio von Kilian Gärtner - Software Engineer in Java und Elixir Fullstack Apps mit 10+ Jahren Berufserfahrung.' },
      { hid: 'og:url', name: 'robots', content: 'https://www.kilian-gaertner.dev' },
      { hid: 'og:site_name', name: 'robots', content: 'Kilian Gärtner Portfolio' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
