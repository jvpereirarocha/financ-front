<script setup>
import { toRef } from 'vue'
import { vMaska } from 'maska'
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
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
  },
})

const { value, errorMessage } = useField(() => props.inputName)

</script>

<template>
  <div class="input-container">
    <input
      class="form-control"
      required
      v-maska
      data-maska="##/##/####"
      type="text"
      :name="inputName"
      :placeholder="inputPlaceholder"
      v-model="value"
    />
    <i :class="inputIconClass"></i>
  </div>
  <span>{{ errorMessage }}</span>
  </template>
