<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { toast } from "@/composables/util";
import { useAdminStore } from '@/store'


const router = useRouter();

const store = useAdminStore();

const { adminLogin } = store;

const form = reactive({
    username: 'admin',
    password: '123456'
})


const rules = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        },
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        },
    ]
}

const formRef = ref(null)

const loading = ref(false);

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            console.log("失败")
            return false;
        }
        loading.value = true;
        //向后台发送请求
        setTimeout(() => {
            adminLogin(form.username, form.password).then((resp) => {
                console.log(JSON.stringify(resp));
                toast(resp.msg, resp.code == 1 ? 'success' : 'error');
                //将token存入cookie中
                if (resp.code == 1) {
                    router.push('/');
                }
            }).finally(() => {
                loading.value = false;
            })
        }, 1000)

    })
}
//监听回车事件e
function onKeyUp(e) {
    if (e.key == "Enter") onSubmit();
}

onMounted(() => {
    document.addEventListener('keyup', onKeyUp);
})

//移除键盘监听
// onBeforeUnmount(() => {
//     document.removeEventListener('keyup', onKeyUp);
// })

</script>

<template>
    <el-row class="w-full h-screen ">
        <el-col :lg="16" :md="12" class="bg-indigo-500 flex flex-col text-white justify-center items-center">
            <p class="text-5xl font-bold">shop admin</p>
            <p class="text-3xl">shop admin</p>
        </el-col>
        <el-col :lg="8" :md="12" class="flex flex-col justify-center items-center">
            <h2 class="text-gray-600 text-3xl font-bold">后台登录</h2>
            <div class="flex justify-center items-center my-5 space-x-2">
                <span class="h-[1px] w-16 bg-gray-700"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-700"></span>
            </div>
            <!-- :model="form" :rules="rules" -->
            <el-form :model="form" :rules="rules" ref="formRef">
                <!-- prop:rules数组中的username属性 绑定校验规则 -->
                <el-form-item label="Username" prop="username">
                    <el-input type="text" placeholder="Username" v-model="form.username">
                        <template #prefix>
                            <el-icon>
                                <user />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item label="Password" class="ml-1" prop="password">
                    <el-input type="password" placeholder="Password" v-model="form.password">
                        <template #prefix>
                            <el-icon>
                                <lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button class="w-full py-4 bg-indigo-600 text-white rounded-full" type="primary" size="default"
                        @click="onSubmit" :loading="loading">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>



<style scoped></style>