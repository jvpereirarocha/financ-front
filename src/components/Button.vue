<script setup>
defineProps({
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="input-container button">
    <input type="submit" :value="value" />
  </div>
</template>
