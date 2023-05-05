import { defineStore } from 'pinia'
import { adminLogin, getInfo, logout } from '../api/admin';
import { setToken, removeToken } from "@/composables/auth"

export const useAdminStore = defineStore('admin', {
    state: () => ({
        token: '',
        adminInfo: {},
        sideWidth: '220px'
    }),
    actions: {
        adminLogin(username, password) {
            return new Promise((resolve, reject) => {
                adminLogin(username, password).then((res) => {
                    if (res.data) {
                        setToken(res.data.token);
                    }
                    resolve(res);
                }).catch(err => reject(err))
            })
        },
        getInfo() {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    console.log('getInfo')
                    console.log(res);
                    this.adminInfo = res.data;
                    resolve(res);
                })
            }).catch(err => reject(err))
        },
        adminLogout() {
            //调用登出接口
            return new Promise((resolve, reject) => {
                logout().then((res) => {
                    //移除cookie中的token
                    removeToken();
                    //清空状态
                    this.adminInfo = {}
                    resolve(res);
                }).catch(err => reject(err));
            })
        },
        //伸缩
        handleSideWidth(){
            this.sideWidth = this.sideWidth === '220px' ? '80px' : '220px'
        }
    }
})