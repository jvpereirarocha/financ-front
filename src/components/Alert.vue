<script setup>
import { storeToRefs } from 'pinia'

import { useAlertStore } from '@/stores/components/alert.js'

const alertStore = useAlertStore()
const { alert } = storeToRefs(alertStore)
</script>

<template>
  <div v-if="alert" class="container">
    <div class="alert" :class="alert.type">
      <button @click="alertStore.clear()" class="btn btn-link close">X</button>
      {{ alert.message }}
    </div>
  </div>
</template>
