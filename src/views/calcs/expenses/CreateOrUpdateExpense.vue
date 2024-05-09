<script setup>
    import { reactive, onMounted, onUnmounted } from 'vue'
    import { useExpenseStore } from '@/stores/expenses/index.js'
    import { useAlertStore } from '@/stores/components/alert.js'
    import TitleComponent from '@/components/Title.vue'
    import InputForm from '@/components/InputForm.vue'
    import CurrencyInput from '@/components/inputs/CurrencyInput.vue'
    import CheckboxInput from '@/components/inputs/CheckboxInput.vue'
    import ButtonComponent from '@/components/Button.vue'
    import * as Yup from 'yup'
    
    import router from '@/router/index.js'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    
    const expenseStore = useExpenseStore();
    const alertStore = useAlertStore();

    const expenseId = route.params.id || undefined;

    onMounted(() => {
        if (expenseId === undefined) {
            return;
        }

        const fetchExpense = expenseStore.getExpenseById(expenseId)
        fetchExpense.then((data) => {
            if (data && data.success) {
                expenseData.description = data.success.description
                expenseData.value = data.success.value
                expenseData.dueDate = data.success.dueDate
                expenseData.category = data.success.category
                expenseData.alreadyPaid = data.success.alreadyPaid
            }
        }).catch(() => {
            alertStore.error('Erro ao buscar despesa');
        })
        return expenseData;
    })
    
    const expenseData = reactive({
        description: '',
        value: '',
        dueDate: '',
        alreadyPaid: '',
        category: '',
    })

    const schema = Yup.object().shape({
        description: Yup.string().required('Description is required'),
        value: Yup.string().min(2).required('Value cannot be negative'),
        category: Yup.string().required('Category is required'),
    })

    async function submitForm() {
        try {
            schema.validateSync({
                ...expenseData
            })
            let response = null;
            
            if (expenseId === undefined) {
                response = await expenseStore.createNewExpense(expenseData);
            } else {
                response = await expenseStore.updateExpense(expenseId, expenseData)
            }
            
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
                        :inputIconClass="'fa-solid fa-pencil'"
                        :inputPlaceholder="'Enter the description'"
                        v-model="expenseData.description" />
                    <CurrencyInput
                        :inputName="value"
                        :inputIconClass="'fa-solid fa-money-bill'"
                        :inputPlaceholder="'Enter the value'"
                        v-model="expenseData.value"/>
                    <InputForm
                        :inputName="'dueDate'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-calendar'"
                        :hasMask="true"
                        maskFormat="##/##/####"
                        :inputPlaceholder="'Enter the due date'"
                        v-model="expenseData.dueDate" />
                    <InputForm
                        :inputName="'category'"
                        :inputType="'category'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-list'"
                        :inputPlaceholder="'Enter the category'"
                        v-model="expenseData.category" />
                    <CheckboxInput
                        :inputName="'alreadyPaid'"
                        :inputIconClass="'fa-solid fa-check'"
                        :inputPlaceholder="'Already paid?'"
                        v-model="expenseData.alreadyPaid"/>
                    <ButtonComponent :value="'Save Expense'" :onClickFunction="submitForm" />
                </Form>
            </div>
        </div>
    </div>
</template>