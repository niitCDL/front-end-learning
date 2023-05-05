<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <RouterLink to="reactive">响应式API</RouterLink>
    <RouterLink to="/about">组件</RouterLink>
    <RouterLink to="homework">作业</RouterLink>
    <RouterLink to="use">组件化</RouterLink>
    <RouterLink to="docs">MyToDocsView</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
  
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

main{
  width: 85%;
  height: 85vh;
  border: 1px solid lightgray;
  margin: 100px auto;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  background-color: rgba(211, 22, 170,.6);
  text-align: center;
}

nav a{
  text-decoration: none;
  padding-right: 30px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}



</style>
