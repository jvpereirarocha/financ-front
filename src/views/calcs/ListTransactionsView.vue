<script setup>

import TableTransactionsView from './home/TableTransactionsView.vue';
import Button from '@/components/Button.vue'
import Title from '@/components/Title.vue'

</script>

<template>
    <header>
        <Title title="Transações" />
    </header>
    <div class="container">
        <div class="button-container">
            <Button value="Criar nova despesa" />
            <Button value="Registrar nova receita" />
        </div>    
    </div>
    <span style="margin-bottom: 2rem;"></span>
    <section>
        <TableTransactionsView />
    </section>
</template>