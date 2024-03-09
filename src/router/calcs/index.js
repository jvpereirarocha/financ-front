const calcsRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/calcs/home/HomeView.vue')
    },
    {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/calcs/transactions/ListTransactionsView.vue'),
        children: [
            {
                path: 'save-expense',
                name: 'save-expense',
                component: () => import('@/views/calcs/transactions/ExpenseSaveView.vue')
            }
        ]
    },
    {
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/calcs/ReportsView.vue')
    },
]

export default calcsRouter