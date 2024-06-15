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
    }
  },
  {
    path: '/expenses/create',
    name: 'create-expense',
    component: () => import('@/views/calcs/expenses/CreateOrUpdateExpense.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/expenses/update/:id',
    name: 'update-expense',
    component: () => import('@/views/calcs/expenses/CreateOrUpdateExpense.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

export default calcsRouter
