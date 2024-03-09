<script setup>
    import { toRef } from 'vue'
    import { useField } from 'vee-validate';
    import { vMaska } from 'maska';

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
        modelValue: {
            type: String,
            default: ''
        },
        hasMask: {
            type: Boolean,
            default: false
        },
        currencyValue: {
            type: Boolean,
            default: false
        },
        maskFormat: {
            type: String,
            default: ''
        },
        maskTokens: {
            type: String,
            default: ''
        }
    })

    const name = toRef(props, 'inputName')
    defineEmits(['update:modelValue', 'blur'])

    const options = {
        preProcess: (value) => {
            if (!props.currencyValue) return value
            if (props.currencyValue && !value) return ''
            if (props.currencyValue) {
                const sub = 3 - (val.includes(',') ? val.length - val.indexOf(',') : 0)
                return Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(value).slice(0, sub ? -sub: undefined)
            }
            return value
        },
        postProcess: (value) => {
            if (!props.currencyValue) return value
            
            if (props.currencyValue && !value) return ''
            if (props.currencyValue) {
                return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            }
            return value
        }
    }

</script>

<template>

    <div class="input-container" v-if="inputRequired && hasMask">
        <input
            class="form-control"
            required
            :type="inputType"
            :placeholder="inputPlaceholder"
            :value="modelValue"
            :name="name"
            v-maska:[options]
            :data-maska="maskFormat"
            :data-maska-tokens="maskTokens"
            @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('blur')"
            >
        
            <i :class="inputIconClass"></i>
    </div>
    <div class="input-container" v-else-if="inputRequired && hasMask === false">
        <input
            class="form-control"
            required
            :type="inputType"
            :placeholder="inputPlaceholder"
            :value="modelValue"
            :name="name"
            @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('blur')"
            >
    
            <i :class=" inputIconClass "></i>
    </div>
    <div class="input-container" v-else-if="inputRequired === false && hasMask">
            <input
            class="form-control"
            :type="inputType"
            :placeholder="inputPlaceholder"
            :value="modelValue"
            :name="name"
            v-maska:[options]
            :data-maska="maskFormat"
            :data-maska-tokens="maskTokens"
            @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('blur')"
            >

            <i :class="inputIconClass"></i>
    </div>
    <div class="input-container" v-else>
            <input
            class="form-control"
            :type="inputType"
            :placeholder="inputPlaceholder"
            :value="modelValue"
            :name="name"
            @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('blur')"
            >
    
            <i :class="inputIconClass"></i>
    </div>
</template>