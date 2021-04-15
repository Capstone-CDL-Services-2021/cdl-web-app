/**
 * import the dependencies
 */
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ImagePlugin } from 'bootstrap-vue'
import router from './router'
import './axios'
import store from './vuex'

/**
 * Vue using Vue-Bootstrap plugins
 */
Vue.use(ImagePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/**
 * Set tip information to false
 * Console log with tips won't print
 *
 * @type {boolean}
 */
Vue.config.productionTip = false

/**
 * Create a Vue instance with dependencies (Vue-Router and Store)
 * Renders the Virtual DOM with App.vue and mounts to the index.html
 * where <div id="app">.
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
