<script setup>
    import { onMounted, reactive } from 'vue';
    import { useBalanceStore } from '@/stores/calcs'
    
    const resumeData = reactive({
        monthRevenues: 'R$ 0,00',
        yearRevenues: 'R$ 0,00',
        monthExpenses: 'R$ 0,00',
        yearExpenses: 'R$ 0,00',
        monthBalance: 'R$ 0,00',
        yearBalance: 'R$ 0,00'
    });

    onMounted(() => {
        const balanceStore = useBalanceStore()
        const responseMonth = balanceStore.getMonthData()
        responseMonth.then((response) => {
            return response
        }).then((data) => {
            resumeData.monthBalance = data.success.balance
            resumeData.monthExpenses = data.success.expenses
            resumeData.monthRevenues = data.success.revenues
        })
        const responseYear = balanceStore.getYearData()
        responseYear.then((response) => {
            return response
        }).then((data) => {
            resumeData.yearBalance = data.success.balance
            resumeData.yearExpenses = data.success.expenses
            resumeData.yearRevenues = data.success.revenues
        })
        return resumeData
    })

</script>


<template>
    <section class="card-container">
        <h1 class="section--title">Dados anuais</h1>
        <div class="card--wrapper">
            <div class="payment--card">
                <div class="card--header">
                    <div class="amount">
                        <span class="title">Receitas</span>
                        <span class="value">{{ resumeData.yearRevenues }}</span>
                    </div>
                    <i class="fa-solid fa-receipt"></i>
                </div>
            </div>
            <div class="payment--card">
                <div class="card--header">
                    <div class="amount">
                        <span class="title">Despesas</span>
                        <span class="value">{{ resumeData.yearExpenses }}</span>
                    </div>
                    <i class="fa-solid fa-money-check-dollar"></i>
                </div>
            </div>
            <div class="payment--card">
                <div class="card--header">
                    <div class="amount">
                        <span class="title">Balanço</span>
                        <span class="value">{{ resumeData.yearBalance }}</span>
                    </div>
                    <i class="fa-sharp fa-solid fa-scale-balanced"></i>
                </div>
            </div>
        </div>
        <hr class="breaker">
        <h1 class="section--title">Dados mensais</h1>
        <div class="card--wrapper">
            <div class="payment--card">
                <div class="card--header">
                    <div class="amount">
                        <span class="title">Receitas</span>
                        <span class="value">{{ resumeData.monthRevenues }}</span>
                    </div>
                    <i class="fa-solid fa-receipt"></i>
                </div>
            </div>
            <div class="payment--card">
                <div class="card--header">
                    <div class="amount">
                        <span class="title">Despesas</span>
                        <span class="value">{{ resumeData.monthExpenses }}</span>
                    </div>
                    <i class="fa-solid fa-money-check-dollar"></i>
                </div>
            </div>
            <div class="payment--card">
                <div class="card--header">
                    <div class="amount">
                        <span class="title">Balanço</span>
                        <span class="value">{{ resumeData.monthBalance }}</span>
                    </div>
                    <i class="fa-sharp fa-solid fa-scale-balanced"></i>
                </div>
            </div>
        </div>
    </section>
</template>