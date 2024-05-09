<script setup>
import { onMounted, reactive } from 'vue';
import { useBalanceStore } from '@/stores/calcs'

import { useRouter } from 'vue-router';

const router = useRouter()

const transactionsData = reactive({
    lastTransactions: [],
    amount: 'R$ 0,00'
});

onMounted(() => {
    const balanceStore = useBalanceStore()
    const lastTransactions = balanceStore.getLastTransactions()
    lastTransactions.then((response) => {
        return response
    }).then((data) => {
        if (data && data.success) {
            const allTransactions = data.success.lastTransactions
            allTransactions.forEach((item) => {
                transactionsData.lastTransactions.push({
                    id: item.id,
                    date: item.date,
                    description: item.description,
                    value: item.value,
                    type: item.type,
                    category: item.category
                })
            })
            transactionsData.amount = data.success.amount
        }
    })
    return transactionsData;
})

const goToEdit = (id) => {
    router.push({ name: 'update-expense', params: { id: id } })
}

</script>


<template>
    <section class="table--wrapper">
        <h1 class="section--title">Tabela de Transações</h1>
        <span v-if="transactionsData.lastTransactions.length === 0">
            <p> Nenhum registro encontrado </p>
        </span>
        <span v-else>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th colspan="3">ID da Transação</th>
                            <th colspan="1">Data da transação</th>
                            <th colspan="2">Descrição</th>
                            <th colspan="1">Valor</th>
                            <th colspan="1">Tipo de transação</th>
                            <th colspan="1">Categoria</th>
                            <th colspan="1">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in transactionsData.lastTransactions" :key="transaction.id">
                            <td colspan="3">{{ transaction.id }}</td>
                            <td colspan="1">{{ transaction.date }}</td>
                            <td colspan="2">{{ transaction.description }}</td>
                            <td colspan="1">{{ transaction.value }}</td>
                            <td colspan="1">{{ transaction.type }}</td>
                            <td colspan="1">{{ transaction.category }}</td>
                            <td colspan="1">
                                <button @click="goToEdit(transaction.id)">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="table-footer">
                        <tr>
                            <td>Total: {{ transactionsData.amount }}</td>
                        </tr>
                        <tr class="cell-button">
                            <td colspan="7"><button class="btn-transaction">Ver todas</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </span>
    </section>
</template>