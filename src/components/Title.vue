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
  <h1 v-if="!isSubtitle" class="h1 text-center">{{ title }}</h1>
  <h2 v-else class="h2">{{ title }}</h2>
</template>
