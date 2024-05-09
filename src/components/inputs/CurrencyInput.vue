<script setup>

import { toRef } from 'vue'
import { useCurrencyInput } from 'vue-currency-input'

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0
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
        value: '',
    }
})

const { inputRef } = useCurrencyInput({ 
    currency: 'BRL',
    autoDecimalDigits: true,
    precision: 2,
})

const name = toRef(props, 'inputName')
defineEmits(['update:modelValue', 'blur'])

</script>


<template>
    <div class="input-container">
        <input
            class="form-control"
            required
            type="text"
            ref="inputRef"
            :name="name"
            :placeholder="inputPlaceholder"
            >
        <i :class="inputIconClass"></i>
    </div>
</template>