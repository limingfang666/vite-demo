<template>
    <div class="container">
        <header class="header">头部</header>
        <div class="main">
            <aside class="aside">侧边栏</aside>
            <main class="main">
                <router-view></router-view>
            </main>
        </div>

    </div>
</template>
<script lang="ts">
</script>
<style lang="scss" scoped>
.container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.header {
    width: 100%;
    height: 20%;
    background-color: #1f1e40;
}

.main {
    width: 100%;
    height: 80%;
    display: flex;

    .aside {
        width: 15%;
        height: 100%;
        background-color: #1f1e40;
        color: #FFFFFF;
    }

    .main {
        width: 85%;
        height: 100%;
    }
}
</style>