import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/CardsPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/card-components/ErrorComponent.vue')
    },
    {
      path: '/change',
      name: 'change',
      component: () => import('../components/card-components/ChangeUserInfo.vue')
    }
  ]
})

export default router
