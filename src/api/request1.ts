import axios from "axios";
import { ElMessage } from 'element-plus'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

axios.defaults.timeout = 10000;

// 对请求头进行处理（token）
axios.interceptors.request.use(configs => {
    let token = sessionStorage.getItem("token");
    if (token) {
        configs.headers.authorization = token;
    }
    return configs;
});

// 处理返回数据
axios.interceptors.response.use(response => {
    // 将返回的token设置到sessionStorage中的token
    if (response.headers.authorization) {
        sessionStorage.setItem("token", response.headers.authorization);
    }
    return response;
}, error => {
    let { status, data } = error.response;
    let { message, errorDetail } = error.response.data;

    if (error.code === "ECONNABORTED" || error.code === "ERR_BAD_RESPONSE") {
        ElMessage.error("网络状态异常，请稍后重试");
        return;
    } else if (error.message === "timeout of 10000ms exceeded") {
        // 连接超时
        ElMessage.error("连接超时");
        return;
    } else if (status === 401 || status === 402 || status === 403) {
        // 没有权限，需要重新登录
        ElMessage.error("token失效或无权限，正跳转登录页面......");
        sessionStorage.clear();
        // location.href = import.meta.env.VITE_APP_BASE_URL + "login";
        return;
    } else if (status === 404) {
        ElMessage.error("此地址不可用");
        // location.href = import.meta.env.VITE_APP_BASE_URL + "404";
    } else if (status === 500) {
        ElMessage.error("内部服务器异常");
        return;
    }

    // 对返回的错误信息进行统一处理
    if (!data) {
        ElMessage.error("服务器异常");
        return;
    };

    if (errorDetail) {
        message += " : " + errorDetail;
    } else {
        message = "错误: " + error.response.statusText
    }
    ElMessage.error(message);
    // 错误信息需要抛出，才能在组件中捕获到
    throw error;
});

export default axios;