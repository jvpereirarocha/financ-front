<script setup>
    import { useAuthStore } from '@/stores/auth'
    const authStore = useAuthStore()
    const doLogout = () => {
        authStore.logout()
    }
</script>

<template>
    <aside class="sidebar">
        <div class="logo">Calcs</div>
        <ul class="menu">
            <li class="active">
                <a class="link-sidebar" href="#">
                    <i class="fa-solid fa-house"></i>
                    <span>Página Inicial</span>
                </a>
            </li>
            <li>
                <a class="link-sidebar" href="#">
                    <i class="fa-solid fa-chart-simple"></i>
                    <span>Dashboards</span>
                </a>
            </li>
            <li>
                <a class="link-sidebar" href="#">
                    <i class="fa-solid fa-list"></i>
                    <span>Transações</span>
                </a>
            </li>
            <li>
                <a class="link-sidebar" href="#">
                    <i class="fa-solid fa-file-lines"></i>
                    <span>Relatórios</span>
                </a>
            </li>
            <li>
                <a class="link-sidebar" href="#">
                    <i class="fa-solid fa-gear"></i>
                    <span>Configurações</span>
                </a>
            </li>
            <li class="logout">
                <a class="link-sidebar" href="#" @click="doLogout">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </aside>
</template>