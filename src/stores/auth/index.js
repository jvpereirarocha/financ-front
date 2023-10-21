import { defineStore } from 'pinia'
import { postRequest } from '@/services/api.js'
import router from '@/router/index.js'
import { useAlertStore } from '@/stores/components/alert.js'

const API_AUTH_URL = `${import.meta.env.VITE_BASE_API_URL}/profile`


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        returnUrl: {},
    }),
    actions: {
        async loginUser(email, password) {
            const alertStore = useAlertStore();
            try {
                const request = await postRequest(`${API_AUTH_URL}/login`, { email, password });
                if (!request.ok) {
                    alertStore.error('Invalid credentials');
                    return;
                }
                const data = await request.json();
                this.user = data.success;
                localStorage.setItem('user', JSON.stringify(this.user));
                return this.user;
            } catch(error) {
                alertStore.error(error);
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push({ name: 'login' });
        },
        async registerNewUser(data) {
            const alertStore = useAlertStore();
            try {
                const request = await postRequest(
                    `${API_AUTH_URL}/register`, {...data}
                )
                if (!request.ok) {
                    alertStore.error('Couldnt possible to register the user');
                    return;
                }
                const response = await request.json();
                return response.success;
            } catch(error) {
                alertStore.error(error);
            }
        },
        async getUserName() {
            const alertStore = useAlertStore();
            try {
                const userEmail = this.user.email;
                const request = await postRequest(
                    `${API_AUTH_URL}/get_profile_name/${userEmail}`
                )
                if (!request.ok) {
                    alertStore.error('Couldnt possible to get the user name');
                    return;
                }
                const response = await request.json();
                return response.success;
            } catch(error) {
                alertStore.error(error);
            }
        }
    }
})