import { defineStore } from 'pinia'


export const useAlertStore = defineStore({
    id: 'alert',
    state: () => ({
        alert: null
    }),
    actions: {
        clearAlertAfterInterval(duration) {
            setTimeout(() => {
                this.clear()
            }, duration)
        },
        success(message) {
            this.alert = {
                type: 'success',
                message
            }
            this.clearAlertAfterInterval(3000)
        },
        error(message) {
            this.alert = {
                type: 'danger',
                message
            }
            this.clearAlertAfterInterval(3000)
        },
        warning(message) {
            this.alert = {
                type: 'warning',
                message
            }
            this.clearAlertAfterInterval(3000)
        },
        info(message) {
            this.alert = {
                type: 'info',
                message
            }
            this.clearAlertAfterInterval(3000)
        },
        clear() {
            this.alert = null
        }
    }
})