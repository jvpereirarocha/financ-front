<script setup>
    import { ref } from 'vue'
    const input = ref('')
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
        }
    })
</script>

<template>
    <div class="input-container">
        <input :type="inputType" class="form-control" :required=inputRequired :placeholder="inputPlaceholder">
        <i :class="inputIconClass"></i>
    </div>
</template>