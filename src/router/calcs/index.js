const calcsRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/calcs/HomeView.vue')
    },
]

export default calcsRouter