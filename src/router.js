import Vue from 'vue'
import Router from 'vue-router'
import Heroes from './views/Heroes.vue'
import CrearHeroe from './views/CreateHeroe.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Heroes
    },
    {
      path: '/create',
      name: 'create',
      component: CrearHeroe
    },
    {
      path: '/update/:heroe',
      name: 'update',
      component: CrearHeroe
    }
  ]
})
