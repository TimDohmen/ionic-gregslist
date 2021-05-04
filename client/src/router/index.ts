import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { authGuard } from '@bcwdev/auth0provider-client'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab2'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab2'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Cars.vue'),
        // beforeEnter: authGuard
      },
      {
        path: 'tab2',
        component: () => import('@/views/Houses.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Jobs.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/Account.vue'),
        beforeEnter: authGuard
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
