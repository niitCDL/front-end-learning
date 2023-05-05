<template>
    <el-result icon="warning" title="404 提示" sub-title="您找的页面不存在~">
        <template #extra>
            <el-button type="primary" @click="$router.push('/')">Back</el-button>
        </template>
    </el-result>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>