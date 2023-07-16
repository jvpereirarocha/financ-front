<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        isSubtitle: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <h1 v-if="!isSubtitle" class="title">{{ title }}</h1>
    <h1 v-else class="subtitle">{{ title }}</h1>
</template>