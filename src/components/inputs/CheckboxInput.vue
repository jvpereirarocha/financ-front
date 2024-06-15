<script setup>
import { ref, watch } from 'vue'
import { useCurrencyInput } from 'vue-currency-input'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
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
  }
})

const isChecked = ref(props.modelValue)
defineEmits(['update:modelValue', 'click'])

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = newValue
  }
)
</script>

<template>
  <div class="input-container">
    <label @click="$emit('update:modelValue', $event.target.value)"> Already paid? </label>
  </div>
  <input
    class="form-control"
    required
    type="checkbox"
    v-model="isChecked"
    :name="name"
    :placeholder="inputPlaceholder"
  />
</template>
