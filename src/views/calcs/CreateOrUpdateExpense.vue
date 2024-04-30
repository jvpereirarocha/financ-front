<script setup>
    import { reactive } from 'vue'
    import { useExpenseStore } from '@/stores/expenses/index.js'
    import { useAlertStore } from '@/stores/components/alert.js'
    import TitleComponent from '@/components/Title.vue'
    import ButtonComponent from '@/components/Button.vue'
    import * as Yup from 'yup'
    
    const expenseData = reactive({
        description: '',
        value: '',
        dueDate: '',
        alreadyPaid: '',
        category: '',
    })

    const schema = Yup.object().shape({
        description: Yup.string().email().required('Description is required'),
        value: Yup.string().min(2).required('Value cannot be negative'),
        category: Yup.string().required('Category is required'),
    })

    async function submitForm() {
        const expenseStore = useExpenseStore();
        const alertStore = useAlertStore();
        try {
            schema.validateSync({
                ...expenseData
            })
            const response = await expenseStore.createNewExpense(expenseData);
            if (response.hasOwnProperty('error')) {
                alertStore.error(response.error);
                throw new Error(response.error);
            } else {
                alertStore.success('Despesa inserida com sucesso!');
                router.push({ name: 'transactions' })
                return
            }
        } catch (error) {
            alertStore.error(error.message || 'Erro ao criar despesa')
            expenseData.description = ''
            expenseData.value = 0
            expenseData.dueDate = null
            expenseData.alreadyPaid = false
            expenseData.category = ''
        }
    }

</script>

<template>
    <div class="auth-area">
        <div class="auth-container">
            <TitleComponent title="Calcs" :isSubtitle=false />
            <div class="form login">
                <TitleComponent title="Save Expense" :isSubtitle=true />
                <Form :validation-schema="schema">
                    <InputForm
                        :inputName="'description'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-signature'"
                        :inputPlaceholder="'Enter the description'"
                        v-model="expenseData.description" />
                    <InputForm
                        :inputName="'value'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-signature'"
                        :inputPlaceholder="'Enter the value'"
                        v-model="expenseData.value" />
                    <InputForm
                        :inputName="'dueDate'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-cake-candles'"
                        :hasMask="true"
                        maskFormat="##/##/####"
                        :inputPlaceholder="'Enter the due date'"
                        v-model="expenseData.dueDate" />
                    <InputForm
                        :inputName="'category'"
                        :inputType="'category'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-lock'"
                        :inputPlaceholder="'Enter the category'"
                        v-model="expenseData.category" />
                    <InputForm
                        :inputType="'text'"
                        :inputRequired="false"
                        :inputIconClass="'fa-solid fa-envelope'"
                        :inputPlaceholder="'Already paid?'"
                        v-model="expenseData.alreadyPaid"/>
                    <ButtonComponent :value="'Save Expense'" :onClickFunction="submitForm" />
                </Form>
            </div>
        </div>
    </div>
</template>