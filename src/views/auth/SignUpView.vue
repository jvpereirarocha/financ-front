<script setup>
import { ref, reactive } from 'vue'
// const firstNameValue = ref('')
// const lastNameValue = ref('')
// const dateOfBirthValue = ref('')
// const emailValue = ref('')
// const passwordValue = ref('')
// const confirmPasswordValue = ref('')
const signupData = reactive({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: '',
})
import TitleComponent from '@/components/Title.vue'
import ButtonComponent from '@/components/Button.vue'
import InputForm from '@/components/InputForm.vue'
import SignArea from '@/components/SignArea.vue'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/components/alert.js'
import * as Yup from 'yup'
import { Form } from 'vee-validate'
import router from '@/router/index.js'

const schema = Yup.object().shape({
    firstName: Yup.string().min(3).required('First name is required'),
    lastName: Yup.string().min(2).required('Last name is required'),
    dateOfBirth: Yup.string().required('Date of Birth is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6).required('Password is required and must be at least 6 characters long'),
    confirmPassword: Yup.string().min(6).required('Confirm Password is required and must be at least 6 characters long')
})

async function submitForm() {
    const authStore = useAuthStore();
    const alertStore = useAlertStore();
    try {
        schema.validateSync({
            ...signupData
        })
        const response = await authStore.registerNewUser(signupData);
        if (response.hasOwnProperty('success')) {
            alertStore.success(response.success)
            router.push({ name: 'login' })
            return
        } else {
            alertStore.error(response.error)
        }
    } catch (error) {
        alertStore.error('Registro de usuário indisponível no momento, tente novamente mais tarde.')
    }
}

</script>

<template>
    <div class="auth-area">
        <div class="auth-container">
            <TitleComponent title="Calcs" :isSubtitle=false />
            <div class="form login">
                <TitleComponent title="Sign Up" :isSubtitle=true />
                <Form :validation-schema="schema">
                    <InputForm
                        :inputName="'firstName'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-signature'"
                        :inputPlaceholder="'Enter your First Name'"
                        v-model="signupData.firstName" />
                    <InputForm
                        :inputName="'lastName'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-signature'"
                        :inputPlaceholder="'Enter your Last Name'"
                        v-model="signupData.lastName" />
                    <InputForm
                        :inputName="'dateOfBirth'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-cake-candles'"
                        :hasMask="true"
                        maskFormat="##/##/####"
                        :inputPlaceholder="'Enter your Date of Birth'"
                        v-model="signupData.dateOfBirth" />
                    <InputForm
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-envelope'"
                        :inputPlaceholder="'Enter your email'"
                        v-model="signupData.email"/>
                    <InputForm
                        :inputName="'password'"
                        :inputType="'password'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-lock'"
                        :inputPlaceholder="'Enter your password'"
                        v-model="signupData.password" />
                    <InputForm
                        :inputName="'confirmPassword'"
                        :inputType="'password'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-lock'"
                        :inputPlaceholder="'Confirm your password'"
                        v-model="signupData.confirmPassword" />
                    <ButtonComponent :value="'Sign Up'" :onClickFunction="submitForm" />
                </Form>
                <SignArea :text="'Already have an account?'" :url="'/login'" :link="'Login'" />
            </div>
        </div>
    </div>
</template>