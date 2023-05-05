<script setup>
import useTodoList from '@/use/useList'

import { ref } from 'vue';

const { todoItems, addItem, finishedCount, fontStateCount, changeFontState } = useTodoList();

const inputVal = ref('');

const clearInput = ()=>{
    inputVal.value = '';
}
</script>

<template>
    <div class="text-2xl bg-purple">哈哈</div>
    <div>
        <h2>数组</h2>
        <h3>{{ finishedCount }} / {{ todoItems.length }}</h3>
        <h2>斜体字数的个数: {{ fontStateCount }}</h2>
        <li v-for="item in todoItems" :key="item.id" :class="item.fontState ? 'fontClass' : ''" @click="changeFontState(item)">
            {{ item.title }}
        </li>
        <input id="input" type="text" v-model="inputVal"  @keydown.enter="addItem(inputVal)" @keydown.up.enter="clearInput">
    </div>
</template>


<style scoped>
.fontClass{
    font-style: italic;
}
</style>