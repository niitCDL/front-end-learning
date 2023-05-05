<script setup>
const props = defineProps({
    label:{
        type:String,
        default:''
    },
    modelValue:{
        type:[String,Number],
        default:''
    }
})
</script>
<template>
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" class="p-2 w-full border border-1 border-solid border-cyan-500 rounded-md" :value="modelValue"
    :placeholder="label" @input="$emit('update:modelValue',$event.target.value)">
</template>


