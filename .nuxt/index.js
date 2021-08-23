import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_59be3cc3 from 'nuxt_plugin_plugin_59be3cc3' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_srcplugin6b4be451_d044f4ce from 'nuxt_plugin_srcplugin6b4be451_d044f4ce' // Source: ./src.plugin.6b4be451.js (mode: 'client')
import nuxt_plugin_pluginrouting_7df82bcd from 'nuxt_plugin_pluginrouting_7df82bcd' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_3897ca7c from 'nuxt_plugin_pluginmain_3897ca7c' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_axios_c249974e from 'nuxt_plugin_axios_c249974e' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_globalcomponents_21f90eee from 'nuxt_plugin_globalcomponents_21f90eee' // Source: ../plugins/global-components (mode: 'all')
import nuxt_plugin_console_174a0da0 from 'nuxt_plugin_console_174a0da0' // Source: ../plugins/console (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"structure","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preload","as":"image","href":"\u002Fassets\u002Fimg\u002F2.jpg"},{"type":"text\u002Fcss","rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Lato:100,300,400,700,900|Montserrat:400,500,600,700"}],"script":Array.prototype.slice.call({"0":{"src":"\u002Fassets\u002Flibs\u002Fjquery-3.3.1.min.js"},"1":{"src":"\u002Fassets\u002Flibs\u002Fjquery-migrate-1.4.1.min.js","defer":true,"async":true},"2":{"src":"\u002Fassets\u002Fplugins\u002Fpopever\u002Fpopper.min.js","defer":true,"async":true},"3":{"src":"\u002Fassets\u002Flibs\u002Fbootstrap-4.1.3\u002Fjs\u002Fbootstrap.min.js","defer":true,"async":true},"4":{"src":"\u002Fassets\u002Fplugins\u002Fswitcher\u002Fjs\u002Fdmss.js","defer":true,"async":true},"5":{"src":"\u002Fassets\u002Flibs\u002Fbootstrap-select.min.js","defer":true,"async":true},"6":{"src":"\u002Fassets\u002Fplugins\u002Fmagnific-popup\u002Fjquery.magnific-popup.min.js","defer":true,"async":true},"7":{"src":"\u002Fassets\u002Fplugins\u002Fheaders\u002Fslidebar.js","defer":true,"async":true},"8":{"src":"\u002Fassets\u002Fplugins\u002Fheaders\u002Fheader.js","defer":true,"async":true},"9":{"src":"\u002Fassets\u002Fplugins\u002FjqBootstrapValidation.js","defer":true,"async":true},"10":{"src":"\u002Fassets\u002Fplugins\u002Fcontact_me.js","defer":true,"async":true},"11":{"src":"\u002Fassets\u002Fplugins\u002Frendro-easy-pie-chart\u002Fjquery.easypiechart.min.js","defer":true,"async":true},"12":{"src":"\u002Fassets\u002Fplugins\u002Frendro-easy-pie-chart\u002Fjquery.waypoints.min.js","defer":true,"async":true},"14":{"src":"\u002Fassets\u002Fplugins\u002Fscrollreveal\u002Fscrollreveal.min.js","defer":true,"async":true},"15":{"src":"\u002Fassets\u002Fplugins\u002Fofi.min.js","defer":true,"async":true},"16":{"src":"\u002Fassets\u002Fplugins\u002Fslider-pro\u002Fjquery.sliderPro.min.js","defer":true,"async":true},"17":{"src":"\u002Fassets\u002Fplugins\u002Fslick\u002Fslick.js","defer":true,"async":true},"18":{"src":"\u002Fassets\u002Fplugins\u002FnoUiSlider\u002FwNumb.js","defer":true,"async":true},"19":{"src":"\u002Fassets\u002Fplugins\u002FnoUiSlider\u002Fnouislider.min.js","defer":true,"async":true},"20":{"src":"\u002Fassets\u002Fjs\u002Fcustom.js","defer":true,"async":true},"length":21}),"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_59be3cc3 === 'function') {
    await nuxt_plugin_plugin_59be3cc3(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_srcplugin6b4be451_d044f4ce === 'function') {
    await nuxt_plugin_srcplugin6b4be451_d044f4ce(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7df82bcd === 'function') {
    await nuxt_plugin_pluginrouting_7df82bcd(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_3897ca7c === 'function') {
    await nuxt_plugin_pluginmain_3897ca7c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_c249974e === 'function') {
    await nuxt_plugin_axios_c249974e(app.context, inject)
  }

  if (typeof nuxt_plugin_globalcomponents_21f90eee === 'function') {
    await nuxt_plugin_globalcomponents_21f90eee(app.context, inject)
  }

  if (typeof nuxt_plugin_console_174a0da0 === 'function') {
    await nuxt_plugin_console_174a0da0(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
