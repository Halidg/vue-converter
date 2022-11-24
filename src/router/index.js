import Vue from 'vue'
import VueRouter from 'vue-router'
import Converter from '../views/Converter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Convertator',
    component: Converter
  },
  {
    path: '/valutes',
    name: 'Valutes',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AllValutes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
