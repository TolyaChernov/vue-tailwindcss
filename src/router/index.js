import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },

    {
      path: '/day-1',
      name: 'day-1',
      component: () => import('../pages/Day-1.vue')
    },
    {
      path: '/day-2',
      name: 'day-2',
      component: () => import('../pages/Day-2.vue')
    },
    {
      path: '/day-3',
      name: 'day-3',
      component: () => import('../pages/Day-3.vue')
    },
    {
      path: '/day-4',
      name: 'day-4',
      component: () => import('../pages/Day-4.vue')
    },
    {
      path: '/day-5',
      name: 'day-5',
      component: () => import('../pages/Day-5.vue')
    },
    {
      path: '/day-6',
      name: 'day-6',
      component: () => import('../pages/Day-6.vue')
    },
    {
      path: '/day-7',
      name: 'day-7',
      component: () => import('../pages/Day-7.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    }
  ]
})

export default router
