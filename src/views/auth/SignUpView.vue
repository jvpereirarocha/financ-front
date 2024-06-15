<script setup>
import { reactive, ref } from 'vue'
const signupData = reactive({
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: ''
})
import TitleComponent from '@/components/Title.vue'
import ButtonComponent from '@/components/Button.vue'
import PasswordInput from '@/components/inputs/PasswordInput.vue'
import DateInput from '@/components/inputs/DateInput.vue'
import InputForm from '@/components/InputForm.vue'
import SignArea from '@/components/SignArea.vue'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/components/alert.js'
import * as Yup from 'yup'
import { useForm } from 'vee-validate'
import router from '@/router/index.js'

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'Nome deve ter no mínimo 1 caracter')
    .required('Nome é obrigatório'),

  lastName: Yup.string()
    .min(1, 'Sobrenome deve ter no mínimo 1 caracter')
    .required('Sobrenome é obrigatório'),

  dateOfBirth: Yup.string().required('Data de nascimento é obrigatória'),

  email: Yup.string().email('Formato de e-mail inválido').required('E-mail é obrigatório'),

  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),

  confirmPassword: Yup.string()
    .min(6, 'Confirmação de senha deve ter no mínimo 6 caracteres')
    .required('Confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
})

const { handleSubmit } = useForm({
    validationSchema: schema
})

const submitForm = handleSubmit(values => {
    const authStore = useAuthStore()
    const alertStore = useAlertStore()
    const data = JSON.stringify(values, null, 2)
    return authStore.registerNewUser(data)
        .then((response) => {
            console.log("This is the response: ", response)
        })
        .catch((error) => {
            alertStore.error(error.message);
        })
})
//   console.log("submiting... ", data)
//   const authStore = useAuthStore()
//   const alertStore = useAlertStore()
//   try {
//     schema.validateSync({
//       ...signupData
//     })
//     const response = await authStore.registerNewUser(signupData)
//     if (response.hasOwnProperty('success')) {
//       alertStore.success(response.success)
//       router.push({ name: 'login' })
//       return
//     } else {
//       alertStore.error(response.error)
//     }
//   } catch (error) {
//     alertStore.error(error.message)
//   }
// }
</script>

<template>
  <div class="auth-area">
    <div class="auth-container">
      <TitleComponent title="Calcs" :isSubtitle="false" />
      <hr class="divisor" />
      <div class="form login">
        <TitleComponent title="Sign Up" :isSubtitle="true" />
        <form @submit="submitForm">
          <InputForm
            :inputName="'firstName'"
            :inputType="'text'"
            :inputRequired="true"
            :inputIconClass="'fa-solid fa-signature'"
            :inputPlaceholder="'Digite seu nome'"
            v-model="signupData.firstName"
          />
          <InputForm
            :inputName="'lastName'"
            :inputType="'text'"
            :inputRequired="true"
            :inputIconClass="'fa-solid fa-signature'"
            :inputPlaceholder="'Digite seu sobrenome'"
            v-model="signupData.lastName"
          />
          <DateInput
            :inputName="'dateOfBirth'"
            :inputIconClass="'fa-solid fa-cake-candles'"
            :inputPlaceholder="'Data de nascimento'"
            v-model="signupData.dateOfBirth"
          />
          <InputForm
            :inputName="'email'"
            :inputType="'text'"
            :inputRequired="true"
            :inputIconClass="'fa-solid fa-envelope'"
            :inputPlaceholder="'Insira seu e-mail'"
            v-model="signupData.email"
          />
          <PasswordInput
            :inputName="'password'"
            :inputIconClass="'fa-solid fa-lock'"
            :inputPlaceholder="'Digite uma senha'"
            v-model="signupData.password"
          />
          <PasswordInput
            :inputName="'confirmPassword'"
            :inputIconClass="'fa-solid fa-lock'"
            :inputPlaceholder="'Confirme a senha'"
            v-model="signupData.confirmPassword"
          />
          <div class="input-container button">
            <input type="submit" value="Sign Up"/>
          </div>
        </Form>
        <SignArea :text="'Já está cadastrado? Faça login clicando neste'" :url="'/login'" :link="'link'" />
      </div>
    </div>
  </div>
</template>
