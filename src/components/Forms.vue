<script setup>
    import InputComponent from '@/components/InputForm.vue'
    import TitleComponent from '@/components/Title.vue'
    const props = defineProps({
        formClass: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <div class="form" :class="props.formClass">
        <TitleComponent title="Login" :isSubtitle="true" />
        <form>
            <InputComponent
                inputType="text"
                inputRequired=true
                inputIconClass="fa-solid fa-signature"
                inputPlaceholder="Enter your name">
            </InputComponent>
        </form>
    </div>
</template>

