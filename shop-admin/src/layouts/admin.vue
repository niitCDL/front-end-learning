<script setup>

import FHeader from "./components/FHeader.vue";
import FMenu from "./components/FMenu.vue";
import FTagList from "./components/FTagList.vue";
import { useAdminStore } from '@/store'
import { storeToRefs } from 'pinia'

const store = useAdminStore()
const { sideWidth } = storeToRefs(store)

</script>

<template>
    <el-container>
        <el-header>
            <f-header></f-header>
        </el-header>

        <el-container>
            <el-aside :style="{ width: sideWidth }">
                <f-menu></f-menu>
            </el-aside>
            <el-main>
                <f-tag-list></f-tag-list>
                <router-view />
            </el-main>
        </el-container>

    </el-container>
</template>



<style scoped></style>