<script setup>
import { reactive } from "vue";

defineProps({
    list: {
        type: Array,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['change-msg', 'change-list']);

const onChangeMsg = () => {
    emits('change-msg', 'hello worlddddd');
}

const onChangeList = () => {
    console.log("子组件的change")
    emits('change-list', [7,8,9,10]);
}

</script>


<template>
    <h1>{{ list }}</h1>
    <h1>{{ msg }}</h1>
    <button @click="onChangeMsg">改变Msg</button>
    <button @click="onChangeList">改变List</button>
</template>



<style lang="scss" scoped></style>