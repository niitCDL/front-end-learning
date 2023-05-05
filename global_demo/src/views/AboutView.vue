<script setup>
import { reactive, ref } from 'vue'
import ChildComp from '../components/ChildComp.vue'

const msg = ref("你好啊");
let list = reactive([1,2,3]);

const change = (str) => {
    msg.value = str;
}

const changeList = (arr)=>{
    list.splice(0,list.length);
    list.push(...arr);
}

</script>

<template>
    <h1>父组件的list{{ list }}</h1>
    <h1>父组件传值,子组件接收</h1>
    <ChildComp :list="list" :msg="msg" @change-msg="change" @change-list="changeList"></ChildComp>
</template>
<style></style>
