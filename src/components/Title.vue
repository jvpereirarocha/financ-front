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
    <h2 v-else class="subtitle">{{ title }}</h2>
</template>