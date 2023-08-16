<template>
    <uploader :options="options" :fileStatusText="fileStatusText" class="uploader-example" ref="uploaderRef"
    :auto-start="false" @file-added="onFileAdded" @files-added="onFilesAdded" @file-progress="onFileProgress"
        @file-success="onFileSuccess" @file-error="onFileError" @complete="onComplete" @file-complete="onFileComplete">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
            <p>拖动文件到这里上传</p>
            <uploader-btn :attrs="attrs">选择文件</uploader-btn>
            <!--      <uploader-btn :attrs="attrs">select images</uploader-btn>-->
            <!-- <uploader-btn :directory="true">选择文件夹</uploader-btn> -->
        </uploader-drop>
        <uploader-list></uploader-list>
    </uploader>
</template>
<script lang="ts" setup>
import { ACCEPT_CONFIG } from "@/utils/accept"
import { ElNotification } from 'element-plus'
import to from 'await-to-js'
import { mergeFile } from "@/api/index"
import SparkMD5 from 'spark-md5'

const options = {
    target: import.meta.env.VITE_APP_BASE_API + "/uploader/chunk", // 目标上传 URL
    chunkSize: 2 * 1024 * 1000,  //分块大小
    fileParameterName: 'upfile', //上传文件时文件的参数名，默认file
    maxChunkRetries: 3, //最大自动失败重试上传次数
    testChunks: true, //是否开启服务器分片校验
    checkChunkUploadedByResponse: function (chunk: any, message: any) {
        console.log(chunk, message);
        let objMsg = JSON.parse(message);
        console.log(objMsg);

        // skipUpload与后端约定
        if (objMsg.skipUpload) return true;

        console.log(objMsg.uploadedChunks, chunk.offset + 1);
        // 断点续传
        console.log(objMsg.uploadedChunks instanceof Array);

        // return (objMsg.uploadedChunks || []).indexof(chunk.offset + 1) >= 0;
        // 这里返回值 objMsg.uploadedChunks为[1] ;chunk.offset + 1为1，使用indexof会报错
        return (objMsg.uploadedChunks || []).includes(chunk.offset + 1);
    },
    //格式化时间
    parseTimeRemaining: function (parsedTimeRemaining: any) {
        return parsedTimeRemaining
            .replace(/\syears?/, "年")
            .replace(/\days?/, "天")
            .replace(/\shours?/, "小时")
            .replace(/\sminutes?/, "分钟")
            .replace(/\sseconds?/, "秒");
    },
};

const attrs = {
    accept: ACCEPT_CONFIG.getAll()
}

const fileStatusText = {
    success: '文件上传成功',
    error: '文件上传失败',
    uploading: '上传中',
    paused: '正在处理...',
    waiting: '等待'
}

const onFileAdded = (file: File) => {
    compileMd5(file);
}

// 多文件上传
const onFilesAdded = (files: any, fileList: []) => {
    console.log("files:", files, "--fileList:", fileList)
    for (let i = 0; i < files.length; i++) {
        compileMd5(files[i]);
    }
}

const onFileProgress = () => {

}

// 文件上传成功后，发起合并文件的请求
const onFileSuccess = async (file: any) => {
    console.log("上传成功");
    // 后台需要默认的refProjectId
    file.refProjectId = "file-loader-666";
    const [res, err] = await to(mergeFile({ "data": file }));
    console.log(res, err);
}

const onFileError = () => error(fileStatusText.error);
const onComplete = () => console.log("onComplete--------");
const onFileComplete = () => console.log("onFileComplete--------");

const compileMd5 = (file: any) => {
    file.pause();

    // 限制文件大小
    let tooLarge = fileSizeLimit(file);
    if (tooLarge) return error("文件大小不能超过2G");

    // 声明变量
    let fileReader = new FileReader();
    // ts下不支持File.prototype.mozSlice || File.prototype.webkitSlice;
    // let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    let blobSlice = File.prototype.slice;
    let spark = new SparkMD5.ArrayBuffer();
    let currentChunk = 0;
    let chunkSize = options.chunkSize;
    let totalChunk = Math.ceil(file.size / chunkSize);
    let time = new Date().getTime();

    // 文件状态设为"计算MD5"
    fileStatusText.paused = "MD5计算中";

    loadNext(); // 要先执行一次,读取到文件

    fileReader.onload = (e) => {
        spark.append(e.target?.result);

        // if (currentChunk < totalChunk) {
        if (currentChunk < 1) {
            // 读取下一个分片
            loadNext();
        } else {
            // 分片读取完成,将计算完的md5赋值为文件的唯一标识
            let md5 = spark.end();
            file.uniqueIdentifier = md5;
            file.resume();
            spark.destroy(); //释放缓存
            console.log("md5计算完成。文件名：" + file.name + "; 总用时：" + (new Date().getTime() - time) + "ms; md5:" + md5 + "; 分片总数为：" + totalChunk);
        }
    }

    fileReader.onerror = () => {
        file.cancel();
        error("文件读取失败");
    }

    function loadNext() {
        // 获取分片起始位置
        let start = currentChunk * chunkSize;
        let end = start + chunkSize >= file.size ? file.size : start + chunkSize; //end为+chunkSize的大小

        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end));
        console.log("计算第" + currentChunk + "块");
        currentChunk++;
    }
}

const fileSizeLimit = (file: any) => {
    console.log(file);

    // 单个文件限制2G
    let limitSize = 2 * 1024 * 1024 * 1024;
    let fileSize = file.size;
    console.log("文件限制大小:" + limitSize, "文件大小:" + fileSize);
    return fileSize > limitSize;
}

const error = (msg: string) => {
    ElNotification({
        title: 'error',
        message: msg,
        type: 'error',
        // 值为0则不会关闭
        duration: 2000,
    })
}


</script>
<style lang="scss" scoped>
.uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    font-family: Microsoft YaHei;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
}

.uploader-example .uploader-btn {
    margin-right: 4px;
    font-size: 12px;
    border-radius: 3px;
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
}

.uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>