import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/components/Auth/Registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Auth/Login.vue')
  },
  {
    path: '/ad/:id',
    name: 'ad',
    props: true,
    component: () => import('@/components/Ads/Ad.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/components/Ads/AdList.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/components/Ads/NewAd.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/components/User/Orders.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
