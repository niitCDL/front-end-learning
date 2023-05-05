<script setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { onMounted, watch, watchEffect } from 'vue';
const count = ref(0);
const countVal = computed(() => {
    return count.value + 10;
})

const changeCount = () => {
    count.value++;
}

let person = reactive({
    name: null,
    age: null,
    hobby: null,
    practiceTime: null,
    fans:{
        name:'苏珊'
    }
});

const computedPersonVal = computed(() => {
    person.name = 'zs';
    person.age = 28;
    person.hobby = '打篮球';
    person.practiceTime = '练习时长两年半';
    return person;
})

const changeObjVal = () => {
    person.name = '你坤哥';
    person.age++;
    person.hobby = '唱跳RAP篮球';
    person.practiceTime = '一坤年';
    person.fans.name = '油饼';
    console.log(person);
}

setTimeout(() => {
    person.name = '你鸡哥';
}, 2000);
setTimeout(() => {
    person.fans.name = '小黑子';
}, 2000);


watch(() => [person.name,JSON.stringify(person.fans)], (newValue, oldValue) => {
    console.log('watch监听 newValue:' + newValue + ' oldValue:' + oldValue);
},{deep:true})

watchEffect(()=>{
    console.log('watchEffect监听到了person.name发生了改变成:' + person.name);
    console.log('watchEffect监听到了person.fans.name发生了改变成:' + person.fans.name);
});


</script>

<template>
    <h1>{{ countVal }}</h1>
    <button @click="changeCount">增加计算属性</button>
    <h1>{{ computedPersonVal }}</h1>
    <button @click="changeObjVal">改变对象的值</button>
</template>



<style  scoped>
button {
    display: block;
    width: 100px;
    height: 50px;
    border-radius: 8px;
    background-color: rgba(170, 28, 87, .6);
}
</style>