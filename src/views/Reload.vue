<template>
  <div class="page">
    <button @click="reloadFun">刷新</button>
    <button @click="onUserInfo">获取user信息</button>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/index"
import to from 'await-to-js'

export default {
  inject: ["reload"], // 使用 inject 注入 reload 变量
  data() {
    return {};
  },
  methods: {
    reloadFun() {
      this.reload(); // 直接使用
    },
    async onUserInfo(){
        let [err, res] = await to(getUserInfo())
        console.log(err, res);
        
    }
  },
  mounted() {}
};
</script>