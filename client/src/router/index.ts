import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { authGuard } from '@bcwdev/auth0provider-client'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/cars'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: 'cars',
        component: () => import('@/views/Cars.vue'),
        // beforeEnter: authGuard
      },
      {
        path: 'homes',
        component: () => import('@/views/Houses.vue')
      },
      {
        path: 'jobs',
        component: () => import('@/views/Jobs.vue')
      },

      {
        path: "car/:id",
        name: "CarDetails",
        component: () => import('@/views/Car.vue'),
      },
      {
        path: 'account',
        name: "Account",
        component: () => import('@/views/Account.vue'),
        beforeEnter: authGuard,

      },
    ]
  },
  // {
  //   path: '/account',
  //   name: "Account",
  //   component: () => import('@/views/Account.vue'),
  //   beforeEnter: authGuard
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
