<template>
  token:{{ userStore._token }}
  <el-button @click="clickHandle">返回登录</el-button>
  <button @click="updateData">修改值</button>
  <div id="main"></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '~/store/user'
import type { ECharts } from 'echarts/core'
import { onMounted, ref } from 'vue'
import { BarChart } from 'echarts/charts'
import { useEchartsOption } from '~/utils/echarts_handler'
// 指定图表的配置项和数据
const option = ref({
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
})

const userStore = useUserStore()
const router = useRouter()

const myChart = ref<ECharts | null>()

onMounted(() => {
  myChart.value = useEchartsOption([BarChart], 'main')
  // 使用刚指定的配置项和数据显示图表。
  myChart.value?.setOption(option.value)
})

const updateData = () => {
  option.value.series = [
    {
      name: '销量',
      type: 'bar',
      data: [15, 2, 6, 20, 40, 90],
    },
  ]
  myChart.value?.setOption(option.value)
}

const clickHandle = () => {
  router.push({ path: '/' })
}
</script>

<style scoped lang="scss">
#main {
  width: 400px;
  height: 400px;
}
</style>
