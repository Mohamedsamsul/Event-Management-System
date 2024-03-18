import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _87bcf0aa = () => interopDefault(import('..\\pages\\eventcreate.vue' /* webpackChunkName: "pages/eventcreate" */))
const _ef14dfe6 = () => interopDefault(import('..\\pages\\eventlist.vue' /* webpackChunkName: "pages/eventlist" */))
const _68745f3e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6da594b4 = () => interopDefault(import('..\\pages\\notification.vue' /* webpackChunkName: "pages/notification" */))
const _84ce06bc = () => interopDefault(import('..\\pages\\userprofilepage.vue' /* webpackChunkName: "pages/userprofilepage" */))
const _affe93c4 = () => interopDefault(import('..\\pages\\usersignup.vue' /* webpackChunkName: "pages/usersignup" */))
const _c26687b2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/eventcreate",
    component: _87bcf0aa,
    name: "eventcreate"
  }, {
    path: "/eventlist",
    component: _ef14dfe6,
    name: "eventlist"
  }, {
    path: "/login",
    component: _68745f3e,
    name: "login"
  }, {
    path: "/notification",
    component: _6da594b4,
    name: "notification"
  }, {
    path: "/userprofilepage",
    component: _84ce06bc,
    name: "userprofilepage"
  }, {
    path: "/usersignup",
    component: _affe93c4,
    name: "usersignup"
  }, {
    path: "/",
    component: _c26687b2,
    name: "index"
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
