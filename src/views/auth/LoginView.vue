<script setup>
	import { ref } from 'vue'
	const emailValue = ref('')
	const passwordValue = ref('')
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
		email: Yup.string().email().required('Email is required'),
		password: Yup.string().min(6).required('Password is required and must be at least 6 characters long')
	})

	async function submitForm () {
		const authStore = useAuthStore();
		const alertStore = useAlertStore();
		try {
			schema.validateSync({
				email: emailValue.value,
				password: passwordValue.value
			})
			const response = await authStore.loginUser(emailValue.value, passwordValue.value);
			if (response.hasOwnProperty('error')) {
				alertStore.error(response.error);
				emailValue.value = '';
				passwordValue.value = '';
				throw new Error(response.error);
			} else {
				alertStore.success('Usuário logado com sucesso!');
				router.push({ name: 'home' });
			}
		} catch (error) {
			alertStore.error('Login indisponível no momento, tente novamente mais tarde.')
			emailValue.value = '';
			passwordValue.value = '';
		}
	}

</script>

<template>
	<div class="auth-area">
		<div class="auth-container">
			<TitleComponent title="Calcs" :isSubtitle=false />
			<hr class="divisor">
			<div class="form login">
				<TitleComponent title="Login" :isSubtitle=true />
				<Form :validation-schema="schema" v-slot="{ errors, isSubmitting }">
					<InputForm
						:inputType="'text'"
						:inputRequired="true"
						:inputIconClass="'fa-solid fa-envelope'"
						:inputPlaceholder="'Enter your email'"
						v-model="emailValue"/>
					<PasswordInput
						:inputName="'password'"
						:inputIconClass="'fa-solid fa-lock'"
						:inputPlaceholder="'Enter your password'"
						v-model="passwordValue"/>
					<ButtonComponent :value="'Login'" :onClickFunction="submitForm" />
				</Form>
				<SignArea :text="'Don\'t have an account?'" :url="'/signup'" :link="'Sign Up'" />
				<SignArea :text="'Forgot your password? Click'" :url="'/forgot-password'" :link="'here'" />
			</div>
		</div>
	</div>
</template>