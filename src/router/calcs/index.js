const calcsRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/calcs/HomeView.vue')
    },
    {
        path: '/transactions',
        name: 'listOfTransactions',
        component: () => import('@/views/calc/ListTransactionsView.vue')
    }
]

export default calcsRouter