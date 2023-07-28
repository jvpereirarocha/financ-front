<script setup>
    import InputComponent from '@/components/InputForm.vue'
    import TitleComponent from '@/components/Title.vue'
    const props = defineProps({
        formClass: {
            type: String,
            default: ''
        },
        fields: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <div class="form" :class="props.formClass">
        <TitleComponent :title="title" :isSubtitle="true" />
        <form>
            <InputComponent
                v-for="field in fields"
                :inputType="field.typeOfField"
                :inputIconClass="field.iconClass"
                :inputPlaceholder="field.placeholder"
                />
        </form>
    </div>
</template>

