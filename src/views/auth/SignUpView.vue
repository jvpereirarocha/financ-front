<script setup>
import TitleComponent from '@/components/Title.vue'
import ButtonComponent from '@/components/Button.vue'

const signUpFields = [
    {
        typeOfField: 'text',
        required: true,
        iconClass: 'fa-solid fa-signature',
        placeholder: 'Enter your first name'
    },
    {
        typeOfField: 'text',
        required: true,
        iconClass: 'fa-solid fa-signature',
        placeholder: 'Enter your last name'
    },
    {
        typeOfField: 'text',
        required: true,
        iconClass: 'fa-solid fa-envelope',
        placeholder: 'Enter your e-mail'
    },
    {
        typeOfField: 'password',
        required: true,
        iconClass: 'fa-solid fa-lock',
        placeholder: 'Enter your password'
    },
    {
        typeOfField: 'password',
        required: true,
        iconClass: 'fa-solid fa-lock',
        placeholder: 'Confirm your password'
    },
]

</script>

<template>
    <TitleComponent title="Calcs" :isSubtitle=false />
    <FormComponent formClass="register" title="Sign Up" :fields="signUpFields" />
    <ButtonComponent buttonValue="Register" />
    <div class="sign-area">
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>