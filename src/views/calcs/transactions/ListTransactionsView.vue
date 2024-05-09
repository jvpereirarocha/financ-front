<script setup>

import TableTransactionsView from '@/views/calcs/home/TableTransactionsView.vue';
import Button from '@/components/Button.vue'
import Title from '@/components/Title.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const goToExpenseForm = () => {
    router.push({ name: 'create-expense' })
}

const goToRevenueForm = () => {
    router.push('/')
}

</script>

<template>
    <header>
        <Title title="Transações" />
    </header>
    <div class="container">
        <div class="button-container">
            <Button value="Criar nova despesa" :onClickFunction="goToExpenseForm"/>
            <Button value="Registrar nova receita" :onClickFunction="goToRevenueForm"/>
        </div>    
    </div>
    <span style="margin-bottom: 2rem;"></span>
    <section>
        <TableTransactionsView />
    </section>
    <router-view></router-view>
</template>