<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        required: true
    }
})
</script>
<template>
    <input v-bind="$attrs" type="radio" class="mr-2" :checked="modelValue === value" :value="value"
        @change="$emit('update:modelValue', value)">
    <label v-if="label">{{ label }}</label>
</template>


