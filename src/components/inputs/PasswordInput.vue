<script setup>
import { useField } from 'vee-validate';
import { toRef, ref, watch } from 'vue'

const props = defineProps({
  inputName: {
    type: String,
    default: ''
  },
  inputIconClass: {
    type: String,
    value: ''
  },
  inputPlaceholder: {
    type: String,
    value: ''
  }
})

const typePassword = 'password'
const closedEye = 'fa-solid fa-eye'
const typeText = 'text'
const openedEye = 'fa-solid fa-eye-slash'
const clickIconClass = 'click-icon'

let currentInputType = ref(`${typePassword}`)
let currentInputClass = ref(`${clickIconClass} ${closedEye}`)

const hidePassword = ref(true)

const changeInputPassword = () => {
  hidePassword.value = !hidePassword.value
}

watch(hidePassword, (newValue, _) => {
  if (newValue === true) {
    currentInputType.value = typePassword
    currentInputClass.value = `${clickIconClass} ${closedEye}`
  } else {
    currentInputType.value = typeText
    currentInputClass.value = `${clickIconClass} ${openedEye}`
  }
})
const { value, errorMessage } = useField(() => props.inputName)
</script>

<template>
  <div class="input-container">
    <input
      class="form-control"
      required
      :type="currentInputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
      v-model="value"
    />
    <i :class="inputIconClass"></i>
    <i :class="currentInputClass" @click="changeInputPassword"></i>
  </div>
  <span> {{ errorMessage }} </span>
</template>
