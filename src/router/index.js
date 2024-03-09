import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth'
import calcsRouter from './calcs'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRouter,
    ...calcsRouter
  ]
})

router.beforeEach(async (to, from, next) => {

    const authStore = useAuthStore();
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (authStore.token === null) {
        next({
          name: 'login',
          params: {
            nextUrl: to.fullPath
          }
        })
      } else {
          next();
        }
    } else {
        next();
    }

})

export default router;
