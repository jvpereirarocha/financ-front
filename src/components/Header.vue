<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    const username = ref('');
    onMounted(() => {
        console.log('created');
        const authStore = useAuthStore();
        const response = authStore.getUserName();
        response.then((data) => {
            username.value = data.success;
        })
        return username;
    })
    onUnmounted(() => {
        username.value = '';
    })

</script>

<template>
    <header class="header--wrapper">
        <div class="header--title">
            <span>Bem-vindo(a)</span>
            <h2>{{ username }}</h2>
        </div>
        <div class="user--info">
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" name="userInfo">
            </div>
            <img src="../assets/images/profile.png" alt="Perfil">
        </div>
    </header>
</template>