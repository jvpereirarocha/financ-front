import { defineStore } from 'pinia'
import { postRequest } from '@/services/api.js'
import { useAlertStore } from '@/stores/components/alert.js'

const API_EXPENSES_URL = `${import.meta.env.VITE_BASE_API_URL}/expenses`

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    token: JSON.parse(localStorage.getItem('token')) || null
  }),
  actions: {
    async registerNewExpense(data) {
      const alertStore = useAlertStore()
      try {
        const expense = await postRequest(
          `${API_EXPENSES_URL}/create`,
          { ...data },
          { Authorization: this.token }
        )
        return expense
      } catch (error) {
        alertStore.error(error)
      }
    }
  }
})
