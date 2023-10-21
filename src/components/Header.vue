<script setup>
    import { useAuthStore } from '@/stores/auth';

    const authStore = useAuthStore();
    const getUserName = () => {
        const userName = authStore.getUserName();
        return userName;
    }

</script>

<template>
    <header class="header--wrapper">
        <div class="header--title">
            <span>Bem-vindo(a)</span>
            <h2>{{ getUserName() }}</h2>
        </div>
        <div class="user--info">
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" name="userInfo">
            </div>
            <img src="profile.png" alt="Perfil">
        </div>
    </header>
</template>