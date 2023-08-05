<script setup>
	defineProps(['value'])
</script>

<template>
    <div class="input-container button">
        <input type="button" :value="value">
    </div>
</template>