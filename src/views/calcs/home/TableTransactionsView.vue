<script setup>
import { onMounted, reactive } from 'vue';
import { useBalanceStore } from '@/stores/calcs'

const transactionsData = reactive([]);

onMounted(() => {
    const balanceStore = useBalanceStore()
    const lastTransactions = balanceStore.getLastTransactions()
    lastTransactions.then((response) => {
        return response
    }).then((data) => {
        if (data) {
            const allTransactions = data.success
            allTransactions.forEach((item) => {
                transactionsData.push({
                    id: item.id,
                    date: item.date,
                    description: item.description,
                    value: item.value,
                    type: item.type,
                    category: item.category
                })
            })
        }
    })
    return transactionsData
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
                <tbody>
                    <tr v-for="transaction in transactionsData" :key="transaction.id">
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
                        <td>Total: R$ 6000,00</td>
                    </tr>
                    <tr class="cell-button">
                        <td colspan="7"><button class="btn-transaction">Ver todas</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
</template>