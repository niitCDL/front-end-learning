<script setup>
import { ref, reactive, computed } from 'vue'
import greenSock from '../assets/images/socks_green.jpg'
import blueSock from '../assets/images/socks_blue.jpg'
import PrettyButton from './PrettyButton.vue';

const props = defineProps({
    vip: {
        type: Boolean,
        required: true,
        default: false
    }
})

const emits = defineEmits(['add-to-cart'])


const product = ref('Socks');
const brand = ref('Vue3');
const selectedIndex = ref(0);
const details = reactive(['50% cotton', '30% wool', '20% polyester'])

const varients = reactive([{
    id: 1001,
    color: 'green',
    image: greenSock,
    quantity: 50
},
{
    id: 1001,
    color: 'blue',
    image: blueSock,
    quantity: 0
}])

const title = computed(() => {
    return brand.value + ' ' + product.value
})

const image = computed(() => {
    return varients[selectedIndex.value].image
})

const inStock = computed(() => {
    return varients[selectedIndex.value].quantity > 0
})

const price = computed(() => {
    return props.vip ? 'Free' : 99.99;
})

const addToCart = () => {
    emits('add-to-cart', varients[selectedIndex.value].id)
}

const changeIndex = (index) => {
    selectedIndex.value = index;
}

</script>

<template>
    <div class="flex">
        <div class="flex-1">
            <img :src="image" alt="" class="w-[50%] md:w-[50%] border-4 border-solid border-ocean rounded-xl">
        </div>

        <div class="flex-1 text-2xl text-left">
            <p>{{ title }}</p>
            <p v-if="inStock">inStock</p>
            <p v-else>Out of Stock</p>
            <p>price:{{ price }}</p>

            <div class="w-12 h-12 my-2 rounded-full cursor-pointer" 
            :style="{backgroundColor:varient.color}" v-for="(varient, index) in varients" 
            :key="varient.id" :index="index"
            @mousemove="changeIndex(index)">
            </div>    
            
            <!-- <button class="h-16 px-10 py-4 mt-5 text-center text-cloud bg-purple rounded-[5px]"
             :class="inStock ? ['bg-midnight','cursor-pointer'] : ['bg-mist','cursor-not-allowed']"
             :disabled="!inStock" @click="addToCart">
                Add To Cart
            </button> -->
            <pretty-button @btn-click="addToCart" :is-active="inStock">
                <template #left>
                    <p>Add to Cart</p>
                </template>
                <template #right>
                    <span>+</span>
                </template>
            </pretty-button>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>