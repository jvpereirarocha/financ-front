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
        <router-link class="link-sidebar" to="/">
          <i class="fa-solid fa-house"></i>
          <span>Página Inicial</span>
        </router-link>
      </li>
      <li>
        <a class="link-sidebar" href="#">
          <i class="fa-solid fa-chart-simple"></i>
          <span>Dashboards</span>
        </a>
      </li>
      <li>
        <router-link class="link-sidebar" to="/transactions">
          <i class="fa-solid fa-list"></i>
          <span>Transações</span>
        </router-link>
      </li>
      <li>
        <router-link class="link-sidebar" to="/reports">
          <i class="fa-solid fa-file-lines"></i>
          <span>Relatórios</span>
        </router-link>
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
