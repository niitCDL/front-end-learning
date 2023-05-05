import axios from "axios";
import { getToken } from '@/composables/auth'
import { toast } from "./composables/util";

const service = axios.create({
    baseURL: "http://127.0.0.1:4523/m1/2571709-0-default/api"
})

//添加请求拦截
service.interceptors.request.use((config) => {
    //获取cookie
    const token = getToken();
    //向header 中添加 token
    if (token) {
        config.headers['token'] = token;
    }
    return config;
}), (error) => {
    //对于请求出错 做出处理
    return Promise.reject(error);
}


//添加响应拦截
service.interceptors.response.use((response) => {
    //对响应数据处理
    return response.data;
}), (error) => {
    //对响应错误信息的处理
    toast(err.response.data.msg || '请求失败', 'error');
    return Promise.reject(error);
}




export default service