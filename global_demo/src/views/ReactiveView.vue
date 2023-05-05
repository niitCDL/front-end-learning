<script setup lang="ts">
import { reactive, toRaw, toRefs, ref, computed, watch } from 'vue';
import { useToggle } from '@vueuse/shared'


const person = reactive({
    name: '张三',
    title: '粗鲁将士',
    age: 30
})


let { name, title, age } = toRefs(person);



const change = () => {
    name.value = '关羽',
        title.value = '有勇有谋的将士',
        age.value++;
}


const count = ref(0);

const countVal = computed(() => count.value + 120)

const changeCount = () => {
    count.value++;
}

const str = ref('此时此刻');

// let info = reactive({
//     id: 1,
//     title: '软件2242'
// })


// setTimeout(() => { 
//     // str.value = '彼时彼刻' 
//     info.id = 2;
//     info.title = '软件2241'
// }, 2000);
// // watch方法参数说明: 数据 当数据发生改变的回调函数 配置项
// //回调函数的第一个参数为改变的值 第二个参数为旧值
// watch(()=>JSON.stringify(info), (newValue, oldValue) => {
//     console.log(newValue + "," + oldValue);
// }, {})


let game = reactive({
    title:'权力的游戏',
    player:{
        name:'张三',
        age:22
    }
})




</script>

<template>
    <h1>{{ name }} {{ title }} {{ age }}</h1>
    <button @click="change">改变</button>

    <div>
        <h1>计算属性</h1>
        <h1>{{ countVal }}</h1>
        <button @click="changeCount">+1</button>
    </div>

</template>



<style lang="scss" scoped></style>