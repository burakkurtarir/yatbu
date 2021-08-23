
import {I18N} from './locales/index'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    // port: 3000,
    // host: "localhost"

    port: 3001, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  head: {
    title: 'structure',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"preload", as:"image", href:"/assets/img/2.jpg"},
      //{ type: 'text/css', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' },
      { type: 'text/css', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900|Montserrat:400,500,600,700' },
    ],
    script:[
      {src:"/assets/libs/jquery-3.3.1.min.js"},
      {src:"/assets/libs/jquery-migrate-1.4.1.min.js", defer:true, async:true},
      {src:"/assets/plugins/popever/popper.min.js", defer:true, async:true},
      {src:"/assets/libs/bootstrap-4.1.3/js/bootstrap.min.js", defer:true, async:true},
      {src:"/assets/plugins/switcher/js/dmss.js", defer:true, async:true},
      {src:"/assets/libs/bootstrap-select.min.js", defer:true, async:true},
      {src:"/assets/plugins/magnific-popup/jquery.magnific-popup.min.js", defer:true, async:true},
      {src:"/assets/plugins/headers/slidebar.js", defer:true, async:true},
      {src:"/assets/plugins/headers/header.js", defer:true, async:true},
      {src:"/assets/plugins/jqBootstrapValidation.js", defer:true, async:true},
      {src:"/assets/plugins/contact_me.js", defer:true, async:true},
      {src:"/assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js", defer:true, async:true},
      {src:"/assets/plugins/rendro-easy-pie-chart/jquery.waypoints.min.js", defer:true, async:true},,
      {src:"/assets/plugins/scrollreveal/scrollreveal.min.js", defer:true, async:true},
      {src:"/assets/plugins/ofi.min.js", defer:true, async:true},
      {src:"/assets/plugins/slider-pro/jquery.sliderPro.min.js", defer:true, async:true},
      {src:"/assets/plugins/slick/slick.js", defer:true, async:true},
      {src:"/assets/plugins/noUiSlider/wNumb.js", defer:true, async:true},
      {src:"/assets/plugins/noUiSlider/nouislider.min.js", defer:true, async:true},
      {src:"/assets/js/custom.js", defer:true, async:true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.scss',
    '~/static/assets/css/monserat.css',
    '~/static/assets/css/master.scss'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    '~plugins/global-components', // global componentler tanımlanır.
    '~plugins/console', //console.log tanımlanır.
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  loading: "~/components/global/loading/server-loading.vue",

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    ['nuxt-i18n', I18N],
    'nuxt-sweetalert2'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
