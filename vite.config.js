import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

export default defineConfig({
  build: {
    sourcemap: false,
    target: 'esnext',
    outDir: 'big-data-platform',
  },
  server: {
    proxy: {
      "/api": {
        target: "http://xxxx.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/vue.global.js',
        },
        // 没有这个会导致elementui引入报错，这个库是兼容vue版本的
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/vue-demi_0.14.0_index.iife.js',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/vue-router.global.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/element-plus/index.js',
          css: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/element-plus/index.css',
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/element-plus/element-icons.js',
        },
        {
          name: 'element-plus/lib/locale/lang/zh-cn',
          var: 'ElementPlusLocaleZhCn',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/element-plus/element-local.js',
        },
        {
          name: 'pinia',
          var: 'Pinia',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/pinia.iife.prod.js',
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/echarts_5.4.3.min.js',
        },
        {
          name: 'axios',
          var: 'axios',
          path: '//phoenix-collaboration.oss-cn-hangzhou.aliyuncs.com/vueCdn/big-data-platform/axios.min.js',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src/components'),
    },
  },
})
