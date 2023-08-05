<script setup>
	import { ref } from 'vue'
	const emailValue = ref('')
	const passwordValue = ref('')
	import TitleComponent from '@/components/Title.vue'
	import ButtonComponent from '@/components/Button.vue'
	import InputForm from '@/components/InputForm.vue'
	import SignArea from '@/components/SignArea.vue'
</script>

<template>
		<TitleComponent title="Calcs" :isSubtitle=false />
		<div class="form login">
			<TitleComponent title="Login" :isSubtitle=true />
			<form>
				<InputForm :inputType="'text'" :inputRequired="true" :inputIconClass="'fa-solid fa-envelope'" :inputPlaceholder="'Enter your email'" v-model="emailValue" />
				<InputForm :inputType="'password'" :inputRequired="true" :inputIconClass="'fa-solid fa-lock'" :inputPlaceholder="'Enter your password'" v-model="passwordValue" />
				<ButtonComponent :value="'Login'" />
			</form>
			<SignArea :text="'Don\'t have an account?'" :url="'/register'" :link="'Sign Up'" />
			<SignArea :text="'Forgot your password? Click'" :url="'/forgot-password'" :link="'here'" />
		</div>
</template>