//import core
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import pages
import Home from './components/Home'
import How from './components/How'
import Try from './components/Try'
import Contact from './components/Contact'

//setup global app routes
const routes = [
  { path: '/', component: Home },
  { path: '/how', component: How },
  { path: '/try', component: Try },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active'
})

//instantiate Vue
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})