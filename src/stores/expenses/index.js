import { defineStore } from 'pinia'
import { postRequest } from '@/services/api.js'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/components/alert.js'

const API_EXPENSE_URL = `${import.meta.env.VITE_BASE_API_URL}/expenses`


export const useExpenseStore = defineStore('expense', {
    state: () => ({
        expenseData: {},
    }),
    actions: {
        async createNewExpense(data) {
            const userStore = useAuthStore();
            const alertStore = useAlertStore();
            try {
                const response = await postRequest(
                    `${API_EXPENSE_URL}/create`,
                    {...data},
                    { 'Authorization': userStore.token }
                )
                return response;
            } catch (error) {
                alertStore.error(error);
            }
        },
    }
})