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

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/signup', '/change-password']
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.path;
    return '/login';
  }
})

export default router;
