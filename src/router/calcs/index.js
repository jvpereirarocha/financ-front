const calcsRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/calcs/home/HomeView.vue')
    },
    {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/calcs/ListTransactionsView.vue')
    },
    {
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/calcs/ReportsView.vue')
    },
]

export default calcsRouter