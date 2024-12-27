<template>
  <router-view v-slot="{ Component }" v-if="isRouterAlive">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script lang="ts">
export default {
  name: 'App',
  provide() {
    // 在祖先组件中通过 provide 提供变量
    return {
      reload: this.reload, //  声明一个变量
    };
  },
  data() {
    return {
      isRouterAlive: true, // 控制 router-view 是否显示达到刷新效果
    };
  },
  methods: {
    // provide中声明的变量
    reload() {
      // 通过 this.isRouterAlive 控制 router-view 达到刷新效果
      this.isRouterAlive = false;
      console.log('页面刷新');

      this.$nextTick(function () {
        this.isRouterAlive = true;
        console.log('刷新了');
      });
    },
  },
};
</script>
