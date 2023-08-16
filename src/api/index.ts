
import request from "@/api/request"
import type { AxiosRequestConfig } from "axios";

export async function mergeFile(options: AxiosRequestConfig) {
    return await request.post("/uploader/mergeFile",options.data || {});
}

export async function getUserInfo(data:any) {
    return await request.post("/api/user/login",data);
}
