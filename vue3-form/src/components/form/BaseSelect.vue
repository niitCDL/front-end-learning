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
    options: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <!-- <label v-if="label" class="text-cyan-500">{{ label }}</label>
    <select class="p-2 w-full border border-1 border-solid border-cyan-500 rounded-md" :value="modelValue" v-bind="$attrs"  @change="$emit('update:modelValue',$event.target.value)">
        <option v-for="option in options" :value="option" :key="option" :selected="option === modelValue">
            {{ option }}
        </option>
    </select> -->
    <label v-if="label" class="text-cyan-500">{{ label }}</label>
    <select class="p-2 w-full border border-1 border-solid border-cyan-500 rounded-md" :value="modelValue" v-bind="{...$attrs,
    onChange:($event)=>{
        $emit('update:modelValue',$event.target.value);

    }}">
        <option v-for="option in options" :value="option" :key="option" :selected="option === modelValue">
            {{ option }}
        </option>
    </select>
</template>


