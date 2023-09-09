const calcsRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/calcs/home/HomeView.vue')
    },
]

export default calcsRouter