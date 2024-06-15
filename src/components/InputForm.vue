<script setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'
import { vMaska } from 'maska'

const props = defineProps({
  inputName: {
    type: String,
    default: ''
  },
  inputType: {
    type: String,
    default: 'text'
  },
  inputRequired: {
    type: Boolean,
    default: false
  },
  inputIconClass: {
    type: String,
    default: ''
  },
  inputPlaceholder: {
    type: String,
    default: ''
  },
})

const options = {
  preProcess: (value) => {
    if (!props.currencyValue && !props.dateFormat) return value
    if (props.currencyValue && !value) return ''
    if (props.dateFormat && !value) return ''
    if (props.currencyValue) {
      const sub = 3 - (value.includes(',') ? value.length - value.indexOf(',') : 0)
      return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
        .format(value)
        .slice(0, sub ? -sub : undefined)
    } else if (props.dateFormat) {
      const {day, month, year} = value.split("/");
      return new Date(`${year}-${month}-${day}`);
    }
    return value
  },
  postProcess: (value) => {
    if (!props.currencyValue || !props.dateFormat) return value

    if (props.currencyValue && !value) return ''
    if (props.dateFormat && ! value) return ''
    if (props.currencyValue) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    } else if (props.dateFormat) {
      return value.toLocaleDateString('pt-BR');
    }
    return value
  }
}
const { value, errorMessage } = useField(() => props.inputName)
</script>

<template>
  <div class="input-container">
    <div class="form-group">
      <input
        :name="inputName"
        :required="inputRequired"
        :placeholder="inputPlaceholder"
        :type="inputType"
        class="form-control"
        v-model="value"
        v-maska="options"
        >
      <i :class="inputIconClass"></i>
    </div>
  </div>
  <span>
    {{ errorMessage }}
  </span>
</template>
