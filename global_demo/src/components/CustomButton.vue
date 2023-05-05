<script setup>
const emits = defineEmits(['btn-click']);


</script>
<template>
<button class="w-[80px] h-12 mx-3 border border-red-300 border-dashed" @click="emits('btn-click')">
    <slot name="btnText"></slot>
</button>    
</template>