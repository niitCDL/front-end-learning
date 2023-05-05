<script setup>

import { storeToRefs } from 'pinia'
import { useAdminStore } from '@/store'
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue';
import FormDrawer from '@/components/FormDrawer.vue'
import { useLogout, useRepassword } from '@/composables/useAdmin'

const store = useAdminStore();
const { adminInfo, sideWidth } = storeToRefs(store);
const { getInfo, handleSideWidth } = store;

const { handleLogout } = useLogout();
const {
    form, rules, formRef, formDrawerRef, onSubmit, rePassRule, rePassword
} = useRepassword();

const {
    //是否全屏,默认为false(不全屏)
    isFullscreen,
    toggle
} = useFullscreen()

const refresh = () => {
    location.reload();
}



const settingDrawerRef = ref(null);


const showSettingDrawer = () => {
    settingDrawerRef.value.open();
}

console.log('Fheader')
getInfo()



</script>
<template>
    <div class="v-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0 h-16">
        <div class="text-xl w-[220px] h-full bg-blue-500 transition-all duration-500" :class="sideWidth === '220px' ? 'v-center' : 'f-center'"
            :style="[{ width: sideWidth }]">
            <el-icon class="mr-1 text-3xl">
                <ElementPlus />
            </el-icon>

            <span v-show="sideWidth === '220px'">极客空间</span>
        </div>

        <el-icon class="icon-btn">
            <Fold v-if="sideWidth === '220px'" @click="handleSideWidth" />
            <Expand v-else @click="handleSideWidth" />
        </el-icon>


        <div class="v-center ml-auto">
            <el-icon class="icon-btn">
                <Refresh @click="refresh" />
            </el-icon>
            <el-icon class="icon-btn" @click="toggle">
                <FullScreen v-if="!isFullscreen" />
                <Aim v-else />
            </el-icon>
            <el-icon class="icon-btn">
                <Printer />
            </el-icon>
            <el-icon class="icon-btn">
                <Setting @click="showSettingDrawer" />
            </el-icon>


            <el-dropdown class="f-center mx-5 h-64 cursor-pointer">
                <span class="v-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="adminInfo.avatar" />
                {{ adminInfo.username }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="rePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</div>

    <!-- ref="formDrawerRef"的作用是拿到当前组件引用 可以使用组件内暴露方法 -->
    <form-drawer ref="formDrawerRef" destoryOnclose @submit="onSubmit" confirmText="修改">
        <template #form>
            <el-form label-width="80px" :model="form" :rules="rules" ref="formRef">
            <el-form-item label="旧密码" prop="oldpassword">
                <el-input placeholder="请输入旧密码" v-model="form.oldpassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                    <el-input placeholder="请输入新密码" show-password v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword">
                    <el-input placeholder="请输入确认密码" show-password v-model="form.repassword"></el-input>
                </el-form-item>
            </el-form>
        </template>
    </form-drawer>

    <form-drawer ref="settingDrawerRef" destoryOnclose confirmText="设置">
        <template #form>
            <el-form label-width="80px" :model="form" :rules="rules" ref="formRef">
                <el-form-item label="旧密码" prop="oldpassword">
                    <el-input placeholder="请输入旧密码" v-model="form.oldpassword"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input placeholder="请输入新密码" show-password v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword">
                    <el-input placeholder="请输入确认密码" show-password v-model="form.repassword"></el-input>
                </el-form-item>
            </el-form>
        </template>
    </form-drawer>
    <!-- <el-drawer v-model="showDrawer" title="修改密码" :with-header="true" size="30%" :close-on-click-modal="false">
                                                        <el-form label-width="80px" :model="form" :rules="rules" ref="formRef">
                                                            <el-form-item label="旧密码" prop="oldpassword">
                                                                <el-input placeholder="请输入旧密码" v-model="form.oldpassword"></el-input>
                                                            </el-form-item>
                                                            <el-form-item label="新密码" prop="password">
                                                                <el-input placeholder="请输入新密码" show-password v-model="form.password"></el-input>
                                                            </el-form-item>
                                                            <el-form-item label="确认密码" prop="repassword">
                                                                <el-input placeholder="请输入确认密码" show-password v-model="form.repassword"></el-input>
                                                            </el-form-item>
                                                            <el-form-item>
                                                                <el-button class="bg-indigo-500 text-light-50 w-full p-4 rounded-full" @click="onSubmit" :loading="loading">提交</el-button>
                                                            </el-form-item>
                                                        </el-form>
                                                    </el-drawer> -->



    <!-- <div class="p-3 flex space-x-5">
                                                                                                <h2>{{ adminInfo.username }}</h2>
                                                                                                <img :src="adminInfo.avatar" alt="图片未找到" class="w-32 h-32 rounded-full">
                                                                                                <el-button type="primary" @click="handleLogout">退出登录</el-button>
                                                                                            </div> -->
</template>


<style scoped>
.icon-btn {
    @apply flex justify-center items-center mx-1 cursor-pointer;
}

.icon-btn:hover {
    @apply bg-indigo-300;
}
</style>