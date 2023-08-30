import { createApp } from 'vue'
import './style.css'
import routers from './routers/index.ts'
import App from './App.vue'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App).use(routers).use(pinia).use(ElementPlus, { locale: zhCn }).mount('#app')

