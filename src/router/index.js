import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth'
import calcsRouter from './calcs'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRouter,
    ...calcsRouter
  ]
})

export default router
