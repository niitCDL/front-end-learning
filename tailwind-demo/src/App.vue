<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <p class="text-blue-600 md:text-green-600">
    The quick brown fox...
  </p>
  <button class=" bg-slate-950 rounded w-52 h-20 ml-3  text-white font-normal">CLick</button>
  <nav class="w-full h-16 bg-lime-400 text-center text-3xl pt-3 text-purple-900">
    <RouterLink class="mr-4" to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main class="mb-32">
    <RouterView />
  </main>

  <div class="grid grid-cols-4 gap-4 w-1/2">
    <div class="bg-fuchsia-700 text-white font-bold text-center leading-10 text-lg h-20">1</div>
    <!-- ... -->
    <div class="bg-fuchsia-700">9</div>
    <div class="bg-fuchsia-700">10</div>
    <div class="bg-fuchsia-700">10</div>
    <div class="bg-fuchsia-700">10</div>
  </div>

  <div class="test-grid grid grid-cols-6 gap-4 mt-5 text-rose-900 font-bold  text-5xl text-center">
    <div class="col-start-2 col-span-4 ...">1</div>
    <div class="col-span-1">4</div>
    <div class="col-start-1 col-end-3 ...">2</div>
    <div class="col-span-4 ...">2</div>
    <!-- <div class="col-end-7">3</div> -->
    <div class="col-start-1 col-end-7 ...">4</div>
  </div>

  <div class="mt-10 mb-10 h-96 grid grid-rows-2 grid-flow-col gap-4">
    <div class="bg-fuchsia-700">1</div>
    <div class="bg-fuchsia-700">2</div>
    <div class="bg-fuchsia-700">3</div>
    <div class="bg-fuchsia-700">4</div>
    <div class="bg-fuchsia-700">5</div>
    <div class="bg-fuchsia-700">6</div>
    <div class="bg-fuchsia-700">1</div>
    <div class="bg-fuchsia-700">2</div>
    <div class="bg-fuchsia-700">3</div>
    <div class="bg-fuchsia-700">4</div>
    <div class="bg-fuchsia-700">5</div>
    <div class="bg-fuchsia-700">6</div>
  </div>


  <div class="test-grid grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 ...">1</div>
    <div class="col-span-2 ...">2</div>
    <div class="row-span-2 col-span-2 ...">3</div>
</div>

  <div class="mt-7 test-grid grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3">1</div>
    <!-- <div class="">2</div>
      <div class="">3</div> -->
  <div class="col-span-2">4</div>
    <div class="row-span-2 col-span-2">5</div>
    <!-- <div class="">6</div> -->
    <!-- <div class="">7</div> -->
    <!-- <div class="">8</div>
      <div class="">9</div> -->
  </div>
  <div class="mt-7 test-grid grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-start-2 row-span-2 ...">1</div>
    <div class="row-end-3 row-span-2 ...">2</div>
    <div class="row-start-1 row-end-4 ...">3</div>
  </div>
  
  <div class="grid grid-cols-3 gap-4">
    <div class=" bg-slate-800">1</div>
    <div class=" bg-slate-800">1</div>
    <!-- <div class=" bg-slate-800">1</div> -->
    <!-- ... -->
  </div>
</template>

<style scoped>
.test-grid div {
  background-color: aquamarine;
}
</style>
