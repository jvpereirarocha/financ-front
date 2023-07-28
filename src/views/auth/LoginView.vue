<script setup>
import FormComponent from '@/components/Forms.vue'
import TitleComponent from '@/components/Title.vue'
import ButtonComponent from '@/components/Button.vue'

const loginFields = [
  {
    typeOfField: 'text',
    required: true,
    iconClass: 'fa-solid fa-signature',
    placeholder: 'Enter your e-mail'
  },
  {
    typeOfField: 'password',
    required: true,
    iconClass: 'fa-solid fa-lock',
    placeholder: 'Enter your password'
  }
]

</script>

<template>
        <TitleComponent title="Calcs" :isSubtitle=false />
        <FormComponent formClass="login" title="Login" :fields="loginFields"/>
        <ButtonComponent buttonValue="Login" />
        <div class="sign-area">
            <p>Don't have an account? <router-link to="/signup">Sign Up</router-link> now</p>
        </div>
        <div class="sign-area">
            <p>Forgot your password? Click <router-link to="/change-password">here</router-link></p>
        </div>
</template>