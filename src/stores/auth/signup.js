import { defineStore } from 'pinia'


export const useSignUpStore = defineStore('signup', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        returnUrl: null,
    }),
    actions: {
        async registerNewUser(firstName, lastName, email, password, confirmPassword) {},
        async editUser(firstName, lastName, email) {},
    }
})