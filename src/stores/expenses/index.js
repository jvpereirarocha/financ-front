import { defineStore } from 'pinia'
import { getRequest } from '@/services/api.js'
import { postRequest } from '@/services/api.js'
import { putRequest } from '@/services/api.js'
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
        async updateExpense(id, data) {
            const userStore = useAuthStore();
            const alertStore = useAlertStore();
            try {
                const response = await putRequest(
                    `${API_EXPENSE_URL}/update/${id}`,
                    { ...data },
                    { 'Authorization': userStore.token }
                )
                return response;
            } catch (error) {
                alertStore.error(error);
            }
        },
        async getExpenseById(id) {
            const userStore = useAuthStore();
            const alertStore = useAlertStore();
            try {
                const response = await getRequest(
                    `${API_EXPENSE_URL}/get_expense/${id}`,
                    { 'Authorization': userStore.token }
                )
                return response;
            } catch (error) {
                alertStore.error(error);
            }
        }
    }
})