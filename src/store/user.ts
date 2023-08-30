import { defineStore } from 'pinia'
import { ref } from 'vue'

// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore(
  'user',
  () => {
    /**
     * 用户token
     */
    const _token = ref<string>('')

    /**
     * 设置token
     * @param token
     */
    const setToken = (token: string) => {
      return (_token.value = token)
    }
    
    return {
      setToken,
      _token,
    }
  },
  {
    // @ts-ignore
    persist: true,
  }
)
