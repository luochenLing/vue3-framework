import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
/**
 * 初始化echarts
 * @param echartsArr 注册的exahrts组件
 * @param elementId 绑定的domid
 * @returns 
 */
export const useEchartsOption = (
  echartsArr: any[] = [],
  elementId: string = 'main'
) => {
  // 基础的组件
  const arr = [
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    LegendComponent,
    UniversalTransition,
    CanvasRenderer,
  ]

  echarts.use([...arr, ...echartsArr])
  return echarts.init(document.getElementById(elementId))

}
