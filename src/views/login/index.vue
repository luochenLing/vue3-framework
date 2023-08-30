<template>

  <ElButton @click="clickHandle">登录</ElButton>
  <ElButton @click="setToken">设置token</ElButton>
  <button @click="clickHandle">登录</button>
  <el-button type="primary" @click="getReport">获取报表</el-button>
  <el-button type="success" @click="getListButtonHandle">导入配置查询</el-button>
  <el-button type="info" @click="getCompanyPlatformHandle">企业入库ID</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button plain>Plain</el-button>
  <el-button size="large" type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
  123123123
  <el-switch size="large" active-text="Open" inactive-text="Close" />
  <br />
  <el-switch active-text="Open" inactive-text="Close" />
  <br />
  <el-switch size="small" active-text="Open" inactive-text="Close" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '~/store/user'
import { postReportGetFileInfo,getListButtonImportColumn,postCompanyPlatformGetCompanyIDs } from '~/api/index'
const router = useRouter()
const userStore = useUserStore()
const clickHandle = () => {
  router.push({ path: '/home' })
}

const setToken = () => {
  userStore.setToken('123123')
}

const getReport =()=>{
  postReportGetFileInfo({id:'2a9638a2effb29dc8f5311891cf2237e'}).then(ret=>{
    console.log('芭芭拉',ret.data); 
  })
}

const getListButtonHandle =()=>{
  getListButtonImportColumn({formId:'197a7726430a4a4c89d6e3f4ec7f3428'}).then(ret=>{
    console.log('小魔仙',ret.columnId);
  })
}

const getCompanyPlatformHandle =()=>{
  postCompanyPlatformGetCompanyIDs({CategoryID:0}).then(ret=>{
    console.log('芭芭拉',ret); 
  })
}
</script>

<style scoped lang="scss"></style>
