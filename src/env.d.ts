/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{} | any, {}, any>
  export default component
}
declare module 'vue-router'
declare module 'element-plus'
declare module '@element-plus/icons-vue'
declare module '@element-plus/icons-vue/global'
declare module 'element-plus/lib/locale/lang/zh-cn'
declare module 'rollup-plugin-external-globals';


