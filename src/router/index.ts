import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// const Home = () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue')
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');

// defineAsyncComponent异步加载
const FastUploader = defineAsyncComponent(
  () =>
    import(/* webpackChunkName: "fast-loader" */ '../views/FastUploader.vue'),
);
const Reload = () =>
  defineAsyncComponent(
    () => import(/* webpackChunkName: "reload" */ '@/views/Reload.vue'),
  );

const NotFound = () =>
  import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue');

const routes = [
  {
    path: '/',
    redirect: '/screen',
  },
  {
    path: '/screen',
    meta: { title: '大屏可视化' },
    component: () => import('../views/screen/index.vue'),
  },
  {
    path: '/',
    component: Home,
    meta: { title: '首页' },
    children: [
      {
        path: '/fastLoader',
        name: 'fastLoader',
        component: FastUploader,
      },
      {
        path: '/reload',
        name: 'reload',
        component: Reload,
      },
    ],
  },
  { path: '/:pathMatch(.*)', name: 'notfound', component: NotFound },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
