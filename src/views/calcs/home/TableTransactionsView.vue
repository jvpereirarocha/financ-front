<script setup>
import { onMounted, reactive } from 'vue';
import { useBalanceStore } from '@/stores/calcs'

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

</script>


<template>
    <section class="table--wrapper">
        <h1 class="section--title">Tabela de Transações</h1>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID da Transação</th>
                        <th>Data da transação</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo de transação</th>
                        <th>Categoria</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <span v-if="transactionsData.lastTransactions.length > 0">
                    <tbody>
                        <tr v-for="transaction in transactionsData.lastTransactions" :key="transaction.id">
                            <td>{{ transaction.id }}</td>
                            <td>{{ transaction.date }}</td>
                            <td>{{ transaction.description }}</td>
                            <td>{{ transaction.value }}</td>
                            <td>{{ transaction.type }}</td>
                            <td>{{ transaction.category }}</td>
                            <td><button>Editar</button></td>
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
                </span>
                <span v-else>
                    <p> Nenhum registro encontrado </p>
                </span>
            </table>
        </div>
    </section>
</template>