import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import putInStorehouse from './components/putInStorehouse.vue'
import orderPickup from './components/orderPickup.vue'
import list from './components/list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/putInStorehouse',
      name: 'putInStorehouse',
      component: putInStorehouse
    },
    {
      path: '/orderPickup',
      name: 'orderPickup',
      component: orderPickup
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
