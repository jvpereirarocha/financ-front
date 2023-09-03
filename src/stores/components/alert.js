import { defineStore } from 'pinia'


export const useAlertStore = defineStore({
    id: 'alert',
    state: () => ({
        alert: null
    }),
    actions: {
        success(message) {
            this.alert = {
                type: 'success',
                message
            }
        },
        error(message) {
            this.alert = {
                type: 'error',
                message
            }
        },
        clear() {
            this.alert = null
        }
    }
})