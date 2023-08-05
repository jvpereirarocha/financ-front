<script setup>
    const props = defineProps({
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
    defineEmits(['update:modelValue'])
</script>

<template>
    <div class="input-container" v-if="inputRequired">
        <input
            class="form-control"
            required
            :type="inputType"
            :placeholder="inputPlaceholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            >
        
            <i :class="inputIconClass"></i>
    </div>
    <div class="input-container" v-else>
            <input
            class="form-control"
            :type="inputType"
            :placeholder="inputPlaceholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            >
    
            <i :class="inputIconClass"></i>
    </div>
</template>