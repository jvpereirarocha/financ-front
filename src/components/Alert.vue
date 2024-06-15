<script setup>
import { storeToRefs } from 'pinia'

import { useAlertStore } from '@/stores/components/alert.js'

const alertStore = useAlertStore()
const { alert } = storeToRefs(alertStore)
</script>

<template>
  <div v-if="alert" class="container">
    <div class="alert" :class="alert.type">
      <buttton @click="alertStore.clear()" class="btn btn-link close">X</buttton>
      {{ alert.message }}
    </div>
  </div>
</template>
