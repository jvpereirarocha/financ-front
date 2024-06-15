<script setup>
defineProps({
  value: {
    type: String,
    default: ''
  },
  onClickFunction: {
    type: Function,
    default: () => {}
  },
  isSubmitting: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="input-container button">
    <input type="button" @click="onClickFunction" :value="value" :disabled="isSubmitting" />
    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
  </div>
</template>
