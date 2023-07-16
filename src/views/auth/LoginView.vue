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
  },
]

</script>

<template>
        <TitleComponent title="Calcs" :isSubtitle=false />
        <FormComponent formClass="login" :fields="loginFields"/>
        <ButtonComponent buttonValue="Login" />
        <div class="sign-area">
            <p>Don't have an account? <a href="custom_login.html">Sign Up</a> now</p>
        </div>
        <div class="sign-area">
            <p>Forgot your password? Click <a href="custom_login.html">here</a></p>
        </div>
</template>