<script setup>
    const props = defineProps({
        buttonValue: {
            type: String,
            value: 'Submit'
        },
    })
</script>

<template>
    <div class="input-container button">
        <input type="button" :value="buttonValue">
    </div>
</template>