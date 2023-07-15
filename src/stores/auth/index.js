import { defineStore } from 'pinia'
import { postRequest } from '@/services/api.js'
import router from '@/router/index.js'

const API_AUTH_URL = `${import.meta.env.VITE_BASE_API_URL}/profile`


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        returnUrl: null,
    }),
    actions: {
        async loginUser(email, password) {
            const user = await postRequest(`${API_AUTH_URL}/login`, { email, password });
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            router.push(this.returnUrl || '/');
        },
    }
})