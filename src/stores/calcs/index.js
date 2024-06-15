import { defineStore } from 'pinia'
import { postRequest, getRequest } from '@/services/api.js'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/components/alert.js'

const API_BALANCE_URL = `${import.meta.env.VITE_BASE_API_URL}/balances`

export const useBalanceStore = defineStore('balance', {
  state: () => ({
    monthData: {},
    yearData: {}
  }),
  actions: {
    async getMonthData() {
      const userStore = useAuthStore()
      const alertStore = useAlertStore()
      try {
        const response = await getRequest(`${API_BALANCE_URL}/get_monthly_balance/`, {
          Authorization: userStore.token
        })
        return response
      } catch (error) {
        alertStore.error(error)
      }
    },
    async getYearData() {
      const userStore = useAuthStore()
      const alertStore = useAlertStore()
      try {
        const response = await getRequest(`${API_BALANCE_URL}/get_yearly_balance/`, {
          Authorization: userStore.token
        })
        return response
      } catch (error) {
        alertStore.error(error)
      }
    },
    async getLastTransactions(numberOfTransactions = null) {
      let url = `${API_BALANCE_URL}/get_last_transactions`
      if (numberOfTransactions !== null) {
        url = `${url}?numberOfTransactions=${numberOfTransactions}`
      }
      const userStore = useAuthStore()
      const alertStore = useAlertStore()
      try {
        const response = await getRequest(url, { Authorization: userStore.token })
        return response
      } catch (error) {
        alertStore.error(error)
      }
    }
  }
})
