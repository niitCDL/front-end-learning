<template>
    <div>
        <h1>IT技术界面</h1>
        <router-link to="test">三级路由1</router-link>
        <router-link to="test2">三级路由2</router-link>
    </div>
    <main>
        <router-view></router-view>
    </main>
    
</template>

<script setup>

</script>

<style scoped>
main{
    width: 80%;
    height: 85vh;
    border: 1px solid red;
    margin: 0 auto;
}
.router-link-active{
    color: blueviolet !important;
}
</style>