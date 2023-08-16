import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  plugins: [vue(),
    viteMockServe({
      mockPath: "src/mock",//设置mock文件存储目录
      localEnabled: true,//设置是否启用本地mock文件
      prodEnabled: true,//设置打包是否启用 mock 功能
      watchFiles: true,//设置是否监视mockPath对应的文件夹内文件中的更改
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,//如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
      logger: true,//是否在控制台显示请求日志
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

    // 强制预构建插件包
    optimizeDeps: {
      include: ['axios'],
    },

  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    sourcemap: true
  },

  // 本地运行配置，及反向代理配置
  server: {
    host: '127.0.0.1',//设置为0000或者127.0.0.1:80可能监听的是其他服务端口，导致跨域失败
    port: 80,
    // cors: true, // 默认启用并允许任何源
    // open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    // proxy: {// 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
    //   '/api': {
    //     target: 'http://localhost:8090', // 通过代理接口访问实际地址。这里是实际访问的地址。vue会通过代理服务器来代理请求
    //     changeOrigin: true,
    //     ws: true,  // 允许websocket代理
    //     rewrite: (path) => path.replace(/^\/api/, '') // 将api替换为空
    //   }
    // }
  }
})
