<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})
</script>
<template>
    <input type="checkbox" class="mr-2" :checked="modelValue === value" @change="$emit('update:modelValue', $event.target.checked)">
    <label v-if="label">{{ label }}</label>
</template>


