import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from 'pinia'
import { useAdminStore } from '@/store'
import { showModal, toast } from '@/composables/util'
import { updatePassword } from '@/api/admin'

export function useRepassword() {
    const form = reactive({
        oldpassword: '123456',
        password: 'admin',
        repassword: 'admin'
    })
    
    const rePassRule = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('确认密码不能为空'));
        } else if (value !== form.password) {
            callback(new Error('确认密码与新密码不一致'));
        } else {
            callback();
        }
    }
    
    const rules = {
        oldpassword: [{
            required: true,
            message: '旧密码不能为空',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
        }],
        repassword: [
            {
                required: true,
                message: '确认密码不能为空',
                trigger: 'blur'
            },
            {
                validator: rePassRule,
                trigger: 'blur'
            }],
    }

    const router = useRouter();
    const store = useAdminStore();
    const { adminLogout } = store;
    
    const formRef = ref(null);
    const formDrawerRef = ref(null);
    const rePassword = () => {
        formDrawerRef.value.open();
    }
    const loading = ref(false);
    
    const onSubmit = () => {
        console.log(formRef)
        formRef.value.validate((valid) => {
            if (!valid) {
                console.log("失败")
                return false;
            }
            formDrawerRef.value.showLoading();
            //向后台发送请求
            setTimeout(() => {
                updatePassword(form).then((resp) => {
                    console.log(JSON.stringify(resp));
                    //将token存入cookie中
                    if (resp.code == 1) {
                        toast('修改密码成功, 请重新登录');
                        adminLogout().then(() => {
                            router.push('/login')
                        });
                    } else {
                        toast(resp.msg, 'error');
                    }
                }).finally(() => {
                    formDrawerRef.value.hideLoading();
                })
            }, 1000)
        })
    }

    return {
        form,rules,formRef,formDrawerRef,onSubmit,rePassRule,rePassword
    }

    
}

export function useLogin() {

}

export function useLogout() {
    const router = useRouter();
    const store = useAdminStore();
    const { adminLogout } = store;
    const handleLogout = () => {

        showModal('是否要退出登录?').then(() => {
            adminLogout().then(() => {
                console.log('退出登录开始');
                router.push('/login');
            })
        })
    }
    return {
        handleLogout
    }
}