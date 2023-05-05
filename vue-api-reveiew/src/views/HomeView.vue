<script setup>

</script>

<template>
    <nav>
        <router-link to="/about">ref和reactive</router-link>
        <router-link to="/about">toRef toRefs toRaw</router-link>
        <router-link to="/about">computed</router-link>
        <router-link to="/about">watch</router-link>
        <router-link to="/about">watchEffect</router-link>
        <router-link to="/about">component</router-link>
        <router-link to="/about">directive</router-link>
        <router-link to="/about">hooks</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
</template>

<style scoped>
nav{
  position: fixed;
  width: 100%;
  height: 80px;
  line-height: 80px;
  top: 0;
  left: 0;
  margin: 0;
  text-align: center;
  font-size: 30px;
  background-color: aquamarine;
}
a{
  display: inline-block;
  text-decoration: none;
  margin-right: 40px;
}
</style>
