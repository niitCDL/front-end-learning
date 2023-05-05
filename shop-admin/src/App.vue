<script setup>

</script>

<template>
  <!-- <button class="btn">按钮</button> -->
  <router-view/>
</template>

<style>
.btn {
  @apply mx-10 my-10 bg-red-600 text-white px-10 py-2 rounded-full hover: (bg-red-900) focus:(ring-8 ring-red-400) transition-all duration-500
}
#nprogress .bar{
  background-color: #3cb6ea !important;
  height: 5px !important;
}

.f-center {
  @apply flex justify-center items-center;
}

.f-around {
  @apply flex justify-around items-center;
}

.f-between {
  @apply flex justify-between items-center;
}

.v-center {
  @apply flex items-center;
}
</style>  
