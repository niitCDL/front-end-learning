<script setup>
import { reactive, ref } from 'vue';
import ProductDisplay from '../components/ProductDisplay.vue';

const vip = ref(true);
const cart = reactive([]);

const handleClick = (id)=>{
    cart.push(id);
}
</script>
<template>
    <div class="h-16 mb-6 bg-gradient-to-r from-ocean to-leaf">
    </div>
    <div class="my-6 mx-24 p-8 border border-solid border-mist bg-cloud float-right">
        Cart({{ cart.length }})
    </div>
    <main>
        <product-display :vip="vip" @add-to-cart="handleClick"></product-display>
    </main>
    
</template>



<style scoped>
    main{
        margin: 150px auto;
        width: 80%;
        height: 80vh;
        border: 1px solid lightgray;
    }
</style>