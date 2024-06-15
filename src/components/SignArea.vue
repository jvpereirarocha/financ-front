<script setup>
defineProps(['text', 'url', 'link'])
</script>

<template>
  <div class="sign-area">
    <p>
      {{ text }} <router-link :to="url"> {{ link }} </router-link>
    </p>
  </div>
</template>
