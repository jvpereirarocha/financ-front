<script setup>
import { reactive } from 'vue'
const expenseData = reactive({
    description: '',
    value: '',
    dueDate: '',
    alreadyPaid: '',
    category: '',
})
import TitleComponent from '@/components/Title.vue'
import ButtonComponent from '@/components/Button.vue'
import InputForm from '@/components/InputForm.vue'
import { useTransactionStore } from '@/stores/transactions'
import { useAlertStore } from '@/stores/components/alert.js'
import * as Yup from 'yup'
import { Form } from 'vee-validate'
import router from '@/router/index.js'

const schema = Yup.object().shape({
    description: Yup.string().min(3).required('Description is required'),
    value: Yup.string().min(3).required('Value is required'),
    dueDate: Yup.string().required('Due Date is required'),
    alreadyPaid: Yup.string().required('Already Paid is required'),
    category: Yup.string().required('Category is required'),
})

async function submitForm() {
    const transactionStore = useTransactionStore();
    const alertStore = useAlertStore();
    try {
        schema.validateSync({
            ...expenseData
        })
        const response = await transactionStore.registerNewExpense(expenseData);
        if (response.statusCode === 201) {
            alertStore.success(response.success)
            router.push({ name: 'transactions' })
            return
        } else {
            alertStore.error(response.error)
        }
    } catch (error) {
        alertStore.error(error.message)
    }
}

</script>

<template>
    <div class="auth-area">
        <div class="auth-container">
            <TitleComponent title="Calcs" :isSubtitle=false />
            <div class="form login">
                <TitleComponent title="Register expense" :isSubtitle=true />
                <Form :validation-schema="schema">
                    <InputForm
                        :inputName="'description'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-comments'"
                        :inputPlaceholder="'Set the description of the expense'"
                        v-model="expenseData.description" />
                    <InputForm
                        :inputName="'value'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-money-bills'"
                        :hasMask="true"
                        maskFormat="0,99"
                        maskTokens="0:\d:multiple|9:\d:optional"
                        :inputPlaceholder="'Enter the expense value'"
                        v-model="expenseData.value" />
                    <InputForm
                        :inputName="'dueDate'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-calendar'"
                        :hasMask="true"
                        maskFormat="##/##/####"
                        :inputPlaceholder="'Enter the due date of the expense'"
                        v-model="expenseData.dueDate" />
                    <InputForm
                        :inputName="'alreadyPaid'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-circle-question'"
                        :inputPlaceholder="'Already paid? (Yes/No)'"
                        v-model="expenseData.alreadyPaid"/>
                    <InputForm
                        :inputName="'category'"
                        :inputType="'text'"
                        :inputRequired="true"
                        :inputIconClass="'fa-solid fa-list'"
                        :inputPlaceholder="'Enter the category of the expense'"
                        v-model="expenseData.category" />
                    <ButtonComponent :value="'Save expense'" :onClickFunction="submitForm" />
                </Form>
            </div>
        </div>
    </div>
</template>