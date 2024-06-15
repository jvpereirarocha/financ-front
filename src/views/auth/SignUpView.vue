<script setup>
import { reactive } from 'vue'
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
import PasswordInput from '@/components/inputs/PasswordInput.vue'
import InputForm from '@/components/InputForm.vue'
import SignArea from '@/components/SignArea.vue'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/components/alert.js'
import * as Yup from 'yup'
import { Form } from 'vee-validate'
import router from '@/router/index.js'

const schema = Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'Nome deve ter no mínimo 1 caracter')
        .required('Nome é obrigatório'),
    
    lastName: Yup.string()
        .min(1, 'Sobrenome deve ter no mínimo 1 caracter')
        .required('Sobrenome é obrigatório'),
    
    dateOfBirth: Yup.string()
        .required('Data de nascimento é obrigatória'),
    
    email: Yup.string().email().required('E-mail é obrigatório'),
    
    password: Yup.string()
        .min(6, 'Senha deve ter no mínimo 6 caracteres')
        .required('Senha é obrigatória'),
    
    confirmPassword: Yup.string()
        .min(6, 'Confirmação de senha deve ter no mínimo 6 caracteres')
        .required('Confirmação de senha é obrigatória')
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
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
        alertStore.error(error.message)
    }
}

</script>

<template>
    <div class="auth-area">
        <div class="auth-container">
            <TitleComponent title="Calcs" :isSubtitle=false />
            <hr class="divisor">
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
					<PasswordInput
						:inputName="'password'"
						:inputIconClass="'fa-solid fa-lock'"
						:inputPlaceholder="'Enter your password'"
						v-model="signupData.password"/>
					<PasswordInput
						:inputName="'confirmPassword'"
						:inputIconClass="'fa-solid fa-lock'"
						:inputPlaceholder="'Confirm your password'"
						v-model="signupData.confirmPassword"/>
                    <ButtonComponent :value="'Sign Up'" :onClickFunction="submitForm" />
                </Form>
                <SignArea :text="'Already have an account?'" :url="'/login'" :link="'Login'" />
            </div>
        </div>
    </div>
</template>