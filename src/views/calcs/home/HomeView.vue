<template>
    <div class="home-container">
        <Menu />
        <Sidebar />
        <main class="main--content">
            <Header />
            <ResumeView />
            <TableTransactionsView />
        </main>
    </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import ResumeView from './ResumeView.vue';
import TableTransactionsView from './TableTransactionsView.vue';
</script>