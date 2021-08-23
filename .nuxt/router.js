import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b9713a0a = () => interopDefault(import('../pages/compare/index.vue' /* webpackChunkName: "pages/compare/index" */))
const _a994bcde = () => interopDefault(import('../pages/detail/index.vue' /* webpackChunkName: "pages/detail/index" */))
const _5263bc34 = () => interopDefault(import('../pages/give-ads/index.vue' /* webpackChunkName: "pages/give-ads/index" */))
const _103192de = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _005189bc = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4f414488 = () => interopDefault(import('../pages/my-profile/index.vue' /* webpackChunkName: "pages/my-profile/index" */))
const _620734c0 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _47297f2a = () => interopDefault(import('../pages/give-ads/categories.vue' /* webpackChunkName: "pages/give-ads/categories" */))
const _2121adde = () => interopDefault(import('../pages/give-ads/forms.vue' /* webpackChunkName: "pages/give-ads/forms" */))
const _76866964 = () => interopDefault(import('../pages/my-profile/change-password.vue' /* webpackChunkName: "pages/my-profile/change-password" */))
const _16ed4894 = () => interopDefault(import('../pages/my-profile/change-profile-image.vue' /* webpackChunkName: "pages/my-profile/change-profile-image" */))
const _52ecfc8d = () => interopDefault(import('../pages/my-profile/favorites.vue' /* webpackChunkName: "pages/my-profile/favorites" */))
const _4e4042c5 = () => interopDefault(import('../pages/my-profile/publish.vue' /* webpackChunkName: "pages/my-profile/publish" */))
const _7d91903b = () => interopDefault(import('../pages/my-profile/purchase.vue' /* webpackChunkName: "pages/my-profile/purchase" */))
const _7a69b7c2 = () => interopDefault(import('../pages/my-profile/sales.vue' /* webpackChunkName: "pages/my-profile/sales" */))
const _9c85c9e8 = () => interopDefault(import('../pages/my-profile/unpublish.vue' /* webpackChunkName: "pages/my-profile/unpublish" */))
const _5b566c78 = () => interopDefault(import('../pages/chat/_chatId.vue' /* webpackChunkName: "pages/chat/_chatId" */))
const _33a48b1c = () => interopDefault(import('../pages/detail/_productid.vue' /* webpackChunkName: "pages/detail/_productid" */))
const _36a9e6a5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d79134ac = () => interopDefault(import('../pages/_location/index.vue' /* webpackChunkName: "pages/_location/index" */))
const _2e137878 = () => interopDefault(import('../pages/_location/_category/index.vue' /* webpackChunkName: "pages/_location/_category/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/compare",
    component: _b9713a0a,
    name: "compare___tr"
  }, {
    path: "/detail",
    component: _a994bcde,
    name: "detail___tr"
  }, {
    path: "/give-ads",
    component: _5263bc34,
    name: "give-ads___tr"
  }, {
    path: "/list",
    component: _103192de,
    name: "list___tr"
  }, {
    path: "/login",
    component: _005189bc,
    name: "login___tr"
  }, {
    path: "/my-profile",
    component: _4f414488,
    name: "my-profile___tr"
  }, {
    path: "/register",
    component: _620734c0,
    name: "register___tr"
  }, {
    path: "/give-ads/categories",
    component: _47297f2a,
    name: "give-ads-categories___tr"
  }, {
    path: "/give-ads/forms",
    component: _2121adde,
    name: "give-ads-forms___tr"
  }, {
    path: "/my-profile/change-password",
    component: _76866964,
    name: "my-profile-change-password___tr"
  }, {
    path: "/my-profile/change-profile-image",
    component: _16ed4894,
    name: "my-profile-change-profile-image___tr"
  }, {
    path: "/my-profile/favorites",
    component: _52ecfc8d,
    name: "my-profile-favorites___tr"
  }, {
    path: "/my-profile/publish",
    component: _4e4042c5,
    name: "my-profile-publish___tr"
  }, {
    path: "/my-profile/purchase",
    component: _7d91903b,
    name: "my-profile-purchase___tr"
  }, {
    path: "/my-profile/sales",
    component: _7a69b7c2,
    name: "my-profile-sales___tr"
  }, {
    path: "/my-profile/unpublish",
    component: _9c85c9e8,
    name: "my-profile-unpublish___tr"
  }, {
    path: "/chat/:chatId?",
    component: _5b566c78,
    name: "chat-chatId___tr"
  }, {
    path: "/detail/:productid",
    component: _33a48b1c,
    name: "detail-productid___tr"
  }, {
    path: "/",
    component: _36a9e6a5,
    name: "index___tr"
  }, {
    path: "/:location",
    component: _d79134ac,
    name: "location___tr"
  }, {
    path: "/:location/:category",
    component: _2e137878,
    name: "location-category___tr"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
