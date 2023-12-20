import { defineStore } from 'pinia'
import { postRequest, getRequest } from '@/services/api.js'
import router from '@/router/index.js'
import { useAlertStore } from '@/stores/components/alert.js'

const API_AUTH_URL = `${import.meta.env.VITE_BASE_API_URL}/profile`


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: JSON.parse(localStorage.getItem('token')) || null,
        returnUrl: {},
    }),
    actions: {
        async loginUser(email, password) {
            try {
                const userLogin = await postRequest(`${API_AUTH_URL}/login`, { email, password });
                let token = null;
                if (userLogin.error) {
                    return userLogin;
                }
                this.user = userLogin.success;
                token = 'Bearer ' + this.user.token;
                this.token = token;
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', JSON.stringify(this.token));
                return userLogin;
            } catch(error) {
                console.log(error);
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            router.push({ name: 'login' });
        },
        async registerNewUser(data) {
            const alertStore = useAlertStore();
            try {
                const user = await postRequest(`${API_AUTH_URL}/register`, { ...data }, {'Authorization': this.token});
                return user;
            } catch(error) {
                alertStore.error(error);
            }
        },
        async getUserName() {
            const alertStore = useAlertStore();
            try {
                const userEmail = this.user.email;
                const response = await getRequest(
                    `${API_AUTH_URL}/get_profile_name?email=${userEmail}`,
                    { 'Authorization': this.token }
                )
                return response;
            } catch(error) {
                alertStore.error(error);
            }
        }
    }
})