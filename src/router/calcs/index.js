const calcsRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/calcs/home/HomeView.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/calcs/transactions/ListTransactionsView.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'save-expense/:id',
                name: 'save-expense',
                component: () => import('@/views/calcs/transactions/ExpenseSaveView.vue'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/calcs/ReportsView.vue'),
        meta: {
            requiresAuth: true
        },
    },
]

export default calcsRouter