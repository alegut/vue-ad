import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import AuthGuard from './auth-guard'

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
    // beforeEnter: AuthGuard,
    component: () => import('@/components/Ads/Ad.vue')
  },
  {
    path: '/list',
    name: 'list',
    beforeEnter: AuthGuard,
    component: () => import('@/components/Ads/AdList.vue')
  },
  {
    path: '/new',
    name: 'new',
    beforeEnter: AuthGuard,
    component: () => import('@/components/Ads/NewAd.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    beforeEnter: AuthGuard,
    component: () => import('@/components/User/Orders.vue')
  },
  {
    path: '**',
    redirect: { name: 'home' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
