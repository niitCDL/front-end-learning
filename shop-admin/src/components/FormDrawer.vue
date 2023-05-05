<script setup>
import { ref } from "vue";

const showDrawer = ref(false);

const props = defineProps({
    title: {
        type: String,
        default: '标题'
    },
    size: {
        type: String,
        default: '45%'
    },
    destoryOnClose: {
        type: Boolean,
        default: false
    },
    confirmText: {
        type: String,
        default: '提交'
    },
})

const loading = ref(false);
const showLoading = () => loading.value = true;
const hideLoading = () => loading.value = false;


//打开
const open = () => showDrawer.value = true;
//关闭
const close = () => showDrawer.value = false;

//向父组件暴露方法
defineExpose({
    open, close,showLoading,hideLoading
})

const emits = defineEmits(['submit'])
const submit = () => emits('submit');


</script>

<template>
    <el-drawer v-model="showDrawer" :title="title" :size="size" :close-on-click-modal="false" :destroy-on-close="destoryOnClose">
        <div class="form-drawer">
            <div class="body">
                <slot name="form"></slot>
            </div>

            <div class="actions">
                <el-button type="primary" @click="submit" :loading="loading">{{ confirmText }}</el-button>
                <el-button type="default" @click="close">取消</el-button>
            </div>
        </div>
    </el-drawer>
</template>


<style scoped>
.form-drawer {
    @apply w-full h-full relative flex flex-col
}

.form-drawer .body {
    @apply absolute top-0 left-0 right-0 overflow-y-auto flex-1
}

.form-drawer .actions {
    @apply h-[60px] mt-auto flex items-center
}
</style>