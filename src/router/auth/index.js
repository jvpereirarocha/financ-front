const authRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/LoginView.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/auth/SignupView.vue')
    }
]

export default authRouter