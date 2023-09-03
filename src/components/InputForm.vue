<script setup>
    import { toRef } from 'vue'
    import { useField } from 'vee-validate';

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
        }
    })

    const name = toRef(props, 'inputName')
    defineEmits(['update:modelValue', 'blur'])
</script>

<template>
    <div class="input-container" v-if="inputRequired">
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