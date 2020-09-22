import { createRouter, createWebHistory } from 'vue-router'
import RouteView from '../layout/RouteView.vue'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: RouteView,
    redirect: '/login',
    children: [{ path: 'login', name: 'login', component: () => import('../views/auth/login/index.vue') }]
  },
  {
    path: '/',
    name: 'index',
    component: RouteView,
    redirect: '/chat',
    children: [
      { path: 'message', name: 'message', component: () => import('../views/message/index.vue') },
      { path: 'chat', name: 'chat', component: () => import('../views/chat/index.vue') },
      { path: 'account', name: 'account', component: () => import('../views/account/index.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
