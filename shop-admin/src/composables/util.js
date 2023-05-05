import { ElMessageBox, ElNotification } from "element-plus";
import nProgress from "nprogress";

//封装消息提示组件
export function toast(message, type = "success") {
    ElNotification({
        message,
        type,
        duration: 2000
    })
}

//显示全局进度条
export function showFullLoading() {
    nProgress.start();
}

//显示全局进度条
export function hideFullLoading() {
    nProgress.done();
}

export function showModal(content = "提示内容", type = "warning", title = "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText:'确认',
            cancelButtonText:'取消',
            type
        }
    )
}