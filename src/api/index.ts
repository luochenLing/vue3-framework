/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = undefined as any

/**
 * 接口 应用层字段自动触发 的 **请求类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `GET /business/delRedisKey`
 */
export interface GetBusinessDelRedisKeyRequest {
  /**
   * key
   */
  key?: string
}

/**
 * 接口 应用层字段自动触发 的 **返回类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `GET /business/delRedisKey`
 */
export interface GetBusinessDelRedisKeyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用层字段自动触发 的 **请求配置的类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `GET /business/delRedisKey`
 */
type GetBusinessDelRedisKeyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/delRedisKey', undefined, string, 'key', false>
>

/**
 * 接口 应用层字段自动触发 的 **请求配置**
 *
 * @分类 A业务流应用层A
 * @请求头 `GET /business/delRedisKey`
 */
const getBusinessDelRedisKeyRequestConfig: GetBusinessDelRedisKeyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/business/delRedisKey',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['key'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDelRedisKey',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用层字段自动触发 的 **请求函数**
 *
 * @分类 A业务流应用层A
 * @请求头 `GET /business/delRedisKey`
 */
export const getBusinessDelRedisKey = /*#__PURE__*/ (
  requestData: GetBusinessDelRedisKeyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDelRedisKeyResponse>(prepare(getBusinessDelRedisKeyRequestConfig, requestData), ...args)
}

getBusinessDelRedisKey.requestConfig = getBusinessDelRedisKeyRequestConfig

/**
 * 接口 应用层字段自动触发 的 **请求类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnAutoApply`
 */
export interface PostBusinessDesignBusinessColumnAutoApplyRequest {
  /**
   * 自动触发标识 1:字段失焦自动触发
   */
  autoFlag?: string
  /**
   * 基础信息id
   */
  billRuleId?: string
  /**
   * 子表模型id
   */
  childId?: string
  /**
   * 主子表下推
   */
  childs?: {
    /**
     * 子表模型id
     */
    childId?: string
    /**
     * 子表数组
     */
    childIdList?: number[]
    /**
     * 主表id
     */
    id?: number
    /**
     * 主表模型id
     */
    mainId?: string
  }[]
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 是否校验重复
   */
  isCheckData?: boolean
  /**
   * 主子表中子表是否有数据  默认有数据
   */
  isChilds?: boolean
  /**
   * 列表id
   */
  listId?: string
  /**
   * 主表模型id
   */
  mainId?: string
  /**
   * 主键id
   */
  mdbIds?: number[]
  /**
   * 下推类型  1、列表下推到消息 2、工作流结束下推（自动下推）
   */
  pushDownType?: string
  /**
   * 目标表单id
   */
  targetFormId?: string
  /**
   * 用户id
   */
  userIds?: number[]
  userInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
  zzid?: {}
}

/**
 * 接口 应用层字段自动触发 的 **返回类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnAutoApply`
 */
export interface PostBusinessDesignBusinessColumnAutoApplyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用层字段自动触发 的 **请求配置的类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnAutoApply`
 */
type PostBusinessDesignBusinessColumnAutoApplyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessColumnAutoApply',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 应用层字段自动触发 的 **请求配置**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnAutoApply`
 */
const postBusinessDesignBusinessColumnAutoApplyRequestConfig: PostBusinessDesignBusinessColumnAutoApplyRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/business/design/businessColumnAutoApply',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postBusinessDesignBusinessColumnAutoApply',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 应用层字段自动触发 的 **请求函数**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnAutoApply`
 */
export const postBusinessDesignBusinessColumnAutoApply = /*#__PURE__*/ (
  requestData: PostBusinessDesignBusinessColumnAutoApplyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignBusinessColumnAutoApplyResponse>(
    prepare(postBusinessDesignBusinessColumnAutoApplyRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignBusinessColumnAutoApply.requestConfig = postBusinessDesignBusinessColumnAutoApplyRequestConfig

/**
 * 接口 数据过滤目标字段空判断 的 **请求类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnDataFilterApply`
 */
export interface PostBusinessDesignBusinessColumnDataFilterApplyRequest {
  /**
   * 子表映射主表字段名
   */
  childColumnName?: string
  childModelId?: string
  /**
   * 子对子sql
   */
  childSql?: string
  /**
   * 子表名
   */
  childTableName?: string
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  /**
   * 有子表条件
   */
  hasChildCondition?: boolean
  mainModelCode?: string
  mainModelId?: string
  /**
   * 主对主sql
   */
  mainSql?: string
  /**
   * 下推选中id
   */
  primaryIdList?: number[]
  /**
   * 关联字段
   */
  relationLeftJoinSql?: string
  /**
   * 关联sql
   */
  relationSql?: string
  /**
   * 业务规则id
   */
  ruleId?: string
}

/**
 * 接口 数据过滤目标字段空判断 的 **返回类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnDataFilterApply`
 */
export interface PostBusinessDesignBusinessColumnDataFilterApplyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 数据过滤目标字段空判断 的 **请求配置的类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnDataFilterApply`
 */
type PostBusinessDesignBusinessColumnDataFilterApplyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessColumnDataFilterApply',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 数据过滤目标字段空判断 的 **请求配置**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnDataFilterApply`
 */
const postBusinessDesignBusinessColumnDataFilterApplyRequestConfig: PostBusinessDesignBusinessColumnDataFilterApplyRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/business/design/businessColumnDataFilterApply',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postBusinessDesignBusinessColumnDataFilterApply',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 数据过滤目标字段空判断 的 **请求函数**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnDataFilterApply`
 */
export const postBusinessDesignBusinessColumnDataFilterApply = /*#__PURE__*/ (
  requestData: PostBusinessDesignBusinessColumnDataFilterApplyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignBusinessColumnDataFilterApplyResponse>(
    prepare(postBusinessDesignBusinessColumnDataFilterApplyRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignBusinessColumnDataFilterApply.requestConfig =
  postBusinessDesignBusinessColumnDataFilterApplyRequestConfig

/**
 * 接口 字段映射触发 的 **请求类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnRelationApply`
 */
export interface PostBusinessDesignBusinessColumnRelationApplyRequest {
  /**
   * 自动触发标识 1:字段失焦自动触发
   */
  autoFlag?: string
  /**
   * 基础信息id
   */
  billRuleId?: string
  /**
   * 子表模型id
   */
  childId?: string
  /**
   * 主子表下推
   */
  childs?: {
    /**
     * 子表模型id
     */
    childId?: string
    /**
     * 子表数组
     */
    childIdList?: number[]
    /**
     * 主表id
     */
    id?: number
    /**
     * 主表模型id
     */
    mainId?: string
  }[]
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 是否校验重复
   */
  isCheckData?: boolean
  /**
   * 主子表中子表是否有数据  默认有数据
   */
  isChilds?: boolean
  /**
   * 列表id
   */
  listId?: string
  /**
   * 主表模型id
   */
  mainId?: string
  /**
   * 主键id
   */
  mdbIds?: number[]
  /**
   * 下推类型  1、列表下推到消息 2、工作流结束下推（自动下推）
   */
  pushDownType?: string
  /**
   * 目标表单id
   */
  targetFormId?: string
  /**
   * 用户id
   */
  userIds?: number[]
  userInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
  zzid?: {}
}

/**
 * 接口 字段映射触发 的 **返回类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnRelationApply`
 */
export interface PostBusinessDesignBusinessColumnRelationApplyResponse {
  [k: string]: unknown
}

/**
 * 接口 字段映射触发 的 **请求配置的类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnRelationApply`
 */
type PostBusinessDesignBusinessColumnRelationApplyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessColumnRelationApply',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 字段映射触发 的 **请求配置**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnRelationApply`
 */
const postBusinessDesignBusinessColumnRelationApplyRequestConfig: PostBusinessDesignBusinessColumnRelationApplyRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/business/design/businessColumnRelationApply',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postBusinessDesignBusinessColumnRelationApply',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 字段映射触发 的 **请求函数**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessColumnRelationApply`
 */
export const postBusinessDesignBusinessColumnRelationApply = /*#__PURE__*/ (
  requestData: PostBusinessDesignBusinessColumnRelationApplyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignBusinessColumnRelationApplyResponse>(
    prepare(postBusinessDesignBusinessColumnRelationApplyRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignBusinessColumnRelationApply.requestConfig = postBusinessDesignBusinessColumnRelationApplyRequestConfig

/**
 * 接口 下推引用 的 **请求类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessPushApply`
 */
export interface PostBusinessDesignBusinessPushApplyRequest {
  /**
   * 自动触发标识 1:字段失焦自动触发
   */
  autoFlag?: string
  /**
   * 基础信息id
   */
  billRuleId?: string
  /**
   * 子表模型id
   */
  childId?: string
  /**
   * 主子表下推
   */
  childs?: {
    /**
     * 子表模型id
     */
    childId?: string
    /**
     * 子表数组
     */
    childIdList?: number[]
    /**
     * 主表id
     */
    id?: number
    /**
     * 主表模型id
     */
    mainId?: string
  }[]
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 是否校验重复
   */
  isCheckData?: boolean
  /**
   * 主子表中子表是否有数据  默认有数据
   */
  isChilds?: boolean
  /**
   * 列表id
   */
  listId?: string
  /**
   * 主表模型id
   */
  mainId?: string
  /**
   * 主键id
   */
  mdbIds?: number[]
  /**
   * 下推类型  1、列表下推到消息 2、工作流结束下推（自动下推）
   */
  pushDownType?: string
  /**
   * 目标表单id
   */
  targetFormId?: string
  /**
   * 用户id
   */
  userIds?: number[]
  userInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
  zzid?: {}
}

/**
 * 接口 下推引用 的 **返回类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessPushApply`
 */
export interface PostBusinessDesignBusinessPushApplyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 下推引用 的 **请求配置的类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessPushApply`
 */
type PostBusinessDesignBusinessPushApplyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessPushApply',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 下推引用 的 **请求配置**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessPushApply`
 */
const postBusinessDesignBusinessPushApplyRequestConfig: PostBusinessDesignBusinessPushApplyRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/business/design/businessPushApply',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postBusinessDesignBusinessPushApply',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 下推引用 的 **请求函数**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/businessPushApply`
 */
export const postBusinessDesignBusinessPushApply = /*#__PURE__*/ (
  requestData: PostBusinessDesignBusinessPushApplyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignBusinessPushApplyResponse>(
    prepare(postBusinessDesignBusinessPushApplyRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignBusinessPushApply.requestConfig = postBusinessDesignBusinessPushApplyRequestConfig

/**
 * 接口 下推过滤 的 **请求类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/pushDataFilter`
 */
export interface PostBusinessDesignPushDataFilterRequest {
  /**
   * 子表映射主表字段名
   */
  childColumnName?: string
  childModelId?: string
  /**
   * 子对子sql
   */
  childSql?: string
  /**
   * 子表名
   */
  childTableName?: string
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  /**
   * 有子表条件
   */
  hasChildCondition?: boolean
  mainModelCode?: string
  mainModelId?: string
  /**
   * 主对主sql
   */
  mainSql?: string
  /**
   * 下推选中id
   */
  primaryIdList?: number[]
  /**
   * 关联字段
   */
  relationLeftJoinSql?: string
  /**
   * 关联sql
   */
  relationSql?: string
  /**
   * 业务规则id
   */
  ruleId?: string
}

/**
 * 接口 下推过滤 的 **返回类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/pushDataFilter`
 */
export interface PostBusinessDesignPushDataFilterResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 下推过滤 的 **请求配置的类型**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/pushDataFilter`
 */
type PostBusinessDesignPushDataFilterRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/pushDataFilter',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 下推过滤 的 **请求配置**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/pushDataFilter`
 */
const postBusinessDesignPushDataFilterRequestConfig: PostBusinessDesignPushDataFilterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/business/design/pushDataFilter',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postBusinessDesignPushDataFilter',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 下推过滤 的 **请求函数**
 *
 * @分类 A业务流应用层A
 * @请求头 `POST /business/design/pushDataFilter`
 */
export const postBusinessDesignPushDataFilter = /*#__PURE__*/ (
  requestData: PostBusinessDesignPushDataFilterRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignPushDataFilterResponse>(
    prepare(postBusinessDesignPushDataFilterRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignPushDataFilter.requestConfig = postBusinessDesignPushDataFilterRequestConfig

const mockUrl_0_0_0_1 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = undefined as any

/**
 * 接口 添加我的应用[暂不实现] 的 **请求类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/addApp`
 */
export interface PostAppWorkbenchAddAppRequest {}

/**
 * 接口 添加我的应用[暂不实现] 的 **返回类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/addApp`
 */
export interface PostAppWorkbenchAddAppResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加我的应用[暂不实现] 的 **请求配置的类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/addApp`
 */
type PostAppWorkbenchAddAppRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/workbench/addApp', undefined, string, string, true>
>

/**
 * 接口 添加我的应用[暂不实现] 的 **请求配置**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/addApp`
 */
const postAppWorkbenchAddAppRequestConfig: PostAppWorkbenchAddAppRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/app/workbench/addApp',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppWorkbenchAddApp',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加我的应用[暂不实现] 的 **请求函数**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/addApp`
 */
export const postAppWorkbenchAddApp = /*#__PURE__*/ (
  requestData?: PostAppWorkbenchAddAppRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppWorkbenchAddAppResponse>(prepare(postAppWorkbenchAddAppRequestConfig, requestData), ...args)
}

postAppWorkbenchAddApp.requestConfig = postAppWorkbenchAddAppRequestConfig

/**
 * 接口 获取我的工作台首页 的 **请求类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/getIndex`
 */
export interface GetAppWorkbenchGetIndexRequest {}

/**
 * 接口 获取我的工作台首页 的 **返回类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/getIndex`
 */
export interface GetAppWorkbenchGetIndexResponse {
  code?: string
  data?: {
    /**
     * 应用中心
     */
    applications?: {
      /**
       * 应用图标
       */
      appIcon?: string
      /**
       * 应用ID
       */
      appId?: string
      /**
       * 应用名称
       */
      appName?: string
      /**
       * 应用类型（1:自定义列表 2:自定义表单 3:自定义报表）
       */
      appType?: number
      /**
       * 跳转链接
       */
      h5Url?: string
      /**
       * 图标底色
       */
      iconBgColor?: string
    }[]
    /**
     * Banner区
     */
    banners?: {
      /**
       * h5跳转链接
       */
      h5Url?: string
      /**
       * 新闻ID
       */
      newsId?: number
      /**
       * 新闻图片
       */
      photo?: string
    }[]
    notice?: {
      /**
       * 通知内容
       */
      context?: string
      /**
       * h5详情跳转链接
       */
      h5Url?: string
      /**
       * 通知ID
       */
      noticeId?: number
      /**
       * 通知主题
       */
      theme?: string
    }
    /**
     * 流程中心
     */
    processCenter?: {
      /**
       * 跳转链接
       */
      h5Url?: string
      /**
       * 图标
       */
      icon?: string
      /**
       * 名称
       */
      name?: string
      /**
       * 排序编号
       */
      sortNum?: number
    }[]
    /**
     * 自定义报表
     */
    report?: {
      /**
       * 跳转的H5落地页url
       */
      h5Url?: string
      /**
       * item图标链接
       */
      icon?: string
      /**
       * item名称
       */
      name?: string
    }[]
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取我的工作台首页 的 **请求配置的类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/getIndex`
 */
type GetAppWorkbenchGetIndexRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/workbench/getIndex', undefined, string, string, true>
>

/**
 * 接口 获取我的工作台首页 的 **请求配置**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/getIndex`
 */
const getAppWorkbenchGetIndexRequestConfig: GetAppWorkbenchGetIndexRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/app/workbench/getIndex',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppWorkbenchGetIndex',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取我的工作台首页 的 **请求函数**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/getIndex`
 */
export const getAppWorkbenchGetIndex = /*#__PURE__*/ (
  requestData?: GetAppWorkbenchGetIndexRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppWorkbenchGetIndexResponse>(prepare(getAppWorkbenchGetIndexRequestConfig, requestData), ...args)
}

getAppWorkbenchGetIndex.requestConfig = getAppWorkbenchGetIndexRequestConfig

/**
 * 接口 获取我的应用[暂不实现] 的 **请求类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/myApp`
 */
export interface GetAppWorkbenchMyAppRequest {}

/**
 * 接口 获取我的应用[暂不实现] 的 **返回类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/myApp`
 */
export interface GetAppWorkbenchMyAppResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取我的应用[暂不实现] 的 **请求配置的类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/myApp`
 */
type GetAppWorkbenchMyAppRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/workbench/myApp', undefined, string, string, true>
>

/**
 * 接口 获取我的应用[暂不实现] 的 **请求配置**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/myApp`
 */
const getAppWorkbenchMyAppRequestConfig: GetAppWorkbenchMyAppRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/app/workbench/myApp',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppWorkbenchMyApp',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取我的应用[暂不实现] 的 **请求函数**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/myApp`
 */
export const getAppWorkbenchMyApp = /*#__PURE__*/ (
  requestData?: GetAppWorkbenchMyAppRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppWorkbenchMyAppResponse>(prepare(getAppWorkbenchMyAppRequestConfig, requestData), ...args)
}

getAppWorkbenchMyApp.requestConfig = getAppWorkbenchMyAppRequestConfig

/**
 * 接口 移除我的应用[暂不实现] 的 **请求类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/removeApp`
 */
export interface PostAppWorkbenchRemoveAppRequest {}

/**
 * 接口 移除我的应用[暂不实现] 的 **返回类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/removeApp`
 */
export interface PostAppWorkbenchRemoveAppResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 移除我的应用[暂不实现] 的 **请求配置的类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/removeApp`
 */
type PostAppWorkbenchRemoveAppRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/workbench/removeApp', undefined, string, string, true>
>

/**
 * 接口 移除我的应用[暂不实现] 的 **请求配置**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/removeApp`
 */
const postAppWorkbenchRemoveAppRequestConfig: PostAppWorkbenchRemoveAppRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/app/workbench/removeApp',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppWorkbenchRemoveApp',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 移除我的应用[暂不实现] 的 **请求函数**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `POST /app/workbench/removeApp`
 */
export const postAppWorkbenchRemoveApp = /*#__PURE__*/ (
  requestData?: PostAppWorkbenchRemoveAppRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppWorkbenchRemoveAppResponse>(
    prepare(postAppWorkbenchRemoveAppRequestConfig, requestData),
    ...args,
  )
}

postAppWorkbenchRemoveApp.requestConfig = postAppWorkbenchRemoveAppRequestConfig

/**
 * 接口 搜索应用[暂不实现] 的 **请求类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/search`
 */
export interface GetAppWorkbenchSearchRequest {}

/**
 * 接口 搜索应用[暂不实现] 的 **返回类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/search`
 */
export interface GetAppWorkbenchSearchResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 搜索应用[暂不实现] 的 **请求配置的类型**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/search`
 */
type GetAppWorkbenchSearchRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/workbench/search', undefined, string, string, true>
>

/**
 * 接口 搜索应用[暂不实现] 的 **请求配置**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/search`
 */
const getAppWorkbenchSearchRequestConfig: GetAppWorkbenchSearchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/app/workbench/search',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppWorkbenchSearch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 搜索应用[暂不实现] 的 **请求函数**
 *
 * @分类 【APP】工作台相关操作
 * @请求头 `GET /app/workbench/search`
 */
export const getAppWorkbenchSearch = /*#__PURE__*/ (
  requestData?: GetAppWorkbenchSearchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppWorkbenchSearchResponse>(prepare(getAppWorkbenchSearchRequestConfig, requestData), ...args)
}

getAppWorkbenchSearch.requestConfig = getAppWorkbenchSearchRequestConfig

const mockUrl_0_0_0_2 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_2 = '' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = undefined as any

/**
 * 接口 判断单据是否删除 的 **请求类型**
 *
 * @分类 单据是否删除
 * @请求头 `GET /remind/formDataIsDeleted`
 */
export interface GetRemindFormDataIsDeletedRequest {
  /**
   * formValueId
   */
  formValueId: string
}

/**
 * 接口 判断单据是否删除 的 **返回类型**
 *
 * @分类 单据是否删除
 * @请求头 `GET /remind/formDataIsDeleted`
 */
export interface GetRemindFormDataIsDeletedResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 判断单据是否删除 的 **请求配置的类型**
 *
 * @分类 单据是否删除
 * @请求头 `GET /remind/formDataIsDeleted`
 */
type GetRemindFormDataIsDeletedRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/formDataIsDeleted',
    undefined,
    string,
    'formValueId',
    false
  >
>

/**
 * 接口 判断单据是否删除 的 **请求配置**
 *
 * @分类 单据是否删除
 * @请求头 `GET /remind/formDataIsDeleted`
 */
const getRemindFormDataIsDeletedRequestConfig: GetRemindFormDataIsDeletedRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/remind/formDataIsDeleted',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['formValueId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRemindFormDataIsDeleted',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 判断单据是否删除 的 **请求函数**
 *
 * @分类 单据是否删除
 * @请求头 `GET /remind/formDataIsDeleted`
 */
export const getRemindFormDataIsDeleted = /*#__PURE__*/ (
  requestData: GetRemindFormDataIsDeletedRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetRemindFormDataIsDeletedResponse>(
    prepare(getRemindFormDataIsDeletedRequestConfig, requestData),
    ...args,
  )
}

getRemindFormDataIsDeleted.requestConfig = getRemindFormDataIsDeletedRequestConfig

const mockUrl_0_0_0_3 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = undefined as any

/**
 * 接口 发票应用层 的 **请求类型**
 *
 * @分类 发票应用层
 * @请求头 `POST /invoice/identify`
 */
export interface PostInvoiceIdentifyRequest {
  /**
   * 附件value
   */
  annexValue?: {}
  /**
   * 表单id
   */
  formId?: string
  /**
   * url全路径
   */
  totalUrl?: string
  /**
   * 发票url
   */
  url?: string
}

/**
 * 接口 发票应用层 的 **返回类型**
 *
 * @分类 发票应用层
 * @请求头 `POST /invoice/identify`
 */
export interface PostInvoiceIdentifyResponse {
  /**
   * 流程启动管理ID
   */
  flowManagerId?: string
  /**
   * 关联表单id
   */
  formId?: string
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单json值
   */
  formValueJson?: {}
  /**
   * 类型1业务表单 2流程表单
   */
  formValueType?: number
  /**
   * 主键ID
   */
  id?: string
  /**
   * 表单是否是引用或下推的数据
   */
  isQuoteAndPush?: boolean
  /**
   * 流程实例ID
   */
  procInstId?: string
}

/**
 * 接口 发票应用层 的 **请求配置的类型**
 *
 * @分类 发票应用层
 * @请求头 `POST /invoice/identify`
 */
type PostInvoiceIdentifyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/invoice/identify', undefined, string, string, false>
>

/**
 * 接口 发票应用层 的 **请求配置**
 *
 * @分类 发票应用层
 * @请求头 `POST /invoice/identify`
 */
const postInvoiceIdentifyRequestConfig: PostInvoiceIdentifyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/invoice/identify',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postInvoiceIdentify',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 发票应用层 的 **请求函数**
 *
 * @分类 发票应用层
 * @请求头 `POST /invoice/identify`
 */
export const postInvoiceIdentify = /*#__PURE__*/ (
  requestData: PostInvoiceIdentifyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostInvoiceIdentifyResponse>(prepare(postInvoiceIdentifyRequestConfig, requestData), ...args)
}

postInvoiceIdentify.requestConfig = postInvoiceIdentifyRequestConfig

const mockUrl_0_0_0_4 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = undefined as any

/**
 * 接口 打印模板 复制 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/copyPrintTemplate`
 */
export interface GetReportCopyPrintTemplateRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 打印模板 复制 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/copyPrintTemplate`
 */
export interface GetReportCopyPrintTemplateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 打印模板 复制 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/copyPrintTemplate`
 */
type GetReportCopyPrintTemplateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/copyPrintTemplate', undefined, string, 'id', false>
>

/**
 * 接口 打印模板 复制 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/copyPrintTemplate`
 */
const getReportCopyPrintTemplateRequestConfig: GetReportCopyPrintTemplateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/copyPrintTemplate',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportCopyPrintTemplate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板 复制 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/copyPrintTemplate`
 */
export const getReportCopyPrintTemplate = /*#__PURE__*/ (
  requestData: GetReportCopyPrintTemplateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportCopyPrintTemplateResponse>(
    prepare(getReportCopyPrintTemplateRequestConfig, requestData),
    ...args,
  )
}

getReportCopyPrintTemplate.requestConfig = getReportCopyPrintTemplateRequestConfig

/**
 * 接口 打印模板 删除 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/deletePrintTemplate`
 */
export interface GetReportDeletePrintTemplateRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 打印模板 删除 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/deletePrintTemplate`
 */
export interface GetReportDeletePrintTemplateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 打印模板 删除 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/deletePrintTemplate`
 */
type GetReportDeletePrintTemplateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/deletePrintTemplate', undefined, string, 'id', false>
>

/**
 * 接口 打印模板 删除 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/deletePrintTemplate`
 */
const getReportDeletePrintTemplateRequestConfig: GetReportDeletePrintTemplateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/deletePrintTemplate',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportDeletePrintTemplate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板 删除 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/deletePrintTemplate`
 */
export const getReportDeletePrintTemplate = /*#__PURE__*/ (
  requestData: GetReportDeletePrintTemplateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportDeletePrintTemplateResponse>(
    prepare(getReportDeletePrintTemplateRequestConfig, requestData),
    ...args,
  )
}

getReportDeletePrintTemplate.requestConfig = getReportDeletePrintTemplateRequestConfig

/**
 * 接口 打印模板选择框 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/optionPrintTemplateList`
 */
export interface GetReportOptionPrintTemplateListRequest {
  /**
   * formId
   */
  formId: string
}

/**
 * 接口 打印模板选择框 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/optionPrintTemplateList`
 */
export interface GetReportOptionPrintTemplateListResponse {
  code?: string
  data?: {
    corpCode?: string
    /**
     * 是否默认模板 0-否 1-是
     */
    defaultStatus?: boolean
    /**
     * 说明
     */
    description?: string
    /**
     * 启用状态 0-禁用 1-启用
     */
    enable?: boolean
    /**
     * 是否存在设计xml
     */
    existXmlStatus?: boolean
    /**
     * 打印模板文件oss路径
     */
    fileName?: string
    /**
     * 关联表单id
     */
    formId?: string
    /**
     * 关联表单名称
     */
    formName?: string
    /**
     * id
     */
    id?: string
    issued?: boolean
    /**
     * 模板名称
     */
    templateName?: string
    /**
     * 预览页面url
     */
    viewUrl?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 打印模板选择框 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/optionPrintTemplateList`
 */
type GetReportOptionPrintTemplateListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/report/optionPrintTemplateList',
    undefined,
    string,
    'formId',
    false
  >
>

/**
 * 接口 打印模板选择框 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/optionPrintTemplateList`
 */
const getReportOptionPrintTemplateListRequestConfig: GetReportOptionPrintTemplateListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/optionPrintTemplateList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['formId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportOptionPrintTemplateList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板选择框 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/optionPrintTemplateList`
 */
export const getReportOptionPrintTemplateList = /*#__PURE__*/ (
  requestData: GetReportOptionPrintTemplateListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportOptionPrintTemplateListResponse>(
    prepare(getReportOptionPrintTemplateListRequestConfig, requestData),
    ...args,
  )
}

getReportOptionPrintTemplateList.requestConfig = getReportOptionPrintTemplateListRequestConfig

/**
 * 接口 打印模板 列表 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/printPage`
 */
export interface PostReportPrintPageRequest {
  current?: number
  /**
   * 是否默认模板 0-否 1-是
   */
  defaultStatus?: boolean
  /**
   * 说明
   */
  description?: string
  /**
   * 启用状态 0-禁用 1-启用
   */
  enable?: boolean
  /**
   * 打印模板文件oss路径
   */
  fileName?: string
  /**
   * 关联表单id
   */
  formId?: string
  /**
   * 关联表单名称
   */
  formName?: string
  /**
   * id
   */
  id?: string
  needPermission?: boolean
  size?: number
  /**
   * 模板名称
   */
  templateName?: string
}

/**
 * 接口 打印模板 列表 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/printPage`
 */
export interface PostReportPrintPageResponse {
  code?: string
  data?: {
    corpCode?: string
    /**
     * 是否默认模板 0-否 1-是
     */
    defaultStatus?: boolean
    /**
     * 说明
     */
    description?: string
    /**
     * 启用状态 0-禁用 1-启用
     */
    enable?: boolean
    /**
     * 是否存在设计xml
     */
    existXmlStatus?: boolean
    /**
     * 打印模板文件oss路径
     */
    fileName?: string
    /**
     * 关联表单id
     */
    formId?: string
    /**
     * 关联表单名称
     */
    formName?: string
    /**
     * id
     */
    id?: string
    issued?: boolean
    /**
     * 模板名称
     */
    templateName?: string
    /**
     * 预览页面url
     */
    viewUrl?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
  total?: number
}

/**
 * 接口 打印模板 列表 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/printPage`
 */
type PostReportPrintPageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/printPage', undefined, string, string, false>
>

/**
 * 接口 打印模板 列表 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/printPage`
 */
const postReportPrintPageRequestConfig: PostReportPrintPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/printPage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportPrintPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板 列表 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/printPage`
 */
export const postReportPrintPage = /*#__PURE__*/ (
  requestData: PostReportPrintPageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportPrintPageResponse>(prepare(postReportPrintPageRequestConfig, requestData), ...args)
}

postReportPrintPage.requestConfig = postReportPrintPageRequestConfig

/**
 * 接口 打印模板 保存 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/savePrintTemplate`
 */
export interface PostReportSavePrintTemplateRequest {
  current?: number
  /**
   * 是否默认模板 0-否 1-是
   */
  defaultStatus?: boolean
  /**
   * 说明
   */
  description?: string
  /**
   * 启用状态 0-禁用 1-启用
   */
  enable?: boolean
  /**
   * 打印模板文件oss路径
   */
  fileName?: string
  /**
   * 关联表单id
   */
  formId?: string
  /**
   * 关联表单名称
   */
  formName?: string
  /**
   * id
   */
  id?: string
  needPermission?: boolean
  size?: number
  /**
   * 模板名称
   */
  templateName?: string
}

/**
 * 接口 打印模板 保存 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/savePrintTemplate`
 */
export interface PostReportSavePrintTemplateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 打印模板 保存 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/savePrintTemplate`
 */
type PostReportSavePrintTemplateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/savePrintTemplate', undefined, string, string, false>
>

/**
 * 接口 打印模板 保存 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/savePrintTemplate`
 */
const postReportSavePrintTemplateRequestConfig: PostReportSavePrintTemplateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/savePrintTemplate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportSavePrintTemplate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板 保存 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/savePrintTemplate`
 */
export const postReportSavePrintTemplate = /*#__PURE__*/ (
  requestData: PostReportSavePrintTemplateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportSavePrintTemplateResponse>(
    prepare(postReportSavePrintTemplateRequestConfig, requestData),
    ...args,
  )
}

postReportSavePrintTemplate.requestConfig = postReportSavePrintTemplateRequestConfig

/**
 * 接口 打印模板 启用\/停用 默认模板 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/switchDefaultTemplate`
 */
export interface GetReportSwitchDefaultTemplateRequest {
  /**
   * id
   */
  id: string
  /**
   * status
   */
  status: string
}

/**
 * 接口 打印模板 启用\/停用 默认模板 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/switchDefaultTemplate`
 */
export interface GetReportSwitchDefaultTemplateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 打印模板 启用\/停用 默认模板 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/switchDefaultTemplate`
 */
type GetReportSwitchDefaultTemplateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/report/switchDefaultTemplate',
    undefined,
    string,
    'id' | 'status',
    false
  >
>

/**
 * 接口 打印模板 启用\/停用 默认模板 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/switchDefaultTemplate`
 */
const getReportSwitchDefaultTemplateRequestConfig: GetReportSwitchDefaultTemplateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/switchDefaultTemplate',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['id', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportSwitchDefaultTemplate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板 启用\/停用 默认模板 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `GET /report/switchDefaultTemplate`
 */
export const getReportSwitchDefaultTemplate = /*#__PURE__*/ (
  requestData: GetReportSwitchDefaultTemplateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportSwitchDefaultTemplateResponse>(
    prepare(getReportSwitchDefaultTemplateRequestConfig, requestData),
    ...args,
  )
}

getReportSwitchDefaultTemplate.requestConfig = getReportSwitchDefaultTemplateRequestConfig

/**
 * 接口 打印模板 修改 的 **请求类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/updatePrintTemplate`
 */
export interface PostReportUpdatePrintTemplateRequest {
  current?: number
  /**
   * 是否默认模板 0-否 1-是
   */
  defaultStatus?: boolean
  /**
   * 说明
   */
  description?: string
  /**
   * 启用状态 0-禁用 1-启用
   */
  enable?: boolean
  /**
   * 打印模板文件oss路径
   */
  fileName?: string
  /**
   * 关联表单id
   */
  formId?: string
  /**
   * 关联表单名称
   */
  formName?: string
  /**
   * id
   */
  id?: string
  needPermission?: boolean
  size?: number
  /**
   * 模板名称
   */
  templateName?: string
}

/**
 * 接口 打印模板 修改 的 **返回类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/updatePrintTemplate`
 */
export interface PostReportUpdatePrintTemplateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 打印模板 修改 的 **请求配置的类型**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/updatePrintTemplate`
 */
type PostReportUpdatePrintTemplateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/report/updatePrintTemplate',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 打印模板 修改 的 **请求配置**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/updatePrintTemplate`
 */
const postReportUpdatePrintTemplateRequestConfig: PostReportUpdatePrintTemplateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/report/updatePrintTemplate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportUpdatePrintTemplate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 打印模板 修改 的 **请求函数**
 *
 * @分类 打印模板控制层
 * @请求头 `POST /report/updatePrintTemplate`
 */
export const postReportUpdatePrintTemplate = /*#__PURE__*/ (
  requestData: PostReportUpdatePrintTemplateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportUpdatePrintTemplateResponse>(
    prepare(postReportUpdatePrintTemplateRequestConfig, requestData),
    ...args,
  )
}

postReportUpdatePrintTemplate.requestConfig = postReportUpdatePrintTemplateRequestConfig

const mockUrl_0_0_0_5 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = undefined as any

/**
 * 接口 报表复制 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `GET /report/copyReport`
 */
export interface GetReportCopyReportRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 报表复制 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `GET /report/copyReport`
 */
export interface GetReportCopyReportResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 报表复制 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `GET /report/copyReport`
 */
type GetReportCopyReportRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/copyReport', undefined, string, 'id', false>
>

/**
 * 接口 报表复制 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `GET /report/copyReport`
 */
const getReportCopyReportRequestConfig: GetReportCopyReportRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/copyReport',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportCopyReport',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 报表复制 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `GET /report/copyReport`
 */
export const getReportCopyReport = /*#__PURE__*/ (
  requestData: GetReportCopyReportRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportCopyReportResponse>(prepare(getReportCopyReportRequestConfig, requestData), ...args)
}

getReportCopyReport.requestConfig = getReportCopyReportRequestConfig

/**
 * 接口 删除本地文件(当前打开的报表文件,当关闭当前报表文件时调用) 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFile`
 */
export interface PostReportDeleteFileRequest {
  /**
   * url
   */
  url: string
}

/**
 * 接口 删除本地文件(当前打开的报表文件,当关闭当前报表文件时调用) 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFile`
 */
export interface PostReportDeleteFileResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除本地文件(当前打开的报表文件,当关闭当前报表文件时调用) 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFile`
 */
type PostReportDeleteFileRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/deleteFile', undefined, string, 'url', false>
>

/**
 * 接口 删除本地文件(当前打开的报表文件,当关闭当前报表文件时调用) 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFile`
 */
const postReportDeleteFileRequestConfig: PostReportDeleteFileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/deleteFile',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['url'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDeleteFile',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除本地文件(当前打开的报表文件,当关闭当前报表文件时调用) 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFile`
 */
export const postReportDeleteFile = /*#__PURE__*/ (
  requestData: PostReportDeleteFileRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDeleteFileResponse>(prepare(postReportDeleteFileRequestConfig, requestData), ...args)
}

postReportDeleteFile.requestConfig = postReportDeleteFileRequestConfig

/**
 * 接口 删除报表记录 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFileInfo`
 */
export interface PostReportDeleteFileInfoRequest {
  /**
   * 报表id
   */
  id?: string
}

/**
 * 接口 删除报表记录 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFileInfo`
 */
export interface PostReportDeleteFileInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除报表记录 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFileInfo`
 */
type PostReportDeleteFileInfoRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/deleteFileInfo', undefined, string, string, false>
>

/**
 * 接口 删除报表记录 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFileInfo`
 */
const postReportDeleteFileInfoRequestConfig: PostReportDeleteFileInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/deleteFileInfo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDeleteFileInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除报表记录 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/deleteFileInfo`
 */
export const postReportDeleteFileInfo = /*#__PURE__*/ (
  requestData: PostReportDeleteFileInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDeleteFileInfoResponse>(prepare(postReportDeleteFileInfoRequestConfig, requestData), ...args)
}

postReportDeleteFileInfo.requestConfig = postReportDeleteFileInfoRequestConfig

/**
 * 接口 获取报表详情 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getFileInfo`
 */
export interface PostReportGetFileInfoRequest {
  /**
   * 报表id
   */
  id?: string
}

/**
 * 接口 获取报表详情 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getFileInfo`
 */
export interface PostReportGetFileInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取报表详情 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getFileInfo`
 */
type PostReportGetFileInfoRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/getFileInfo', undefined, string, string, false>
>

/**
 * 接口 获取报表详情 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getFileInfo`
 */
const postReportGetFileInfoRequestConfig: PostReportGetFileInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/getFileInfo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportGetFileInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取报表详情 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getFileInfo`
 */
export const postReportGetFileInfo = /*#__PURE__*/ (
  requestData: PostReportGetFileInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportGetFileInfoResponse>(prepare(postReportGetFileInfoRequestConfig, requestData), ...args)
}

postReportGetFileInfo.requestConfig = postReportGetFileInfoRequestConfig

/**
 * 接口 查询报表树 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getUreportTree`
 */
export interface PostReportGetUreportTreeRequest {
  /**
   * params
   */
  params?: {
    /**
     * 普通树 实际字段
     */
    actualField?: string
    /**
     * 配置项id
     */
    configItemId?: string
    content?: string
    /**
     * 部门id
     */
    depId?: number
    dsId?: string
    /**
     * 普通树 上级节点字段
     */
    parentField?: string
    /**
     * 普通树 展示字段
     */
    showField?: string
    /**
     * 普通树 排序字段
     */
    sortField?: string
    /**
     * 普通树 查询sql
     */
    sql?: string
    /**
     * 报表树类型 CONFIG_ITEM：配置项；USER：用户；DEPARTMENT：部门；COMMON-普通
     */
    treeType?: 'COMMON' | 'CONFIG_ITEM' | 'DEPARTMENT' | 'USER'
  }[]
}

/**
 * 接口 查询报表树 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getUreportTree`
 */
export interface PostReportGetUreportTreeResponse {
  code?: string
  data?: {
    /**
     * 报表树
     */
    tree?: {
      /**
       * 当前儿子们
       */
      children?: {
        [k: string]: unknown
      }[]
      /**
       * 用户部门名称
       */
      depName?: string
      /**
       * 当前树节点id
       */
      id?: string
      /**
       * 当前树节点名称
       */
      name?: string
      /**
       * 当前父节点id
       */
      parentId?: string
      /**
       * 排序
       */
      sort?: number
      /**
       * 用户名
       */
      username?: string
    }[]
    /**
     * 报表树类型
     */
    treeType?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询报表树 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getUreportTree`
 */
type PostReportGetUreportTreeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/getUreportTree', undefined, string, string, false>
>

/**
 * 接口 查询报表树 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getUreportTree`
 */
const postReportGetUreportTreeRequestConfig: PostReportGetUreportTreeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/getUreportTree',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportGetUreportTree',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询报表树 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/getUreportTree`
 */
export const postReportGetUreportTree = /*#__PURE__*/ (
  requestData: PostReportGetUreportTreeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportGetUreportTreeResponse>(prepare(postReportGetUreportTreeRequestConfig, requestData), ...args)
}

postReportGetUreportTree.requestConfig = postReportGetUreportTreeRequestConfig

/**
 * 接口 报表链接跳转校验 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/jumpValidate`
 */
export interface PostReportJumpValidateRequest {
  id?: string
  linkType?: 'FLOW_FORM' | 'FORM' | 'LIST' | 'REPORT'
}

/**
 * 接口 报表链接跳转校验 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/jumpValidate`
 */
export interface PostReportJumpValidateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 报表链接跳转校验 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/jumpValidate`
 */
type PostReportJumpValidateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/jumpValidate', undefined, string, string, false>
>

/**
 * 接口 报表链接跳转校验 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/jumpValidate`
 */
const postReportJumpValidateRequestConfig: PostReportJumpValidateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/jumpValidate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportJumpValidate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 报表链接跳转校验 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/jumpValidate`
 */
export const postReportJumpValidate = /*#__PURE__*/ (
  requestData: PostReportJumpValidateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportJumpValidateResponse>(prepare(postReportJumpValidateRequestConfig, requestData), ...args)
}

postReportJumpValidate.requestConfig = postReportJumpValidateRequestConfig

/**
 * 接口 报表详情集合 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/listFileInfo`
 */
export interface PostReportListFileInfoRequest {
  /**
   * 是否按app权限过滤
   */
  appPermission?: boolean
}

/**
 * 接口 报表详情集合 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/listFileInfo`
 */
export interface PostReportListFileInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 报表详情集合 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/listFileInfo`
 */
type PostReportListFileInfoRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/listFileInfo', undefined, string, string, false>
>

/**
 * 接口 报表详情集合 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/listFileInfo`
 */
const postReportListFileInfoRequestConfig: PostReportListFileInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/listFileInfo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportListFileInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 报表详情集合 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/listFileInfo`
 */
export const postReportListFileInfo = /*#__PURE__*/ (
  requestData: PostReportListFileInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportListFileInfoResponse>(prepare(postReportListFileInfoRequestConfig, requestData), ...args)
}

postReportListFileInfo.requestConfig = postReportListFileInfoRequestConfig

/**
 * 接口 报表详情分页 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/pageFileInfo`
 */
export interface PostReportPageFileInfoRequest {
  /**
   * 所属应用id
   */
  appId?: string
  /**
   * 公司唯一标识
   */
  corpCode?: string
  current?: number
  /**
   * 说明
   */
  description?: string
  /**
   * 表单文件名称
   */
  fileName?: string
  /**
   * 报表xml
   */
  fileXml?: string
  /**
   * id
   */
  id?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 报表名称
   */
  reportName?: string
  size?: number
}

/**
 * 接口 报表详情分页 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/pageFileInfo`
 */
export interface PostReportPageFileInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 报表详情分页 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/pageFileInfo`
 */
type PostReportPageFileInfoRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/pageFileInfo', undefined, string, string, false>
>

/**
 * 接口 报表详情分页 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/pageFileInfo`
 */
const postReportPageFileInfoRequestConfig: PostReportPageFileInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/pageFileInfo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportPageFileInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 报表详情分页 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/pageFileInfo`
 */
export const postReportPageFileInfo = /*#__PURE__*/ (
  requestData: PostReportPageFileInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportPageFileInfoResponse>(prepare(postReportPageFileInfoRequestConfig, requestData), ...args)
}

postReportPageFileInfo.requestConfig = postReportPageFileInfoRequestConfig

/**
 * 接口 保存报表记录 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/saveFileInfo`
 */
export interface PostReportSaveFileInfoRequest {
  /**
   * 所属应用id
   */
  appId?: string
  /**
   * 公司唯一标识
   */
  corpCode?: string
  current?: number
  /**
   * 说明
   */
  description?: string
  /**
   * 表单文件名称
   */
  fileName?: string
  /**
   * 报表xml
   */
  fileXml?: string
  /**
   * id
   */
  id?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 报表名称
   */
  reportName?: string
  size?: number
}

/**
 * 接口 保存报表记录 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/saveFileInfo`
 */
export interface PostReportSaveFileInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存报表记录 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/saveFileInfo`
 */
type PostReportSaveFileInfoRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/saveFileInfo', undefined, string, string, false>
>

/**
 * 接口 保存报表记录 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/saveFileInfo`
 */
const postReportSaveFileInfoRequestConfig: PostReportSaveFileInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/saveFileInfo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportSaveFileInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存报表记录 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/saveFileInfo`
 */
export const postReportSaveFileInfo = /*#__PURE__*/ (
  requestData: PostReportSaveFileInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportSaveFileInfoResponse>(prepare(postReportSaveFileInfoRequestConfig, requestData), ...args)
}

postReportSaveFileInfo.requestConfig = postReportSaveFileInfoRequestConfig

/**
 * 接口 修改报表记录 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/updateFileInfo`
 */
export interface PostReportUpdateFileInfoRequest {
  /**
   * 所属应用id
   */
  appId?: string
  /**
   * 公司唯一标识
   */
  corpCode?: string
  current?: number
  /**
   * 说明
   */
  description?: string
  /**
   * 表单文件名称
   */
  fileName?: string
  /**
   * 报表xml
   */
  fileXml?: string
  /**
   * id
   */
  id?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 报表名称
   */
  reportName?: string
  size?: number
}

/**
 * 接口 修改报表记录 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/updateFileInfo`
 */
export interface PostReportUpdateFileInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改报表记录 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/updateFileInfo`
 */
type PostReportUpdateFileInfoRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/updateFileInfo', undefined, string, string, false>
>

/**
 * 接口 修改报表记录 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/updateFileInfo`
 */
const postReportUpdateFileInfoRequestConfig: PostReportUpdateFileInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/updateFileInfo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportUpdateFileInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改报表记录 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/updateFileInfo`
 */
export const postReportUpdateFileInfo = /*#__PURE__*/ (
  requestData: PostReportUpdateFileInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportUpdateFileInfoResponse>(prepare(postReportUpdateFileInfoRequestConfig, requestData), ...args)
}

postReportUpdateFileInfo.requestConfig = postReportUpdateFileInfoRequestConfig

/**
 * 接口 预览报表 的 **请求类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/viewReport`
 */
export interface PostReportViewReportRequest {
  /**
   * 报表id
   */
  reportId?: string
}

/**
 * 接口 预览报表 的 **返回类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/viewReport`
 */
export interface PostReportViewReportResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 预览报表 的 **请求配置的类型**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/viewReport`
 */
type PostReportViewReportRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/viewReport', undefined, string, string, false>
>

/**
 * 接口 预览报表 的 **请求配置**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/viewReport`
 */
const postReportViewReportRequestConfig: PostReportViewReportRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/report/viewReport',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportViewReport',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 预览报表 的 **请求函数**
 *
 * @分类 报表控制层
 * @请求头 `POST /report/viewReport`
 */
export const postReportViewReport = /*#__PURE__*/ (
  requestData: PostReportViewReportRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportViewReportResponse>(prepare(postReportViewReportRequestConfig, requestData), ...args)
}

postReportViewReport.requestConfig = postReportViewReportRequestConfig

const mockUrl_0_0_0_6 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_6 = '' as any
const prodUrl_0_0_0_6 = '' as any
const dataKey_0_0_0_6 = undefined as any

/**
 * 接口 复制 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/copy`
 */
export interface GetReportDsCopyRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 复制 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/copy`
 */
export interface GetReportDsCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 复制 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/copy`
 */
type GetReportDsCopyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/copy', undefined, string, 'id', false>
>

/**
 * 接口 复制 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/copy`
 */
const getReportDsCopyRequestConfig: GetReportDsCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/copy',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportDsCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 复制 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/copy`
 */
export const getReportDsCopy = /*#__PURE__*/ (requestData: GetReportDsCopyRequest, ...args: UserRequestRestArgs) => {
  return request<GetReportDsCopyResponse>(prepare(getReportDsCopyRequestConfig, requestData), ...args)
}

getReportDsCopy.requestConfig = getReportDsCopyRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/delete`
 */
export interface GetReportDsDeleteRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/delete`
 */
export interface GetReportDsDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/delete`
 */
type GetReportDsDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/delete`
 */
const getReportDsDeleteRequestConfig: GetReportDsDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportDsDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/delete`
 */
export const getReportDsDelete = /*#__PURE__*/ (
  requestData: GetReportDsDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportDsDeleteResponse>(prepare(getReportDsDeleteRequestConfig, requestData), ...args)
}

getReportDsDelete.requestConfig = getReportDsDeleteRequestConfig

/**
 * 接口 删除字段校验 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/deleteFieldValidate`
 */
export type PostReportDsDeleteFieldValidateRequest = {
  /**
   * 字段code
   */
  columnCode?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 数据集id
   */
  id?: string
}[]

/**
 * 接口 删除字段校验 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/deleteFieldValidate`
 */
export interface PostReportDsDeleteFieldValidateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除字段校验 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/deleteFieldValidate`
 */
type PostReportDsDeleteFieldValidateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/report/ds/deleteFieldValidate',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 删除字段校验 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/deleteFieldValidate`
 */
const postReportDsDeleteFieldValidateRequestConfig: PostReportDsDeleteFieldValidateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/deleteFieldValidate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsDeleteFieldValidate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除字段校验 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/deleteFieldValidate`
 */
export const postReportDsDeleteFieldValidate = /*#__PURE__*/ (
  requestData: PostReportDsDeleteFieldValidateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDsDeleteFieldValidateResponse>(
    prepare(postReportDsDeleteFieldValidateRequestConfig, requestData),
    ...args,
  )
}

postReportDsDeleteFieldValidate.requestConfig = postReportDsDeleteFieldValidateRequestConfig

/**
 * 接口 详情 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/detail`
 */
export interface GetReportDsDetailRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 详情 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/detail`
 */
export interface GetReportDsDetailResponse {
  code?: string
  data?: {
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 子表模型名称
     */
    childModelName?: string
    corpCode?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 创建人
     */
    creator?: number
    /**
     * 数据字段json数组
     */
    dataField?: string
    /**
     * 数据范围 0-全部单据 1-已归档单据（包含手动添加与已归档）2-仅流程中单据
     */
    dataRange?: number
    /**
     * 数据库连接驱动
     */
    dsDriverClassName?: string
    /**
     * 数据库密码
     */
    dsPassword?: string
    /**
     * 数据源类型 0-内置数据库 1-外部数据库
     */
    dsType?: number
    /**
     * 数据库连接地址
     */
    dsUrl?: string
    /**
     * 数据库用户名
     */
    dsUsername?: string
    /**
     * 表单id
     */
    formId?: string
    /**
     * 表单名称
     */
    formName?: string
    /**
     * 主键
     */
    id?: string
    /**
     * 删除标志
     */
    isDel?: number
    /**
     * 模式 0-普通 1-专业
     */
    mode?: number
    /**
     * 修改人
     */
    modifier?: number
    /**
     * 数据集名称
     */
    name?: string
    /**
     * 说明
     */
    remark?: string
    /**
     * 报表数据源定义
     */
    reportSqlDefinition?: string
    /**
     * sql查询参数
     */
    sqlParam?: string
    /**
     * sql语句
     */
    sqlStatement?: string
    /**
     * 修改时间
     */
    updateTime?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 详情 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/detail`
 */
type GetReportDsDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/detail', undefined, string, 'id', false>
>

/**
 * 接口 详情 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/detail`
 */
const getReportDsDetailRequestConfig: GetReportDsDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportDsDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 详情 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/detail`
 */
export const getReportDsDetail = /*#__PURE__*/ (
  requestData: GetReportDsDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportDsDetailResponse>(prepare(getReportDsDetailRequestConfig, requestData), ...args)
}

getReportDsDetail.requestConfig = getReportDsDetailRequestConfig

/**
 * 接口 获取可选字段列表 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldList`
 */
export interface PostReportDsGetOptionFieldListRequest {
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 主表表单id
   */
  formId?: string
}

/**
 * 接口 获取可选字段列表 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldList`
 */
export interface PostReportDsGetOptionFieldListResponse {
  code?: string
  data?: {
    /**
     * 字段code
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 字段名称
     */
    columnName?: string
    /**
     * 控件类型 参考枚举ControlTypeEnum
     */
    controlType?: string
    /**
     * 控件类型 参考枚举ControlTypeEnum
     */
    controlTypeName?: string
    /**
     * 字段类型 参考model_data_type
     */
    fieldType?: string
    /**
     * 完整字段名称
     */
    fullColumnName?: string
    /**
     * 是否主表
     */
    isMasterTable?: boolean
    /**
     * 模型编码
     */
    modelCode?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取可选字段列表 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldList`
 */
type PostReportDsGetOptionFieldListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/report/ds/getOptionFieldList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 获取可选字段列表 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldList`
 */
const postReportDsGetOptionFieldListRequestConfig: PostReportDsGetOptionFieldListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/getOptionFieldList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsGetOptionFieldList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取可选字段列表 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldList`
 */
export const postReportDsGetOptionFieldList = /*#__PURE__*/ (
  requestData: PostReportDsGetOptionFieldListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDsGetOptionFieldListResponse>(
    prepare(postReportDsGetOptionFieldListRequestConfig, requestData),
    ...args,
  )
}

postReportDsGetOptionFieldList.requestConfig = postReportDsGetOptionFieldListRequestConfig

/**
 * 接口 根据数据集ids获取可选字段列表 批量 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldListByIds`
 */
export interface PostReportDsGetOptionFieldListByIdsRequest {
  /**
   * 数据集ids
   */
  ids?: string[]
}

/**
 * 接口 根据数据集ids获取可选字段列表 批量 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldListByIds`
 */
export interface PostReportDsGetOptionFieldListByIdsResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据数据集ids获取可选字段列表 批量 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldListByIds`
 */
type PostReportDsGetOptionFieldListByIdsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/report/ds/getOptionFieldListByIds',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 根据数据集ids获取可选字段列表 批量 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldListByIds`
 */
const postReportDsGetOptionFieldListByIdsRequestConfig: PostReportDsGetOptionFieldListByIdsRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/report/ds/getOptionFieldListByIds',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postReportDsGetOptionFieldListByIds',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 根据数据集ids获取可选字段列表 批量 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/getOptionFieldListByIds`
 */
export const postReportDsGetOptionFieldListByIds = /*#__PURE__*/ (
  requestData: PostReportDsGetOptionFieldListByIdsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDsGetOptionFieldListByIdsResponse>(
    prepare(postReportDsGetOptionFieldListByIdsRequestConfig, requestData),
    ...args,
  )
}

postReportDsGetOptionFieldListByIds.requestConfig = postReportDsGetOptionFieldListByIdsRequestConfig

/**
 * 接口 列表 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/list`
 */
export interface PostReportDsListRequest {
  current?: number
  /**
   * 模式 0-普通 1-专业
   */
  mode?: number
  /**
   * 数据集名称
   */
  name?: string
  /**
   * 说明
   */
  remark?: string
  size?: number
}

/**
 * 接口 列表 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/list`
 */
export interface PostReportDsListResponse {
  code?: string
  data?: {
    corpCode?: string
    /**
     * 数据字段json数组
     */
    dataField?: string
    /**
     * 表单id
     */
    formId?: string
    /**
     * 主键
     */
    id?: string
    issued?: boolean
    /**
     * 模式 0-普通 1-专业
     */
    mode?: number
    /**
     * 数据集名称
     */
    name?: string
    /**
     * 说明
     */
    remark?: string
    /**
     * 报表数据源定义
     */
    reportSqlDefinition?: string
    /**
     * sql查询参数
     */
    sqlParam?: string
    /**
     * sql语句
     */
    sqlStatement?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/list`
 */
type PostReportDsListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/list', undefined, string, string, false>
>

/**
 * 接口 列表 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/list`
 */
const postReportDsListRequestConfig: PostReportDsListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/list`
 */
export const postReportDsList = /*#__PURE__*/ (requestData: PostReportDsListRequest, ...args: UserRequestRestArgs) => {
  return request<PostReportDsListResponse>(prepare(postReportDsListRequestConfig, requestData), ...args)
}

postReportDsList.requestConfig = postReportDsListRequestConfig

/**
 * 接口 分页列表 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/page`
 */
export interface PostReportDsPageRequest {
  current?: number
  /**
   * 模式 0-普通 1-专业
   */
  mode?: number
  /**
   * 数据集名称
   */
  name?: string
  /**
   * 说明
   */
  remark?: string
  size?: number
}

/**
 * 接口 分页列表 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/page`
 */
export interface PostReportDsPageResponse {
  code?: string
  data?: {
    corpCode?: string
    /**
     * 数据字段json数组
     */
    dataField?: string
    /**
     * 表单id
     */
    formId?: string
    /**
     * 主键
     */
    id?: string
    issued?: boolean
    /**
     * 模式 0-普通 1-专业
     */
    mode?: number
    /**
     * 数据集名称
     */
    name?: string
    /**
     * 说明
     */
    remark?: string
    /**
     * 报表数据源定义
     */
    reportSqlDefinition?: string
    /**
     * sql查询参数
     */
    sqlParam?: string
    /**
     * sql语句
     */
    sqlStatement?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
  total?: number
}

/**
 * 接口 分页列表 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/page`
 */
type PostReportDsPageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/page', undefined, string, string, false>
>

/**
 * 接口 分页列表 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/page`
 */
const postReportDsPageRequestConfig: PostReportDsPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/page',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页列表 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/page`
 */
export const postReportDsPage = /*#__PURE__*/ (requestData: PostReportDsPageRequest, ...args: UserRequestRestArgs) => {
  return request<PostReportDsPageResponse>(prepare(postReportDsPageRequestConfig, requestData), ...args)
}

postReportDsPage.requestConfig = postReportDsPageRequestConfig

/**
 * 接口 预览 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/preview`
 */
export interface PostReportDsPreviewRequest {
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 数据字段
   */
  dataFields?: {
    /**
     * 字段code
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 字段名称
     */
    columnName?: string
    /**
     * 默认值 PROJECT-当前项目 USER-当前用户 DEPARTMENT-部门
     */
    defaultValue?: string
    /**
     * 字段类型 参考model_data_type
     */
    fieldType?: string
    /**
     * 完整字段名称
     */
    fullColumnName?: string
    /**
     * 是否主表
     */
    isMasterTable?: boolean
    /**
     * 聚合方式 SUM-求和 COUNT-计数
     */
    mergeType?: string
    /**
     * 模型编码
     */
    modelCode?: string
  }[]
  /**
   * 数据范围 0-全部单据 1-已归档单据（包含手动添加2与已归档3）2-仅流程中单据(1)
   */
  dataRange?: number
  /**
   * 主表表单id
   */
  formId?: string
}

/**
 * 接口 预览 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/preview`
 */
export interface PostReportDsPreviewResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 预览 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/preview`
 */
type PostReportDsPreviewRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/preview', undefined, string, string, false>
>

/**
 * 接口 预览 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/preview`
 */
const postReportDsPreviewRequestConfig: PostReportDsPreviewRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/preview',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsPreview',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 预览 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/preview`
 */
export const postReportDsPreview = /*#__PURE__*/ (
  requestData: PostReportDsPreviewRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDsPreviewResponse>(prepare(postReportDsPreviewRequestConfig, requestData), ...args)
}

postReportDsPreview.requestConfig = postReportDsPreviewRequestConfig

/**
 * 接口 刷新数据集 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/refresh`
 */
export interface GetReportDsRefreshRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 刷新数据集 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/refresh`
 */
export interface GetReportDsRefreshResponse {
  code?: string
  data?: string
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 刷新数据集 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/refresh`
 */
type GetReportDsRefreshRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/refresh', undefined, string, 'id', false>
>

/**
 * 接口 刷新数据集 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/refresh`
 */
const getReportDsRefreshRequestConfig: GetReportDsRefreshRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/refresh',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getReportDsRefresh',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 刷新数据集 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `GET /report/ds/refresh`
 */
export const getReportDsRefresh = /*#__PURE__*/ (
  requestData: GetReportDsRefreshRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetReportDsRefreshResponse>(prepare(getReportDsRefreshRequestConfig, requestData), ...args)
}

getReportDsRefresh.requestConfig = getReportDsRefreshRequestConfig

/**
 * 接口 保存 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/save`
 */
export interface PostReportDsSaveRequest {
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 数据字段json数组
   */
  dataField?: {
    /**
     * 字段code
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 字段名称
     */
    columnName?: string
    /**
     * 默认值 PROJECT-当前项目 USER-当前用户 DEPARTMENT-部门
     */
    defaultValue?: string
    /**
     * 字段类型 参考model_data_type
     */
    fieldType?: string
    /**
     * 完整字段名称
     */
    fullColumnName?: string
    /**
     * 是否主表
     */
    isMasterTable?: boolean
    /**
     * 聚合方式 SUM-求和 COUNT-计数
     */
    mergeType?: string
    /**
     * 模型编码
     */
    modelCode?: string
  }[]
  /**
   * 数据范围 0-全部单据 1-已归档单据（包含手动添加与已归档）2-仅流程中单据
   */
  dataRange?: number
  /**
   * 数据库连接驱动
   */
  dsDriverClassName?: string
  /**
   * 数据库密码
   */
  dsPassword?: string
  /**
   * 数据源类型 0-内置数据库 1-外部数据库
   */
  dsType?: number
  /**
   * 数据库连接地址
   */
  dsUrl?: string
  /**
   * 数据库用户名
   */
  dsUsername?: string
  /**
   * 表单id
   */
  formId?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 模式 0-普通 1-专业
   */
  mode?: number
  /**
   * 模型id
   */
  modelId?: string
  /**
   * 数据集名称
   */
  name?: string
  /**
   * 说明
   */
  remark?: string
  /**
   * sql查询参数
   */
  sqlParam?: string
  /**
   * sql语句
   */
  sqlStatement?: string
}

/**
 * 接口 保存 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/save`
 */
export interface PostReportDsSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/save`
 */
type PostReportDsSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/save', undefined, string, string, false>
>

/**
 * 接口 保存 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/save`
 */
const postReportDsSaveRequestConfig: PostReportDsSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/save`
 */
export const postReportDsSave = /*#__PURE__*/ (requestData: PostReportDsSaveRequest, ...args: UserRequestRestArgs) => {
  return request<PostReportDsSaveResponse>(prepare(postReportDsSaveRequestConfig, requestData), ...args)
}

postReportDsSave.requestConfig = postReportDsSaveRequestConfig

/**
 * 接口 测试连接 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/testConnect`
 */
export interface PostReportDsTestConnectRequest {
  /**
   * 数据库连接驱动
   */
  dsDriverClassName?: string
  /**
   * 数据库密码
   */
  dsPassword?: string
  /**
   * 数据库连接地址
   */
  dsUrl?: string
  /**
   * 数据库用户名
   */
  dsUsername?: string
}

/**
 * 接口 测试连接 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/testConnect`
 */
export interface PostReportDsTestConnectResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 测试连接 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/testConnect`
 */
type PostReportDsTestConnectRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/testConnect', undefined, string, string, false>
>

/**
 * 接口 测试连接 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/testConnect`
 */
const postReportDsTestConnectRequestConfig: PostReportDsTestConnectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/testConnect',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsTestConnect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 测试连接 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/testConnect`
 */
export const postReportDsTestConnect = /*#__PURE__*/ (
  requestData: PostReportDsTestConnectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDsTestConnectResponse>(prepare(postReportDsTestConnectRequestConfig, requestData), ...args)
}

postReportDsTestConnect.requestConfig = postReportDsTestConnectRequestConfig

/**
 * 接口 修改 的 **请求类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/update`
 */
export interface PostReportDsUpdateRequest {
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 数据字段json数组
   */
  dataField?: {
    /**
     * 字段code
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 字段名称
     */
    columnName?: string
    /**
     * 默认值 PROJECT-当前项目 USER-当前用户 DEPARTMENT-部门
     */
    defaultValue?: string
    /**
     * 字段类型 参考model_data_type
     */
    fieldType?: string
    /**
     * 完整字段名称
     */
    fullColumnName?: string
    /**
     * 是否主表
     */
    isMasterTable?: boolean
    /**
     * 聚合方式 SUM-求和 COUNT-计数
     */
    mergeType?: string
    /**
     * 模型编码
     */
    modelCode?: string
  }[]
  /**
   * 数据范围 0-全部单据 1-已归档单据（包含手动添加与已归档）2-仅流程中单据
   */
  dataRange?: number
  /**
   * 数据库连接驱动
   */
  dsDriverClassName?: string
  /**
   * 数据库密码
   */
  dsPassword?: string
  /**
   * 数据源类型 0-内置数据库 1-外部数据库
   */
  dsType?: number
  /**
   * 数据库连接地址
   */
  dsUrl?: string
  /**
   * 数据库用户名
   */
  dsUsername?: string
  /**
   * 表单id
   */
  formId?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 模式 0-普通 1-专业
   */
  mode?: number
  /**
   * 模型id
   */
  modelId?: string
  /**
   * 数据集名称
   */
  name?: string
  /**
   * 说明
   */
  remark?: string
  /**
   * sql查询参数
   */
  sqlParam?: string
  /**
   * sql语句
   */
  sqlStatement?: string
}

/**
 * 接口 修改 的 **返回类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/update`
 */
export interface PostReportDsUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改 的 **请求配置的类型**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/update`
 */
type PostReportDsUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/report/ds/update', undefined, string, string, false>
>

/**
 * 接口 修改 的 **请求配置**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/update`
 */
const postReportDsUpdateRequestConfig: PostReportDsUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/report/ds/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postReportDsUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改 的 **请求函数**
 *
 * @分类 数据集控制层
 * @请求头 `POST /report/ds/update`
 */
export const postReportDsUpdate = /*#__PURE__*/ (
  requestData: PostReportDsUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostReportDsUpdateResponse>(prepare(postReportDsUpdateRequestConfig, requestData), ...args)
}

postReportDsUpdate.requestConfig = postReportDsUpdateRequestConfig

const mockUrl_0_0_0_7 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_7 = '' as any
const prodUrl_0_0_0_7 = '' as any
const dataKey_0_0_0_7 = undefined as any

/**
 * 接口 应用中心重定向到落地页 的 **请求类型**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/application/redirect`
 */
export interface GetSysAuthAppApplicationRedirectRequest {
  /**
   * 应用ID
   */
  applicationId?: string
}

/**
 * 接口 应用中心重定向到落地页 的 **返回类型**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/application/redirect`
 */
export type GetSysAuthAppApplicationRedirectResponse = string

/**
 * 接口 应用中心重定向到落地页 的 **请求配置的类型**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/application/redirect`
 */
type GetSysAuthAppApplicationRedirectRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/sys/auth/app/application/redirect',
    undefined,
    string,
    'applicationId',
    false
  >
>

/**
 * 接口 应用中心重定向到落地页 的 **请求配置**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/application/redirect`
 */
const getSysAuthAppApplicationRedirectRequestConfig: GetSysAuthAppApplicationRedirectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/sys/auth/app/application/redirect',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['applicationId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysAuthAppApplicationRedirect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用中心重定向到落地页 的 **请求函数**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/application/redirect`
 */
export const getSysAuthAppApplicationRedirect = /*#__PURE__*/ (
  requestData: GetSysAuthAppApplicationRedirectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysAuthAppApplicationRedirectResponse>(
    prepare(getSysAuthAppApplicationRedirectRequestConfig, requestData),
    ...args,
  )
}

getSysAuthAppApplicationRedirect.requestConfig = getSysAuthAppApplicationRedirectRequestConfig

/**
 * 接口 消息详情重定向 的 **请求类型**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/messageDetail/redirect`
 */
export interface GetSysAuthAppMessageDetailRedirectRequest {
  /**
   * id
   */
  id: string
  /**
   * read
   */
  read: string
  /**
   * type
   */
  type: string
}

/**
 * 接口 消息详情重定向 的 **返回类型**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/messageDetail/redirect`
 */
export type GetSysAuthAppMessageDetailRedirectResponse = string

/**
 * 接口 消息详情重定向 的 **请求配置的类型**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/messageDetail/redirect`
 */
type GetSysAuthAppMessageDetailRedirectRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/sys/auth/app/messageDetail/redirect',
    undefined,
    string,
    'id' | 'read' | 'type',
    false
  >
>

/**
 * 接口 消息详情重定向 的 **请求配置**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/messageDetail/redirect`
 */
const getSysAuthAppMessageDetailRedirectRequestConfig: GetSysAuthAppMessageDetailRedirectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/sys/auth/app/messageDetail/redirect',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['id', 'read', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysAuthAppMessageDetailRedirect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 消息详情重定向 的 **请求函数**
 *
 * @分类 消息详情重定向
 * @请求头 `GET /sys/auth/app/messageDetail/redirect`
 */
export const getSysAuthAppMessageDetailRedirect = /*#__PURE__*/ (
  requestData: GetSysAuthAppMessageDetailRedirectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysAuthAppMessageDetailRedirectResponse>(
    prepare(getSysAuthAppMessageDetailRedirectRequestConfig, requestData),
    ...args,
  )
}

getSysAuthAppMessageDetailRedirect.requestConfig = getSysAuthAppMessageDetailRedirectRequestConfig

const mockUrl_0_0_0_8 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_8 = '' as any
const prodUrl_0_0_0_8 = '' as any
const dataKey_0_0_0_8 = undefined as any

/**
 * 接口 添加 的 **请求类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/add`
 */
export type PostSysRouteAddRequest = {
  /**
   * 批量添加子节点
   */
  children?: {
    [k: string]: unknown
  }[]
  /**
   * 路由名称
   */
  name?: string
  /**
   * 路由具有父子关系，从一个页面触发，有增删该的页面
   */
  parentId?: string
  /**
   * 前端路由,页面路径
   */
  route?: string
  /**
   * 前端选择的中文显示
   */
  routeName?: string
}[]

/**
 * 接口 添加 的 **返回类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/add`
 */
export interface PostSysRouteAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加 的 **请求配置的类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/add`
 */
type PostSysRouteAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/route/add', undefined, string, string, false>
>

/**
 * 接口 添加 的 **请求配置**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/add`
 */
const postSysRouteAddRequestConfig: PostSysRouteAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/sys/route/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysRouteAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加 的 **请求函数**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/add`
 */
export const postSysRouteAdd = /*#__PURE__*/ (requestData: PostSysRouteAddRequest, ...args: UserRequestRestArgs) => {
  return request<PostSysRouteAddResponse>(prepare(postSysRouteAddRequestConfig, requestData), ...args)
}

postSysRouteAdd.requestConfig = postSysRouteAddRequestConfig

/**
 * 接口 编辑路由 的 **请求类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/edit`
 */
export interface PostSysRouteEditRequest {
  /**
   * 路由Id
   */
  id?: number
  /**
   * 路由名称
   */
  name?: string
  /**
   * 路由具有父子关系，从一个页面触发，有增删该的页面
   */
  parentId?: number
  /**
   * 前端路由,页面路径
   */
  route?: string
  /**
   * 前端选择的中文显示
   */
  routeName?: string
}

/**
 * 接口 编辑路由 的 **返回类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/edit`
 */
export interface PostSysRouteEditResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑路由 的 **请求配置的类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/edit`
 */
type PostSysRouteEditRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/route/edit', undefined, string, string, false>
>

/**
 * 接口 编辑路由 的 **请求配置**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/edit`
 */
const postSysRouteEditRequestConfig: PostSysRouteEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/sys/route/edit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysRouteEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑路由 的 **请求函数**
 *
 * @分类 系统前端路由管理
 * @请求头 `POST /sys/route/edit`
 */
export const postSysRouteEdit = /*#__PURE__*/ (requestData: PostSysRouteEditRequest, ...args: UserRequestRestArgs) => {
  return request<PostSysRouteEditResponse>(prepare(postSysRouteEditRequestConfig, requestData), ...args)
}

postSysRouteEdit.requestConfig = postSysRouteEditRequestConfig

/**
 * 接口 查询所有路由下拉 的 **请求类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/list`
 */
export interface GetSysRouteListRequest {
  /**
   * 是否为运营平台菜单
   */
  opsMenu?: string
}

/**
 * 接口 查询所有路由下拉 的 **返回类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/list`
 */
export interface GetSysRouteListResponse {
  /**
   * 路由归属业务，例如投标、总包、证书等
   */
  business?: string
  /**
   * 子节点
   */
  children?: {
    [k: string]: unknown
  }[]
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 主键
   */
  id?: string
  label?: string
  /**
   * 路由具有父子关系，从一个页面触发，有增删该的页面
   */
  parentId?: string
  /**
   * 前端路由,页面路径
   */
  route?: string
  /**
   * 前端选择的中文显示
   */
  routeName?: string
  /**
   * 类型1手动创建的2列表设计器创建的3按钮
   */
  type?: number
  /**
   * 更新时间
   */
  updateTime?: string
  value?: string
}

/**
 * 接口 查询所有路由下拉 的 **请求配置的类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/list`
 */
type GetSysRouteListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/route/list', undefined, string, 'opsMenu', false>
>

/**
 * 接口 查询所有路由下拉 的 **请求配置**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/list`
 */
const getSysRouteListRequestConfig: GetSysRouteListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/sys/route/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: ['opsMenu'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysRouteList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询所有路由下拉 的 **请求函数**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/list`
 */
export const getSysRouteList = /*#__PURE__*/ (requestData: GetSysRouteListRequest, ...args: UserRequestRestArgs) => {
  return request<GetSysRouteListResponse>(prepare(getSysRouteListRequestConfig, requestData), ...args)
}

getSysRouteList.requestConfig = getSysRouteListRequestConfig

/**
 * 接口 移除路由 的 **请求类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/remove`
 */
export interface GetSysRouteRemoveRequest {
  /**
   * 路由Id
   */
  routeId?: string
}

/**
 * 接口 移除路由 的 **返回类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/remove`
 */
export interface GetSysRouteRemoveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 移除路由 的 **请求配置的类型**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/remove`
 */
type GetSysRouteRemoveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/route/remove', undefined, string, 'routeId', false>
>

/**
 * 接口 移除路由 的 **请求配置**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/remove`
 */
const getSysRouteRemoveRequestConfig: GetSysRouteRemoveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/sys/route/remove',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: ['routeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysRouteRemove',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 移除路由 的 **请求函数**
 *
 * @分类 系统前端路由管理
 * @请求头 `GET /sys/route/remove`
 */
export const getSysRouteRemove = /*#__PURE__*/ (
  requestData: GetSysRouteRemoveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysRouteRemoveResponse>(prepare(getSysRouteRemoveRequestConfig, requestData), ...args)
}

getSysRouteRemove.requestConfig = getSysRouteRemoveRequestConfig

const mockUrl_0_0_0_9 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_9 = '' as any
const prodUrl_0_0_0_9 = '' as any
const dataKey_0_0_0_9 = undefined as any

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/detail`
 */
export interface GetSysConfigDetailRequest {}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/detail`
 */
export interface GetSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/detail`
 */
type GetSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, true>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/detail`
 */
const getSysConfigDetailRequestConfig: GetSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/detail`
 */
export const getSysConfigDetail = /*#__PURE__*/ (
  requestData?: GetSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysConfigDetailResponse>(prepare(getSysConfigDetailRequestConfig, requestData), ...args)
}

getSysConfigDetail.requestConfig = getSysConfigDetailRequestConfig

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/detail`
 */
export interface HeadSysConfigDetailRequest {}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/detail`
 */
export interface HeadSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/detail`
 */
type HeadSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, true>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/detail`
 */
const headSysConfigDetailRequestConfig: HeadSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.HEAD,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'headSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/detail`
 */
export const headSysConfigDetail = /*#__PURE__*/ (
  requestData?: HeadSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<HeadSysConfigDetailResponse>(prepare(headSysConfigDetailRequestConfig, requestData), ...args)
}

headSysConfigDetail.requestConfig = headSysConfigDetailRequestConfig

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/detail`
 */
export interface PostSysConfigDetailRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/detail`
 */
export interface PostSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/detail`
 */
type PostSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, false>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/detail`
 */
const postSysConfigDetailRequestConfig: PostSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/detail`
 */
export const postSysConfigDetail = /*#__PURE__*/ (
  requestData: PostSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSysConfigDetailResponse>(prepare(postSysConfigDetailRequestConfig, requestData), ...args)
}

postSysConfigDetail.requestConfig = postSysConfigDetailRequestConfig

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/detail`
 */
export interface PutSysConfigDetailRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/detail`
 */
export interface PutSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/detail`
 */
type PutSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, false>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/detail`
 */
const putSysConfigDetailRequestConfig: PutSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/detail`
 */
export const putSysConfigDetail = /*#__PURE__*/ (
  requestData: PutSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutSysConfigDetailResponse>(prepare(putSysConfigDetailRequestConfig, requestData), ...args)
}

putSysConfigDetail.requestConfig = putSysConfigDetailRequestConfig

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/detail`
 */
export interface DeleteSysConfigDetailRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/detail`
 */
export interface DeleteSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/detail`
 */
type DeleteSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, false>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/detail`
 */
const deleteSysConfigDetailRequestConfig: DeleteSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/detail`
 */
export const deleteSysConfigDetail = /*#__PURE__*/ (
  requestData: DeleteSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteSysConfigDetailResponse>(prepare(deleteSysConfigDetailRequestConfig, requestData), ...args)
}

deleteSysConfigDetail.requestConfig = deleteSysConfigDetailRequestConfig

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/detail`
 */
export interface OptionsSysConfigDetailRequest {}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/detail`
 */
export interface OptionsSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/detail`
 */
type OptionsSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, true>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/detail`
 */
const optionsSysConfigDetailRequestConfig: OptionsSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.OPTIONS,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'optionsSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/detail`
 */
export const optionsSysConfigDetail = /*#__PURE__*/ (
  requestData?: OptionsSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<OptionsSysConfigDetailResponse>(prepare(optionsSysConfigDetailRequestConfig, requestData), ...args)
}

optionsSysConfigDetail.requestConfig = optionsSysConfigDetailRequestConfig

/**
 * 接口 获取配置详情 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/detail`
 */
export interface PatchSysConfigDetailRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 获取配置详情 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/detail`
 */
export interface PatchSysConfigDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取配置详情 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/detail`
 */
type PatchSysConfigDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/detail', undefined, string, string, false>
>

/**
 * 接口 获取配置详情 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/detail`
 */
const patchSysConfigDetailRequestConfig: PatchSysConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/detail',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'patchSysConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取配置详情 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/detail`
 */
export const patchSysConfigDetail = /*#__PURE__*/ (
  requestData: PatchSysConfigDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchSysConfigDetailResponse>(prepare(patchSysConfigDetailRequestConfig, requestData), ...args)
}

patchSysConfigDetail.requestConfig = patchSysConfigDetailRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/set`
 */
export interface GetSysConfigSetRequest {}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/set`
 */
export interface GetSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/set`
 */
type GetSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, true>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/set`
 */
const getSysConfigSetRequestConfig: GetSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `GET /sys/config/set`
 */
export const getSysConfigSet = /*#__PURE__*/ (requestData?: GetSysConfigSetRequest, ...args: UserRequestRestArgs) => {
  return request<GetSysConfigSetResponse>(prepare(getSysConfigSetRequestConfig, requestData), ...args)
}

getSysConfigSet.requestConfig = getSysConfigSetRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/set`
 */
export interface HeadSysConfigSetRequest {}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/set`
 */
export interface HeadSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/set`
 */
type HeadSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, true>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/set`
 */
const headSysConfigSetRequestConfig: HeadSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.HEAD,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'headSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `HEAD /sys/config/set`
 */
export const headSysConfigSet = /*#__PURE__*/ (requestData?: HeadSysConfigSetRequest, ...args: UserRequestRestArgs) => {
  return request<HeadSysConfigSetResponse>(prepare(headSysConfigSetRequestConfig, requestData), ...args)
}

headSysConfigSet.requestConfig = headSysConfigSetRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/set`
 */
export interface PostSysConfigSetRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/set`
 */
export interface PostSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/set`
 */
type PostSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, false>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/set`
 */
const postSysConfigSetRequestConfig: PostSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `POST /sys/config/set`
 */
export const postSysConfigSet = /*#__PURE__*/ (requestData: PostSysConfigSetRequest, ...args: UserRequestRestArgs) => {
  return request<PostSysConfigSetResponse>(prepare(postSysConfigSetRequestConfig, requestData), ...args)
}

postSysConfigSet.requestConfig = postSysConfigSetRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/set`
 */
export interface PutSysConfigSetRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/set`
 */
export interface PutSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/set`
 */
type PutSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, false>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/set`
 */
const putSysConfigSetRequestConfig: PutSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `PUT /sys/config/set`
 */
export const putSysConfigSet = /*#__PURE__*/ (requestData: PutSysConfigSetRequest, ...args: UserRequestRestArgs) => {
  return request<PutSysConfigSetResponse>(prepare(putSysConfigSetRequestConfig, requestData), ...args)
}

putSysConfigSet.requestConfig = putSysConfigSetRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/set`
 */
export interface DeleteSysConfigSetRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/set`
 */
export interface DeleteSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/set`
 */
type DeleteSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, false>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/set`
 */
const deleteSysConfigSetRequestConfig: DeleteSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `DELETE /sys/config/set`
 */
export const deleteSysConfigSet = /*#__PURE__*/ (
  requestData: DeleteSysConfigSetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteSysConfigSetResponse>(prepare(deleteSysConfigSetRequestConfig, requestData), ...args)
}

deleteSysConfigSet.requestConfig = deleteSysConfigSetRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/set`
 */
export interface OptionsSysConfigSetRequest {}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/set`
 */
export interface OptionsSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/set`
 */
type OptionsSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, true>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/set`
 */
const optionsSysConfigSetRequestConfig: OptionsSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.OPTIONS,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'optionsSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `OPTIONS /sys/config/set`
 */
export const optionsSysConfigSet = /*#__PURE__*/ (
  requestData?: OptionsSysConfigSetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<OptionsSysConfigSetResponse>(prepare(optionsSysConfigSetRequestConfig, requestData), ...args)
}

optionsSysConfigSet.requestConfig = optionsSysConfigSetRequestConfig

/**
 * 接口 设置系统配置 的 **请求类型**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/set`
 */
export interface PatchSysConfigSetRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 企业唯一标识
   */
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 系统配置ID
   */
  id?: number
  /**
   * 登录页底图背景图
   */
  loginBgImg?: string
  /**
   * 登录LOGO
   */
  loginLogo?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 站点logo,logo反白
   */
  websiteLogo?: string
  /**
   * 站点名称
   */
  websiteName?: string
}

/**
 * 接口 设置系统配置 的 **返回类型**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/set`
 */
export interface PatchSysConfigSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设置系统配置 的 **请求配置的类型**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/set`
 */
type PatchSysConfigSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/config/set', undefined, string, string, false>
>

/**
 * 接口 设置系统配置 的 **请求配置**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/set`
 */
const patchSysConfigSetRequestConfig: PatchSysConfigSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/sys/config/set',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'patchSysConfigSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设置系统配置 的 **请求函数**
 *
 * @分类 系统配置中心
 * @请求头 `PATCH /sys/config/set`
 */
export const patchSysConfigSet = /*#__PURE__*/ (
  requestData: PatchSysConfigSetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchSysConfigSetResponse>(prepare(patchSysConfigSetRequestConfig, requestData), ...args)
}

patchSysConfigSet.requestConfig = patchSysConfigSetRequestConfig

const mockUrl_0_0_0_10 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_10 = '' as any
const prodUrl_0_0_0_10 = '' as any
const dataKey_0_0_0_10 = undefined as any

/**
 * 接口 根据人员id查询类型 的 **请求类型**
 *
 * @分类 证书人员关系
 * @请求头 `GET /certificate/addition/configs`
 */
export interface GetCertificateAdditionConfigsRequest {
  /**
   * 人员id
   */
  id: string
}

/**
 * 接口 根据人员id查询类型 的 **返回类型**
 *
 * @分类 证书人员关系
 * @请求头 `GET /certificate/addition/configs`
 */
export interface GetCertificateAdditionConfigsResponse {
  /**
   * 子集
   */
  children?: {
    [k: string]: unknown
  }[]
  id?: {}
  /**
   * 逻辑删除：0，删除；1，正常
   */
  isDel?: number
  /**
   * 是否为最新版本，最新版本为1，历史版本为0
   */
  isLast?: number
  /**
   * 配置项id
   */
  itemId?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 父级id
   */
  parentId?: string
  /**
   * 0禁用1启用
   */
  status?: number
  /**
   * 1树结构 2非树结构
   */
  tree?: number
  /**
   * 1配置项2选项，配置项不能作为属性选择，选项可以
   */
  type?: number
}

/**
 * 接口 根据人员id查询类型 的 **请求配置的类型**
 *
 * @分类 证书人员关系
 * @请求头 `GET /certificate/addition/configs`
 */
type GetCertificateAdditionConfigsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/certificate/addition/configs',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 根据人员id查询类型 的 **请求配置**
 *
 * @分类 证书人员关系
 * @请求头 `GET /certificate/addition/configs`
 */
const getCertificateAdditionConfigsRequestConfig: GetCertificateAdditionConfigsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/certificate/addition/configs',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCertificateAdditionConfigs',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据人员id查询类型 的 **请求函数**
 *
 * @分类 证书人员关系
 * @请求头 `GET /certificate/addition/configs`
 */
export const getCertificateAdditionConfigs = /*#__PURE__*/ (
  requestData: GetCertificateAdditionConfigsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCertificateAdditionConfigsResponse>(
    prepare(getCertificateAdditionConfigsRequestConfig, requestData),
    ...args,
  )
}

getCertificateAdditionConfigs.requestConfig = getCertificateAdditionConfigsRequestConfig

const mockUrl_0_0_0_11 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_11 = '' as any
const prodUrl_0_0_0_11 = '' as any
const dataKey_0_0_0_11 = undefined as any

/**
 * 接口 添加部门 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/add`
 */
export interface PostSysDepartmentAddRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 部门职能
   */
  depFunction?: string
  /**
   * 部门负责人
   */
  depLeader?: string
  /**
   * 部门负责人ID
   */
  depLeaderId?: number
  /**
   * 部门名字
   */
  depName?: string
  /**
   * 部门ID
   */
  id?: number
  /**
   * 是否核算单位：0否，1是
   */
  isCheck?: string
  /**
   * 工作任务
   */
  job?: string
  /**
   * 部门父ID
   */
  parentId?: number
  /**
   * 排序
   */
  sort?: number
  /**
   * 部门类型:0为默认总公司
   */
  type?: number
}

/**
 * 接口 添加部门 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/add`
 */
export interface PostSysDepartmentAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加部门 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/add`
 */
type PostSysDepartmentAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/add', undefined, string, string, false>
>

/**
 * 接口 添加部门 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/add`
 */
const postSysDepartmentAddRequestConfig: PostSysDepartmentAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysDepartmentAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加部门 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/add`
 */
export const postSysDepartmentAdd = /*#__PURE__*/ (
  requestData: PostSysDepartmentAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSysDepartmentAddResponse>(prepare(postSysDepartmentAddRequestConfig, requestData), ...args)
}

postSysDepartmentAdd.requestConfig = postSysDepartmentAddRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/delete`
 */
export interface GetSysDepartmentDeleteRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/delete`
 */
export interface GetSysDepartmentDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/delete`
 */
type GetSysDepartmentDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/delete`
 */
const getSysDepartmentDeleteRequestConfig: GetSysDepartmentDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/delete`
 */
export const getSysDepartmentDelete = /*#__PURE__*/ (
  requestData: GetSysDepartmentDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentDeleteResponse>(prepare(getSysDepartmentDeleteRequestConfig, requestData), ...args)
}

getSysDepartmentDelete.requestConfig = getSysDepartmentDeleteRequestConfig

/**
 * 接口 查看详情 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/detail`
 */
export interface GetSysDepartmentDetailRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 查看详情 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/detail`
 */
export interface GetSysDepartmentDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查看详情 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/detail`
 */
type GetSysDepartmentDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/detail', undefined, string, 'id', false>
>

/**
 * 接口 查看详情 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/detail`
 */
const getSysDepartmentDetailRequestConfig: GetSysDepartmentDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看详情 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/detail`
 */
export const getSysDepartmentDetail = /*#__PURE__*/ (
  requestData: GetSysDepartmentDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentDetailResponse>(prepare(getSysDepartmentDetailRequestConfig, requestData), ...args)
}

getSysDepartmentDetail.requestConfig = getSysDepartmentDetailRequestConfig

/**
 * 接口 专门给查询下拉接口 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/dropDown`
 */
export interface GetSysDepartmentDropDownRequest {
  /**
   * 0 不是 1 是
   */
  isCompany: string
}

/**
 * 接口 专门给查询下拉接口 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/dropDown`
 */
export interface GetSysDepartmentDropDownResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 专门给查询下拉接口 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/dropDown`
 */
type GetSysDepartmentDropDownRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/sys/department/dropDown',
    undefined,
    string,
    'isCompany',
    false
  >
>

/**
 * 接口 专门给查询下拉接口 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/dropDown`
 */
const getSysDepartmentDropDownRequestConfig: GetSysDepartmentDropDownRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/dropDown',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['isCompany'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentDropDown',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 专门给查询下拉接口 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/dropDown`
 */
export const getSysDepartmentDropDown = /*#__PURE__*/ (
  requestData: GetSysDepartmentDropDownRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentDropDownResponse>(prepare(getSysDepartmentDropDownRequestConfig, requestData), ...args)
}

getSysDepartmentDropDown.requestConfig = getSysDepartmentDropDownRequestConfig

/**
 * 接口 模糊搜索 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/list`
 */
export interface GetSysDepartmentListRequest {
  /**
   * name
   */
  name?: string
}

/**
 * 接口 模糊搜索 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/list`
 */
export interface GetSysDepartmentListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 模糊搜索 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/list`
 */
type GetSysDepartmentListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/list', undefined, string, 'name', false>
>

/**
 * 接口 模糊搜索 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/list`
 */
const getSysDepartmentListRequestConfig: GetSysDepartmentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 模糊搜索 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/list`
 */
export const getSysDepartmentList = /*#__PURE__*/ (
  requestData: GetSysDepartmentListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentListResponse>(prepare(getSysDepartmentListRequestConfig, requestData), ...args)
}

getSysDepartmentList.requestConfig = getSysDepartmentListRequestConfig

/**
 * 接口 根据部门id获取部门名称 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/name`
 */
export type PostSysDepartmentNameRequest = number[]

/**
 * 接口 根据部门id获取部门名称 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/name`
 */
export interface PostSysDepartmentNameResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据部门id获取部门名称 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/name`
 */
type PostSysDepartmentNameRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/name', undefined, string, string, false>
>

/**
 * 接口 根据部门id获取部门名称 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/name`
 */
const postSysDepartmentNameRequestConfig: PostSysDepartmentNameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/name',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysDepartmentName',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据部门id获取部门名称 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/name`
 */
export const postSysDepartmentName = /*#__PURE__*/ (
  requestData: PostSysDepartmentNameRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSysDepartmentNameResponse>(prepare(postSysDepartmentNameRequestConfig, requestData), ...args)
}

postSysDepartmentName.requestConfig = postSysDepartmentNameRequestConfig

/**
 * 接口 排序 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/sort`
 */
export interface GetSysDepartmentSortRequest {
  /**
   * depId
   */
  depId?: string
  /**
   * pid
   */
  pid?: string
  /**
   * sort
   */
  sort?: string
  /**
   * type
   */
  type?: string
}

/**
 * 接口 排序 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/sort`
 */
export interface GetSysDepartmentSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 排序 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/sort`
 */
type GetSysDepartmentSortRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/sys/department/sort',
    undefined,
    string,
    'depId' | 'pid' | 'sort' | 'type',
    false
  >
>

/**
 * 接口 排序 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/sort`
 */
const getSysDepartmentSortRequestConfig: GetSysDepartmentSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/sort',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['depId', 'pid', 'sort', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 排序 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/sort`
 */
export const getSysDepartmentSort = /*#__PURE__*/ (
  requestData: GetSysDepartmentSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentSortResponse>(prepare(getSysDepartmentSortRequestConfig, requestData), ...args)
}

getSysDepartmentSort.requestConfig = getSysDepartmentSortRequestConfig

/**
 * 接口 查看树形列表 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/tree`
 */
export interface GetSysDepartmentTreeRequest {
  /**
   * depName
   */
  depName?: string
}

/**
 * 接口 查看树形列表 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/tree`
 */
export interface GetSysDepartmentTreeResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查看树形列表 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/tree`
 */
type GetSysDepartmentTreeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/tree', undefined, string, 'depName', false>
>

/**
 * 接口 查看树形列表 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/tree`
 */
const getSysDepartmentTreeRequestConfig: GetSysDepartmentTreeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/tree',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['depName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentTree',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看树形列表 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/department/tree`
 */
export const getSysDepartmentTree = /*#__PURE__*/ (
  requestData: GetSysDepartmentTreeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentTreeResponse>(prepare(getSysDepartmentTreeRequestConfig, requestData), ...args)
}

getSysDepartmentTree.requestConfig = getSysDepartmentTreeRequestConfig

/**
 * 接口 编辑部门 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/update`
 */
export interface PostSysDepartmentUpdateRequest {
  /**
   * 企业ID
   */
  companyId?: number
  /**
   * 部门职能
   */
  depFunction?: string
  /**
   * 部门负责人
   */
  depLeader?: string
  /**
   * 部门负责人ID
   */
  depLeaderId?: number
  /**
   * 部门名字
   */
  depName?: string
  /**
   * 部门ID
   */
  id?: number
  /**
   * 是否核算单位：0否，1是
   */
  isCheck?: string
  /**
   * 工作任务
   */
  job?: string
  /**
   * 部门父ID
   */
  parentId?: number
  /**
   * 排序
   */
  sort?: number
  /**
   * 部门类型:0为默认总公司
   */
  type?: number
}

/**
 * 接口 编辑部门 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/update`
 */
export interface PostSysDepartmentUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑部门 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/update`
 */
type PostSysDepartmentUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/sys/department/update', undefined, string, string, false>
>

/**
 * 接口 编辑部门 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/update`
 */
const postSysDepartmentUpdateRequestConfig: PostSysDepartmentUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/department/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSysDepartmentUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑部门 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `POST /sys/department/update`
 */
export const postSysDepartmentUpdate = /*#__PURE__*/ (
  requestData: PostSysDepartmentUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSysDepartmentUpdateResponse>(prepare(postSysDepartmentUpdateRequestConfig, requestData), ...args)
}

postSysDepartmentUpdate.requestConfig = postSysDepartmentUpdateRequestConfig

/**
 * 接口 编辑部门负责人 的 **请求类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/departmentLeader/update`
 */
export interface GetSysDepartmentLeaderUpdateRequest {
  /**
   * depLeaderId
   */
  depLeaderId?: string
  /**
   * id
   */
  id?: string
}

/**
 * 接口 编辑部门负责人 的 **返回类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/departmentLeader/update`
 */
export interface GetSysDepartmentLeaderUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑部门负责人 的 **请求配置的类型**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/departmentLeader/update`
 */
type GetSysDepartmentLeaderUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/sys/departmentLeader/update',
    undefined,
    string,
    'depLeaderId' | 'id',
    false
  >
>

/**
 * 接口 编辑部门负责人 的 **请求配置**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/departmentLeader/update`
 */
const getSysDepartmentLeaderUpdateRequestConfig: GetSysDepartmentLeaderUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/sys/departmentLeader/update',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['depLeaderId', 'id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSysDepartmentLeaderUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑部门负责人 的 **请求函数**
 *
 * @分类 部门管理
 * @请求头 `GET /sys/departmentLeader/update`
 */
export const getSysDepartmentLeaderUpdate = /*#__PURE__*/ (
  requestData: GetSysDepartmentLeaderUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSysDepartmentLeaderUpdateResponse>(
    prepare(getSysDepartmentLeaderUpdateRequestConfig, requestData),
    ...args,
  )
}

getSysDepartmentLeaderUpdate.requestConfig = getSysDepartmentLeaderUpdateRequestConfig

const mockUrl_0_0_0_12 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_12 = '' as any
const prodUrl_0_0_0_12 = '' as any
const dataKey_0_0_0_12 = undefined as any

/**
 * 接口 获取报表列表 的 **请求类型**
 *
 * @分类 【APP】报表相关操作
 * @请求头 `POST /app/report/list`
 */
export interface PostAppReportListRequest {
  current?: number
  size?: number
}

/**
 * 接口 获取报表列表 的 **返回类型**
 *
 * @分类 【APP】报表相关操作
 * @请求头 `POST /app/report/list`
 */
export interface PostAppReportListResponse {
  code?: string
  data?: {
    /**
     * 跳转的H5落地页url
     */
    h5Url?: string
    /**
     * item图标链接
     */
    icon?: string
    /**
     * item名称
     */
    name?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
  total?: number
}

/**
 * 接口 获取报表列表 的 **请求配置的类型**
 *
 * @分类 【APP】报表相关操作
 * @请求头 `POST /app/report/list`
 */
type PostAppReportListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/report/list', undefined, string, string, false>
>

/**
 * 接口 获取报表列表 的 **请求配置**
 *
 * @分类 【APP】报表相关操作
 * @请求头 `POST /app/report/list`
 */
const postAppReportListRequestConfig: PostAppReportListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/app/report/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppReportList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取报表列表 的 **请求函数**
 *
 * @分类 【APP】报表相关操作
 * @请求头 `POST /app/report/list`
 */
export const postAppReportList = /*#__PURE__*/ (
  requestData: PostAppReportListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppReportListResponse>(prepare(postAppReportListRequestConfig, requestData), ...args)
}

postAppReportList.requestConfig = postAppReportListRequestConfig

const mockUrl_0_0_0_13 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_13 = '' as any
const prodUrl_0_0_0_13 = '' as any
const dataKey_0_0_0_13 = undefined as any

/**
 * 接口 高级查询触发 的 **请求类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/apply`
 */
export interface PostSeniorQueryApplyRequest {
  /**
   * 是否是list
   */
  isList?: boolean
  /**
   * 需要替换的值例：  sql定义为 select * from {table} 那么 map中应当定义为  map.put('table','xxx')
   */
  maps?: {}
  /**
   * 唯一标识
   */
  uniqueMark?: string
}

/**
 * 接口 高级查询触发 的 **返回类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/apply`
 */
export interface PostSeniorQueryApplyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 高级查询触发 的 **请求配置的类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/apply`
 */
type PostSeniorQueryApplyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/seniorQuery/apply', undefined, string, string, false>
>

/**
 * 接口 高级查询触发 的 **请求配置**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/apply`
 */
const postSeniorQueryApplyRequestConfig: PostSeniorQueryApplyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/seniorQuery/apply',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSeniorQueryApply',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 高级查询触发 的 **请求函数**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/apply`
 */
export const postSeniorQueryApply = /*#__PURE__*/ (
  requestData: PostSeniorQueryApplyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSeniorQueryApplyResponse>(prepare(postSeniorQueryApplyRequestConfig, requestData), ...args)
}

postSeniorQueryApply.requestConfig = postSeniorQueryApplyRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/delete`
 */
export interface PostSeniorQueryDeleteRequest {
  current?: number
  /**
   * 描述
   */
  description?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 名称
   */
  name?: string
  size?: number
  /**
   * sql
   */
  sql?: string
  /**
   * 唯一标识
   */
  uniqueMark?: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/delete`
 */
export interface PostSeniorQueryDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/delete`
 */
type PostSeniorQueryDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/seniorQuery/delete', undefined, string, string, false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/delete`
 */
const postSeniorQueryDeleteRequestConfig: PostSeniorQueryDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/seniorQuery/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSeniorQueryDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/delete`
 */
export const postSeniorQueryDelete = /*#__PURE__*/ (
  requestData: PostSeniorQueryDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSeniorQueryDeleteResponse>(prepare(postSeniorQueryDeleteRequestConfig, requestData), ...args)
}

postSeniorQueryDelete.requestConfig = postSeniorQueryDeleteRequestConfig

/**
 * 接口 分页列表查询 的 **请求类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/getList`
 */
export interface PostSeniorQueryGetListRequest {
  current?: number
  /**
   * 描述
   */
  description?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 名称
   */
  name?: string
  size?: number
  /**
   * sql
   */
  sql?: string
  /**
   * 唯一标识
   */
  uniqueMark?: string
}

/**
 * 接口 分页列表查询 的 **返回类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/getList`
 */
export interface PostSeniorQueryGetListResponse {
  corpCode?: string
  /**
   * 描述
   */
  description?: string
  id?: string
  /**
   * 删除
   */
  isDel?: number
  issued?: boolean
  /**
   * 名称
   */
  name?: string
  /**
   * sql
   */
  sql?: string
  /**
   * 唯一标识
   */
  uniqueMark?: string
}

/**
 * 接口 分页列表查询 的 **请求配置的类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/getList`
 */
type PostSeniorQueryGetListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/seniorQuery/getList', undefined, string, string, false>
>

/**
 * 接口 分页列表查询 的 **请求配置**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/getList`
 */
const postSeniorQueryGetListRequestConfig: PostSeniorQueryGetListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/seniorQuery/getList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSeniorQueryGetList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页列表查询 的 **请求函数**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/getList`
 */
export const postSeniorQueryGetList = /*#__PURE__*/ (
  requestData: PostSeniorQueryGetListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSeniorQueryGetListResponse>(prepare(postSeniorQueryGetListRequestConfig, requestData), ...args)
}

postSeniorQueryGetList.requestConfig = postSeniorQueryGetListRequestConfig

/**
 * 接口 获取客户标识前缀 的 **请求类型**
 *
 * @分类 高级查询控制层
 * @请求头 `GET /seniorQuery/getPrefix`
 */
export interface GetSeniorQueryGetPrefixRequest {}

/**
 * 接口 获取客户标识前缀 的 **返回类型**
 *
 * @分类 高级查询控制层
 * @请求头 `GET /seniorQuery/getPrefix`
 */
export interface GetSeniorQueryGetPrefixResponse {
  code?: string
  data?: {
    /**
     * 客户标识前缀
     */
    prefix?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取客户标识前缀 的 **请求配置的类型**
 *
 * @分类 高级查询控制层
 * @请求头 `GET /seniorQuery/getPrefix`
 */
type GetSeniorQueryGetPrefixRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/seniorQuery/getPrefix', undefined, string, string, true>
>

/**
 * 接口 获取客户标识前缀 的 **请求配置**
 *
 * @分类 高级查询控制层
 * @请求头 `GET /seniorQuery/getPrefix`
 */
const getSeniorQueryGetPrefixRequestConfig: GetSeniorQueryGetPrefixRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/seniorQuery/getPrefix',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSeniorQueryGetPrefix',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取客户标识前缀 的 **请求函数**
 *
 * @分类 高级查询控制层
 * @请求头 `GET /seniorQuery/getPrefix`
 */
export const getSeniorQueryGetPrefix = /*#__PURE__*/ (
  requestData?: GetSeniorQueryGetPrefixRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetSeniorQueryGetPrefixResponse>(prepare(getSeniorQueryGetPrefixRequestConfig, requestData), ...args)
}

getSeniorQueryGetPrefix.requestConfig = getSeniorQueryGetPrefixRequestConfig

/**
 * 接口 保存 的 **请求类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/save`
 */
export interface PostSeniorQuerySaveRequest {
  current?: number
  /**
   * 描述
   */
  description?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 名称
   */
  name?: string
  size?: number
  /**
   * sql
   */
  sql?: string
  /**
   * 唯一标识
   */
  uniqueMark?: string
}

/**
 * 接口 保存 的 **返回类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/save`
 */
export interface PostSeniorQuerySaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存 的 **请求配置的类型**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/save`
 */
type PostSeniorQuerySaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/seniorQuery/save', undefined, string, string, false>
>

/**
 * 接口 保存 的 **请求配置**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/save`
 */
const postSeniorQuerySaveRequestConfig: PostSeniorQuerySaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/seniorQuery/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSeniorQuerySave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存 的 **请求函数**
 *
 * @分类 高级查询控制层
 * @请求头 `POST /seniorQuery/save`
 */
export const postSeniorQuerySave = /*#__PURE__*/ (
  requestData: PostSeniorQuerySaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSeniorQuerySaveResponse>(prepare(postSeniorQuerySaveRequestConfig, requestData), ...args)
}

postSeniorQuerySave.requestConfig = postSeniorQuerySaveRequestConfig

const mockUrl_0_0_0_14 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_14 = '' as any
const prodUrl_0_0_0_14 = '' as any
const dataKey_0_0_0_14 = undefined as any

/**
 * 接口 获取阿里云token 的 **请求类型**
 *
 * @分类 【APP】文件上传相关操作
 * @请求头 `GET /app/ossToken/get`
 */
export interface GetAppOssTokenGetRequest {}

/**
 * 接口 获取阿里云token 的 **返回类型**
 *
 * @分类 【APP】文件上传相关操作
 * @请求头 `GET /app/ossToken/get`
 */
export interface GetAppOssTokenGetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取阿里云token 的 **请求配置的类型**
 *
 * @分类 【APP】文件上传相关操作
 * @请求头 `GET /app/ossToken/get`
 */
type GetAppOssTokenGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/ossToken/get', undefined, string, string, true>
>

/**
 * 接口 获取阿里云token 的 **请求配置**
 *
 * @分类 【APP】文件上传相关操作
 * @请求头 `GET /app/ossToken/get`
 */
const getAppOssTokenGetRequestConfig: GetAppOssTokenGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_14,
  devUrl: devUrl_0_0_0_14,
  prodUrl: prodUrl_0_0_0_14,
  path: '/app/ossToken/get',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_14,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppOssTokenGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取阿里云token 的 **请求函数**
 *
 * @分类 【APP】文件上传相关操作
 * @请求头 `GET /app/ossToken/get`
 */
export const getAppOssTokenGet = /*#__PURE__*/ (
  requestData?: GetAppOssTokenGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppOssTokenGetResponse>(prepare(getAppOssTokenGetRequestConfig, requestData), ...args)
}

getAppOssTokenGet.requestConfig = getAppOssTokenGetRequestConfig

const mockUrl_0_0_0_15 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_15 = '' as any
const prodUrl_0_0_0_15 = '' as any
const dataKey_0_0_0_15 = undefined as any

/**
 * 接口 获取流程统计数据 的 **请求类型**
 *
 * @分类 【APP】流程相关操作
 * @请求头 `GET /app/process/stat`
 */
export interface GetAppProcessStatRequest {
  /**
   * 统计类型（1按照周2按照月统计数据）
   */
  type?: string
}

/**
 * 接口 获取流程统计数据 的 **返回类型**
 *
 * @分类 【APP】流程相关操作
 * @请求头 `GET /app/process/stat`
 */
export interface GetAppProcessStatResponse {
  code?: string
  /**
   * 实例处理人数据统计
   */
  data?: {
    /**
     * 比较上周或者上月数量
     */
    compareLaunchNumber?: string
    /**
     * 已处理的
     */
    completeNumber?: string
    /**
     * 完成率
     */
    completeRate?: string
    /**
     * 已结束的
     */
    endedNumber?: string
    /**
     * 比较上周或者上月数量
     */
    lastWaitNumber?: string
    /**
     * 我发起的数量
     */
    launchNumber?: string
    /**
     * 通过率
     */
    passRate?: string
    /**
     * 我的流程Tab页跳转url
     */
    processTabH5Url?: string
    /**
     * 待处理
     */
    waitNumber?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取流程统计数据 的 **请求配置的类型**
 *
 * @分类 【APP】流程相关操作
 * @请求头 `GET /app/process/stat`
 */
type GetAppProcessStatRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/process/stat', undefined, string, 'type', false>
>

/**
 * 接口 获取流程统计数据 的 **请求配置**
 *
 * @分类 【APP】流程相关操作
 * @请求头 `GET /app/process/stat`
 */
const getAppProcessStatRequestConfig: GetAppProcessStatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/app/process/stat',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: ['type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppProcessStat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取流程统计数据 的 **请求函数**
 *
 * @分类 【APP】流程相关操作
 * @请求头 `GET /app/process/stat`
 */
export const getAppProcessStat = /*#__PURE__*/ (
  requestData: GetAppProcessStatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppProcessStatResponse>(prepare(getAppProcessStatRequestConfig, requestData), ...args)
}

getAppProcessStat.requestConfig = getAppProcessStatRequestConfig

const mockUrl_0_0_0_16 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_16 = '' as any
const prodUrl_0_0_0_16 = '' as any
const dataKey_0_0_0_16 = undefined as any

/**
 * 接口 获取消息详情 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/detail`
 */
export interface PostAppMessageDetailRequest {
  /**
   * 消息ID
   */
  id?: number
  /**
   * 消息ID
   */
  messageId?: number
  /**
   * 消息类型
   */
  messageType?: number
  /**
   * 消息类型
   */
  typeId?: number
}

/**
 * 接口 获取消息详情 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/detail`
 */
export interface PostAppMessageDetailResponse {
  code?: string
  data?: {
    /**
     * 附件信息
     */
    annexInfo?: {
      /**
       * 附件Id
       */
      id?: number
      /**
       * 附件名称
       */
      name?: string
      /**
       * 附件大小
       */
      size?: string
      /**
       * 附件路径
       */
      url?: string
    }[]
    /**
     * 作者
     */
    author?: string
    /**
     * 业务id
     */
    contentId?: string
    /**
     * 文章内容
     */
    context?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 是否开启评论0否1是
     */
    openComment?: number
    /**
     * 发布时间
     */
    publishTime?: string
    /**
     * 已读人数
     */
    readPerson?: string
    /**
     * 文章标题
     */
    title?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取消息详情 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/detail`
 */
type PostAppMessageDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/message/detail', undefined, string, string, false>
>

/**
 * 接口 获取消息详情 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/detail`
 */
const postAppMessageDetailRequestConfig: PostAppMessageDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/detail',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppMessageDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取消息详情 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/detail`
 */
export const postAppMessageDetail = /*#__PURE__*/ (
  requestData: PostAppMessageDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppMessageDetailResponse>(prepare(postAppMessageDetailRequestConfig, requestData), ...args)
}

postAppMessageDetail.requestConfig = postAppMessageDetailRequestConfig

/**
 * 接口 分组下的类型 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/groupChildren`
 */
export interface GetAppMessageGroupChildrenRequest {
  /**
   * groupId
   */
  groupId: string
}

/**
 * 接口 分组下的类型 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/groupChildren`
 */
export interface GetAppMessageGroupChildrenResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 分组下的类型 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/groupChildren`
 */
type GetAppMessageGroupChildrenRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/message/groupChildren',
    undefined,
    string,
    'groupId',
    false
  >
>

/**
 * 接口 分组下的类型 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/groupChildren`
 */
const getAppMessageGroupChildrenRequestConfig: GetAppMessageGroupChildrenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/groupChildren',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: ['groupId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppMessageGroupChildren',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分组下的类型 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/groupChildren`
 */
export const getAppMessageGroupChildren = /*#__PURE__*/ (
  requestData: GetAppMessageGroupChildrenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppMessageGroupChildrenResponse>(
    prepare(getAppMessageGroupChildrenRequestConfig, requestData),
    ...args,
  )
}

getAppMessageGroupChildren.requestConfig = getAppMessageGroupChildrenRequestConfig

/**
 * 接口 获取消息主页面 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/index`
 */
export interface GetAppMessageIndexRequest {}

/**
 * 接口 获取消息主页面 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/index`
 */
export interface GetAppMessageIndexResponse {
  code?: string
  data?: {
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 消息类型
     */
    groupId?: number
    /**
     * 消息图标
     */
    messageIcon?: string
    /**
     * 消息摘要
     */
    messageSummary?: string
    /**
     * 消息标题
     */
    messageTitle?: string
    /**
     * 消息未读数
     */
    unReadNum?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取消息主页面 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/index`
 */
type GetAppMessageIndexRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/message/index', undefined, string, string, true>
>

/**
 * 接口 获取消息主页面 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/index`
 */
const getAppMessageIndexRequestConfig: GetAppMessageIndexRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/index',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppMessageIndex',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取消息主页面 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/index`
 */
export const getAppMessageIndex = /*#__PURE__*/ (
  requestData?: GetAppMessageIndexRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppMessageIndexResponse>(prepare(getAppMessageIndexRequestConfig, requestData), ...args)
}

getAppMessageIndex.requestConfig = getAppMessageIndexRequestConfig

/**
 * 接口 消息是否已读 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/isRead`
 */
export interface GetAppMessageIsReadRequest {
  /**
   * 分组id
   */
  groupId: string
  /**
   * 消息id
   */
  messageId: string
}

/**
 * 接口 消息是否已读 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/isRead`
 */
export interface GetAppMessageIsReadResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 消息是否已读 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/isRead`
 */
type GetAppMessageIsReadRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/message/isRead',
    undefined,
    string,
    'groupId' | 'messageId',
    false
  >
>

/**
 * 接口 消息是否已读 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/isRead`
 */
const getAppMessageIsReadRequestConfig: GetAppMessageIsReadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/isRead',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: ['groupId', 'messageId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppMessageIsRead',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 消息是否已读 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/isRead`
 */
export const getAppMessageIsRead = /*#__PURE__*/ (
  requestData: GetAppMessageIsReadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppMessageIsReadResponse>(prepare(getAppMessageIsReadRequestConfig, requestData), ...args)
}

getAppMessageIsRead.requestConfig = getAppMessageIsReadRequestConfig

/**
 * 接口 获取消息列表 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/list`
 */
export interface PostAppMessageListRequest {
  /**
   * 当前页
   */
  current?: number
  /**
   * 消息分组
   */
  groupId?: number
  /**
   * 公告、新闻、下推失败、抄送、催办、应用收集、报价、单据下推、审批、入库审核、出库审核
   */
  messageType?: number
  /**
   * 仅查询未读，true: 是 false：否
   */
  onlyUnRead?: boolean
  /**
   * 消息搜索关键词
   */
  searchKey?: string
  /**
   * 页面大小
   */
  size?: number
}

/**
 * 接口 获取消息列表 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/list`
 */
export interface PostAppMessageListResponse {
  /**
   * 附件数量
   */
  annexNum?: number
  /**
   * 消息封面
   */
  cover?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 消息类型
   */
  groupId?: number
  /**
   * false：未读 true：已读
   */
  hasRead?: boolean
  /**
   * 是否置顶：0否，1是
   */
  isTop?: number
  /**
   * 消息内容，没有
   */
  messageContent?: string
  /**
   * 消息详情页跳转地址
   */
  messageH5Url?: string
  /**
   * 消息图标
   */
  messageIcon?: string
  /**
   * 消息ID
   */
  messageId?: number
  /**
   * 消息摘要，富文本编辑器中的文本。没有富文本是消息名称
   */
  messageSummary?: string
  /**
   * 消息标题，分组描述。公告新闻的就是公告新闻的title
   */
  messageTitle?: string
}

/**
 * 接口 获取消息列表 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/list`
 */
type PostAppMessageListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/message/list', undefined, string, string, false>
>

/**
 * 接口 获取消息列表 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/list`
 */
const postAppMessageListRequestConfig: PostAppMessageListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppMessageList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取消息列表 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/list`
 */
export const postAppMessageList = /*#__PURE__*/ (
  requestData: PostAppMessageListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppMessageListResponse>(prepare(postAppMessageListRequestConfig, requestData), ...args)
}

postAppMessageList.requestConfig = postAppMessageListRequestConfig

/**
 * 接口 标记消息为已读 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/markRead`
 */
export interface PostAppMessageMarkReadRequest {
  /**
   * 消息分组类型
   */
  groupId?: number
  /**
   * 全部标记为已读 true:是 false:否
   */
  markAllRead?: boolean
  /**
   * 消息ID
   */
  messageId?: number
}

/**
 * 接口 标记消息为已读 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/markRead`
 */
export interface PostAppMessageMarkReadResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 标记消息为已读 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/markRead`
 */
type PostAppMessageMarkReadRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/message/markRead', undefined, string, string, false>
>

/**
 * 接口 标记消息为已读 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/markRead`
 */
const postAppMessageMarkReadRequestConfig: PostAppMessageMarkReadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/markRead',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppMessageMarkRead',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 标记消息为已读 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `POST /app/message/markRead`
 */
export const postAppMessageMarkRead = /*#__PURE__*/ (
  requestData: PostAppMessageMarkReadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppMessageMarkReadResponse>(prepare(postAppMessageMarkReadRequestConfig, requestData), ...args)
}

postAppMessageMarkRead.requestConfig = postAppMessageMarkReadRequestConfig

/**
 * 接口 消息接收人列表 的 **请求类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/receiver`
 */
export interface GetAppMessageReceiverRequest {
  /**
   * 当前页
   */
  current?: string
  /**
   * 消息ID
   */
  id?: string
  /**
   * 消息类型
   */
  messageType?: string
  /**
   * true：已读 false：未读
   */
  read?: string
  /**
   * 页面大小
   */
  size?: string
}

/**
 * 接口 消息接收人列表 的 **返回类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/receiver`
 */
export interface GetAppMessageReceiverResponse {
  code?: string
  data?: {
    /**
     * 用户ID
     */
    userId?: number
    /**
     * 用户名
     */
    userName?: string
    /**
     * 用户头像
     */
    userPhoto?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 消息接收人列表 的 **请求配置的类型**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/receiver`
 */
type GetAppMessageReceiverRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/message/receiver',
    undefined,
    string,
    'current' | 'id' | 'messageType' | 'read' | 'size',
    false
  >
>

/**
 * 接口 消息接收人列表 的 **请求配置**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/receiver`
 */
const getAppMessageReceiverRequestConfig: GetAppMessageReceiverRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/app/message/receiver',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: ['current', 'id', 'messageType', 'read', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppMessageReceiver',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 消息接收人列表 的 **请求函数**
 *
 * @分类 【APP】消息中心相关操作
 * @请求头 `GET /app/message/receiver`
 */
export const getAppMessageReceiver = /*#__PURE__*/ (
  requestData: GetAppMessageReceiverRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppMessageReceiverResponse>(prepare(getAppMessageReceiverRequestConfig, requestData), ...args)
}

getAppMessageReceiver.requestConfig = getAppMessageReceiverRequestConfig

const mockUrl_0_0_0_17 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_17 = '' as any
const prodUrl_0_0_0_17 = '' as any
const dataKey_0_0_0_17 = undefined as any

/**
 * 接口 查询用户详情 的 **请求类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/detail`
 */
export interface GetAppUserDetailRequest {}

/**
 * 接口 查询用户详情 的 **返回类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/detail`
 */
export interface GetAppUserDetailResponse {
  code?: string
  data?: {
    /**
     * 企业id
     */
    companyId?: number
    /**
     * 所属组织
     */
    companyName?: string
    /**
     * 用户部门ID
     */
    depId?: number
    /**
     * 用户部门名称
     */
    depName?: string
    /**
     * 直属上级领导用户ID
     */
    directLeader?: number
    /**
     * 直属上级领导真实姓名
     */
    dlTrueName?: string
    /**
     * 头像地址
     */
    headImg?: string
    /**
     * 直属上级领所属部门
     */
    leaderDept?: string
    /**
     * 用户电话
     */
    phone?: string
    /**
     * 用户岗位
     */
    post?: string
    /**
     * 角色信息
     */
    role?: string
    /**
     * 真实姓名
     */
    trueName?: string
    /**
     * 用户ID
     */
    userId?: number
    /**
     * 用户名
     */
    username?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询用户详情 的 **请求配置的类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/detail`
 */
type GetAppUserDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/detail', undefined, string, string, true>
>

/**
 * 接口 查询用户详情 的 **请求配置**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/detail`
 */
const getAppUserDetailRequestConfig: GetAppUserDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_17,
  devUrl: devUrl_0_0_0_17,
  prodUrl: prodUrl_0_0_0_17,
  path: '/app/user/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_17,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppUserDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询用户详情 的 **请求函数**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/detail`
 */
export const getAppUserDetail = /*#__PURE__*/ (requestData?: GetAppUserDetailRequest, ...args: UserRequestRestArgs) => {
  return request<GetAppUserDetailResponse>(prepare(getAppUserDetailRequestConfig, requestData), ...args)
}

getAppUserDetail.requestConfig = getAppUserDetailRequestConfig

/**
 * 接口 获取更多组织信息 的 **请求类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/getOrganize`
 */
export interface GetAppUserGetOrganizeRequest {}

/**
 * 接口 获取更多组织信息 的 **返回类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/getOrganize`
 */
export interface GetAppUserGetOrganizeResponse {
  code?: string
  data?: {
    /**
     * 所属项目
     */
    belongProject?: {
      /**
       * 建造状态
       */
      buildStatus?: string
      /**
       * 项目名称
       */
      projectName?: string
    }[]
    /**
     * 在建数
     */
    buildNum?: number
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取更多组织信息 的 **请求配置的类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/getOrganize`
 */
type GetAppUserGetOrganizeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/getOrganize', undefined, string, string, true>
>

/**
 * 接口 获取更多组织信息 的 **请求配置**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/getOrganize`
 */
const getAppUserGetOrganizeRequestConfig: GetAppUserGetOrganizeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_17,
  devUrl: devUrl_0_0_0_17,
  prodUrl: prodUrl_0_0_0_17,
  path: '/app/user/getOrganize',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_17,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppUserGetOrganize',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取更多组织信息 的 **请求函数**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/getOrganize`
 */
export const getAppUserGetOrganize = /*#__PURE__*/ (
  requestData?: GetAppUserGetOrganizeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppUserGetOrganizeResponse>(prepare(getAppUserGetOrganizeRequestConfig, requestData), ...args)
}

getAppUserGetOrganize.requestConfig = getAppUserGetOrganizeRequestConfig

/**
 * 接口 更换头像 的 **请求类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/headImg`
 */
export interface PostAppUserHeadImgRequest {
  /**
   * 用户头像
   */
  headImg?: string
}

/**
 * 接口 更换头像 的 **返回类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/headImg`
 */
export interface PostAppUserHeadImgResponse {
  code?: string
  data?: string
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 更换头像 的 **请求配置的类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/headImg`
 */
type PostAppUserHeadImgRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/headImg', undefined, string, string, false>
>

/**
 * 接口 更换头像 的 **请求配置**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/headImg`
 */
const postAppUserHeadImgRequestConfig: PostAppUserHeadImgRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_17,
  devUrl: devUrl_0_0_0_17,
  prodUrl: prodUrl_0_0_0_17,
  path: '/app/user/headImg',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_17,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppUserHeadImg',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更换头像 的 **请求函数**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/headImg`
 */
export const postAppUserHeadImg = /*#__PURE__*/ (
  requestData: PostAppUserHeadImgRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppUserHeadImgResponse>(prepare(postAppUserHeadImgRequestConfig, requestData), ...args)
}

postAppUserHeadImg.requestConfig = postAppUserHeadImgRequestConfig

/**
 * 接口 获取用户的通知设置 的 **请求类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/noticeConfig`
 */
export interface GetAppUserNoticeConfigRequest {}

/**
 * 接口 获取用户的通知设置 的 **返回类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/noticeConfig`
 */
export interface GetAppUserNoticeConfigResponse {
  code?: string
  data?: {
    /**
     * 配置描述
     */
    configDesc?: string
    /**
     * 当前配置名
     */
    configName?: string
    /**
     * 通知是否打开 0: 关闭 1: 打开
     */
    open?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取用户的通知设置 的 **请求配置的类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/noticeConfig`
 */
type GetAppUserNoticeConfigRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/noticeConfig', undefined, string, string, true>
>

/**
 * 接口 获取用户的通知设置 的 **请求配置**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/noticeConfig`
 */
const getAppUserNoticeConfigRequestConfig: GetAppUserNoticeConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_17,
  devUrl: devUrl_0_0_0_17,
  prodUrl: prodUrl_0_0_0_17,
  path: '/app/user/noticeConfig',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_17,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppUserNoticeConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取用户的通知设置 的 **请求函数**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `GET /app/user/noticeConfig`
 */
export const getAppUserNoticeConfig = /*#__PURE__*/ (
  requestData?: GetAppUserNoticeConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppUserNoticeConfigResponse>(prepare(getAppUserNoticeConfigRequestConfig, requestData), ...args)
}

getAppUserNoticeConfig.requestConfig = getAppUserNoticeConfigRequestConfig

/**
 * 接口 用户通知设置 的 **请求类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/noticeConfig`
 */
export interface PostAppUserNoticeConfigRequest {
  /**
   * 配置名
   */
  configName?: string
  /**
   * 通知是否打开 0: 关闭 1: 打开
   */
  open?: number
}

/**
 * 接口 用户通知设置 的 **返回类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/noticeConfig`
 */
export interface PostAppUserNoticeConfigResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 用户通知设置 的 **请求配置的类型**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/noticeConfig`
 */
type PostAppUserNoticeConfigRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/noticeConfig', undefined, string, string, false>
>

/**
 * 接口 用户通知设置 的 **请求配置**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/noticeConfig`
 */
const postAppUserNoticeConfigRequestConfig: PostAppUserNoticeConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_17,
  devUrl: devUrl_0_0_0_17,
  prodUrl: prodUrl_0_0_0_17,
  path: '/app/user/noticeConfig',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_17,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppUserNoticeConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 用户通知设置 的 **请求函数**
 *
 * @分类 【APP】用户中心相关操作
 * @请求头 `POST /app/user/noticeConfig`
 */
export const postAppUserNoticeConfig = /*#__PURE__*/ (
  requestData: PostAppUserNoticeConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppUserNoticeConfigResponse>(prepare(postAppUserNoticeConfigRequestConfig, requestData), ...args)
}

postAppUserNoticeConfig.requestConfig = postAppUserNoticeConfigRequestConfig

const mockUrl_0_0_0_18 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_18 = '' as any
const prodUrl_0_0_0_18 = '' as any
const dataKey_0_0_0_18 = undefined as any

/**
 * 接口 搜索部门 的 **请求类型**
 *
 * @分类 【APP】用户部门相关操作
 * @请求头 `GET /app/department/search`
 */
export interface GetAppDepartmentSearchRequest {
  /**
   * searchKey
   */
  searchKey?: string
}

/**
 * 接口 搜索部门 的 **返回类型**
 *
 * @分类 【APP】用户部门相关操作
 * @请求头 `GET /app/department/search`
 */
export interface GetAppDepartmentSearchResponse {
  code?: string
  data?: {
    /**
     * 部门名称
     */
    depName?: string
    /**
     * 当前部门全路径
     */
    departmentPath?: string
    /**
     * 部门ID
     */
    id?: number
    /**
     * 部门类型
     */
    type?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 搜索部门 的 **请求配置的类型**
 *
 * @分类 【APP】用户部门相关操作
 * @请求头 `GET /app/department/search`
 */
type GetAppDepartmentSearchRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/department/search',
    undefined,
    string,
    'searchKey',
    false
  >
>

/**
 * 接口 搜索部门 的 **请求配置**
 *
 * @分类 【APP】用户部门相关操作
 * @请求头 `GET /app/department/search`
 */
const getAppDepartmentSearchRequestConfig: GetAppDepartmentSearchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_18,
  devUrl: devUrl_0_0_0_18,
  prodUrl: prodUrl_0_0_0_18,
  path: '/app/department/search',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_18,
  paramNames: [],
  queryNames: ['searchKey'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppDepartmentSearch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 搜索部门 的 **请求函数**
 *
 * @分类 【APP】用户部门相关操作
 * @请求头 `GET /app/department/search`
 */
export const getAppDepartmentSearch = /*#__PURE__*/ (
  requestData: GetAppDepartmentSearchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppDepartmentSearchResponse>(prepare(getAppDepartmentSearchRequestConfig, requestData), ...args)
}

getAppDepartmentSearch.requestConfig = getAppDepartmentSearchRequestConfig

const mockUrl_0_0_0_19 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_19 = '' as any
const prodUrl_0_0_0_19 = '' as any
const dataKey_0_0_0_19 = undefined as any

/**
 * 接口 检测手机验证码 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/checkCode`
 */
export interface PostAppAuthCheckCodeRequest {
  /**
   * 验证码
   */
  code?: string
  /**
   * 手机号
   */
  phone?: string
}

/**
 * 接口 检测手机验证码 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/checkCode`
 */
export interface PostAppAuthCheckCodeResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 检测手机验证码 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/checkCode`
 */
type PostAppAuthCheckCodeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/checkCode', undefined, string, string, false>
>

/**
 * 接口 检测手机验证码 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/checkCode`
 */
const postAppAuthCheckCodeRequestConfig: PostAppAuthCheckCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/checkCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthCheckCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 检测手机验证码 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/checkCode`
 */
export const postAppAuthCheckCode = /*#__PURE__*/ (
  requestData: PostAppAuthCheckCodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthCheckCodeResponse>(prepare(postAppAuthCheckCodeRequestConfig, requestData), ...args)
}

postAppAuthCheckCode.requestConfig = postAppAuthCheckCodeRequestConfig

/**
 * 接口 验证码登录 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeLogin`
 */
export interface PostAppAuthCodeLoginRequest {
  /**
   * 验证码
   */
  code?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 极光推送ID
   */
  registrationId?: string
}

/**
 * 接口 验证码登录 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeLogin`
 */
export interface PostAppAuthCodeLoginResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 验证码登录 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeLogin`
 */
type PostAppAuthCodeLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/codeLogin', undefined, string, string, false>
>

/**
 * 接口 验证码登录 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeLogin`
 */
const postAppAuthCodeLoginRequestConfig: PostAppAuthCodeLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/codeLogin',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthCodeLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 验证码登录 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeLogin`
 */
export const postAppAuthCodeLogin = /*#__PURE__*/ (
  requestData: PostAppAuthCodeLoginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthCodeLoginResponse>(prepare(postAppAuthCodeLoginRequestConfig, requestData), ...args)
}

postAppAuthCodeLogin.requestConfig = postAppAuthCodeLoginRequestConfig

/**
 * 接口 发送手机验证码 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeSend`
 */
export interface PostAppAuthCodeSendRequest {
  /**
   * 手机号
   */
  phone?: string
}

/**
 * 接口 发送手机验证码 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeSend`
 */
export interface PostAppAuthCodeSendResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 发送手机验证码 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeSend`
 */
type PostAppAuthCodeSendRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/codeSend', undefined, string, string, false>
>

/**
 * 接口 发送手机验证码 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeSend`
 */
const postAppAuthCodeSendRequestConfig: PostAppAuthCodeSendRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/codeSend',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthCodeSend',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 发送手机验证码 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/codeSend`
 */
export const postAppAuthCodeSend = /*#__PURE__*/ (
  requestData: PostAppAuthCodeSendRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthCodeSendResponse>(prepare(postAppAuthCodeSendRequestConfig, requestData), ...args)
}

postAppAuthCodeSend.requestConfig = postAppAuthCodeSendRequestConfig

/**
 * 接口 账号密码登录 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/login`
 */
export interface PostAppAuthLoginRequest {
  /**
   * 账号
   */
  account?: string
  /**
   * 密码
   */
  password?: string
  /**
   * 极光推送ID
   */
  registrationId?: string
}

/**
 * 接口 账号密码登录 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/login`
 */
export interface PostAppAuthLoginResponse {
  buttonList?: {
    /**
     * 按钮名称
     */
    buttonName?: string
    /**
     * 按钮ID
     */
    id?: string
    /**
     * 菜单id
     */
    menuId?: string
    /**
     * 权限标识
     */
    permission?: string
  }[]
  menuList?: {
    /**
     * 内链文件路径
     */
    component?: string
    /**
     * 配置项父类节点id
     */
    configItemId?: string
    /**
     * 数据看板id
     */
    dataBoardId?: string
    /**
     * 自定义表单设计器id
     */
    formId?: string
    /**
     * 图标
     */
    icon?: string
    /**
     * ID
     */
    id?: string
    /**
     * 是否缓存0否1是
     */
    isCache?: number
    /**
     * 是否隐藏 0否1是
     */
    isHidden?: number
    /**
     * 项目菜单0不是1是
     */
    isProject?: number
    /**
     * 自定义列表设计器id
     */
    listId?: string
    /**
     * 名称
     */
    menuName?: string
    /**
     * url链接
     */
    menuUrl?: string
    /**
     * 外链url
     */
    outRoute?: string
    /**
     * 1内链URL2配置项3自定义表单4自定义列表5自定义报表6外链URL
     */
    pageType?: number
    /**
     * 父级编号
     */
    parentId?: string
    /**
     * 重定向
     */
    redirect?: string
    /**
     * 自定义报表id
     */
    reportId?: string
    /**
     * 接口权限
     */
    restId?: string
    /**
     * 菜单类型 1 目录 2 菜单 3 按钮
     */
    type?: number
  }[]
  refreshToken?: string
  token?: string
  userInfo?: {
    /**
     * 子用户集合
     */
    children?: {
      [k: string]: unknown
    }[]
    /**
     * 企业id
     */
    companyId?: number
    current?: number
    /**
     * 用户部门ID
     */
    depId?: number
    /**
     * 用户部门名称
     */
    depName?: string
    /**
     * 直属上级领导用户ID
     */
    directLeader?: number
    /**
     * 直属上级领导真实姓名
     */
    dlTrueName?: string
    /**
     * 用户邮箱
     */
    email?: string
    /**
     * 启用/禁用
     */
    enable?: number
    /**
     * 加密id
     */
    encryptId?: string
    /**
     * 头像地址
     */
    headImg?: string
    /**
     * 用户ID
     */
    id?: number
    /**
     * 逻辑删除
     */
    isDel?: number
    /**
     * 排序向下：0，否；1，是
     */
    isDown?: number
    /**
     * 排序向上：0，否；1，是
     */
    isUp?: number
    /**
     * 上次登录时间
     */
    lastLoginTime?: string
    /**
     * 用户密码
     */
    password?: string
    /**
     * 当前部门的人数
     */
    personNum?: number
    /**
     * 用户电话
     */
    phone?: string
    /**
     * 用户岗位
     */
    post?: string
    role?: {
      authorityType?: number
      createTime?: string
      description?: string
      id?: number
      isAdmin?: number
      isDel?: number
      roleName?: string
      updateTime?: string
    }[]
    /**
     * 角色ID
     */
    roleId?: number
    /**
     * 角色ID列表
     */
    roleIds?: number[]
    /**
     * 角色名
     */
    roleName?: string
    /**
     * 角色名(数组格式)
     */
    roleNames?: string[]
    size?: number
    /**
     * 排序
     */
    sort?: number
    /**
     * 真实姓名
     */
    trueName?: string
    /**
     * 用户名
     */
    username?: string
  }
}

/**
 * 接口 账号密码登录 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/login`
 */
type PostAppAuthLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/login', undefined, string, string, false>
>

/**
 * 接口 账号密码登录 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/login`
 */
const postAppAuthLoginRequestConfig: PostAppAuthLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 账号密码登录 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/login`
 */
export const postAppAuthLogin = /*#__PURE__*/ (requestData: PostAppAuthLoginRequest, ...args: UserRequestRestArgs) => {
  return request<PostAppAuthLoginResponse>(prepare(postAppAuthLoginRequestConfig, requestData), ...args)
}

postAppAuthLogin.requestConfig = postAppAuthLoginRequestConfig

/**
 * 接口 退出登录 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `GET /app/auth/logout`
 */
export interface GetAppAuthLogoutRequest {}

/**
 * 接口 退出登录 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `GET /app/auth/logout`
 */
export interface GetAppAuthLogoutResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 退出登录 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `GET /app/auth/logout`
 */
type GetAppAuthLogoutRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/logout', undefined, string, string, true>
>

/**
 * 接口 退出登录 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `GET /app/auth/logout`
 */
const getAppAuthLogoutRequestConfig: GetAppAuthLogoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/logout',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppAuthLogout',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 退出登录 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `GET /app/auth/logout`
 */
export const getAppAuthLogout = /*#__PURE__*/ (requestData?: GetAppAuthLogoutRequest, ...args: UserRequestRestArgs) => {
  return request<GetAppAuthLogoutResponse>(prepare(getAppAuthLogoutRequestConfig, requestData), ...args)
}

getAppAuthLogout.requestConfig = getAppAuthLogoutRequestConfig

/**
 * 接口 修改密码 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/passwordUpdate`
 */
export interface PostAppAuthPasswordUpdateRequest {
  /**
   * 新密码
   */
  newPassword?: string
  /**
   * 旧密码
   */
  oldPassword?: string
  /**
   * 确认密码
   */
  rePassword?: string
}

/**
 * 接口 修改密码 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/passwordUpdate`
 */
export interface PostAppAuthPasswordUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改密码 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/passwordUpdate`
 */
type PostAppAuthPasswordUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/passwordUpdate', undefined, string, string, false>
>

/**
 * 接口 修改密码 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/passwordUpdate`
 */
const postAppAuthPasswordUpdateRequestConfig: PostAppAuthPasswordUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/passwordUpdate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthPasswordUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改密码 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/passwordUpdate`
 */
export const postAppAuthPasswordUpdate = /*#__PURE__*/ (
  requestData: PostAppAuthPasswordUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthPasswordUpdateResponse>(
    prepare(postAppAuthPasswordUpdateRequestConfig, requestData),
    ...args,
  )
}

postAppAuthPasswordUpdate.requestConfig = postAppAuthPasswordUpdateRequestConfig

/**
 * 接口 刷新token 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/refreshToken`
 */
export interface PostAppAuthRefreshTokenRequest {
  /**
   * 授权登录返回的token
   */
  token: string
}

/**
 * 接口 刷新token 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/refreshToken`
 */
export interface PostAppAuthRefreshTokenResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 刷新token 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/refreshToken`
 */
type PostAppAuthRefreshTokenRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/refreshToken', undefined, string, string, false>
>

/**
 * 接口 刷新token 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/refreshToken`
 */
const postAppAuthRefreshTokenRequestConfig: PostAppAuthRefreshTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/refreshToken',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthRefreshToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 刷新token 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/refreshToken`
 */
export const postAppAuthRefreshToken = /*#__PURE__*/ (
  requestData: PostAppAuthRefreshTokenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthRefreshTokenResponse>(prepare(postAppAuthRefreshTokenRequestConfig, requestData), ...args)
}

postAppAuthRefreshToken.requestConfig = postAppAuthRefreshTokenRequestConfig

/**
 * 接口 忘记密码-重置密码 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/resetPassword`
 */
export interface PostAppAuthResetPasswordRequest {
  /**
   * 验证码
   */
  code?: string
  /**
   * 密码
   */
  password?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 确认密码
   */
  rePassword?: string
}

/**
 * 接口 忘记密码-重置密码 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/resetPassword`
 */
export interface PostAppAuthResetPasswordResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 忘记密码-重置密码 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/resetPassword`
 */
type PostAppAuthResetPasswordRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/resetPassword', undefined, string, string, false>
>

/**
 * 接口 忘记密码-重置密码 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/resetPassword`
 */
const postAppAuthResetPasswordRequestConfig: PostAppAuthResetPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/resetPassword',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthResetPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 忘记密码-重置密码 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/resetPassword`
 */
export const postAppAuthResetPassword = /*#__PURE__*/ (
  requestData: PostAppAuthResetPasswordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthResetPasswordResponse>(prepare(postAppAuthResetPasswordRequestConfig, requestData), ...args)
}

postAppAuthResetPassword.requestConfig = postAppAuthResetPasswordRequestConfig

/**
 * 接口 授权码登录 的 **请求类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/tokenLogin`
 */
export interface PostAppAuthTokenLoginRequest {
  /**
   * 极光推送ID
   */
  registrationId?: string
  /**
   * 临时授权码
   */
  token: string
}

/**
 * 接口 授权码登录 的 **返回类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/tokenLogin`
 */
export interface PostAppAuthTokenLoginResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 授权码登录 的 **请求配置的类型**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/tokenLogin`
 */
type PostAppAuthTokenLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/auth/tokenLogin', undefined, string, string, false>
>

/**
 * 接口 授权码登录 的 **请求配置**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/tokenLogin`
 */
const postAppAuthTokenLoginRequestConfig: PostAppAuthTokenLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_19,
  devUrl: devUrl_0_0_0_19,
  prodUrl: prodUrl_0_0_0_19,
  path: '/app/auth/tokenLogin',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_19,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAuthTokenLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 授权码登录 的 **请求函数**
 *
 * @分类 【APP】登录相关操作
 * @请求头 `POST /app/auth/tokenLogin`
 */
export const postAppAuthTokenLogin = /*#__PURE__*/ (
  requestData: PostAppAuthTokenLoginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAuthTokenLoginResponse>(prepare(postAppAuthTokenLoginRequestConfig, requestData), ...args)
}

postAppAuthTokenLogin.requestConfig = postAppAuthTokenLoginRequestConfig

const mockUrl_0_0_0_20 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_20 = '' as any
const prodUrl_0_0_0_20 = '' as any
const dataKey_0_0_0_20 = undefined as any

/**
 * 接口 新增应用分组 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/add`
 */
export interface PostAppAppGroupAddRequest {
  /**
   * 分组名
   */
  groupName?: string
}

/**
 * 接口 新增应用分组 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/add`
 */
export interface PostAppAppGroupAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增应用分组 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/add`
 */
type PostAppAppGroupAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/appGroup/add', undefined, string, string, false>
>

/**
 * 接口 新增应用分组 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/add`
 */
const postAppAppGroupAddRequestConfig: PostAppAppGroupAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/appGroup/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAppGroupAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增应用分组 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/add`
 */
export const postAppAppGroupAdd = /*#__PURE__*/ (
  requestData: PostAppAppGroupAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAppGroupAddResponse>(prepare(postAppAppGroupAddRequestConfig, requestData), ...args)
}

postAppAppGroupAdd.requestConfig = postAppAppGroupAddRequestConfig

/**
 * 接口 删除应用分组 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/delete`
 */
export interface GetAppAppGroupDeleteRequest {
  /**
   * 应用分组ID
   */
  id?: string
}

/**
 * 接口 删除应用分组 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/delete`
 */
export interface GetAppAppGroupDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除应用分组 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/delete`
 */
type GetAppAppGroupDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/appGroup/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除应用分组 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/delete`
 */
const getAppAppGroupDeleteRequestConfig: GetAppAppGroupDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/appGroup/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppAppGroupDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除应用分组 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/delete`
 */
export const getAppAppGroupDelete = /*#__PURE__*/ (
  requestData: GetAppAppGroupDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppAppGroupDeleteResponse>(prepare(getAppAppGroupDeleteRequestConfig, requestData), ...args)
}

getAppAppGroupDelete.requestConfig = getAppAppGroupDeleteRequestConfig

/**
 * 接口 获取应用分组详情 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/detail`
 */
export interface GetAppAppGroupDetailRequest {
  /**
   * 应用分组ID
   */
  id?: string
}

/**
 * 接口 获取应用分组详情 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/detail`
 */
export interface GetAppAppGroupDetailResponse {
  code?: string
  data?: {
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组ID
     */
    id?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取应用分组详情 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/detail`
 */
type GetAppAppGroupDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/appGroup/detail', undefined, string, 'id', false>
>

/**
 * 接口 获取应用分组详情 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/detail`
 */
const getAppAppGroupDetailRequestConfig: GetAppAppGroupDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/appGroup/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppAppGroupDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取应用分组详情 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/detail`
 */
export const getAppAppGroupDetail = /*#__PURE__*/ (
  requestData: GetAppAppGroupDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppAppGroupDetailResponse>(prepare(getAppAppGroupDetailRequestConfig, requestData), ...args)
}

getAppAppGroupDetail.requestConfig = getAppAppGroupDetailRequestConfig

/**
 * 接口 获取应用分组列表 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/list`
 */
export interface GetAppAppGroupListRequest {}

/**
 * 接口 获取应用分组列表 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/list`
 */
export interface GetAppAppGroupListResponse {
  code?: string
  data?: {
    corpCode?: string
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组ID
     */
    id?: string
    issued?: boolean
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取应用分组列表 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/list`
 */
type GetAppAppGroupListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/appGroup/list', undefined, string, string, true>
>

/**
 * 接口 获取应用分组列表 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/list`
 */
const getAppAppGroupListRequestConfig: GetAppAppGroupListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/appGroup/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppAppGroupList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取应用分组列表 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/list`
 */
export const getAppAppGroupList = /*#__PURE__*/ (
  requestData?: GetAppAppGroupListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppAppGroupListResponse>(prepare(getAppAppGroupListRequestConfig, requestData), ...args)
}

getAppAppGroupList.requestConfig = getAppAppGroupListRequestConfig

/**
 * 接口 应用分组排序 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/sort`
 */
export interface GetAppAppGroupSortRequest {
  /**
   * 移动后的上面位置的ID
   */
  aboveId?: string
  /**
   * 当前移动的ID
   */
  id?: string
}

/**
 * 接口 应用分组排序 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/sort`
 */
export interface GetAppAppGroupSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用分组排序 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/sort`
 */
type GetAppAppGroupSortRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/appGroup/sort',
    undefined,
    string,
    'aboveId' | 'id',
    false
  >
>

/**
 * 接口 应用分组排序 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/sort`
 */
const getAppAppGroupSortRequestConfig: GetAppAppGroupSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/appGroup/sort',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['aboveId', 'id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppAppGroupSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用分组排序 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/appGroup/sort`
 */
export const getAppAppGroupSort = /*#__PURE__*/ (
  requestData: GetAppAppGroupSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppAppGroupSortResponse>(prepare(getAppAppGroupSortRequestConfig, requestData), ...args)
}

getAppAppGroupSort.requestConfig = getAppAppGroupSortRequestConfig

/**
 * 接口 修改应用分组 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/update`
 */
export interface PostAppAppGroupUpdateRequest {
  /**
   * 分组名
   */
  groupName?: string
  /**
   * 分组ID
   */
  id?: string
}

/**
 * 接口 修改应用分组 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/update`
 */
export interface PostAppAppGroupUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改应用分组 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/update`
 */
type PostAppAppGroupUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/appGroup/update', undefined, string, string, false>
>

/**
 * 接口 修改应用分组 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/update`
 */
const postAppAppGroupUpdateRequestConfig: PostAppAppGroupUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/appGroup/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAppGroupUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改应用分组 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/appGroup/update`
 */
export const postAppAppGroupUpdate = /*#__PURE__*/ (
  requestData: PostAppAppGroupUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAppGroupUpdateResponse>(prepare(postAppAppGroupUpdateRequestConfig, requestData), ...args)
}

postAppAppGroupUpdate.requestConfig = postAppAppGroupUpdateRequestConfig

/**
 * 接口 新增应用 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/add`
 */
export interface PostAppApplicationAddRequest {
  /**
   * 应用描述
   */
  appDesc?: string
  /**
   * 应用名称
   */
  appName?: string
  /**
   * 应用类型
   */
  appType?: number
  /**
   * 应用分组ID
   */
  groupId?: string
  /**
   * 图标底色
   */
  iconBgColor?: string
  /**
   * 应用图标
   */
  iconUrl?: string
  /**
   * 菜单ID
   */
  menuId?: string
}

/**
 * 接口 新增应用 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/add`
 */
export interface PostAppApplicationAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增应用 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/add`
 */
type PostAppApplicationAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/add', undefined, string, string, false>
>

/**
 * 接口 新增应用 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/add`
 */
const postAppApplicationAddRequestConfig: PostAppApplicationAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppApplicationAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增应用 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/add`
 */
export const postAppApplicationAdd = /*#__PURE__*/ (
  requestData: PostAppApplicationAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppApplicationAddResponse>(prepare(postAppApplicationAddRequestConfig, requestData), ...args)
}

postAppApplicationAdd.requestConfig = postAppApplicationAddRequestConfig

/**
 * 接口 获取APP应用可绑定菜单列表 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/bindMenu`
 */
export interface GetAppApplicationBindMenuRequest {}

/**
 * 接口 获取APP应用可绑定菜单列表 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/bindMenu`
 */
export interface GetAppApplicationBindMenuResponse {
  code?: string
  data?: {
    /**
     * 应用类型（1:自定义列表 2:自定义表单 3:自定义报表
     */
    appType?: number
    /**
     * 应用类型文本描述
     */
    appTypeText?: string
    /**
     * 菜单ID
     */
    menuId?: string
    /**
     * 菜单描述
     */
    menuText?: string
    /**
     * 节点名
     */
    nodeName?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取APP应用可绑定菜单列表 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/bindMenu`
 */
type GetAppApplicationBindMenuRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/bindMenu', undefined, string, string, true>
>

/**
 * 接口 获取APP应用可绑定菜单列表 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/bindMenu`
 */
const getAppApplicationBindMenuRequestConfig: GetAppApplicationBindMenuRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/bindMenu',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationBindMenu',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取APP应用可绑定菜单列表 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/bindMenu`
 */
export const getAppApplicationBindMenu = /*#__PURE__*/ (
  requestData?: GetAppApplicationBindMenuRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationBindMenuResponse>(
    prepare(getAppApplicationBindMenuRequestConfig, requestData),
    ...args,
  )
}

getAppApplicationBindMenu.requestConfig = getAppApplicationBindMenuRequestConfig

/**
 * 接口 删除应用 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/delete`
 */
export interface GetAppApplicationDeleteRequest {
  /**
   * 应用ID
   */
  id?: string
}

/**
 * 接口 删除应用 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/delete`
 */
export interface GetAppApplicationDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除应用 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/delete`
 */
type GetAppApplicationDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除应用 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/delete`
 */
const getAppApplicationDeleteRequestConfig: GetAppApplicationDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除应用 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/delete`
 */
export const getAppApplicationDelete = /*#__PURE__*/ (
  requestData: GetAppApplicationDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationDeleteResponse>(prepare(getAppApplicationDeleteRequestConfig, requestData), ...args)
}

getAppApplicationDelete.requestConfig = getAppApplicationDeleteRequestConfig

/**
 * 接口 查看应用详情 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/detail`
 */
export interface GetAppApplicationDetailRequest {
  /**
   * 应用ID
   */
  id?: string
}

/**
 * 接口 查看应用详情 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/detail`
 */
export interface GetAppApplicationDetailResponse {
  code?: string
  data?: {
    baseInfo?: {
      /**
       * 应用描述
       */
      appDesc?: string
      /**
       * 应用名称
       */
      appName?: string
      /**
       * 应用类型
       */
      appType?: number
      /**
       * 菜单类型文本描述
       */
      appTypeText?: string
      /**
       * 绑定菜单的名称
       */
      bindMenuText?: string
      /**
       * 应用分组ID
       */
      groupId?: string
      /**
       * 图标底色
       */
      iconBgColor?: string
      /**
       * 应用图标
       */
      iconUrl?: string
      /**
       * 应用ID
       */
      id?: string
      /**
       * 菜单ID
       */
      menuId?: string
    }
    listCardInfo?: {
      /**
       * 卡片字段下拉内容
       */
      cardFieldSelects?: {
        /**
         * 卡片字段标题
         */
        cardFieldTitle?: string
        /**
         * 卡片字段id
         */
        pcLabelId?: string
      }[]
      /**
       * 卡片选项
       */
      cardItems?: {
        /**
         * 别名
         */
        alias?: string
        /**
         * 应用ID
         */
        appId?: string
        /**
         * 是否可以进行格式配置 true:可以 false:不可以
         */
        canSetPatterCfg?: boolean
        /**
         * 卡片字段标题
         */
        cardFieldTitle?: string
        /**
         * 字段ID
         */
        columnId?: string
        /**
         * 字段编码
         */
        fieldCode?: string
        /**
         * 卡片项ID
         */
        id?: string
        /**
         * 格式配置 1:数值 2:整数 3:百分比
         */
        patterConfig?: number
        /**
         * 格式配置文本
         */
        patterConfigText?: string
        /**
         * 卡片字段id
         */
        pcLabelId?: string
        /**
         * 保留位数
         */
        reservedDigits?: number
        /**
         * 查询(1:不设过滤 2:设置为过滤 3:不可设置)
         */
        setFilter?: number
        /**
         * 1:不设查询 2:设置为查询 3:不可设置
         */
        setQuery?: number
      }[]
      /**
       * 格式配置下拉内容
       */
      cardPatterCfgSelects?: {
        /**
         * 格式配置
         */
        patterConfig?: number
        /**
         * 格式配置文本
         */
        patterConfigText?: string
      }[]
    }
    /**
     * 是否显示卡片设置标签页 true:显示 false:不显示
     */
    showCardTab?: boolean
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查看应用详情 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/detail`
 */
type GetAppApplicationDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/detail', undefined, string, 'id', false>
>

/**
 * 接口 查看应用详情 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/detail`
 */
const getAppApplicationDetailRequestConfig: GetAppApplicationDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看应用详情 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/detail`
 */
export const getAppApplicationDetail = /*#__PURE__*/ (
  requestData: GetAppApplicationDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationDetailResponse>(prepare(getAppApplicationDetailRequestConfig, requestData), ...args)
}

getAppApplicationDetail.requestConfig = getAppApplicationDetailRequestConfig

/**
 * 接口 应用中心图标下拉 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/iconSelect`
 */
export interface GetAppApplicationIconSelectRequest {}

/**
 * 接口 应用中心图标下拉 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/iconSelect`
 */
export interface GetAppApplicationIconSelectResponse {
  code?: string
  data?: {
    /**
     * 图标路径
     */
    iconUrl?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用中心图标下拉 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/iconSelect`
 */
type GetAppApplicationIconSelectRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/iconSelect', undefined, string, string, true>
>

/**
 * 接口 应用中心图标下拉 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/iconSelect`
 */
const getAppApplicationIconSelectRequestConfig: GetAppApplicationIconSelectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/iconSelect',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationIconSelect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用中心图标下拉 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/iconSelect`
 */
export const getAppApplicationIconSelect = /*#__PURE__*/ (
  requestData?: GetAppApplicationIconSelectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationIconSelectResponse>(
    prepare(getAppApplicationIconSelectRequestConfig, requestData),
    ...args,
  )
}

getAppApplicationIconSelect.requestConfig = getAppApplicationIconSelectRequestConfig

/**
 * 接口 获取APP应用中心主页面 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/index`
 */
export interface GetAppApplicationIndexRequest {}

/**
 * 接口 获取APP应用中心主页面 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/index`
 */
export interface GetAppApplicationIndexResponse {
  code?: string
  data?: {
    /**
     * 应用信息
     */
    applicationInfo?: {
      /**
       * 应用图标
       */
      appIcon?: string
      /**
       * 应用ID
       */
      appId?: string
      /**
       * 应用名称
       */
      appName?: string
      /**
       * 分组ID
       */
      groupId?: string
      /**
       * h5跳转链接
       */
      h5Url?: string
      /**
       * 图标底色
       */
      iconBgColor?: string
    }[]
    /**
     * 分组ID
     */
    groupId?: string
    /**
     * 分组名称
     */
    groupName?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取APP应用中心主页面 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/index`
 */
type GetAppApplicationIndexRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/index', undefined, string, string, true>
>

/**
 * 接口 获取APP应用中心主页面 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/index`
 */
const getAppApplicationIndexRequestConfig: GetAppApplicationIndexRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/index',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationIndex',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取APP应用中心主页面 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/index`
 */
export const getAppApplicationIndex = /*#__PURE__*/ (
  requestData?: GetAppApplicationIndexRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationIndexResponse>(prepare(getAppApplicationIndexRequestConfig, requestData), ...args)
}

getAppApplicationIndex.requestConfig = getAppApplicationIndexRequestConfig

/**
 * 接口 获取分组下的应用 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/list`
 */
export interface GetAppApplicationListRequest {
  /**
   * 当前页
   */
  current?: string
  /**
   * 应用分组ID
   */
  groupId?: string
  /**
   * 搜索关键字
   */
  searchKey?: string
  /**
   * 页面大小
   */
  size?: string
}

/**
 * 接口 获取分组下的应用 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/list`
 */
export interface GetAppApplicationListResponse {
  code?: string
  data?: {
    /**
     * 应用描述
     */
    appDesc?: string
    /**
     * 应用名称
     */
    appName?: string
    /**
     * 菜单类型
     */
    appType?: number
    /**
     * 菜单类型文本描述
     */
    appTypeText?: string
    /**
     * 应用绑定的菜单文本
     */
    bindMenuText?: string
    corpCode?: string
    /**
     * 应用分组ID
     */
    groupId?: string
    /**
     * 应用ID
     */
    id?: string
    issued?: boolean
    /**
     * 菜单ID
     */
    menuId?: string
    /**
     * 应用停启状态 true:启用 false:停用
     */
    status?: boolean
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取分组下的应用 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/list`
 */
type GetAppApplicationListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/application/list',
    undefined,
    string,
    'current' | 'groupId' | 'searchKey' | 'size',
    false
  >
>

/**
 * 接口 获取分组下的应用 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/list`
 */
const getAppApplicationListRequestConfig: GetAppApplicationListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['current', 'groupId', 'searchKey', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取分组下的应用 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/list`
 */
export const getAppApplicationList = /*#__PURE__*/ (
  requestData: GetAppApplicationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationListResponse>(prepare(getAppApplicationListRequestConfig, requestData), ...args)
}

getAppApplicationList.requestConfig = getAppApplicationListRequestConfig

/**
 * 接口 APP应用搜索 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/search`
 */
export interface GetAppApplicationSearchRequest {
  /**
   * 搜索关键词
   */
  searchKey?: string
}

/**
 * 接口 APP应用搜索 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/search`
 */
export interface GetAppApplicationSearchResponse {
  code?: string
  data?: {
    /**
     * 应用信息
     */
    applicationInfo?: {
      /**
       * 应用描述
       */
      appDesc?: string
      /**
       * 应用图标
       */
      appIcon?: string
      /**
       * 应用ID
       */
      appId?: string
      /**
       * 应用名称
       */
      appName?: string
      /**
       * 分组ID
       */
      groupId?: string
      /**
       * 跳转链接
       */
      h5Url?: string
      /**
       * 图标底色
       */
      iconBgColor?: string
    }[]
    /**
     * 分组ID
     */
    groupId?: string
    /**
     * 分组名称
     */
    groupName?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 APP应用搜索 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/search`
 */
type GetAppApplicationSearchRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/application/search',
    undefined,
    string,
    'searchKey',
    false
  >
>

/**
 * 接口 APP应用搜索 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/search`
 */
const getAppApplicationSearchRequestConfig: GetAppApplicationSearchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/search',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['searchKey'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationSearch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 APP应用搜索 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/search`
 */
export const getAppApplicationSearch = /*#__PURE__*/ (
  requestData: GetAppApplicationSearchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationSearchResponse>(prepare(getAppApplicationSearchRequestConfig, requestData), ...args)
}

getAppApplicationSearch.requestConfig = getAppApplicationSearchRequestConfig

/**
 * 接口 应用排序 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/sort`
 */
export interface GetAppApplicationSortRequest {
  /**
   * 移动后的上面位置的ID
   */
  aboveId?: string
  /**
   * 应用分组ID
   */
  groupId?: string
  /**
   * 当前移动的ID
   */
  id?: string
}

/**
 * 接口 应用排序 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/sort`
 */
export interface GetAppApplicationSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用排序 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/sort`
 */
type GetAppApplicationSortRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/application/sort',
    undefined,
    string,
    'aboveId' | 'groupId' | 'id',
    false
  >
>

/**
 * 接口 应用排序 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/sort`
 */
const getAppApplicationSortRequestConfig: GetAppApplicationSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/sort',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: ['aboveId', 'groupId', 'id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppApplicationSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用排序 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `GET /app/application/sort`
 */
export const getAppApplicationSort = /*#__PURE__*/ (
  requestData: GetAppApplicationSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppApplicationSortResponse>(prepare(getAppApplicationSortRequestConfig, requestData), ...args)
}

getAppApplicationSort.requestConfig = getAppApplicationSortRequestConfig

/**
 * 接口 应用停启用 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/switch`
 */
export interface PostAppApplicationSwitchRequest {
  /**
   * 应用ID
   */
  id?: string
}

/**
 * 接口 应用停启用 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/switch`
 */
export interface PostAppApplicationSwitchResponse {
  code?: string
  data?: boolean
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用停启用 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/switch`
 */
type PostAppApplicationSwitchRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/switch', undefined, string, string, false>
>

/**
 * 接口 应用停启用 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/switch`
 */
const postAppApplicationSwitchRequestConfig: PostAppApplicationSwitchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/switch',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppApplicationSwitch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用停启用 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/switch`
 */
export const postAppApplicationSwitch = /*#__PURE__*/ (
  requestData: PostAppApplicationSwitchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppApplicationSwitchResponse>(prepare(postAppApplicationSwitchRequestConfig, requestData), ...args)
}

postAppApplicationSwitch.requestConfig = postAppApplicationSwitchRequestConfig

/**
 * 接口 更新应用 的 **请求类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/update`
 */
export interface PostAppApplicationUpdateRequest {
  /**
   * 应用描述
   */
  appDesc?: string
  /**
   * 应用名称
   */
  appName?: string
  /**
   * 应用类型
   */
  appType?: number
  /**
   * 卡片字段
   */
  cards?: {
    /**
     * 别名
     */
    alias?: string
    /**
     * 卡片字段标题
     */
    cardFieldTitle?: string
    /**
     * 列ID
     */
    columnId?: string
    /**
     * 字段编码
     */
    fieldCode?: string
    /**
     * 卡片ID
     */
    id?: string
    /**
     * 格式配置(1:数值 2:整数 3:百分比)
     */
    patterConfig?: number
    /**
     * 卡片标签ID
     */
    pcLabelId?: string
    /**
     * 保留位数
     */
    reservedDigits?: number
    /**
     * 查询(1:不设过滤 2:设置为过滤 3:不可设置)
     */
    setFilter?: number
    /**
     * 查询(1:不设查询 2:设置为查询 3:不可设置)
     */
    setQuery?: number
  }[]
  /**
   * 应用分组ID
   */
  groupId?: string
  /**
   * 图标底色
   */
  iconBgColor?: string
  /**
   * 应用图标
   */
  iconUrl?: string
  /**
   * 应用ID
   */
  id?: string
  /**
   * 菜单ID
   */
  menuId?: string
}

/**
 * 接口 更新应用 的 **返回类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/update`
 */
export interface PostAppApplicationUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 更新应用 的 **请求配置的类型**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/update`
 */
type PostAppApplicationUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/application/update', undefined, string, string, false>
>

/**
 * 接口 更新应用 的 **请求配置**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/update`
 */
const postAppApplicationUpdateRequestConfig: PostAppApplicationUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_20,
  devUrl: devUrl_0_0_0_20,
  prodUrl: prodUrl_0_0_0_20,
  path: '/app/application/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_20,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppApplicationUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新应用 的 **请求函数**
 *
 * @分类 【APP】移动应用相关操作
 * @请求头 `POST /app/application/update`
 */
export const postAppApplicationUpdate = /*#__PURE__*/ (
  requestData: PostAppApplicationUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppApplicationUpdateResponse>(prepare(postAppApplicationUpdateRequestConfig, requestData), ...args)
}

postAppApplicationUpdate.requestConfig = postAppApplicationUpdateRequestConfig

const mockUrl_0_0_0_21 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_21 = '' as any
const prodUrl_0_0_0_21 = '' as any
const dataKey_0_0_0_21 = undefined as any

/**
 * 接口 获取部门树 的 **请求类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/getDepartmentTree`
 */
export interface GetAppMainListGetDepartmentTreeRequest {
  /**
   * 部门ID
   */
  depId?: string
}

/**
 * 接口 获取部门树 的 **返回类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/getDepartmentTree`
 */
export interface GetAppMainListGetDepartmentTreeResponse {
  /**
   * 部门ID
   */
  id?: number
  /**
   * 部门名称
   */
  name?: string
  /**
   * 父级部门ID
   */
  parentId?: number
  /**
   * 部门人数
   */
  userNum?: number
}

/**
 * 接口 获取部门树 的 **请求配置的类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/getDepartmentTree`
 */
type GetAppMainListGetDepartmentTreeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/mainList/getDepartmentTree',
    undefined,
    string,
    'depId',
    false
  >
>

/**
 * 接口 获取部门树 的 **请求配置**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/getDepartmentTree`
 */
const getAppMainListGetDepartmentTreeRequestConfig: GetAppMainListGetDepartmentTreeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_21,
  devUrl: devUrl_0_0_0_21,
  prodUrl: prodUrl_0_0_0_21,
  path: '/app/mainList/getDepartmentTree',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_21,
  paramNames: [],
  queryNames: ['depId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppMainListGetDepartmentTree',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取部门树 的 **请求函数**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/getDepartmentTree`
 */
export const getAppMainListGetDepartmentTree = /*#__PURE__*/ (
  requestData: GetAppMainListGetDepartmentTreeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppMainListGetDepartmentTreeResponse>(
    prepare(getAppMainListGetDepartmentTreeRequestConfig, requestData),
    ...args,
  )
}

getAppMainListGetDepartmentTree.requestConfig = getAppMainListGetDepartmentTreeRequestConfig

/**
 * 接口 获取通讯录主页 的 **请求类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/index`
 */
export interface GetAppMainListIndexRequest {}

/**
 * 接口 获取通讯录主页 的 **返回类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/index`
 */
export interface GetAppMainListIndexResponse {
  code?: string
  data?: {
    /**
     * 公司Id
     */
    companyId?: number
    /**
     * 公司Logo
     */
    companyLogo?: string
    /**
     * 公司名称
     */
    companyName?: string
    /**
     * 一级部门ID
     */
    myFirstDeptId?: number
    /**
     * 一级部门名称
     */
    myFirstDeptName?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取通讯录主页 的 **请求配置的类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/index`
 */
type GetAppMainListIndexRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/mainList/index', undefined, string, string, true>
>

/**
 * 接口 获取通讯录主页 的 **请求配置**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/index`
 */
const getAppMainListIndexRequestConfig: GetAppMainListIndexRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_21,
  devUrl: devUrl_0_0_0_21,
  prodUrl: prodUrl_0_0_0_21,
  path: '/app/mainList/index',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_21,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppMainListIndex',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取通讯录主页 的 **请求函数**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/mainList/index`
 */
export const getAppMainListIndex = /*#__PURE__*/ (
  requestData?: GetAppMainListIndexRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppMainListIndexResponse>(prepare(getAppMainListIndexRequestConfig, requestData), ...args)
}

getAppMainListIndex.requestConfig = getAppMainListIndexRequestConfig

/**
 * 接口 根据ID查询用户详情 的 **请求类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/user/detailOne`
 */
export interface GetAppUserDetailOneRequest {
  userId: string
}

/**
 * 接口 根据ID查询用户详情 的 **返回类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/user/detailOne`
 */
export interface GetAppUserDetailOneResponse {
  code?: string
  data?: {
    /**
     * 用户部门名称
     */
    depName?: string
    /**
     * 头像地址
     */
    headImg?: string
    /**
     * 用户电话
     */
    phone?: string
    /**
     * 用户岗位
     */
    post?: string
    /**
     * 用户名
     */
    trueName?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据ID查询用户详情 的 **请求配置的类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/user/detailOne`
 */
type GetAppUserDetailOneRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/detailOne', undefined, string, 'userId', false>
>

/**
 * 接口 根据ID查询用户详情 的 **请求配置**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/user/detailOne`
 */
const getAppUserDetailOneRequestConfig: GetAppUserDetailOneRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_21,
  devUrl: devUrl_0_0_0_21,
  prodUrl: prodUrl_0_0_0_21,
  path: '/app/user/detailOne',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_21,
  paramNames: [],
  queryNames: ['userId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppUserDetailOne',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据ID查询用户详情 的 **请求函数**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `GET /app/user/detailOne`
 */
export const getAppUserDetailOne = /*#__PURE__*/ (
  requestData: GetAppUserDetailOneRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppUserDetailOneResponse>(prepare(getAppUserDetailOneRequestConfig, requestData), ...args)
}

getAppUserDetailOne.requestConfig = getAppUserDetailOneRequestConfig

/**
 * 接口 获取联系人 的 **请求类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `POST /app/user/find`
 */
export interface PostAppUserFindRequest {
  /**
   * 当前页
   */
  current?: number
  /**
   * 部门ID
   */
  depId?: number
  /**
   * 停用启动
   */
  enable?: number
  /**
   * 岗位
   */
  post?: string
  /**
   * 搜索关键词
   */
  searchKey?: string
  /**
   * 页面大小
   */
  size?: number
  /**
   * 真实姓名
   */
  trueName?: string
}

/**
 * 接口 获取联系人 的 **返回类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `POST /app/user/find`
 */
export interface PostAppUserFindResponse {
  code?: string
  data?: {
    /**
     * 用户头像
     */
    headImg?: string
    /**
     * 岗位
     */
    post?: string
    /**
     * 用户名
     */
    trueName?: string
    /**
     * 用户ID
     */
    userId?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取联系人 的 **请求配置的类型**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `POST /app/user/find`
 */
type PostAppUserFindRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/app/user/find', undefined, string, string, false>
>

/**
 * 接口 获取联系人 的 **请求配置**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `POST /app/user/find`
 */
const postAppUserFindRequestConfig: PostAppUserFindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_21,
  devUrl: devUrl_0_0_0_21,
  prodUrl: prodUrl_0_0_0_21,
  path: '/app/user/find',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_21,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppUserFind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取联系人 的 **请求函数**
 *
 * @分类 【APP】通讯录相关操作
 * @请求头 `POST /app/user/find`
 */
export const postAppUserFind = /*#__PURE__*/ (requestData: PostAppUserFindRequest, ...args: UserRequestRestArgs) => {
  return request<PostAppUserFindResponse>(prepare(postAppUserFindRequestConfig, requestData), ...args)
}

postAppUserFind.requestConfig = postAppUserFindRequestConfig

const mockUrl_0_0_0_22 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_22 = '' as any
const prodUrl_0_0_0_22 = '' as any
const dataKey_0_0_0_22 = undefined as any

/**
 * 接口 规则配置复制 的 **请求类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/copy`
 */
export interface PostBusinessDesignCopyRequest {
  /**
   * 新的基础信息id
   */
  newRuleId?: string
  /**
   * 旧的基础信息id
   */
  oldRuleId?: string
  /**
   * 来源表单
   */
  originFormId?: string
  /**
   * 目标表单
   */
  targetFormId?: string
}

/**
 * 接口 规则配置复制 的 **返回类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/copy`
 */
export interface PostBusinessDesignCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 规则配置复制 的 **请求配置的类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/copy`
 */
type PostBusinessDesignCopyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/design/copy', undefined, string, string, false>
>

/**
 * 接口 规则配置复制 的 **请求配置**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/copy`
 */
const postBusinessDesignCopyRequestConfig: PostBusinessDesignCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_22,
  devUrl: devUrl_0_0_0_22,
  prodUrl: prodUrl_0_0_0_22,
  path: '/business/design/copy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_22,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postBusinessDesignCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 规则配置复制 的 **请求函数**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/copy`
 */
export const postBusinessDesignCopy = /*#__PURE__*/ (
  requestData: PostBusinessDesignCopyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignCopyResponse>(prepare(postBusinessDesignCopyRequestConfig, requestData), ...args)
}

postBusinessDesignCopy.requestConfig = postBusinessDesignCopyRequestConfig

/**
 * 接口 配置规则删除 的 **请求类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/delete`
 */
export interface GetBusinessDesignDeleteRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 配置规则删除 的 **返回类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/delete`
 */
export interface GetBusinessDesignDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 配置规则删除 的 **请求配置的类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/delete`
 */
type GetBusinessDesignDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/design/delete', undefined, string, 'id', false>
>

/**
 * 接口 配置规则删除 的 **请求配置**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/delete`
 */
const getBusinessDesignDeleteRequestConfig: GetBusinessDesignDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_22,
  devUrl: devUrl_0_0_0_22,
  prodUrl: prodUrl_0_0_0_22,
  path: '/business/design/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_22,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 配置规则删除 的 **请求函数**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/delete`
 */
export const getBusinessDesignDelete = /*#__PURE__*/ (
  requestData: GetBusinessDesignDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignDeleteResponse>(prepare(getBusinessDesignDeleteRequestConfig, requestData), ...args)
}

getBusinessDesignDelete.requestConfig = getBusinessDesignDeleteRequestConfig

/**
 * 接口 配置规则详情 的 **请求类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/detail`
 */
export interface GetBusinessDesignDetailRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 配置规则详情 的 **返回类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/detail`
 */
export interface GetBusinessDesignDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 配置规则详情 的 **请求配置的类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/detail`
 */
type GetBusinessDesignDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/design/detail', undefined, string, 'id', false>
>

/**
 * 接口 配置规则详情 的 **请求配置**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/detail`
 */
const getBusinessDesignDetailRequestConfig: GetBusinessDesignDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_22,
  devUrl: devUrl_0_0_0_22,
  prodUrl: prodUrl_0_0_0_22,
  path: '/business/design/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_22,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 配置规则详情 的 **请求函数**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/detail`
 */
export const getBusinessDesignDetail = /*#__PURE__*/ (
  requestData: GetBusinessDesignDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignDetailResponse>(prepare(getBusinessDesignDetailRequestConfig, requestData), ...args)
}

getBusinessDesignDetail.requestConfig = getBusinessDesignDetailRequestConfig

/**
 * 接口 配置规则启停修改 的 **请求类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/enable`
 */
export interface GetBusinessDesignEnableRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 配置规则启停修改 的 **返回类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/enable`
 */
export interface GetBusinessDesignEnableResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 配置规则启停修改 的 **请求配置的类型**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/enable`
 */
type GetBusinessDesignEnableRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/design/enable', undefined, string, 'id', false>
>

/**
 * 接口 配置规则启停修改 的 **请求配置**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/enable`
 */
const getBusinessDesignEnableRequestConfig: GetBusinessDesignEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_22,
  devUrl: devUrl_0_0_0_22,
  prodUrl: prodUrl_0_0_0_22,
  path: '/business/design/enable',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_22,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignEnable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 配置规则启停修改 的 **请求函数**
 *
 * @分类 A业务流设计层
 * @请求头 `GET /business/design/enable`
 */
export const getBusinessDesignEnable = /*#__PURE__*/ (
  requestData: GetBusinessDesignEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignEnableResponse>(prepare(getBusinessDesignEnableRequestConfig, requestData), ...args)
}

getBusinessDesignEnable.requestConfig = getBusinessDesignEnableRequestConfig

/**
 * 接口 配置规则分页列表 的 **请求类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/list`
 */
export interface PostBusinessDesignListRequest {
  /**
   * 绑定流程
   */
  bindProcess?: string
  /**
   * 业务流字段映射
   */
  businessColumnRelationDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    id?: string
    /**
     * 删除标识 0 删除， 1 存在
     */
    isDel?: number
    /**
     * 数据来源
     */
    originData?: string
    /**
     * 取值方式 1.来源表单字段 2.计算公式 3.常量
     */
    requireValueType?: number
    /**
     * 目标字段id
     */
    targetColumnId?: string
    /**
     * 目标模型id
     */
    targetModelId?: string
  }[]
  /**
   * 业务流数据分组
   */
  businessDataGroupDTOS?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 数据过滤信息
     */
    businessDataFilterDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      isDel?: number
      /**
       * 字段名
       */
      originColumnName?: string
      /**
       * 来源模型id
       */
      originModelId?: string
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: number
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: number
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 目标字段名称
       */
      targetValueName?: string
    }[]
    /**
     * 条件启用
     */
    businessEnablingConditionsDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 目标字段名
       */
      columnName?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      /**
       * 是否删除
       */
      isDel?: number
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: string
      /**
       * 目标模型id
       */
      targetModelId?: string
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: string
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 过滤条件名称
       */
      targetValueName?: string
    }[]
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组类型 .1.数据过滤
     */
    groupType?: number
    id?: string
  }[]
  /**
   * 条件启用表
   */
  businessDataGroupEnablingConditionsDTOS?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 数据过滤信息
     */
    businessDataFilterDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      isDel?: number
      /**
       * 字段名
       */
      originColumnName?: string
      /**
       * 来源模型id
       */
      originModelId?: string
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: number
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: number
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 目标字段名称
       */
      targetValueName?: string
    }[]
    /**
     * 条件启用
     */
    businessEnablingConditionsDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 目标字段名
       */
      columnName?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      /**
       * 是否删除
       */
      isDel?: number
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: string
      /**
       * 目标模型id
       */
      targetModelId?: string
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: string
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 过滤条件名称
       */
      targetValueName?: string
    }[]
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组类型 .1.数据过滤
     */
    groupType?: number
    id?: string
  }[]
  businessExcessCheckDTOs?: {
    /**
     * 规则id
     */
    billRuleId?: string
    /**
     * 检查模式
     */
    checkMode?: number
    /**
     * 比较符
     */
    compareMark?: number
    /**
     * 比较值
     */
    compareValue?: string
    /**
     * 超额提醒信息
     */
    excessNotice?: string
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 目标单字段code
     */
    targetColumnCode?: string
    /**
     * 目标单字段id
     */
    targetColumnId?: string
    /**
     * 目标单模型code
     */
    targetModelCode?: string
    /**
     * 目标单模型id
     */
    targetModelId?: string
    /**
     * 触发时机
     */
    triggerTiming?: number
  }[]
  /**
   * 关联单据反写
   */
  businessReverseFormGroupDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 关联表单反写列表
     */
    businessReverseRuleRelationForm?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除 1：正常
       */
      isDel?: number
      /**
       * 来源模型id(就是主表的冗余字段，不是字段对应的模型id)
       */
      originModelId?: string
      /**
       * 反写字段code
       */
      reverseColumnCode?: string
      /**
       * 反写字段id
       */
      reverseColumnId?: string
      /**
       * 反写字段中文
       */
      reverseColumnText?: string
      /**
       * 反写表单id
       */
      reverseFormId?: string
      /**
       * 反写方式 1.累加2.扣减3.覆盖
       */
      reverseMode?: number
      /**
       * 反写值
       */
      reverseValue?: string
      /**
       * 反写值中文
       */
      reverseValueText?: string
      /**
       * 目标表单字段id
       */
      targetFormColumnId?: string
      /**
       * 触发时机 1.提交 2.撤回 3.归档 4.删除 5.自定义
       */
      triggerTiming?: number
      /**
       * 时机编码（只有触发时机是自定义，才有实际编码）
       */
      triggerTimingCode?: string
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 取值方式1.目标字段2.计算公式.3.常量
       */
      valueMode?: number
    }[]
    /**
     * 分组id
     */
    id?: string
    /**
     * 逻辑删除 删除0 正常1
     */
    isDel?: number
    /**
     * 反写表单id
     */
    reverseFormId?: string
    /**
     * 反写表单中文
     */
    reverseFormText?: string
    /**
     * 目标表单字段id
     */
    targetFormColumnId?: string
    /**
     * 目标表单字段中文
     */
    targetFormColumnText?: string
  }[]
  businessReverseRuleDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除 1：正常
     */
    isDel?: number
    /**
     * 来源模型id
     */
    originModelId?: string
    /**
     * 反写字段id
     */
    reverseColumnId?: string
    /**
     * 反写方式 1.累加2.扣减3.覆盖
     */
    reverseMode?: number
    /**
     * 反写值
     */
    reverseValue?: string
    /**
     * 触发时机 1.提交 2.撤回 3.归档 4.删除 5.自定义（目前用于二开）
     */
    triggerTiming?: number
    /**
     * 触发时机编码
     */
    triggerTimingCode?: string
    /**
     * 取值方式1.常量 2.计算公式 4.目标表单字段
     */
    valueMode?: number
  }[]
  /**
   * 公司唯一标识
   */
  corpCode?: string
  current?: number
  /**
   * 1.启动 0.停用
   */
  enable?: number
  /**
   * 启用条件开启 1:开启 2：停止
   */
  enablingConditionsFlag?: string
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  id?: string
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 逻辑删除 0删除 1正常
   */
  isDel?: number
  /**
   * 是否暂存 0：暂存 1：正常
   */
  isTempSave?: number
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 来源表单id
   */
  originFormId?: string
  /**
   * 来源表单id集合
   */
  originFormIds?: string[]
  /**
   * 来源表单名称
   */
  originFormName?: string
  /**
   * 来源列表id
   */
  originListId?: string
  /**
   * 来源模型code
   */
  originModelCode?: string
  /**
   * 来源模型id
   */
  originModelId?: string
  /**
   * 来源模型类型 1:主模型,2:子模型
   */
  originModelType?: number
  /**
   * 下推模式：1：直接添加单据 2：创建代办任务
   */
  pushModel?: number
  /**
   * 关联表单反写是否调用接口标识，调了：true  没调：false
   */
  reverseRuleRelationFormFlag?: boolean
  /**
   * 规则名称
   */
  ruleName?: string
  /**
   * 分单依据字段列表
   */
  separateBasis?: string[]
  /**
   * 分单策略：1:一对一生成,2:多对一生成,3:按规则分组合并生成,4:按明细行拆分
   */
  separateStrategy?: number
  size?: number
  /**
   * 转换模式 1:引用 2:下推
   */
  swapType?: number
  /**
   * 1.系统内置 2.非系统内置
   */
  systemInner?: number
  /**
   * 目标表单
   */
  targetFormId?: string
  /**
   * 目标表单名称
   */
  targetFormName?: string
  /**
   * 目标模型code
   */
  targetModelCode?: string
  /**
   * 目标模型id
   */
  targetModelId?: string
  /**
   * 目标模型类型 1:主模型,2:子模型
   */
  targetModelType?: number
}

/**
 * 接口 配置规则分页列表 的 **返回类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/list`
 */
export interface PostBusinessDesignListResponse {
  /**
   * 绑定流程
   */
  bindProcess?: string
  /**
   * 业务流字段映射
   */
  businessColumnRelationDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    id?: string
    /**
     * 删除标识 0 删除， 1 存在
     */
    isDel?: number
    /**
     * 数据来源
     */
    originData?: string
    /**
     * 取值方式 1.来源表单字段 2.计算公式 3.常量
     */
    requireValueType?: number
    /**
     * 目标字段id
     */
    targetColumnId?: string
    /**
     * 目标模型id
     */
    targetModelId?: string
  }[]
  /**
   * 业务流数据分组
   */
  businessDataGroupDTOS?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 数据过滤信息
     */
    businessDataFilterDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      isDel?: number
      /**
       * 字段名
       */
      originColumnName?: string
      /**
       * 来源模型id
       */
      originModelId?: string
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: number
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: number
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 目标字段名称
       */
      targetValueName?: string
    }[]
    /**
     * 条件启用
     */
    businessEnablingConditionsDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 目标字段名
       */
      columnName?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      /**
       * 是否删除
       */
      isDel?: number
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: string
      /**
       * 目标模型id
       */
      targetModelId?: string
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: string
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 过滤条件名称
       */
      targetValueName?: string
    }[]
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组类型 .1.数据过滤
     */
    groupType?: number
    id?: string
  }[]
  /**
   * 条件启用表
   */
  businessDataGroupEnablingConditionsDTOS?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 数据过滤信息
     */
    businessDataFilterDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      isDel?: number
      /**
       * 字段名
       */
      originColumnName?: string
      /**
       * 来源模型id
       */
      originModelId?: string
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: number
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: number
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 目标字段名称
       */
      targetValueName?: string
    }[]
    /**
     * 条件启用
     */
    businessEnablingConditionsDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 目标字段名
       */
      columnName?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      /**
       * 是否删除
       */
      isDel?: number
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: string
      /**
       * 目标模型id
       */
      targetModelId?: string
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: string
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 过滤条件名称
       */
      targetValueName?: string
    }[]
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组类型 .1.数据过滤
     */
    groupType?: number
    id?: string
  }[]
  businessExcessCheckDTOs?: {
    /**
     * 规则id
     */
    billRuleId?: string
    /**
     * 检查模式
     */
    checkMode?: number
    /**
     * 比较符
     */
    compareMark?: number
    /**
     * 比较值
     */
    compareValue?: string
    /**
     * 超额提醒信息
     */
    excessNotice?: string
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 目标单字段code
     */
    targetColumnCode?: string
    /**
     * 目标单字段id
     */
    targetColumnId?: string
    /**
     * 目标单模型code
     */
    targetModelCode?: string
    /**
     * 目标单模型id
     */
    targetModelId?: string
    /**
     * 触发时机
     */
    triggerTiming?: number
  }[]
  /**
   * 关联单据反写
   */
  businessReverseFormGroupDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 关联表单反写列表
     */
    businessReverseRuleRelationForm?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除 1：正常
       */
      isDel?: number
      /**
       * 来源模型id(就是主表的冗余字段，不是字段对应的模型id)
       */
      originModelId?: string
      /**
       * 反写字段code
       */
      reverseColumnCode?: string
      /**
       * 反写字段id
       */
      reverseColumnId?: string
      /**
       * 反写字段中文
       */
      reverseColumnText?: string
      /**
       * 反写表单id
       */
      reverseFormId?: string
      /**
       * 反写方式 1.累加2.扣减3.覆盖
       */
      reverseMode?: number
      /**
       * 反写值
       */
      reverseValue?: string
      /**
       * 反写值中文
       */
      reverseValueText?: string
      /**
       * 目标表单字段id
       */
      targetFormColumnId?: string
      /**
       * 触发时机 1.提交 2.撤回 3.归档 4.删除 5.自定义
       */
      triggerTiming?: number
      /**
       * 时机编码（只有触发时机是自定义，才有实际编码）
       */
      triggerTimingCode?: string
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 取值方式1.目标字段2.计算公式.3.常量
       */
      valueMode?: number
    }[]
    /**
     * 分组id
     */
    id?: string
    /**
     * 逻辑删除 删除0 正常1
     */
    isDel?: number
    /**
     * 反写表单id
     */
    reverseFormId?: string
    /**
     * 反写表单中文
     */
    reverseFormText?: string
    /**
     * 目标表单字段id
     */
    targetFormColumnId?: string
    /**
     * 目标表单字段中文
     */
    targetFormColumnText?: string
  }[]
  businessReverseRuleDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除 1：正常
     */
    isDel?: number
    /**
     * 来源模型id
     */
    originModelId?: string
    /**
     * 反写字段id
     */
    reverseColumnId?: string
    /**
     * 反写方式 1.累加2.扣减3.覆盖
     */
    reverseMode?: number
    /**
     * 反写值
     */
    reverseValue?: string
    /**
     * 触发时机 1.提交 2.撤回 3.归档 4.删除 5.自定义（目前用于二开）
     */
    triggerTiming?: number
    /**
     * 触发时机编码
     */
    triggerTimingCode?: string
    /**
     * 取值方式1.常量 2.计算公式 4.目标表单字段
     */
    valueMode?: number
  }[]
  /**
   * 公司唯一标识
   */
  corpCode?: string
  current?: number
  /**
   * 1.启动 0.停用
   */
  enable?: number
  /**
   * 启用条件开启 1:开启 2：停止
   */
  enablingConditionsFlag?: string
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  id?: string
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 逻辑删除 0删除 1正常
   */
  isDel?: number
  /**
   * 是否暂存 0：暂存 1：正常
   */
  isTempSave?: number
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 来源表单id
   */
  originFormId?: string
  /**
   * 来源表单id集合
   */
  originFormIds?: string[]
  /**
   * 来源表单名称
   */
  originFormName?: string
  /**
   * 来源列表id
   */
  originListId?: string
  /**
   * 来源模型code
   */
  originModelCode?: string
  /**
   * 来源模型id
   */
  originModelId?: string
  /**
   * 来源模型类型 1:主模型,2:子模型
   */
  originModelType?: number
  /**
   * 下推模式：1：直接添加单据 2：创建代办任务
   */
  pushModel?: number
  /**
   * 关联表单反写是否调用接口标识，调了：true  没调：false
   */
  reverseRuleRelationFormFlag?: boolean
  /**
   * 规则名称
   */
  ruleName?: string
  /**
   * 分单依据字段列表
   */
  separateBasis?: string[]
  /**
   * 分单策略：1:一对一生成,2:多对一生成,3:按规则分组合并生成,4:按明细行拆分
   */
  separateStrategy?: number
  size?: number
  /**
   * 转换模式 1:引用 2:下推
   */
  swapType?: number
  /**
   * 1.系统内置 2.非系统内置
   */
  systemInner?: number
  /**
   * 目标表单
   */
  targetFormId?: string
  /**
   * 目标表单名称
   */
  targetFormName?: string
  /**
   * 目标模型code
   */
  targetModelCode?: string
  /**
   * 目标模型id
   */
  targetModelId?: string
  /**
   * 目标模型类型 1:主模型,2:子模型
   */
  targetModelType?: number
}

/**
 * 接口 配置规则分页列表 的 **请求配置的类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/list`
 */
type PostBusinessDesignListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/design/list', undefined, string, string, false>
>

/**
 * 接口 配置规则分页列表 的 **请求配置**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/list`
 */
const postBusinessDesignListRequestConfig: PostBusinessDesignListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_22,
  devUrl: devUrl_0_0_0_22,
  prodUrl: prodUrl_0_0_0_22,
  path: '/business/design/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_22,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postBusinessDesignList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 配置规则分页列表 的 **请求函数**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/list`
 */
export const postBusinessDesignList = /*#__PURE__*/ (
  requestData: PostBusinessDesignListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignListResponse>(prepare(postBusinessDesignListRequestConfig, requestData), ...args)
}

postBusinessDesignList.requestConfig = postBusinessDesignListRequestConfig

/**
 * 接口 规则配置保存 的 **请求类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/save`
 */
export interface PostBusinessDesignSaveRequest {
  /**
   * 绑定流程
   */
  bindProcess?: string
  /**
   * 业务流字段映射
   */
  businessColumnRelationDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    id?: string
    /**
     * 删除标识 0 删除， 1 存在
     */
    isDel?: number
    /**
     * 数据来源
     */
    originData?: string
    /**
     * 取值方式 1.来源表单字段 2.计算公式 3.常量
     */
    requireValueType?: number
    /**
     * 目标字段id
     */
    targetColumnId?: string
    /**
     * 目标模型id
     */
    targetModelId?: string
  }[]
  /**
   * 业务流数据分组
   */
  businessDataGroupDTOS?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 数据过滤信息
     */
    businessDataFilterDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      isDel?: number
      /**
       * 字段名
       */
      originColumnName?: string
      /**
       * 来源模型id
       */
      originModelId?: string
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: number
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: number
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 目标字段名称
       */
      targetValueName?: string
    }[]
    /**
     * 条件启用
     */
    businessEnablingConditionsDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 目标字段名
       */
      columnName?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      /**
       * 是否删除
       */
      isDel?: number
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: string
      /**
       * 目标模型id
       */
      targetModelId?: string
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: string
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 过滤条件名称
       */
      targetValueName?: string
    }[]
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组类型 .1.数据过滤
     */
    groupType?: number
    id?: string
  }[]
  /**
   * 条件启用表
   */
  businessDataGroupEnablingConditionsDTOS?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 数据过滤信息
     */
    businessDataFilterDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      isDel?: number
      /**
       * 字段名
       */
      originColumnName?: string
      /**
       * 来源模型id
       */
      originModelId?: string
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: number
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: number
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 目标字段名称
       */
      targetValueName?: string
    }[]
    /**
     * 条件启用
     */
    businessEnablingConditionsDTOS?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 目标字段名
       */
      columnName?: string
      /**
       * 分组id
       */
      dataGroupId?: string
      id?: string
      /**
       * 是否删除
       */
      isDel?: number
      /**
       * 判断符 1等于2.大于3.小于4.属于
       */
      rangeType?: string
      /**
       * 目标模型id
       */
      targetModelId?: string
      /**
       * 取值方式 1.目标表单字段2.常量
       */
      targetType?: string
      /**
       * 过滤条件
       */
      targetValue?: string
      /**
       * 过滤条件名称
       */
      targetValueName?: string
    }[]
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 分组类型 .1.数据过滤
     */
    groupType?: number
    id?: string
  }[]
  businessExcessCheckDTOs?: {
    /**
     * 规则id
     */
    billRuleId?: string
    /**
     * 检查模式
     */
    checkMode?: number
    /**
     * 比较符
     */
    compareMark?: number
    /**
     * 比较值
     */
    compareValue?: string
    /**
     * 超额提醒信息
     */
    excessNotice?: string
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 目标单字段code
     */
    targetColumnCode?: string
    /**
     * 目标单字段id
     */
    targetColumnId?: string
    /**
     * 目标单模型code
     */
    targetModelCode?: string
    /**
     * 目标单模型id
     */
    targetModelId?: string
    /**
     * 触发时机
     */
    triggerTiming?: number
  }[]
  /**
   * 关联单据反写
   */
  businessReverseFormGroupDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 关联表单反写列表
     */
    businessReverseRuleRelationForm?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除 1：正常
       */
      isDel?: number
      /**
       * 来源模型id(就是主表的冗余字段，不是字段对应的模型id)
       */
      originModelId?: string
      /**
       * 反写字段code
       */
      reverseColumnCode?: string
      /**
       * 反写字段id
       */
      reverseColumnId?: string
      /**
       * 反写字段中文
       */
      reverseColumnText?: string
      /**
       * 反写表单id
       */
      reverseFormId?: string
      /**
       * 反写方式 1.累加2.扣减3.覆盖
       */
      reverseMode?: number
      /**
       * 反写值
       */
      reverseValue?: string
      /**
       * 反写值中文
       */
      reverseValueText?: string
      /**
       * 目标表单字段id
       */
      targetFormColumnId?: string
      /**
       * 触发时机 1.提交 2.撤回 3.归档 4.删除 5.自定义
       */
      triggerTiming?: number
      /**
       * 时机编码（只有触发时机是自定义，才有实际编码）
       */
      triggerTimingCode?: string
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 取值方式1.目标字段2.计算公式.3.常量
       */
      valueMode?: number
    }[]
    /**
     * 分组id
     */
    id?: string
    /**
     * 逻辑删除 删除0 正常1
     */
    isDel?: number
    /**
     * 反写表单id
     */
    reverseFormId?: string
    /**
     * 反写表单中文
     */
    reverseFormText?: string
    /**
     * 目标表单字段id
     */
    targetFormColumnId?: string
    /**
     * 目标表单字段中文
     */
    targetFormColumnText?: string
  }[]
  businessReverseRuleDTOs?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除 1：正常
     */
    isDel?: number
    /**
     * 来源模型id
     */
    originModelId?: string
    /**
     * 反写字段id
     */
    reverseColumnId?: string
    /**
     * 反写方式 1.累加2.扣减3.覆盖
     */
    reverseMode?: number
    /**
     * 反写值
     */
    reverseValue?: string
    /**
     * 触发时机 1.提交 2.撤回 3.归档 4.删除 5.自定义（目前用于二开）
     */
    triggerTiming?: number
    /**
     * 触发时机编码
     */
    triggerTimingCode?: string
    /**
     * 取值方式1.常量 2.计算公式 4.目标表单字段
     */
    valueMode?: number
  }[]
  /**
   * 公司唯一标识
   */
  corpCode?: string
  current?: number
  /**
   * 1.启动 0.停用
   */
  enable?: number
  /**
   * 启用条件开启 1:开启 2：停止
   */
  enablingConditionsFlag?: string
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  id?: string
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 逻辑删除 0删除 1正常
   */
  isDel?: number
  /**
   * 是否暂存 0：暂存 1：正常
   */
  isTempSave?: number
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 来源表单id
   */
  originFormId?: string
  /**
   * 来源表单id集合
   */
  originFormIds?: string[]
  /**
   * 来源表单名称
   */
  originFormName?: string
  /**
   * 来源列表id
   */
  originListId?: string
  /**
   * 来源模型code
   */
  originModelCode?: string
  /**
   * 来源模型id
   */
  originModelId?: string
  /**
   * 来源模型类型 1:主模型,2:子模型
   */
  originModelType?: number
  /**
   * 下推模式：1：直接添加单据 2：创建代办任务
   */
  pushModel?: number
  /**
   * 关联表单反写是否调用接口标识，调了：true  没调：false
   */
  reverseRuleRelationFormFlag?: boolean
  /**
   * 规则名称
   */
  ruleName?: string
  /**
   * 分单依据字段列表
   */
  separateBasis?: string[]
  /**
   * 分单策略：1:一对一生成,2:多对一生成,3:按规则分组合并生成,4:按明细行拆分
   */
  separateStrategy?: number
  size?: number
  /**
   * 转换模式 1:引用 2:下推
   */
  swapType?: number
  /**
   * 1.系统内置 2.非系统内置
   */
  systemInner?: number
  /**
   * 目标表单
   */
  targetFormId?: string
  /**
   * 目标表单名称
   */
  targetFormName?: string
  /**
   * 目标模型code
   */
  targetModelCode?: string
  /**
   * 目标模型id
   */
  targetModelId?: string
  /**
   * 目标模型类型 1:主模型,2:子模型
   */
  targetModelType?: number
}

/**
 * 接口 规则配置保存 的 **返回类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/save`
 */
export interface PostBusinessDesignSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 规则配置保存 的 **请求配置的类型**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/save`
 */
type PostBusinessDesignSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/business/design/save', undefined, string, string, false>
>

/**
 * 接口 规则配置保存 的 **请求配置**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/save`
 */
const postBusinessDesignSaveRequestConfig: PostBusinessDesignSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_22,
  devUrl: devUrl_0_0_0_22,
  prodUrl: prodUrl_0_0_0_22,
  path: '/business/design/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_22,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postBusinessDesignSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 规则配置保存 的 **请求函数**
 *
 * @分类 A业务流设计层
 * @请求头 `POST /business/design/save`
 */
export const postBusinessDesignSave = /*#__PURE__*/ (
  requestData: PostBusinessDesignSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignSaveResponse>(prepare(postBusinessDesignSaveRequestConfig, requestData), ...args)
}

postBusinessDesignSave.requestConfig = postBusinessDesignSaveRequestConfig

const mockUrl_0_0_0_23 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_23 = '' as any
const prodUrl_0_0_0_23 = '' as any
const dataKey_0_0_0_23 = undefined as any

/**
 * 接口 获取升级配置 的 **请求类型**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `GET /app/appConfig/getConfig`
 */
export interface GetAppAppConfigGetConfigRequest {
  /**
   * 平台类型（1: iOS，2: Android，3: ⼩程序）
   */
  osType?: string
  /**
   * 当前APP版本号
   */
  version?: string
}

/**
 * 接口 获取升级配置 的 **返回类型**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `GET /app/appConfig/getConfig`
 */
export interface GetAppAppConfigGetConfigResponse {
  code?: string
  data?: {
    /**
     * 接⼝基本地址
     */
    apiUrl?: string
    /**
     * 新版本下载地址
     */
    downloadUrl?: string
    /**
     * 扩展字段（预留字段）
     */
    extras?: string
    /**
     * 强制升级的版本号
     */
    forceVersion?: string
    /**
     * 隐私政策的版本号
     */
    privacy?: string
    /**
     * 更新内容说明，即升级的功能项
     */
    updateInfo?: string
    /**
     * 升级类型（0：默认不升级，1：升级不强制 2：强制升级）
     */
    updateType?: number
    /**
     * 升级的版本号
     */
    updateVersion?: string
    vapiUrl?: string
    vtime?: string
    vversion?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取升级配置 的 **请求配置的类型**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `GET /app/appConfig/getConfig`
 */
type GetAppAppConfigGetConfigRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/appConfig/getConfig',
    undefined,
    string,
    'osType' | 'version',
    false
  >
>

/**
 * 接口 获取升级配置 的 **请求配置**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `GET /app/appConfig/getConfig`
 */
const getAppAppConfigGetConfigRequestConfig: GetAppAppConfigGetConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_23,
  devUrl: devUrl_0_0_0_23,
  prodUrl: prodUrl_0_0_0_23,
  path: '/app/appConfig/getConfig',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_23,
  paramNames: [],
  queryNames: ['osType', 'version'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAppAppConfigGetConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取升级配置 的 **请求函数**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `GET /app/appConfig/getConfig`
 */
export const getAppAppConfigGetConfig = /*#__PURE__*/ (
  requestData: GetAppAppConfigGetConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAppAppConfigGetConfigResponse>(prepare(getAppAppConfigGetConfigRequestConfig, requestData), ...args)
}

getAppAppConfigGetConfig.requestConfig = getAppAppConfigGetConfigRequestConfig

/**
 * 接口 更新升级配置 的 **请求类型**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `POST /app/appConfig/updateConfig`
 */
export interface PostAppAppConfigUpdateConfigRequest {
  /**
   * 接⼝基本地址
   */
  apiUrl?: string
  /**
   * 新版本下载地址
   */
  downloadUrl?: string
  /**
   * 扩展字段（预留字段）
   */
  extras?: string
  /**
   * 强制升级的版本号
   */
  forceVersion?: string
  /**
   * 平台类型（1: iOS，2: Android，3: ⼩程序）
   */
  osType?: number
  /**
   * 隐私政策的版本号
   */
  privacy?: string
  /**
   * 安全校验字段
   */
  sign?: string
  /**
   * 更新内容说明，即升级的功能项
   */
  updateInfo?: string
  /**
   * 升级的版本号
   */
  updateVersion?: string
  vapiUrl?: string
  vtime?: string
  vversion?: string
}

/**
 * 接口 更新升级配置 的 **返回类型**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `POST /app/appConfig/updateConfig`
 */
export interface PostAppAppConfigUpdateConfigResponse {
  code?: string
  data?: {
    /**
     * 接⼝基本地址
     */
    apiUrl?: string
    /**
     * 新版本下载地址
     */
    downloadUrl?: string
    /**
     * 扩展字段（预留字段）
     */
    extras?: string
    /**
     * 强制升级的版本号
     */
    forceVersion?: string
    /**
     * 隐私政策的版本号
     */
    privacy?: string
    /**
     * 更新内容说明，即升级的功能项
     */
    updateInfo?: string
    /**
     * 升级类型（0：默认不升级，1：升级不强制 2：强制升级）
     */
    updateType?: number
    /**
     * 升级的版本号
     */
    updateVersion?: string
    vapiUrl?: string
    vtime?: string
    vversion?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 更新升级配置 的 **请求配置的类型**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `POST /app/appConfig/updateConfig`
 */
type PostAppAppConfigUpdateConfigRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/app/appConfig/updateConfig',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 更新升级配置 的 **请求配置**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `POST /app/appConfig/updateConfig`
 */
const postAppAppConfigUpdateConfigRequestConfig: PostAppAppConfigUpdateConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_23,
  devUrl: devUrl_0_0_0_23,
  prodUrl: prodUrl_0_0_0_23,
  path: '/app/appConfig/updateConfig',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_23,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAppAppConfigUpdateConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新升级配置 的 **请求函数**
 *
 * @分类 【APP】配置中心相关操作
 * @请求头 `POST /app/appConfig/updateConfig`
 */
export const postAppAppConfigUpdateConfig = /*#__PURE__*/ (
  requestData: PostAppAppConfigUpdateConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAppAppConfigUpdateConfigResponse>(
    prepare(postAppAppConfigUpdateConfigRequestConfig, requestData),
    ...args,
  )
}

postAppAppConfigUpdateConfig.requestConfig = postAppAppConfigUpdateConfigRequestConfig

const mockUrl_0_0_0_24 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_24 = '' as any
const prodUrl_0_0_0_24 = '' as any
const dataKey_0_0_0_24 = undefined as any

/**
 * 接口 列表添加 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/add`
 */
export interface PostRemindListAddRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 列表添加 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/add`
 */
export interface PostRemindListAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表添加 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/add`
 */
type PostRemindListAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/add', undefined, string, string, false>
>

/**
 * 接口 列表添加 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/add`
 */
const postRemindListAddRequestConfig: PostRemindListAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表添加 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/add`
 */
export const postRemindListAdd = /*#__PURE__*/ (
  requestData: PostRemindListAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListAddResponse>(prepare(postRemindListAddRequestConfig, requestData), ...args)
}

postRemindListAdd.requestConfig = postRemindListAddRequestConfig

/**
 * 接口 子表下拉 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/childSelect`
 */
export interface PostRemindListChildSelectRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 子表下拉 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/childSelect`
 */
export interface PostRemindListChildSelectResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 子表下拉 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/childSelect`
 */
type PostRemindListChildSelectRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/childSelect', undefined, string, string, false>
>

/**
 * 接口 子表下拉 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/childSelect`
 */
const postRemindListChildSelectRequestConfig: PostRemindListChildSelectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/childSelect',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListChildSelect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 子表下拉 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/childSelect`
 */
export const postRemindListChildSelect = /*#__PURE__*/ (
  requestData: PostRemindListChildSelectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListChildSelectResponse>(
    prepare(postRemindListChildSelectRequestConfig, requestData),
    ...args,
  )
}

postRemindListChildSelect.requestConfig = postRemindListChildSelectRequestConfig

/**
 * 接口 列表复制 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/copy`
 */
export interface PostRemindListCopyRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 列表复制 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/copy`
 */
export interface PostRemindListCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表复制 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/copy`
 */
type PostRemindListCopyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/copy', undefined, string, string, false>
>

/**
 * 接口 列表复制 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/copy`
 */
const postRemindListCopyRequestConfig: PostRemindListCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/copy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表复制 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/copy`
 */
export const postRemindListCopy = /*#__PURE__*/ (
  requestData: PostRemindListCopyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListCopyResponse>(prepare(postRemindListCopyRequestConfig, requestData), ...args)
}

postRemindListCopy.requestConfig = postRemindListCopyRequestConfig

/**
 * 接口 列表删除 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/delete`
 */
export interface PostRemindListDeleteRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 列表删除 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/delete`
 */
export interface PostRemindListDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表删除 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/delete`
 */
type PostRemindListDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/delete', undefined, string, string, false>
>

/**
 * 接口 列表删除 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/delete`
 */
const postRemindListDeleteRequestConfig: PostRemindListDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表删除 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/delete`
 */
export const postRemindListDelete = /*#__PURE__*/ (
  requestData: PostRemindListDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListDeleteResponse>(prepare(postRemindListDeleteRequestConfig, requestData), ...args)
}

postRemindListDelete.requestConfig = postRemindListDeleteRequestConfig

/**
 * 接口 列表详情 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/detail`
 */
export interface PostRemindListDetailRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 列表详情 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/detail`
 */
export interface PostRemindListDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表详情 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/detail`
 */
type PostRemindListDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/detail', undefined, string, string, false>
>

/**
 * 接口 列表详情 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/detail`
 */
const postRemindListDetailRequestConfig: PostRemindListDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/detail',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表详情 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/detail`
 */
export const postRemindListDetail = /*#__PURE__*/ (
  requestData: PostRemindListDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListDetailResponse>(prepare(postRemindListDetailRequestConfig, requestData), ...args)
}

postRemindListDetail.requestConfig = postRemindListDetailRequestConfig

/**
 * 接口 列表启用 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/enable`
 */
export interface PostRemindListEnableRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 列表启用 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/enable`
 */
export interface PostRemindListEnableResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表启用 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/enable`
 */
type PostRemindListEnableRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/enable', undefined, string, string, false>
>

/**
 * 接口 列表启用 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/enable`
 */
const postRemindListEnableRequestConfig: PostRemindListEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/enable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListEnable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表启用 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/enable`
 */
export const postRemindListEnable = /*#__PURE__*/ (
  requestData: PostRemindListEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListEnableResponse>(prepare(postRemindListEnableRequestConfig, requestData), ...args)
}

postRemindListEnable.requestConfig = postRemindListEnableRequestConfig

/**
 * 接口 列表查询 的 **请求类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/select`
 */
export interface PostRemindListSelectRequest {
  checkModelType?: number
  childModelId?: string
  current?: number
  formId?: string
  hasChild?: number
  id?: string
  modelId?: string
  needPermission?: boolean
  relationName?: string
  remindOnActionColumns?: {
    createTime?: string
    creator?: number
    formColumnCode?: string
    formColumnId?: string
    formColumnName?: string
    formColumnType?: number
    id?: string
    isDel?: number
    modifier?: number
    ruleId?: string
    updateTime?: string
  }[]
  ruleDescription?: string
  ruleName?: string
  runState?: number
  size?: number
  status?: number
  triggerActionType?: number
  triggerType?: number
  warningLevelType?: number
}

/**
 * 接口 列表查询 的 **返回类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/select`
 */
export interface PostRemindListSelectResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表查询 的 **请求配置的类型**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/select`
 */
type PostRemindListSelectRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/list/select', undefined, string, string, false>
>

/**
 * 接口 列表查询 的 **请求配置**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/select`
 */
const postRemindListSelectRequestConfig: PostRemindListSelectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_24,
  devUrl: devUrl_0_0_0_24,
  prodUrl: prodUrl_0_0_0_24,
  path: '/remind/list/select',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_24,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindListSelect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表查询 的 **请求函数**
 *
 * @分类 【业务规则】列表功能
 * @请求头 `POST /remind/list/select`
 */
export const postRemindListSelect = /*#__PURE__*/ (
  requestData: PostRemindListSelectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindListSelectResponse>(prepare(postRemindListSelectRequestConfig, requestData), ...args)
}

postRemindListSelect.requestConfig = postRemindListSelectRequestConfig

const mockUrl_0_0_0_25 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_25 = '' as any
const prodUrl_0_0_0_25 = '' as any
const dataKey_0_0_0_25 = undefined as any

/**
 * 接口 预警规则模拟 的 **请求类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/imitate`
 */
export interface PostRemindWarningImitateRequest {}

/**
 * 接口 预警规则模拟 的 **返回类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/imitate`
 */
export interface PostRemindWarningImitateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 预警规则模拟 的 **请求配置的类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/imitate`
 */
type PostRemindWarningImitateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/warning/imitate', undefined, string, string, true>
>

/**
 * 接口 预警规则模拟 的 **请求配置**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/imitate`
 */
const postRemindWarningImitateRequestConfig: PostRemindWarningImitateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_25,
  devUrl: devUrl_0_0_0_25,
  prodUrl: prodUrl_0_0_0_25,
  path: '/remind/warning/imitate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_25,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindWarningImitate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 预警规则模拟 的 **请求函数**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/imitate`
 */
export const postRemindWarningImitate = /*#__PURE__*/ (
  requestData?: PostRemindWarningImitateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindWarningImitateResponse>(prepare(postRemindWarningImitateRequestConfig, requestData), ...args)
}

postRemindWarningImitate.requestConfig = postRemindWarningImitateRequestConfig

/**
 * 接口 日志重试 的 **请求类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/retry/execute`
 */
export interface PostRemindWarningRetryExecuteRequest {}

/**
 * 接口 日志重试 的 **返回类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/retry/execute`
 */
export interface PostRemindWarningRetryExecuteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 日志重试 的 **请求配置的类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/retry/execute`
 */
type PostRemindWarningRetryExecuteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/warning/retry/execute',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 日志重试 的 **请求配置**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/retry/execute`
 */
const postRemindWarningRetryExecuteRequestConfig: PostRemindWarningRetryExecuteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_25,
  devUrl: devUrl_0_0_0_25,
  prodUrl: prodUrl_0_0_0_25,
  path: '/remind/warning/retry/execute',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_25,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindWarningRetryExecute',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 日志重试 的 **请求函数**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/retry/execute`
 */
export const postRemindWarningRetryExecute = /*#__PURE__*/ (
  requestData?: PostRemindWarningRetryExecuteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindWarningRetryExecuteResponse>(
    prepare(postRemindWarningRetryExecuteRequestConfig, requestData),
    ...args,
  )
}

postRemindWarningRetryExecute.requestConfig = postRemindWarningRetryExecuteRequestConfig

/**
 * 接口 消息配置基础信息保存 的 **请求类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/save`
 */
export interface PostRemindWarningRuleSettingSaveRequest {
  remindConditionConfigGroupDtoList?: {
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 条件设置列表
     */
    remindConditionConfigDTOList?: {
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 比较符号 1：等于 2：不等于 3：小于 4：小于等于 5：大于 6：大于等于 7属于 8包含 9介于
       */
      compareMark?: number
      /**
       * 比较的值
       */
      compareValue?: string
      /**
       * 右侧比较值中文
       */
      compareValueText?: string
      /**
       * 表单id 只有公式类型是字段的才有
       */
      formId?: string
      /**
       * 表达式uuid，用来确认该表达式在消息配置中的位置
       */
      formulaId?: string
      /**
       * 公式类型 1：字段 2：表达式
       */
      formulaType?: number
      /**
       * 公式/字段
       */
      formulaValue?: string
      /**
       * 规则分组id
       */
      groupId?: string
      id?: string
      isDel?: number
      /**
       * 条件设置表达式字段表入参DTO列表
       */
      remindConditionFormulaColumnDTOList?: {
        /**
         * 字段code
         */
        columnCode?: string
        /**
         * 字段id
         */
        columnId?: string
        /**
         * 字段中文
         */
        columnName?: string
        /**
         * 字段来源 1表单 2数据集 3函数 4系统变量
         */
        columnSource?: number
        /**
         * 条件设置主键id
         */
        conditionId?: string
        /**
         * 表单id
         */
        formId?: string
        /**
         * 表达式字段code
         */
        formulaColumnCode?: string
        id?: string
        isDel?: number
        /**
         * 单个函数内的字段列表DTO
         */
        remindConditionFunctionColumnDTOList?: {
          /**
           * 字段code
           */
          columnCode?: string
          /**
           * 字段id
           */
          columnId?: string
          /**
           * 字段中文
           */
          columnName?: string
          /**
           * 字段来源 1表单 2数据集 3函数
           */
          columnSource?: number
          /**
           * 条件设置主键id
           */
          conditionId?: string
          /**
           * 表单id
           */
          formId?: string
          /**
           * 数据源字段code
           */
          formulaColumnCode?: string
          /**
           * 条件设置表达式主键id
           */
          formulaColumnId?: string
          id?: string
          isDel?: number
          /**
           * 业务规则id
           */
          ruleId?: string
          /**
           * 排序id
           */
          sort?: number
          /**
           * 数据源id
           */
          sourceId?: string
        }[]
        /**
         * 业务规则id
         */
        ruleId?: string
        /**
         * 排序id
         */
        sort?: number
        /**
         * 数据集id
         */
        sourceId?: string
      }[]
      /**
       * 规则id
       */
      ruleId?: string
    }[]
    /**
     * 规则id
     */
    ruleId?: string
  }[]
  remindRuleDTO?: {
    checkModelType?: number
    childModelId?: string
    current?: number
    formId?: string
    hasChild?: number
    id?: string
    modelId?: string
    needPermission?: boolean
    relationName?: string
    remindOnActionColumns?: {
      createTime?: string
      creator?: number
      formColumnCode?: string
      formColumnId?: string
      formColumnName?: string
      formColumnType?: number
      id?: string
      isDel?: number
      modifier?: number
      ruleId?: string
      updateTime?: string
    }[]
    ruleDescription?: string
    ruleName?: string
    runState?: number
    size?: number
    status?: number
    triggerActionType?: number
    triggerType?: number
    warningLevelType?: number
  }
  remindWarningMsgDTO?: {
    /**
     * 表单中的用户对应的column的id
     */
    columnIds?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 发送的部门
     */
    depIds?: string
    /**
     * ID
     */
    id?: string
    /**
     * 推送的消息主题（含规则）
     */
    msgRule?: string
    /**
     * 消息字段明细
     */
    remindMessageColumnDtoList?: {
      /**
       * 字段code
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 数据来源 1表单字段 2数据源字段 3表达式
       */
      columnSource?: number
      /**
       * 表单id
       */
      formId?: string
      /**
       * 表达式字段code
       */
      formulaColumnCode?: string
      id?: string
      isDel?: number
      /**
       * 消息配置id
       */
      messageId?: string
      /**
       * 业务规则id
       */
      ruleId?: string
      /**
       * 字段排序
       */
      sort?: number
      /**
       * 数据源id
       */
      sourceId?: string
    }[]
    /**
     * 规则基础信息id
     */
    remindRuleId?: string
    remindWarningRuleDTO?: {
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 每天,-1为每月的最后一天
       */
      day?: string
      /**
       * ID
       */
      id?: string
      /**
       * 每月(预留字段)
       */
      month?: string
      /**
       * 规则基础信息id
       */
      remindRuleId?: string
      /**
       * 时间
       */
      time?: string
      /**
       * 1每天2每周3每月
       */
      type?: string
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 每周
       */
      week?: string
    }
    /**
     * 发送的角色
     */
    roleIds?: string
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 发送给人员的ID
     */
    userIds?: string
  }
  remindWarningUpdateDtoList?: {
    /**
     * code名称
     */
    columnCode?: string
    /**
     * 字段ID
     */
    columnId?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * ID
     */
    id?: string
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 规则基础信息id
     */
    remindRuleId?: string
    /**
     * 1是主表字段2是明细表字段
     */
    type?: string
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 反写的值
     */
    value?: string
  }[]
}

/**
 * 接口 消息配置基础信息保存 的 **返回类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/save`
 */
export interface PostRemindWarningRuleSettingSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 消息配置基础信息保存 的 **请求配置的类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/save`
 */
type PostRemindWarningRuleSettingSaveRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/warning/ruleSetting/save',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 消息配置基础信息保存 的 **请求配置**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/save`
 */
const postRemindWarningRuleSettingSaveRequestConfig: PostRemindWarningRuleSettingSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_25,
  devUrl: devUrl_0_0_0_25,
  prodUrl: prodUrl_0_0_0_25,
  path: '/remind/warning/ruleSetting/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_25,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindWarningRuleSettingSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 消息配置基础信息保存 的 **请求函数**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/save`
 */
export const postRemindWarningRuleSettingSave = /*#__PURE__*/ (
  requestData: PostRemindWarningRuleSettingSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindWarningRuleSettingSaveResponse>(
    prepare(postRemindWarningRuleSettingSaveRequestConfig, requestData),
    ...args,
  )
}

postRemindWarningRuleSettingSave.requestConfig = postRemindWarningRuleSettingSaveRequestConfig

/**
 * 接口 消息配置基础信息修改 的 **请求类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/update`
 */
export interface PostRemindWarningRuleSettingUpdateRequest {
  remindConditionConfigGroupDtoList?: {
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 条件设置列表
     */
    remindConditionConfigDTOList?: {
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 比较符号 1：等于 2：不等于 3：小于 4：小于等于 5：大于 6：大于等于 7属于 8包含 9介于
       */
      compareMark?: number
      /**
       * 比较的值
       */
      compareValue?: string
      /**
       * 右侧比较值中文
       */
      compareValueText?: string
      /**
       * 表单id 只有公式类型是字段的才有
       */
      formId?: string
      /**
       * 表达式uuid，用来确认该表达式在消息配置中的位置
       */
      formulaId?: string
      /**
       * 公式类型 1：字段 2：表达式
       */
      formulaType?: number
      /**
       * 公式/字段
       */
      formulaValue?: string
      /**
       * 规则分组id
       */
      groupId?: string
      id?: string
      isDel?: number
      /**
       * 条件设置表达式字段表入参DTO列表
       */
      remindConditionFormulaColumnDTOList?: {
        /**
         * 字段code
         */
        columnCode?: string
        /**
         * 字段id
         */
        columnId?: string
        /**
         * 字段中文
         */
        columnName?: string
        /**
         * 字段来源 1表单 2数据集 3函数 4系统变量
         */
        columnSource?: number
        /**
         * 条件设置主键id
         */
        conditionId?: string
        /**
         * 表单id
         */
        formId?: string
        /**
         * 表达式字段code
         */
        formulaColumnCode?: string
        id?: string
        isDel?: number
        /**
         * 单个函数内的字段列表DTO
         */
        remindConditionFunctionColumnDTOList?: {
          /**
           * 字段code
           */
          columnCode?: string
          /**
           * 字段id
           */
          columnId?: string
          /**
           * 字段中文
           */
          columnName?: string
          /**
           * 字段来源 1表单 2数据集 3函数
           */
          columnSource?: number
          /**
           * 条件设置主键id
           */
          conditionId?: string
          /**
           * 表单id
           */
          formId?: string
          /**
           * 数据源字段code
           */
          formulaColumnCode?: string
          /**
           * 条件设置表达式主键id
           */
          formulaColumnId?: string
          id?: string
          isDel?: number
          /**
           * 业务规则id
           */
          ruleId?: string
          /**
           * 排序id
           */
          sort?: number
          /**
           * 数据源id
           */
          sourceId?: string
        }[]
        /**
         * 业务规则id
         */
        ruleId?: string
        /**
         * 排序id
         */
        sort?: number
        /**
         * 数据集id
         */
        sourceId?: string
      }[]
      /**
       * 规则id
       */
      ruleId?: string
    }[]
    /**
     * 规则id
     */
    ruleId?: string
  }[]
  remindRuleDTO?: {
    checkModelType?: number
    childModelId?: string
    current?: number
    formId?: string
    hasChild?: number
    id?: string
    modelId?: string
    needPermission?: boolean
    relationName?: string
    remindOnActionColumns?: {
      createTime?: string
      creator?: number
      formColumnCode?: string
      formColumnId?: string
      formColumnName?: string
      formColumnType?: number
      id?: string
      isDel?: number
      modifier?: number
      ruleId?: string
      updateTime?: string
    }[]
    ruleDescription?: string
    ruleName?: string
    runState?: number
    size?: number
    status?: number
    triggerActionType?: number
    triggerType?: number
    warningLevelType?: number
  }
  remindWarningMsgDTO?: {
    /**
     * 表单中的用户对应的column的id
     */
    columnIds?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 发送的部门
     */
    depIds?: string
    /**
     * ID
     */
    id?: string
    /**
     * 推送的消息主题（含规则）
     */
    msgRule?: string
    /**
     * 消息字段明细
     */
    remindMessageColumnDtoList?: {
      /**
       * 字段code
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 数据来源 1表单字段 2数据源字段 3表达式
       */
      columnSource?: number
      /**
       * 表单id
       */
      formId?: string
      /**
       * 表达式字段code
       */
      formulaColumnCode?: string
      id?: string
      isDel?: number
      /**
       * 消息配置id
       */
      messageId?: string
      /**
       * 业务规则id
       */
      ruleId?: string
      /**
       * 字段排序
       */
      sort?: number
      /**
       * 数据源id
       */
      sourceId?: string
    }[]
    /**
     * 规则基础信息id
     */
    remindRuleId?: string
    remindWarningRuleDTO?: {
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 每天,-1为每月的最后一天
       */
      day?: string
      /**
       * ID
       */
      id?: string
      /**
       * 每月(预留字段)
       */
      month?: string
      /**
       * 规则基础信息id
       */
      remindRuleId?: string
      /**
       * 时间
       */
      time?: string
      /**
       * 1每天2每周3每月
       */
      type?: string
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 每周
       */
      week?: string
    }
    /**
     * 发送的角色
     */
    roleIds?: string
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 发送给人员的ID
     */
    userIds?: string
  }
  remindWarningUpdateDtoList?: {
    /**
     * code名称
     */
    columnCode?: string
    /**
     * 字段ID
     */
    columnId?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * ID
     */
    id?: string
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 规则基础信息id
     */
    remindRuleId?: string
    /**
     * 1是主表字段2是明细表字段
     */
    type?: string
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 反写的值
     */
    value?: string
  }[]
}

/**
 * 接口 消息配置基础信息修改 的 **返回类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/update`
 */
export interface PostRemindWarningRuleSettingUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 消息配置基础信息修改 的 **请求配置的类型**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/update`
 */
type PostRemindWarningRuleSettingUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/warning/ruleSetting/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 消息配置基础信息修改 的 **请求配置**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/update`
 */
const postRemindWarningRuleSettingUpdateRequestConfig: PostRemindWarningRuleSettingUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_25,
  devUrl: devUrl_0_0_0_25,
  prodUrl: prodUrl_0_0_0_25,
  path: '/remind/warning/ruleSetting/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_25,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindWarningRuleSettingUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 消息配置基础信息修改 的 **请求函数**
 *
 * @分类 【业务规则】定时任务业务规则设置
 * @请求头 `POST /remind/warning/ruleSetting/update`
 */
export const postRemindWarningRuleSettingUpdate = /*#__PURE__*/ (
  requestData: PostRemindWarningRuleSettingUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindWarningRuleSettingUpdateResponse>(
    prepare(postRemindWarningRuleSettingUpdateRequestConfig, requestData),
    ...args,
  )
}

postRemindWarningRuleSettingUpdate.requestConfig = postRemindWarningRuleSettingUpdateRequestConfig

const mockUrl_0_0_0_26 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_26 = '' as any
const prodUrl_0_0_0_26 = '' as any
const dataKey_0_0_0_26 = undefined as any

/**
 * 接口 获取规则对应的日志 的 **请求类型**
 *
 * @分类 【业务规则】定时任务日志信息
 * @请求头 `POST /remind/get/remind/logs`
 */
export interface PostRemindGetRemindLogsRequest {
  /**
   * 创建时间
   */
  createTime?: string
  current?: number
  /**
   * 结束时间
   */
  endTime?: string
  /**
   * 表单id
   */
  fromId?: string
  /**
   * 表单值id
   */
  fromValueId?: string
  /**
   * ID
   */
  id?: string
  /**
   * 日志信息
   */
  info?: string
  /**
   * 规则基础信息id
   */
  remindRuleId?: string
  size?: number
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 1成功2失败
   */
  state?: string
}

/**
 * 接口 获取规则对应的日志 的 **返回类型**
 *
 * @分类 【业务规则】定时任务日志信息
 * @请求头 `POST /remind/get/remind/logs`
 */
export interface PostRemindGetRemindLogsResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取规则对应的日志 的 **请求配置的类型**
 *
 * @分类 【业务规则】定时任务日志信息
 * @请求头 `POST /remind/get/remind/logs`
 */
type PostRemindGetRemindLogsRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/get/remind/logs', undefined, string, string, false>
>

/**
 * 接口 获取规则对应的日志 的 **请求配置**
 *
 * @分类 【业务规则】定时任务日志信息
 * @请求头 `POST /remind/get/remind/logs`
 */
const postRemindGetRemindLogsRequestConfig: PostRemindGetRemindLogsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_26,
  devUrl: devUrl_0_0_0_26,
  prodUrl: prodUrl_0_0_0_26,
  path: '/remind/get/remind/logs',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_26,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindGetRemindLogs',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取规则对应的日志 的 **请求函数**
 *
 * @分类 【业务规则】定时任务日志信息
 * @请求头 `POST /remind/get/remind/logs`
 */
export const postRemindGetRemindLogs = /*#__PURE__*/ (
  requestData: PostRemindGetRemindLogsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindGetRemindLogsResponse>(prepare(postRemindGetRemindLogsRequestConfig, requestData), ...args)
}

postRemindGetRemindLogs.requestConfig = postRemindGetRemindLogsRequestConfig

const mockUrl_0_0_0_27 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_27 = '' as any
const prodUrl_0_0_0_27 = '' as any
const dataKey_0_0_0_27 = undefined as any

/**
 * 接口 获取表单中的用户就控件 的 **请求类型**
 *
 * @分类 【业务规则】定时任务消息设置
 * @请求头 `GET /remind/get/form/user`
 */
export interface GetRemindGetFormUserRequest {
  /**
   * formId
   */
  formId?: string
}

/**
 * 接口 获取表单中的用户就控件 的 **返回类型**
 *
 * @分类 【业务规则】定时任务消息设置
 * @请求头 `GET /remind/get/form/user`
 */
export interface GetRemindGetFormUserResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取表单中的用户就控件 的 **请求配置的类型**
 *
 * @分类 【业务规则】定时任务消息设置
 * @请求头 `GET /remind/get/form/user`
 */
type GetRemindGetFormUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/get/form/user', undefined, string, 'formId', false>
>

/**
 * 接口 获取表单中的用户就控件 的 **请求配置**
 *
 * @分类 【业务规则】定时任务消息设置
 * @请求头 `GET /remind/get/form/user`
 */
const getRemindGetFormUserRequestConfig: GetRemindGetFormUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_27,
  devUrl: devUrl_0_0_0_27,
  prodUrl: prodUrl_0_0_0_27,
  path: '/remind/get/form/user',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_27,
  paramNames: [],
  queryNames: ['formId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRemindGetFormUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取表单中的用户就控件 的 **请求函数**
 *
 * @分类 【业务规则】定时任务消息设置
 * @请求头 `GET /remind/get/form/user`
 */
export const getRemindGetFormUser = /*#__PURE__*/ (
  requestData: GetRemindGetFormUserRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetRemindGetFormUserResponse>(prepare(getRemindGetFormUserRequestConfig, requestData), ...args)
}

getRemindGetFormUser.requestConfig = getRemindGetFormUserRequestConfig

const mockUrl_0_0_0_28 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_28 = '' as any
const prodUrl_0_0_0_28 = '' as any
const dataKey_0_0_0_28 = undefined as any

/**
 * 接口 业务规则应用层触发 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发应用层接口
 * @请求头 `POST /remind/remind/apply`
 */
export interface PostRemindRemindApplyRequest {
  expressionMap?: {}
  /**
   * 表单字段ID
   */
  formColumnId?: string
  formId?: number
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  formJsonDTO2Map?: {}
  formJsonDTO2MapZh?: {}
  formulaValue?: string
  /**
   * 是否校验 1:校验 2:不校验
   */
  isCheck?: string
  msg?: string
  remindRule?: {
    checkModelType?: number
    childModelId?: string
    corpCode?: string
    createTime?: string
    creator?: number
    enable?: number
    formId?: string
    hasChild?: number
    id?: string
    isDel?: number
    modelId?: string
    modifier?: number
    ruleDescription?: string
    ruleName?: string
    runState?: number
    status?: number
    triggerActionType?: number
    triggerType?: number
    updateTime?: string
    warningLevelType?: number
  }
  sendMsg?: boolean
  sourceList?: {}
  /**
   * 提交类型 2:字段编辑 3:表单提交前
   */
  submitType?: string
}

/**
 * 接口 业务规则应用层触发 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发应用层接口
 * @请求头 `POST /remind/remind/apply`
 */
export interface PostRemindRemindApplyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 业务规则应用层触发 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发应用层接口
 * @请求头 `POST /remind/remind/apply`
 */
type PostRemindRemindApplyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/remind/apply', undefined, string, string, false>
>

/**
 * 接口 业务规则应用层触发 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发应用层接口
 * @请求头 `POST /remind/remind/apply`
 */
const postRemindRemindApplyRequestConfig: PostRemindRemindApplyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_28,
  devUrl: devUrl_0_0_0_28,
  prodUrl: prodUrl_0_0_0_28,
  path: '/remind/remind/apply',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_28,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindRemindApply',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 业务规则应用层触发 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发应用层接口
 * @请求头 `POST /remind/remind/apply`
 */
export const postRemindRemindApply = /*#__PURE__*/ (
  requestData: PostRemindRemindApplyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindRemindApplyResponse>(prepare(postRemindRemindApplyRequestConfig, requestData), ...args)
}

postRemindRemindApply.requestConfig = postRemindRemindApplyRequestConfig

const mockUrl_0_0_0_29 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_29 = '' as any
const prodUrl_0_0_0_29 = '' as any
const dataKey_0_0_0_29 = undefined as any

/**
 * 接口 设计层复制 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/copy`
 */
export interface PostRemindDesignOnActionCopyRequest {
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 规则基本信息主键id
   */
  newRuleId?: string
  /**
   * 规则基本信息主键id
   */
  ruleId?: string
}

/**
 * 接口 设计层复制 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/copy`
 */
export interface PostRemindDesignOnActionCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设计层复制 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/copy`
 */
type PostRemindDesignOnActionCopyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/onAction/copy',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 设计层复制 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/copy`
 */
const postRemindDesignOnActionCopyRequestConfig: PostRemindDesignOnActionCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_29,
  devUrl: devUrl_0_0_0_29,
  prodUrl: prodUrl_0_0_0_29,
  path: '/remind/design/onAction/copy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_29,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindDesignOnActionCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设计层复制 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/copy`
 */
export const postRemindDesignOnActionCopy = /*#__PURE__*/ (
  requestData: PostRemindDesignOnActionCopyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignOnActionCopyResponse>(
    prepare(postRemindDesignOnActionCopyRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignOnActionCopy.requestConfig = postRemindDesignOnActionCopyRequestConfig

/**
 * 接口 设计层删除 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/delete`
 */
export interface PostRemindDesignOnActionDeleteRequest {
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 规则基本信息主键id
   */
  ruleId?: string
}

/**
 * 接口 设计层删除 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/delete`
 */
export interface PostRemindDesignOnActionDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设计层删除 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/delete`
 */
type PostRemindDesignOnActionDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/onAction/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 设计层删除 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/delete`
 */
const postRemindDesignOnActionDeleteRequestConfig: PostRemindDesignOnActionDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_29,
  devUrl: devUrl_0_0_0_29,
  prodUrl: prodUrl_0_0_0_29,
  path: '/remind/design/onAction/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_29,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindDesignOnActionDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设计层删除 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/delete`
 */
export const postRemindDesignOnActionDelete = /*#__PURE__*/ (
  requestData: PostRemindDesignOnActionDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignOnActionDeleteResponse>(
    prepare(postRemindDesignOnActionDeleteRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignOnActionDelete.requestConfig = postRemindDesignOnActionDeleteRequestConfig

/**
 * 接口 设计层详情 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/detail`
 */
export interface PostRemindDesignOnActionDetailRequest {
  basicMsg?: string
  /**
   * 数据集配置保存
   */
  designSourceConfigSave?: {
    /**
     * 表单id
     */
    formId?: string
    /**
     * 数据源编码
     */
    sourceCode?: string
    /**
     * 数据源表单id
     */
    sourceFormId?: string
    /**
     * 数据源id
     */
    sourceId?: string
    /**
     * 数据集关系信息
     */
    sourceInfo?: {
      /**
       * 表单字段code
       */
      formColumnCode?: string
      /**
       * 表单字段id
       */
      formColumnId?: string
      /**
       * 表单字段name
       */
      formColumnName?: string
      /**
       * 表单字段类型 1：主表 2：子表
       */
      formColumnType?: number
      /**
       * 数据源字段code
       */
      sourceColumnCode?: string
      /**
       * 数据源字段id
       */
      sourceColumnId?: string
      /**
       * 数据源字段name
       */
      sourceColumnName?: string
      /**
       * 数据源字段类型 1：主表 2：子表
       */
      sourceColumnType?: number
    }[]
    /**
     * 数据源名称
     */
    sourceName?: string
  }[]
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 条件设置入参
   */
  remindConditionConfigGroupDTOList?: {
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 条件设置列表
     */
    remindConditionConfigDTOList?: {
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 比较符号 1：等于 2：不等于 3：小于 4：小于等于 5：大于 6：大于等于 7属于 8包含 9介于
       */
      compareMark?: number
      /**
       * 比较的值
       */
      compareValue?: string
      /**
       * 右侧比较值中文
       */
      compareValueText?: string
      /**
       * 表单id 只有公式类型是字段的才有
       */
      formId?: string
      /**
       * 表达式uuid，用来确认该表达式在消息配置中的位置
       */
      formulaId?: string
      /**
       * 公式类型 1：字段 2：表达式
       */
      formulaType?: number
      /**
       * 公式/字段
       */
      formulaValue?: string
      /**
       * 规则分组id
       */
      groupId?: string
      id?: string
      isDel?: number
      /**
       * 条件设置表达式字段表入参DTO列表
       */
      remindConditionFormulaColumnDTOList?: {
        /**
         * 字段code
         */
        columnCode?: string
        /**
         * 字段id
         */
        columnId?: string
        /**
         * 字段中文
         */
        columnName?: string
        /**
         * 字段来源 1表单 2数据集 3函数 4系统变量
         */
        columnSource?: number
        /**
         * 条件设置主键id
         */
        conditionId?: string
        /**
         * 表单id
         */
        formId?: string
        /**
         * 表达式字段code
         */
        formulaColumnCode?: string
        id?: string
        isDel?: number
        /**
         * 单个函数内的字段列表DTO
         */
        remindConditionFunctionColumnDTOList?: {
          /**
           * 字段code
           */
          columnCode?: string
          /**
           * 字段id
           */
          columnId?: string
          /**
           * 字段中文
           */
          columnName?: string
          /**
           * 字段来源 1表单 2数据集 3函数
           */
          columnSource?: number
          /**
           * 条件设置主键id
           */
          conditionId?: string
          /**
           * 表单id
           */
          formId?: string
          /**
           * 数据源字段code
           */
          formulaColumnCode?: string
          /**
           * 条件设置表达式主键id
           */
          formulaColumnId?: string
          id?: string
          isDel?: number
          /**
           * 业务规则id
           */
          ruleId?: string
          /**
           * 排序id
           */
          sort?: number
          /**
           * 数据源id
           */
          sourceId?: string
        }[]
        /**
         * 业务规则id
         */
        ruleId?: string
        /**
         * 排序id
         */
        sort?: number
        /**
         * 数据集id
         */
        sourceId?: string
      }[]
      /**
       * 规则id
       */
      ruleId?: string
    }[]
    /**
     * 规则id
     */
    ruleId?: string
  }[]
  remindMessageConfigDTO?: {
    createTime?: string
    creator?: number
    id?: string
    isDel?: number
    /**
     * 消息内容
     */
    message?: string
    modifier?: number
    /**
     * 消息字段表入参DTO
     */
    remindMessageColumnDTOList?: {
      /**
       * 字段code
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 数据来源 1表单字段 2数据源字段 3表达式
       */
      columnSource?: number
      /**
       * 表单id
       */
      formId?: string
      /**
       * 表达式字段code
       */
      formulaColumnCode?: string
      id?: string
      isDel?: number
      /**
       * 消息配置id
       */
      messageId?: string
      /**
       * 业务规则id
       */
      ruleId?: string
      /**
       * 字段排序
       */
      sort?: number
      /**
       * 数据源id
       */
      sourceId?: string
    }[]
    /**
     * 规则id
     */
    ruleId?: string
    updateTime?: string
  }
  remindRule?: {
    checkModelType?: number
    childFormName?: string
    childModelId?: string
    corpCode?: string
    createTime?: string
    creator?: number
    enable?: number
    formId?: string
    hasChild?: number
    id?: string
    issued?: boolean
    modelId?: string
    modifier?: number
    relationName?: string
    remindOnActionColumns?: {
      createTime?: string
      creator?: number
      formColumnCode?: string
      formColumnId?: string
      formColumnName?: string
      formColumnType?: number
      id?: string
      isDel?: number
      modifier?: number
      ruleId?: string
      updateTime?: string
    }[]
    ruleDescription?: string
    ruleName?: string
    runState?: number
    status?: number
    triggerActionType?: number
    triggerType?: number
    updateTime?: string
    warningLevelType?: number
  }
  /**
   * 规则基本信息主键id
   */
  ruleId?: string
}

/**
 * 接口 设计层详情 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/detail`
 */
export interface PostRemindDesignOnActionDetailResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设计层详情 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/detail`
 */
type PostRemindDesignOnActionDetailRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/onAction/detail',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 设计层详情 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/detail`
 */
const postRemindDesignOnActionDetailRequestConfig: PostRemindDesignOnActionDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_29,
  devUrl: devUrl_0_0_0_29,
  prodUrl: prodUrl_0_0_0_29,
  path: '/remind/design/onAction/detail',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_29,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindDesignOnActionDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设计层详情 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/detail`
 */
export const postRemindDesignOnActionDetail = /*#__PURE__*/ (
  requestData: PostRemindDesignOnActionDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignOnActionDetailResponse>(
    prepare(postRemindDesignOnActionDetailRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignOnActionDetail.requestConfig = postRemindDesignOnActionDetailRequestConfig

/**
 * 接口 设计层保存 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/save`
 */
export interface PostRemindDesignOnActionSaveRequest {
  /**
   * 数据集配置保存
   */
  designSourceConfigSave?: {
    /**
     * 表单id
     */
    formId?: string
    /**
     * 数据源编码
     */
    sourceCode?: string
    /**
     * 数据源表单id
     */
    sourceFormId?: string
    /**
     * 数据源id
     */
    sourceId?: string
    /**
     * 数据集关系信息
     */
    sourceInfo?: {
      /**
       * 表单字段code
       */
      formColumnCode?: string
      /**
       * 表单字段id
       */
      formColumnId?: string
      /**
       * 表单字段name
       */
      formColumnName?: string
      /**
       * 表单字段类型 1：主表 2：子表
       */
      formColumnType?: number
      /**
       * 数据源字段code
       */
      sourceColumnCode?: string
      /**
       * 数据源字段id
       */
      sourceColumnId?: string
      /**
       * 数据源字段name
       */
      sourceColumnName?: string
      /**
       * 数据源字段类型 1：主表 2：子表
       */
      sourceColumnType?: number
    }[]
    /**
     * 数据源名称
     */
    sourceName?: string
  }[]
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 条件设置入参
   */
  remindConditionConfigGroupDTOList?: {
    /**
     * 分组名
     */
    groupName?: string
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 1正常 0删除
     */
    isDel?: number
    /**
     * 条件设置列表
     */
    remindConditionConfigDTOList?: {
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 比较符号 1：等于 2：不等于 3：小于 4：小于等于 5：大于 6：大于等于 7属于 8包含 9介于
       */
      compareMark?: number
      /**
       * 比较的值
       */
      compareValue?: string
      /**
       * 右侧比较值中文
       */
      compareValueText?: string
      /**
       * 表单id 只有公式类型是字段的才有
       */
      formId?: string
      /**
       * 表达式uuid，用来确认该表达式在消息配置中的位置
       */
      formulaId?: string
      /**
       * 公式类型 1：字段 2：表达式
       */
      formulaType?: number
      /**
       * 公式/字段
       */
      formulaValue?: string
      /**
       * 规则分组id
       */
      groupId?: string
      id?: string
      isDel?: number
      /**
       * 条件设置表达式字段表入参DTO列表
       */
      remindConditionFormulaColumnDTOList?: {
        /**
         * 字段code
         */
        columnCode?: string
        /**
         * 字段id
         */
        columnId?: string
        /**
         * 字段中文
         */
        columnName?: string
        /**
         * 字段来源 1表单 2数据集 3函数 4系统变量
         */
        columnSource?: number
        /**
         * 条件设置主键id
         */
        conditionId?: string
        /**
         * 表单id
         */
        formId?: string
        /**
         * 表达式字段code
         */
        formulaColumnCode?: string
        id?: string
        isDel?: number
        /**
         * 单个函数内的字段列表DTO
         */
        remindConditionFunctionColumnDTOList?: {
          /**
           * 字段code
           */
          columnCode?: string
          /**
           * 字段id
           */
          columnId?: string
          /**
           * 字段中文
           */
          columnName?: string
          /**
           * 字段来源 1表单 2数据集 3函数
           */
          columnSource?: number
          /**
           * 条件设置主键id
           */
          conditionId?: string
          /**
           * 表单id
           */
          formId?: string
          /**
           * 数据源字段code
           */
          formulaColumnCode?: string
          /**
           * 条件设置表达式主键id
           */
          formulaColumnId?: string
          id?: string
          isDel?: number
          /**
           * 业务规则id
           */
          ruleId?: string
          /**
           * 排序id
           */
          sort?: number
          /**
           * 数据源id
           */
          sourceId?: string
        }[]
        /**
         * 业务规则id
         */
        ruleId?: string
        /**
         * 排序id
         */
        sort?: number
        /**
         * 数据集id
         */
        sourceId?: string
      }[]
      /**
       * 规则id
       */
      ruleId?: string
    }[]
    /**
     * 规则id
     */
    ruleId?: string
  }[]
  remindMessageConfigDTO?: {
    createTime?: string
    creator?: number
    id?: string
    isDel?: number
    /**
     * 消息内容
     */
    message?: string
    modifier?: number
    /**
     * 消息字段表入参DTO
     */
    remindMessageColumnDTOList?: {
      /**
       * 字段code
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 字段中文
       */
      columnName?: string
      /**
       * 数据来源 1表单字段 2数据源字段 3表达式
       */
      columnSource?: number
      /**
       * 表单id
       */
      formId?: string
      /**
       * 表达式字段code
       */
      formulaColumnCode?: string
      id?: string
      isDel?: number
      /**
       * 消息配置id
       */
      messageId?: string
      /**
       * 业务规则id
       */
      ruleId?: string
      /**
       * 字段排序
       */
      sort?: number
      /**
       * 数据源id
       */
      sourceId?: string
    }[]
    /**
     * 规则id
     */
    ruleId?: string
    updateTime?: string
  }
  remindRule?: {
    checkModelType?: number
    childModelId?: string
    current?: number
    formId?: string
    hasChild?: number
    id?: string
    modelId?: string
    needPermission?: boolean
    relationName?: string
    remindOnActionColumns?: {
      createTime?: string
      creator?: number
      formColumnCode?: string
      formColumnId?: string
      formColumnName?: string
      formColumnType?: number
      id?: string
      isDel?: number
      modifier?: number
      ruleId?: string
      updateTime?: string
    }[]
    ruleDescription?: string
    ruleName?: string
    runState?: number
    size?: number
    status?: number
    triggerActionType?: number
    triggerType?: number
    warningLevelType?: number
  }
  /**
   * 规则基本信息主键id
   */
  ruleId?: string
}

/**
 * 接口 设计层保存 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/save`
 */
export interface PostRemindDesignOnActionSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 设计层保存 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/save`
 */
type PostRemindDesignOnActionSaveRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/onAction/save',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 设计层保存 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/save`
 */
const postRemindDesignOnActionSaveRequestConfig: PostRemindDesignOnActionSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_29,
  devUrl: devUrl_0_0_0_29,
  prodUrl: prodUrl_0_0_0_29,
  path: '/remind/design/onAction/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_29,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindDesignOnActionSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 设计层保存 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发设计层接口
 * @请求头 `POST /remind/design/onAction/save`
 */
export const postRemindDesignOnActionSave = /*#__PURE__*/ (
  requestData: PostRemindDesignOnActionSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignOnActionSaveResponse>(
    prepare(postRemindDesignOnActionSaveRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignOnActionSave.requestConfig = postRemindDesignOnActionSaveRequestConfig

const mockUrl_0_0_0_30 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_30 = '' as any
const prodUrl_0_0_0_30 = '' as any
const dataKey_0_0_0_30 = undefined as any

/**
 * 接口 判断字段列表 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/judgeColumnList`
 */
export interface PostRemindDesignColorJudgeColumnListRequest {
  /**
   * 字段id
   */
  columnId?: string
  current?: number
  /**
   * 字段名称
   */
  modelColumnName?: string
  /**
   * 模型id
   */
  modelId?: string
  size?: number
}

/**
 * 接口 判断字段列表 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/judgeColumnList`
 */
export interface PostRemindDesignColorJudgeColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 判断字段列表 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/judgeColumnList`
 */
type PostRemindDesignColorJudgeColumnListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/color/judgeColumnList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 判断字段列表 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/judgeColumnList`
 */
const postRemindDesignColorJudgeColumnListRequestConfig: PostRemindDesignColorJudgeColumnListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_30,
    devUrl: devUrl_0_0_0_30,
    prodUrl: prodUrl_0_0_0_30,
    path: '/remind/design/color/judgeColumnList',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_30,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postRemindDesignColorJudgeColumnList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 判断字段列表 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/judgeColumnList`
 */
export const postRemindDesignColorJudgeColumnList = /*#__PURE__*/ (
  requestData: PostRemindDesignColorJudgeColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignColorJudgeColumnListResponse>(
    prepare(postRemindDesignColorJudgeColumnListRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignColorJudgeColumnList.requestConfig = postRemindDesignColorJudgeColumnListRequestConfig

/**
 * 接口 修改颜色字段列表 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/modifyColorColumnList`
 */
export interface PostRemindDesignColorModifyColorColumnListRequest {
  /**
   * 字段id
   */
  columnId?: string
  current?: number
  /**
   * 字段名称
   */
  modelColumnName?: string
  /**
   * 模型id
   */
  modelId?: string
  size?: number
}

/**
 * 接口 修改颜色字段列表 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/modifyColorColumnList`
 */
export interface PostRemindDesignColorModifyColorColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改颜色字段列表 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/modifyColorColumnList`
 */
type PostRemindDesignColorModifyColorColumnListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/color/modifyColorColumnList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 修改颜色字段列表 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/modifyColorColumnList`
 */
const postRemindDesignColorModifyColorColumnListRequestConfig: PostRemindDesignColorModifyColorColumnListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_30,
    devUrl: devUrl_0_0_0_30,
    prodUrl: prodUrl_0_0_0_30,
    path: '/remind/design/color/modifyColorColumnList',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_30,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postRemindDesignColorModifyColorColumnList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 修改颜色字段列表 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/color/modifyColorColumnList`
 */
export const postRemindDesignColorModifyColorColumnList = /*#__PURE__*/ (
  requestData: PostRemindDesignColorModifyColorColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignColorModifyColorColumnListResponse>(
    prepare(postRemindDesignColorModifyColorColumnListRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignColorModifyColorColumnList.requestConfig = postRemindDesignColorModifyColorColumnListRequestConfig

/**
 * 接口 表单下拉接口 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/formColumnList`
 */
export interface PostRemindDesignFormColumnListRequest {
  /**
   * 子表数据ID
   */
  childModelId?: string
  /**
   * 表单字段名称
   */
  formColumnName?: string
  /**
   * 关联的表单业务ID
   */
  formId?: string
}

/**
 * 接口 表单下拉接口 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/formColumnList`
 */
export interface PostRemindDesignFormColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单下拉接口 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/formColumnList`
 */
type PostRemindDesignFormColumnListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/formColumnList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 表单下拉接口 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/formColumnList`
 */
const postRemindDesignFormColumnListRequestConfig: PostRemindDesignFormColumnListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_30,
  devUrl: devUrl_0_0_0_30,
  prodUrl: prodUrl_0_0_0_30,
  path: '/remind/design/formColumnList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_30,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindDesignFormColumnList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单下拉接口 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/formColumnList`
 */
export const postRemindDesignFormColumnList = /*#__PURE__*/ (
  requestData: PostRemindDesignFormColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignFormColumnListResponse>(
    prepare(postRemindDesignFormColumnListRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignFormColumnList.requestConfig = postRemindDesignFormColumnListRequestConfig

/**
 * 接口 获得表单触发信息 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/obtainFormTriggerInfo`
 */
export interface PostRemindDesignObtainFormTriggerInfoRequest {
  /**
   * 表单ID
   */
  formId?: string
}

/**
 * 接口 获得表单触发信息 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/obtainFormTriggerInfo`
 */
export interface PostRemindDesignObtainFormTriggerInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获得表单触发信息 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/obtainFormTriggerInfo`
 */
type PostRemindDesignObtainFormTriggerInfoRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/obtainFormTriggerInfo',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 获得表单触发信息 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/obtainFormTriggerInfo`
 */
const postRemindDesignObtainFormTriggerInfoRequestConfig: PostRemindDesignObtainFormTriggerInfoRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_30,
    devUrl: devUrl_0_0_0_30,
    prodUrl: prodUrl_0_0_0_30,
    path: '/remind/design/obtainFormTriggerInfo',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_30,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postRemindDesignObtainFormTriggerInfo',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获得表单触发信息 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/obtainFormTriggerInfo`
 */
export const postRemindDesignObtainFormTriggerInfo = /*#__PURE__*/ (
  requestData: PostRemindDesignObtainFormTriggerInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignObtainFormTriggerInfoResponse>(
    prepare(postRemindDesignObtainFormTriggerInfoRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignObtainFormTriggerInfo.requestConfig = postRemindDesignObtainFormTriggerInfoRequestConfig

/**
 * 接口 获取触发字段列表 的 **请求类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/triggerColumnList`
 */
export interface PostRemindDesignTriggerColumnListRequest {
  /**
   * 子表模型id
   */
  childModelId?: string
  current?: number
  /**
   * 模型字段名称
   */
  formColumnName?: string
  /**
   * 表单id
   */
  formId?: string
  size?: number
}

/**
 * 接口 获取触发字段列表 的 **返回类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/triggerColumnList`
 */
export interface PostRemindDesignTriggerColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取触发字段列表 的 **请求配置的类型**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/triggerColumnList`
 */
type PostRemindDesignTriggerColumnListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/remind/design/triggerColumnList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 获取触发字段列表 的 **请求配置**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/triggerColumnList`
 */
const postRemindDesignTriggerColumnListRequestConfig: PostRemindDesignTriggerColumnListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_30,
  devUrl: devUrl_0_0_0_30,
  prodUrl: prodUrl_0_0_0_30,
  path: '/remind/design/triggerColumnList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_30,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindDesignTriggerColumnList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取触发字段列表 的 **请求函数**
 *
 * @分类 【业务规则】根据动作触发额外接口
 * @请求头 `POST /remind/design/triggerColumnList`
 */
export const postRemindDesignTriggerColumnList = /*#__PURE__*/ (
  requestData: PostRemindDesignTriggerColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindDesignTriggerColumnListResponse>(
    prepare(postRemindDesignTriggerColumnListRequestConfig, requestData),
    ...args,
  )
}

postRemindDesignTriggerColumnList.requestConfig = postRemindDesignTriggerColumnListRequestConfig

const mockUrl_0_0_0_31 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_31 = '' as any
const prodUrl_0_0_0_31 = '' as any
const dataKey_0_0_0_31 = undefined as any

/**
 * 接口 保存或更新颜色配置 的 **请求类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `POST /remind/color/save`
 */
export interface PostRemindColorSaveRequest {
  /**
   * 颜色配置信息
   */
  colorInfo?: {
    /**
     * 字段ID
     */
    columnId?: string
    /**
     * 字段类型
     */
    fieldTypeId?: string
    /**
     * 颜色配置ID
     */
    id?: string
    /**
     * 判断字段值
     */
    judgeColumnValueJson?: {
      /**
       * 颜色
       */
      color?: string
      /**
       * 字段原始值
       */
      value?: string
      /**
       * 字段值中文描述
       */
      valueZhName?: string
    }[]
    /**
     * 修改字段
     */
    modifyColumn?: string[]
  }[]
  remindRule?: {
    /**
     * 关联业务ID
     */
    modelId?: string
    /**
     * 说明
     */
    ruleDescription?: string
    /**
     * 规则名称
     */
    ruleName?: string
    /**
     * 规则状态
     */
    status?: number
    /**
     * 触发动作
     */
    triggerActionType?: number
    /**
     * 触发时机
     */
    triggerType?: number
  }
  /**
   * 规则ID
   */
  ruleId?: string
}

/**
 * 接口 保存或更新颜色配置 的 **返回类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `POST /remind/color/save`
 */
export interface PostRemindColorSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存或更新颜色配置 的 **请求配置的类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `POST /remind/color/save`
 */
type PostRemindColorSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/color/save', undefined, string, string, false>
>

/**
 * 接口 保存或更新颜色配置 的 **请求配置**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `POST /remind/color/save`
 */
const postRemindColorSaveRequestConfig: PostRemindColorSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_31,
  devUrl: devUrl_0_0_0_31,
  prodUrl: prodUrl_0_0_0_31,
  path: '/remind/color/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_31,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRemindColorSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存或更新颜色配置 的 **请求函数**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `POST /remind/color/save`
 */
export const postRemindColorSave = /*#__PURE__*/ (
  requestData: PostRemindColorSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostRemindColorSaveResponse>(prepare(postRemindColorSaveRequestConfig, requestData), ...args)
}

postRemindColorSave.requestConfig = postRemindColorSaveRequestConfig

/**
 * 接口 查询基本信息下拉 的 **请求类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/select`
 */
export interface GetRemindColorSelectRequest {}

/**
 * 接口 查询基本信息下拉 的 **返回类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/select`
 */
export interface GetRemindColorSelectResponse {
  code?: string
  data?: {
    /**
     * 颜色值下拉
     */
    colors?: {
      /**
       * 颜色编码
       */
      color?: string
      /**
       * 颜色文本
       */
      colorText?: string
    }[]
    /**
     * 触发动作下拉
     */
    triggerActionType?: {
      /**
       * 值
       */
      value?: number
      /**
       * 值的文本描述
       */
      valueText?: string
    }[]
    /**
     * 触发时机下拉
     */
    triggerType?: {
      /**
       * 值
       */
      value?: number
      /**
       * 值的文本描述
       */
      valueText?: string
    }[]
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询基本信息下拉 的 **请求配置的类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/select`
 */
type GetRemindColorSelectRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/color/select', undefined, string, string, true>
>

/**
 * 接口 查询基本信息下拉 的 **请求配置**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/select`
 */
const getRemindColorSelectRequestConfig: GetRemindColorSelectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_31,
  devUrl: devUrl_0_0_0_31,
  prodUrl: prodUrl_0_0_0_31,
  path: '/remind/color/select',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_31,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRemindColorSelect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询基本信息下拉 的 **请求函数**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/select`
 */
export const getRemindColorSelect = /*#__PURE__*/ (
  requestData?: GetRemindColorSelectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetRemindColorSelectResponse>(prepare(getRemindColorSelectRequestConfig, requestData), ...args)
}

getRemindColorSelect.requestConfig = getRemindColorSelectRequestConfig

/**
 * 接口 查询颜色配置 的 **请求类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/view`
 */
export interface GetRemindColorViewRequest {
  /**
   * 规则ID
   */
  ruleId?: string
}

/**
 * 接口 查询颜色配置 的 **返回类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/view`
 */
export interface GetRemindColorViewResponse {
  code?: string
  data?: {
    /**
     * 颜色配置信息
     */
    colorInfo?: {
      /**
       * 字段ID
       */
      columnId?: string
      /**
       * 字段名称
       */
      columnName?: string
      /**
       * 字段类型
       */
      fieldTypeId?: string
      /**
       * 颜色配置ID
       */
      id?: string
      /**
       * 配置项ID
       */
      itemId?: string
      /**
       * 判断字段值
       */
      judgeColumnValueJson?: {
        /**
         * 颜色
         */
        color?: string
        /**
         * 字段原始值
         */
        value?: string
        /**
         * 字段值中文描述
         */
        valueZhName?: string
      }[]
      /**
       * 修改字段
       */
      modifyColumn?: {
        /**
         * 字段ID
         */
        columnId?: string
        /**
         * 字段名称
         */
        columnName?: string
      }[]
      /**
       * 配置项是否为树形（0：非树形 1：树形）
       */
      tree?: string
    }[]
    remindRule?: {
      checkModelType?: number
      childFormName?: string
      childModelId?: string
      corpCode?: string
      createTime?: string
      creator?: number
      enable?: number
      formId?: string
      hasChild?: number
      id?: string
      issued?: boolean
      modelId?: string
      modifier?: number
      relationName?: string
      remindOnActionColumns?: {
        createTime?: string
        creator?: number
        formColumnCode?: string
        formColumnId?: string
        formColumnName?: string
        formColumnType?: number
        id?: string
        isDel?: number
        modifier?: number
        ruleId?: string
        updateTime?: string
      }[]
      ruleDescription?: string
      ruleName?: string
      runState?: number
      status?: number
      triggerActionType?: number
      triggerType?: number
      updateTime?: string
      warningLevelType?: number
    }
    /**
     * 规则ID
     */
    ruleId?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询颜色配置 的 **请求配置的类型**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/view`
 */
type GetRemindColorViewRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/remind/color/view', undefined, string, 'ruleId', false>
>

/**
 * 接口 查询颜色配置 的 **请求配置**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/view`
 */
const getRemindColorViewRequestConfig: GetRemindColorViewRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_31,
  devUrl: devUrl_0_0_0_31,
  prodUrl: prodUrl_0_0_0_31,
  path: '/remind/color/view',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_31,
  paramNames: [],
  queryNames: ['ruleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRemindColorView',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询颜色配置 的 **请求函数**
 *
 * @分类 【业务规则】颜色配置
 * @请求头 `GET /remind/color/view`
 */
export const getRemindColorView = /*#__PURE__*/ (
  requestData: GetRemindColorViewRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetRemindColorViewResponse>(prepare(getRemindColorViewRequestConfig, requestData), ...args)
}

getRemindColorView.requestConfig = getRemindColorViewRequestConfig

const mockUrl_0_0_0_32 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_32 = '' as any
const prodUrl_0_0_0_32 = '' as any
const dataKey_0_0_0_32 = undefined as any

/**
 * 接口 数据导入处理 的 **请求类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataImportHandle`
 */
export interface PostEventDataImportHandleRequest {
  /**
   * 路径名称
   */
  className?: string
  formId?: string
  id?: number
  projectId?: string
  rowIdBOS?: {
    formValueId?: string
    id?: number
  }[]
}

/**
 * 接口 数据导入处理 的 **返回类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataImportHandle`
 */
export interface PostEventDataImportHandleResponse {
  code?: string
  data?: {
    baseResult?: {
      code?: string
      data?: {}
      msg?: string
      resultNo?: string
      status?: boolean
    }
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 数据导入处理 的 **请求配置的类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataImportHandle`
 */
type PostEventDataImportHandleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/event/dataImportHandle', undefined, string, string, false>
>

/**
 * 接口 数据导入处理 的 **请求配置**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataImportHandle`
 */
const postEventDataImportHandleRequestConfig: PostEventDataImportHandleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_32,
  devUrl: devUrl_0_0_0_32,
  prodUrl: prodUrl_0_0_0_32,
  path: '/event/dataImportHandle',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_32,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postEventDataImportHandle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 数据导入处理 的 **请求函数**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataImportHandle`
 */
export const postEventDataImportHandle = /*#__PURE__*/ (
  requestData: PostEventDataImportHandleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostEventDataImportHandleResponse>(
    prepare(postEventDataImportHandleRequestConfig, requestData),
    ...args,
  )
}

postEventDataImportHandle.requestConfig = postEventDataImportHandleRequestConfig

/**
 * 接口 数据查询处理 的 **请求类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataQueryHandle`
 */
export interface PostEventDataQueryHandleRequest {
  /**
   * 路径名称
   */
  className?: string
  /**
   * 列表应用层入参DTO
   */
  dto?: {
    allProject?: number
    /**
     * 类路径
     */
    className?: string
    /**
     * 业务流数据过滤模型对应模板字段
     */
    columnMap?: {}
    /**
     * 前端要表单详情的字段列表的标识 0不需要 1需要
     */
    columnMapsFlag?: string
    /**
     * 当前页
     */
    current?: number
    dataQueryInterceptEventDTO?: {
      [k: string]: unknown
    }
    /**
     * 过滤查询条件
     */
    filterList?: {
      /**
       * 业务类型
       */
      businessType?: number
      /**
       * 子表模型id
       */
      childModelId?: string
      /**
       * 拼接好的字段，方便。例如table.name
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 业务模型字段的数据类型（拿过来不能编辑）
       */
      columnType?: string
      /**
       * 配置项id
       */
      configItemId?: string
      /**
       * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
       * 9人员10部门11配置项12地址13数组14关联15计算公式
       * 16引用17项目
       */
      controlType?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 区别手输、绑定列表id 1：手输 2：绑定列表id
       */
      formRelationStatus?: number
      id?: string
      isDel?: number
      /**
       * 模型ID
       */
      modelId?: string
      /**
       * 业务模型字段的注释（拿过来不能编辑）
       */
      name?: string
      /**
       * 查询条件设置
       */
      searchCondition?: string
      /**
       * 查询类型1模糊2精准3范围4精准(单)5精准(多)
       */
      searchType?: number
      /**
       * 下来查询数据源
       */
      source?: string
      tabId?: string
      /**
       * 标题，字段名称可编辑
       */
      title?: string
      /**
       * 0 是普通 1.是左侧树
       */
      treeType?: number
      /**
       * 1数据过滤,2是条件查询
       */
      type?: number
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 查询的值
       */
      value?: string
    }[]
    /**
     * 过滤查询条件
     */
    filterList_2?: {
      /**
       * 业务类型
       */
      businessType?: number
      /**
       * 子表模型id
       */
      childModelId?: string
      /**
       * 拼接好的字段，方便。例如table.name
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 业务模型字段的数据类型（拿过来不能编辑）
       */
      columnType?: string
      /**
       * 配置项id
       */
      configItemId?: string
      /**
       * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
       * 9人员10部门11配置项12地址13数组14关联15计算公式
       * 16引用17项目
       */
      controlType?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 区别手输、绑定列表id 1：手输 2：绑定列表id
       */
      formRelationStatus?: number
      id?: string
      isDel?: number
      /**
       * 模型ID
       */
      modelId?: string
      /**
       * 业务模型字段的注释（拿过来不能编辑）
       */
      name?: string
      /**
       * 查询条件设置
       */
      searchCondition?: string
      /**
       * 查询类型1模糊2精准3范围4精准(单)5精准(多)
       */
      searchType?: number
      /**
       * 下来查询数据源
       */
      source?: string
      tabId?: string
      /**
       * 标题，字段名称可编辑
       */
      title?: string
      /**
       * 0 是普通 1.是左侧树
       */
      treeType?: number
      /**
       * 1数据过滤,2是条件查询
       */
      type?: number
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 查询的值
       */
      value?: string
    }[][]
    flag?: string
    /**
     * 表单→关联列表控件→ 弹窗列表字段 的列表
     */
    formColumnIdList?: string[]
    /**
     * 查询条件列表
     */
    list?: {
      /**
       * 业务类型
       */
      businessType?: number
      /**
       * 子表模型id
       */
      childModelId?: string
      /**
       * 拼接好的字段，方便。例如table.name
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 业务模型字段的数据类型（拿过来不能编辑）
       */
      columnType?: string
      /**
       * 配置项id
       */
      configItemId?: string
      /**
       * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
       * 9人员10部门11配置项12地址13数组14关联15计算公式
       * 16引用17项目
       */
      controlType?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 区别手输、绑定列表id 1：手输 2：绑定列表id
       */
      formRelationStatus?: number
      id?: string
      isDel?: number
      /**
       * 模型ID
       */
      modelId?: string
      /**
       * 业务模型字段的注释（拿过来不能编辑）
       */
      name?: string
      /**
       * 查询条件设置
       */
      searchCondition?: string
      /**
       * 查询类型1模糊2精准3范围4精准(单)5精准(多)
       */
      searchType?: number
      /**
       * 下来查询数据源
       */
      source?: string
      tabId?: string
      /**
       * 标题，字段名称可编辑
       */
      title?: string
      /**
       * 0 是普通 1.是左侧树
       */
      treeType?: number
      /**
       * 1数据过滤,2是条件查询
       */
      type?: number
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 查询的值
       */
      value?: string
    }[]
    /**
     * 列表id
     */
    listMainId?: string
    /**
     * 主模型id
     */
    modelId?: string
    /**
     * 业务流下推数据过滤
     */
    primaryIdList?: number[]
    /**
     * 主键Key=value
     */
    primaryKey?: string
    /**
     * 项目id，子项目专用
     */
    projectId?: number
    projectIds?: string
    /**
     * 业务规则id
     */
    ruleId?: string
    /**
     * 业务流标记列表
     */
    signList?: number[]
    /**
     * 页面大小
     */
    size?: number
    /**
     * 按照列字段排序-列表要排序的字段编码
     */
    sortColumnCode?: string
    /**
     * 按照列字段排序-升序降序标识 升序：asc 降序：desc
     */
    sortType?: string
    subProjectColumnName?: string
    /**
     * 前端tab控件主键
     */
    tabTimestampId?: string
    /**
     * 使用类型 1列表应用层自身使用 2关联列表使用 3项目使用 4 5
     */
    useType?: string
    /**
     * 用户id，项目专用
     */
    userId?: number
  }
  /**
   * 总责任成本主表Id
   */
  id?: number
  /**
   * 主键id list
   */
  ids?: number[]
  /**
   * 项目名称
   */
  projectId?: number
  queryDataVO?: {
    /**
     * 指定类型 1 全部 2 指定层级 3 仅末级
     */
    checkNode?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 列表视图(0：普通表格 1：树形表格 2：左侧树形+普通表格)
     */
    listView?: number
    /**
     * 查询的结果集
     */
    map?: {}[]
    /**
     * 主表模型id
     */
    modelId?: string
    /**
     * 指定层级时的层级仅末级
     */
    nodeLevel?: number
    /**
     * 查询数据集总数
     */
    pageTotal?: number
    /**
     * 主键Key
     */
    primaryKey?: string
    /**
     * 主表code
     */
    primaryModelCode?: string
    /**
     * listMain tableConfig
     */
    tableConfig?: {}
  }
  result?: {
    code?: string
    data?: {}
    msg?: string
    resultNo?: string
    status?: boolean
  }
}

/**
 * 接口 数据查询处理 的 **返回类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataQueryHandle`
 */
export interface PostEventDataQueryHandleResponse {
  code?: string
  data?: {
    baseResult?: {
      code?: string
      data?: {}
      msg?: string
      resultNo?: string
      status?: boolean
    }
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 数据查询处理 的 **请求配置的类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataQueryHandle`
 */
type PostEventDataQueryHandleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/event/dataQueryHandle', undefined, string, string, false>
>

/**
 * 接口 数据查询处理 的 **请求配置**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataQueryHandle`
 */
const postEventDataQueryHandleRequestConfig: PostEventDataQueryHandleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_32,
  devUrl: devUrl_0_0_0_32,
  prodUrl: prodUrl_0_0_0_32,
  path: '/event/dataQueryHandle',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_32,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postEventDataQueryHandle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 数据查询处理 的 **请求函数**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataQueryHandle`
 */
export const postEventDataQueryHandle = /*#__PURE__*/ (
  requestData: PostEventDataQueryHandleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostEventDataQueryHandleResponse>(prepare(postEventDataQueryHandleRequestConfig, requestData), ...args)
}

postEventDataQueryHandle.requestConfig = postEventDataQueryHandleRequestConfig

/**
 * 接口 数据更新处理 的 **请求类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataUpdateHandle`
 */
export interface PostEventDataUpdateHandleRequest {
  /**
   * 路径名称
   */
  className?: string
  /**
   * 删除的id
   */
  delId?: number
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 当前选中id
   */
  idList?: number[]
  /**
   * 业务流规则id
   */
  ruleId?: string
}

/**
 * 接口 数据更新处理 的 **返回类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataUpdateHandle`
 */
export interface PostEventDataUpdateHandleResponse {
  code?: string
  data?: {
    baseResult?: {
      code?: string
      data?: {}
      msg?: string
      resultNo?: string
      status?: boolean
    }
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 数据更新处理 的 **请求配置的类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataUpdateHandle`
 */
type PostEventDataUpdateHandleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/event/dataUpdateHandle', undefined, string, string, false>
>

/**
 * 接口 数据更新处理 的 **请求配置**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataUpdateHandle`
 */
const postEventDataUpdateHandleRequestConfig: PostEventDataUpdateHandleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_32,
  devUrl: devUrl_0_0_0_32,
  prodUrl: prodUrl_0_0_0_32,
  path: '/event/dataUpdateHandle',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_32,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postEventDataUpdateHandle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 数据更新处理 的 **请求函数**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/dataUpdateHandle`
 */
export const postEventDataUpdateHandle = /*#__PURE__*/ (
  requestData: PostEventDataUpdateHandleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostEventDataUpdateHandleResponse>(
    prepare(postEventDataUpdateHandleRequestConfig, requestData),
    ...args,
  )
}

postEventDataUpdateHandle.requestConfig = postEventDataUpdateHandleRequestConfig

/**
 * 接口 弹框事件拦截 的 **请求类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/popupHandle`
 */
export interface PostEventPopupHandleRequest {
  /**
   * 路径名称
   */
  className?: string
  /**
   * 当前选中id
   */
  idList?: number[]
  /**
   * 需要更新字段
   */
  updateColumnId?: string
}

/**
 * 接口 弹框事件拦截 的 **返回类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/popupHandle`
 */
export interface PostEventPopupHandleResponse {
  code?: string
  data?: {
    baseResult?: {
      code?: string
      data?: {}
      msg?: string
      resultNo?: string
      status?: boolean
    }
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 弹框事件拦截 的 **请求配置的类型**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/popupHandle`
 */
type PostEventPopupHandleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/event/popupHandle', undefined, string, string, false>
>

/**
 * 接口 弹框事件拦截 的 **请求配置**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/popupHandle`
 */
const postEventPopupHandleRequestConfig: PostEventPopupHandleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_32,
  devUrl: devUrl_0_0_0_32,
  prodUrl: prodUrl_0_0_0_32,
  path: '/event/popupHandle',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_32,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postEventPopupHandle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 弹框事件拦截 的 **请求函数**
 *
 * @分类 【二开功能】
 * @请求头 `POST /event/popupHandle`
 */
export const postEventPopupHandle = /*#__PURE__*/ (
  requestData: PostEventPopupHandleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostEventPopupHandleResponse>(prepare(postEventPopupHandleRequestConfig, requestData), ...args)
}

postEventPopupHandle.requestConfig = postEventPopupHandleRequestConfig

const mockUrl_0_0_0_33 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_33 = '' as any
const prodUrl_0_0_0_33 = '' as any
const dataKey_0_0_0_33 = undefined as any

/**
 * 接口 业务流消息查询 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQuery`
 */
export interface GetBusinessDesignBusinessNewsQueryRequest {
  /**
   * businessTaskId
   */
  businessTaskId?: string
}

/**
 * 接口 业务流消息查询 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQuery`
 */
export interface GetBusinessDesignBusinessNewsQueryResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 业务流消息查询 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQuery`
 */
type GetBusinessDesignBusinessNewsQueryRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessNewsQuery',
    undefined,
    string,
    'businessTaskId',
    false
  >
>

/**
 * 接口 业务流消息查询 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQuery`
 */
const getBusinessDesignBusinessNewsQueryRequestConfig: GetBusinessDesignBusinessNewsQueryRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_33,
  devUrl: devUrl_0_0_0_33,
  prodUrl: prodUrl_0_0_0_33,
  path: '/business/design/businessNewsQuery',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_33,
  paramNames: [],
  queryNames: ['businessTaskId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignBusinessNewsQuery',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 业务流消息查询 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQuery`
 */
export const getBusinessDesignBusinessNewsQuery = /*#__PURE__*/ (
  requestData: GetBusinessDesignBusinessNewsQueryRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignBusinessNewsQueryResponse>(
    prepare(getBusinessDesignBusinessNewsQueryRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignBusinessNewsQuery.requestConfig = getBusinessDesignBusinessNewsQueryRequestConfig

/**
 * 接口 业务流消息查询 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQueryStatus`
 */
export interface GetBusinessDesignBusinessNewsQueryStatusRequest {
  /**
   * businessTaskId
   */
  businessTaskId?: string
}

/**
 * 接口 业务流消息查询 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQueryStatus`
 */
export interface GetBusinessDesignBusinessNewsQueryStatusResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 业务流消息查询 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQueryStatus`
 */
type GetBusinessDesignBusinessNewsQueryStatusRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessNewsQueryStatus',
    undefined,
    string,
    'businessTaskId',
    false
  >
>

/**
 * 接口 业务流消息查询 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQueryStatus`
 */
const getBusinessDesignBusinessNewsQueryStatusRequestConfig: GetBusinessDesignBusinessNewsQueryStatusRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_33,
    devUrl: devUrl_0_0_0_33,
    prodUrl: prodUrl_0_0_0_33,
    path: '/business/design/businessNewsQueryStatus',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_33,
    paramNames: [],
    queryNames: ['businessTaskId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getBusinessDesignBusinessNewsQueryStatus',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 业务流消息查询 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/businessNewsQueryStatus`
 */
export const getBusinessDesignBusinessNewsQueryStatus = /*#__PURE__*/ (
  requestData: GetBusinessDesignBusinessNewsQueryStatusRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignBusinessNewsQueryStatusResponse>(
    prepare(getBusinessDesignBusinessNewsQueryStatusRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignBusinessNewsQueryStatus.requestConfig = getBusinessDesignBusinessNewsQueryStatusRequestConfig

/**
 * 接口 获得目标表单绑定的流程 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryFormProcess`
 */
export interface PostBusinessDesignBusinessQueryFormProcessRequest {
  /**
   * 自动触发标识 1:字段失焦自动触发
   */
  autoFlag?: string
  /**
   * 基础信息id
   */
  billRuleId?: string
  /**
   * 子表模型id
   */
  childId?: string
  /**
   * 主子表下推
   */
  childs?: {
    /**
     * 子表模型id
     */
    childId?: string
    /**
     * 子表数组
     */
    childIdList?: number[]
    /**
     * 主表id
     */
    id?: number
    /**
     * 主表模型id
     */
    mainId?: string
  }[]
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 是否校验重复
   */
  isCheckData?: boolean
  /**
   * 主子表中子表是否有数据  默认有数据
   */
  isChilds?: boolean
  /**
   * 列表id
   */
  listId?: string
  /**
   * 主表模型id
   */
  mainId?: string
  /**
   * 主键id
   */
  mdbIds?: number[]
  /**
   * 下推类型  1、列表下推到消息 2、工作流结束下推（自动下推）
   */
  pushDownType?: string
  /**
   * 目标表单id
   */
  targetFormId?: string
  /**
   * 用户id
   */
  userIds?: number[]
  userInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
  zzid?: {}
}

/**
 * 接口 获得目标表单绑定的流程 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryFormProcess`
 */
export interface PostBusinessDesignBusinessQueryFormProcessResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获得目标表单绑定的流程 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryFormProcess`
 */
type PostBusinessDesignBusinessQueryFormProcessRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessQueryFormProcess',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 获得目标表单绑定的流程 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryFormProcess`
 */
const postBusinessDesignBusinessQueryFormProcessRequestConfig: PostBusinessDesignBusinessQueryFormProcessRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_33,
    devUrl: devUrl_0_0_0_33,
    prodUrl: prodUrl_0_0_0_33,
    path: '/business/design/businessQueryFormProcess',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_33,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postBusinessDesignBusinessQueryFormProcess',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获得目标表单绑定的流程 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryFormProcess`
 */
export const postBusinessDesignBusinessQueryFormProcess = /*#__PURE__*/ (
  requestData: PostBusinessDesignBusinessQueryFormProcessRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignBusinessQueryFormProcessResponse>(
    prepare(postBusinessDesignBusinessQueryFormProcessRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignBusinessQueryFormProcess.requestConfig = postBusinessDesignBusinessQueryFormProcessRequestConfig

/**
 * 接口 获得规则信息根据列表 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryRuleInfoList`
 */
export interface PostBusinessDesignBusinessQueryRuleInfoListRequest {
  /**
   * 自动触发标识 1:字段失焦自动触发
   */
  autoFlag?: string
  /**
   * 基础信息id
   */
  billRuleId?: string
  /**
   * 子表模型id
   */
  childId?: string
  /**
   * 主子表下推
   */
  childs?: {
    /**
     * 子表模型id
     */
    childId?: string
    /**
     * 子表数组
     */
    childIdList?: number[]
    /**
     * 主表id
     */
    id?: number
    /**
     * 主表模型id
     */
    mainId?: string
  }[]
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  formJsonDTO?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 主键id
   */
  ids?: string[]
  /**
   * 是否校验重复
   */
  isCheckData?: boolean
  /**
   * 主子表中子表是否有数据  默认有数据
   */
  isChilds?: boolean
  /**
   * 列表id
   */
  listId?: string
  /**
   * 主表模型id
   */
  mainId?: string
  /**
   * 主键id
   */
  mdbIds?: number[]
  /**
   * 下推类型  1、列表下推到消息 2、工作流结束下推（自动下推）
   */
  pushDownType?: string
  /**
   * 目标表单id
   */
  targetFormId?: string
  /**
   * 用户id
   */
  userIds?: number[]
  userInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
  zzid?: {}
}

/**
 * 接口 获得规则信息根据列表 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryRuleInfoList`
 */
export interface PostBusinessDesignBusinessQueryRuleInfoListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获得规则信息根据列表 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryRuleInfoList`
 */
type PostBusinessDesignBusinessQueryRuleInfoListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/businessQueryRuleInfoList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 获得规则信息根据列表 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryRuleInfoList`
 */
const postBusinessDesignBusinessQueryRuleInfoListRequestConfig: PostBusinessDesignBusinessQueryRuleInfoListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_33,
    devUrl: devUrl_0_0_0_33,
    prodUrl: prodUrl_0_0_0_33,
    path: '/business/design/businessQueryRuleInfoList',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_33,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postBusinessDesignBusinessQueryRuleInfoList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获得规则信息根据列表 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `POST /business/design/businessQueryRuleInfoList`
 */
export const postBusinessDesignBusinessQueryRuleInfoList = /*#__PURE__*/ (
  requestData: PostBusinessDesignBusinessQueryRuleInfoListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostBusinessDesignBusinessQueryRuleInfoListResponse>(
    prepare(postBusinessDesignBusinessQueryRuleInfoListRequestConfig, requestData),
    ...args,
  )
}

postBusinessDesignBusinessQueryRuleInfoList.requestConfig = postBusinessDesignBusinessQueryRuleInfoListRequestConfig

/**
 * 接口 获取下拉表单字段信息 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormId`
 */
export interface GetBusinessDesignFormListByFormIdRequest {
  /**
   * ruleId
   */
  ruleId?: string
}

/**
 * 接口 获取下拉表单字段信息 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormId`
 */
export interface GetBusinessDesignFormListByFormIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取下拉表单字段信息 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormId`
 */
type GetBusinessDesignFormListByFormIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/formListByFormId',
    undefined,
    string,
    'ruleId',
    false
  >
>

/**
 * 接口 获取下拉表单字段信息 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormId`
 */
const getBusinessDesignFormListByFormIdRequestConfig: GetBusinessDesignFormListByFormIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_33,
  devUrl: devUrl_0_0_0_33,
  prodUrl: prodUrl_0_0_0_33,
  path: '/business/design/formListByFormId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_33,
  paramNames: [],
  queryNames: ['ruleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignFormListByFormId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取下拉表单字段信息 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormId`
 */
export const getBusinessDesignFormListByFormId = /*#__PURE__*/ (
  requestData: GetBusinessDesignFormListByFormIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignFormListByFormIdResponse>(
    prepare(getBusinessDesignFormListByFormIdRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignFormListByFormId.requestConfig = getBusinessDesignFormListByFormIdRequestConfig

/**
 * 接口 获取下拉表单字段信息 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormIdDistribute`
 */
export interface GetBusinessDesignFormListByFormIdDistributeRequest {
  /**
   * distribute
   */
  distribute?: string
  /**
   * ruleId
   */
  ruleId?: string
}

/**
 * 接口 获取下拉表单字段信息 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormIdDistribute`
 */
export interface GetBusinessDesignFormListByFormIdDistributeResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取下拉表单字段信息 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormIdDistribute`
 */
type GetBusinessDesignFormListByFormIdDistributeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/formListByFormIdDistribute',
    undefined,
    string,
    'distribute' | 'ruleId',
    false
  >
>

/**
 * 接口 获取下拉表单字段信息 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormIdDistribute`
 */
const getBusinessDesignFormListByFormIdDistributeRequestConfig: GetBusinessDesignFormListByFormIdDistributeRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_33,
    devUrl: devUrl_0_0_0_33,
    prodUrl: prodUrl_0_0_0_33,
    path: '/business/design/formListByFormIdDistribute',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_33,
    paramNames: [],
    queryNames: ['distribute', 'ruleId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getBusinessDesignFormListByFormIdDistribute',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获取下拉表单字段信息 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/formListByFormIdDistribute`
 */
export const getBusinessDesignFormListByFormIdDistribute = /*#__PURE__*/ (
  requestData: GetBusinessDesignFormListByFormIdDistributeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignFormListByFormIdDistributeResponse>(
    prepare(getBusinessDesignFormListByFormIdDistributeRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignFormListByFormIdDistribute.requestConfig = getBusinessDesignFormListByFormIdDistributeRequestConfig

/**
 * 接口 基本信息下拉列表列表接口 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/listByOriginFormId`
 */
export interface GetBusinessDesignListByOriginFormIdRequest {
  /**
   * originFormId
   */
  originFormId?: string
}

/**
 * 接口 基本信息下拉列表列表接口 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/listByOriginFormId`
 */
export interface GetBusinessDesignListByOriginFormIdResponse {
  /**
   * 列表主键id
   */
  id?: string
  /**
   * 列表名称
   */
  name?: string
}

/**
 * 接口 基本信息下拉列表列表接口 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/listByOriginFormId`
 */
type GetBusinessDesignListByOriginFormIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/listByOriginFormId',
    undefined,
    string,
    'originFormId',
    false
  >
>

/**
 * 接口 基本信息下拉列表列表接口 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/listByOriginFormId`
 */
const getBusinessDesignListByOriginFormIdRequestConfig: GetBusinessDesignListByOriginFormIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_33,
    devUrl: devUrl_0_0_0_33,
    prodUrl: prodUrl_0_0_0_33,
    path: '/business/design/listByOriginFormId',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_33,
    paramNames: [],
    queryNames: ['originFormId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getBusinessDesignListByOriginFormId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 基本信息下拉列表列表接口 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/listByOriginFormId`
 */
export const getBusinessDesignListByOriginFormId = /*#__PURE__*/ (
  requestData: GetBusinessDesignListByOriginFormIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignListByOriginFormIdResponse>(
    prepare(getBusinessDesignListByOriginFormIdRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignListByOriginFormId.requestConfig = getBusinessDesignListByOriginFormIdRequestConfig

/**
 * 接口 根据表单id查询表单内的所有模型信息 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/modelListByFormId`
 */
export interface GetBusinessDesignModelListByFormIdRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 根据表单id查询表单内的所有模型信息 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/modelListByFormId`
 */
export interface GetBusinessDesignModelListByFormIdResponse {
  /**
   * 主键id
   */
  id?: string
  /**
   * 模型code
   */
  modelCode?: string
  /**
   * 模型名称
   */
  modelName?: string
  /**
   * 1.主模型 2.子模型
   */
  modelType?: number
}

/**
 * 接口 根据表单id查询表单内的所有模型信息 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/modelListByFormId`
 */
type GetBusinessDesignModelListByFormIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/modelListByFormId',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 根据表单id查询表单内的所有模型信息 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/modelListByFormId`
 */
const getBusinessDesignModelListByFormIdRequestConfig: GetBusinessDesignModelListByFormIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_33,
  devUrl: devUrl_0_0_0_33,
  prodUrl: prodUrl_0_0_0_33,
  path: '/business/design/modelListByFormId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_33,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignModelListByFormId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据表单id查询表单内的所有模型信息 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/modelListByFormId`
 */
export const getBusinessDesignModelListByFormId = /*#__PURE__*/ (
  requestData: GetBusinessDesignModelListByFormIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignModelListByFormIdResponse>(
    prepare(getBusinessDesignModelListByFormIdRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignModelListByFormId.requestConfig = getBusinessDesignModelListByFormIdRequestConfig

/**
 * 接口 复制表单下拉 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/obtainFormByRuleId`
 */
export interface GetBusinessDesignObtainFormByRuleIdRequest {
  /**
   * ruleId
   */
  ruleId?: string
}

/**
 * 接口 复制表单下拉 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/obtainFormByRuleId`
 */
export interface GetBusinessDesignObtainFormByRuleIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 复制表单下拉 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/obtainFormByRuleId`
 */
type GetBusinessDesignObtainFormByRuleIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/obtainFormByRuleId',
    undefined,
    string,
    'ruleId',
    false
  >
>

/**
 * 接口 复制表单下拉 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/obtainFormByRuleId`
 */
const getBusinessDesignObtainFormByRuleIdRequestConfig: GetBusinessDesignObtainFormByRuleIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_33,
    devUrl: devUrl_0_0_0_33,
    prodUrl: prodUrl_0_0_0_33,
    path: '/business/design/obtainFormByRuleId',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_33,
    paramNames: [],
    queryNames: ['ruleId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getBusinessDesignObtainFormByRuleId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 复制表单下拉 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/obtainFormByRuleId`
 */
export const getBusinessDesignObtainFormByRuleId = /*#__PURE__*/ (
  requestData: GetBusinessDesignObtainFormByRuleIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignObtainFormByRuleIdResponse>(
    prepare(getBusinessDesignObtainFormByRuleIdRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignObtainFormByRuleId.requestConfig = getBusinessDesignObtainFormByRuleIdRequestConfig

/**
 * 接口 分单依据字段下拉列表 的 **请求类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/separateBasisList`
 */
export interface GetBusinessDesignSeparateBasisListRequest {
  /**
   * billRuleId
   */
  billRuleId?: string
}

/**
 * 接口 分单依据字段下拉列表 的 **返回类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/separateBasisList`
 */
export interface GetBusinessDesignSeparateBasisListResponse {
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 字段中文
   */
  columnName?: string
}

/**
 * 接口 分单依据字段下拉列表 的 **请求配置的类型**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/separateBasisList`
 */
type GetBusinessDesignSeparateBasisListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/business/design/separateBasisList',
    undefined,
    string,
    'billRuleId',
    false
  >
>

/**
 * 接口 分单依据字段下拉列表 的 **请求配置**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/separateBasisList`
 */
const getBusinessDesignSeparateBasisListRequestConfig: GetBusinessDesignSeparateBasisListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_33,
  devUrl: devUrl_0_0_0_33,
  prodUrl: prodUrl_0_0_0_33,
  path: '/business/design/separateBasisList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_33,
  paramNames: [],
  queryNames: ['billRuleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBusinessDesignSeparateBasisList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分单依据字段下拉列表 的 **请求函数**
 *
 * @分类 A业务流调用接口
 * @请求头 `GET /business/design/separateBasisList`
 */
export const getBusinessDesignSeparateBasisList = /*#__PURE__*/ (
  requestData: GetBusinessDesignSeparateBasisListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetBusinessDesignSeparateBasisListResponse>(
    prepare(getBusinessDesignSeparateBasisListRequestConfig, requestData),
    ...args,
  )
}

getBusinessDesignSeparateBasisList.requestConfig = getBusinessDesignSeparateBasisListRequestConfig

const mockUrl_0_0_0_34 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_34 = '' as any
const prodUrl_0_0_0_34 = '' as any
const dataKey_0_0_0_34 = undefined as any

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/delete`
 */
export interface PostCloudStorageAttachmentDeleteRequest {
  /**
   * 文件ids
   */
  ids?: number[]
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/delete`
 */
export interface PostCloudStorageAttachmentDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/delete`
 */
type PostCloudStorageAttachmentDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/delete`
 */
const postCloudStorageAttachmentDeleteRequestConfig: PostCloudStorageAttachmentDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_34,
  devUrl: devUrl_0_0_0_34,
  prodUrl: prodUrl_0_0_0_34,
  path: '/cloudStorageAttachment/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_34,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageAttachmentDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/delete`
 */
export const postCloudStorageAttachmentDelete = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentDeleteResponse>(
    prepare(postCloudStorageAttachmentDeleteRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentDelete.requestConfig = postCloudStorageAttachmentDeleteRequestConfig

/**
 * 接口 删除记录 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/deleteRecord`
 */
export interface PostCloudStorageAttachmentDeleteRecordRequest {
  /**
   * 传输记录id
   */
  ids?: number[]
}

/**
 * 接口 删除记录 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/deleteRecord`
 */
export interface PostCloudStorageAttachmentDeleteRecordResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除记录 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/deleteRecord`
 */
type PostCloudStorageAttachmentDeleteRecordRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/deleteRecord',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 删除记录 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/deleteRecord`
 */
const postCloudStorageAttachmentDeleteRecordRequestConfig: PostCloudStorageAttachmentDeleteRecordRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_34,
    devUrl: devUrl_0_0_0_34,
    prodUrl: prodUrl_0_0_0_34,
    path: '/cloudStorageAttachment/deleteRecord',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_34,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postCloudStorageAttachmentDeleteRecord',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 删除记录 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/deleteRecord`
 */
export const postCloudStorageAttachmentDeleteRecord = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentDeleteRecordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentDeleteRecordResponse>(
    prepare(postCloudStorageAttachmentDeleteRecordRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentDeleteRecord.requestConfig = postCloudStorageAttachmentDeleteRecordRequestConfig

/**
 * 接口 下载文件 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/download`
 */
export interface PostCloudStorageAttachmentDownloadRequest {
  /**
   * 文件id
   */
  id?: number
}

/**
 * 接口 下载文件 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/download`
 */
export interface PostCloudStorageAttachmentDownloadResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 下载文件 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/download`
 */
type PostCloudStorageAttachmentDownloadRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/download',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 下载文件 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/download`
 */
const postCloudStorageAttachmentDownloadRequestConfig: PostCloudStorageAttachmentDownloadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_34,
  devUrl: devUrl_0_0_0_34,
  prodUrl: prodUrl_0_0_0_34,
  path: '/cloudStorageAttachment/download',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_34,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageAttachmentDownload',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 下载文件 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/download`
 */
export const postCloudStorageAttachmentDownload = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentDownloadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentDownloadResponse>(
    prepare(postCloudStorageAttachmentDownloadRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentDownload.requestConfig = postCloudStorageAttachmentDownloadRequestConfig

/**
 * 接口 根据记录id查询文件信息 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getAttachmentByRecordId`
 */
export interface GetCloudStorageAttachmentGetAttachmentByRecordIdRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 根据记录id查询文件信息 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getAttachmentByRecordId`
 */
export interface GetCloudStorageAttachmentGetAttachmentByRecordIdResponse {
  code?: string
  data?: {
    createTime?: string
    creator?: number
    /**
     * 文件名称
     */
    fileName?: string
    /**
     * 文件大小 （b）
     */
    fileSize?: number
    /**
     * 文件类型
     */
    fileType?: string
    /**
     * 文件存储路径
     */
    fileUrl?: string
    /**
     * 云盘文件夹id
     */
    folderId?: number
    /**
     * 权限组类型 1-可管理所有权限 2-可上传/下载/查看 3-可查看/下载 4-仅可查看
     */
    groupType?: number
    /**
     * 云盘文件id
     */
    id?: number
    isDel?: number
    modifier?: number
    /**
     * 项目id
     */
    projectId?: number
    /**
     * 真实文件类型
     */
    realFileType?: string
    /**
     * 缩略图url
     */
    thumbnailUrl?: string
    /**
     * 目录类型 1-企业云盘 2-项目云盘
     */
    type?: number
    updateTime?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据记录id查询文件信息 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getAttachmentByRecordId`
 */
type GetCloudStorageAttachmentGetAttachmentByRecordIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/getAttachmentByRecordId',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 根据记录id查询文件信息 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getAttachmentByRecordId`
 */
const getCloudStorageAttachmentGetAttachmentByRecordIdRequestConfig: GetCloudStorageAttachmentGetAttachmentByRecordIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_34,
    devUrl: devUrl_0_0_0_34,
    prodUrl: prodUrl_0_0_0_34,
    path: '/cloudStorageAttachment/getAttachmentByRecordId',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_34,
    paramNames: [],
    queryNames: ['id'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getCloudStorageAttachmentGetAttachmentByRecordId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 根据记录id查询文件信息 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getAttachmentByRecordId`
 */
export const getCloudStorageAttachmentGetAttachmentByRecordId = /*#__PURE__*/ (
  requestData: GetCloudStorageAttachmentGetAttachmentByRecordIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageAttachmentGetAttachmentByRecordIdResponse>(
    prepare(getCloudStorageAttachmentGetAttachmentByRecordIdRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageAttachmentGetAttachmentByRecordId.requestConfig =
  getCloudStorageAttachmentGetAttachmentByRecordIdRequestConfig

/**
 * 接口 查询文件路径 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getFolderUrl`
 */
export interface GetCloudStorageAttachmentGetFolderUrlRequest {
  /**
   * id
   */
  id?: string
  /**
   * type
   */
  type: string
}

/**
 * 接口 查询文件路径 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getFolderUrl`
 */
export interface GetCloudStorageAttachmentGetFolderUrlResponse {
  code?: string
  data?: {
    /**
     * 文件夹唯一code （4位一级）
     */
    code?: string
    /**
     * 文件夹名称
     */
    folderName?: string
    /**
     * 文件夹类型 0-系统文件夹 1-文件夹 2-表单文件夹
     */
    folderType?: number
    /**
     * 主键
     */
    id?: number
    /**
     * 排序字段
     */
    sort?: number
    /**
     * 目录类型 1-企业云盘目录 2-项目云盘目录
     */
    type?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询文件路径 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getFolderUrl`
 */
type GetCloudStorageAttachmentGetFolderUrlRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/getFolderUrl',
    undefined,
    string,
    'id' | 'type',
    false
  >
>

/**
 * 接口 查询文件路径 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getFolderUrl`
 */
const getCloudStorageAttachmentGetFolderUrlRequestConfig: GetCloudStorageAttachmentGetFolderUrlRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_34,
    devUrl: devUrl_0_0_0_34,
    prodUrl: prodUrl_0_0_0_34,
    path: '/cloudStorageAttachment/getFolderUrl',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_34,
    paramNames: [],
    queryNames: ['id', 'type'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getCloudStorageAttachmentGetFolderUrl',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 查询文件路径 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getFolderUrl`
 */
export const getCloudStorageAttachmentGetFolderUrl = /*#__PURE__*/ (
  requestData: GetCloudStorageAttachmentGetFolderUrlRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageAttachmentGetFolderUrlResponse>(
    prepare(getCloudStorageAttachmentGetFolderUrlRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageAttachmentGetFolderUrl.requestConfig = getCloudStorageAttachmentGetFolderUrlRequestConfig

/**
 * 接口 查询云盘文件 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/getList`
 */
export interface PostCloudStorageAttachmentGetListRequest {
  /**
   * 搜索内容
   */
  content?: string
  /**
   * 文件夹id
   */
  folderId?: number
  /**
   * 项目id
   */
  projectId?: number
  /**
   * 搜索范围 0-全部 1-当前文件夹
   */
  searchRange?: number
  sortField?: {
    /**
     * 排序字段 name-名称 updateTime-修改时间 type-类型 fileSize-大小
     */
    field?: string
    /**
     * 排序顺序 0-默认 1-正序 2-倒序
     */
    sort?: number
  }
  /**
   * 目录类型 1-企业云盘 2-项目云盘
   */
  type?: number
}

/**
 * 接口 查询云盘文件 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/getList`
 */
export interface PostCloudStorageAttachmentGetListResponse {
  code?: string
  data?: {
    /**
     * 云盘文件
     */
    attachments?: {
      /**
       * 文件的文件夹
       */
      fileFolders?: {
        /**
         * 编码
         */
        code?: string
        /**
         * 文件夹名称
         */
        folderName?: string
        /**
         * 文件夹id
         */
        id?: number
        /**
         * 目录类型 1-企业云盘目录 2-项目云盘目录
         */
        type?: number
      }[]
      /**
       * 文件大小 （b）
       */
      fileSize?: number
      /**
       * 文件存储路径
       */
      fileUrl?: string
      /**
       * 主键 文件夹是文件夹id，文件是文件的id
       */
      id?: number
      /**
       * 是否文件夹
       */
      isFolder?: boolean
      /**
       * 名称
       */
      name?: string
      /**
       * 项目id
       */
      projectId?: number
      /**
       * 真实文件类型
       */
      realFileType?: string
      /**
       * 缩略图url
       */
      thumbnailUrl?: string
      /**
       * 类型 PROJECT-项目 FOLDER_FORM-表单文件夹 FOLDER-文件夹 PDF EXCEL……
       */
      type?: string
      /**
       * 类型名称
       */
      typeName?: string
      /**
       * 修改时间
       */
      updateTime?: string
    }[]
    /**
     * 权限组类型 1-可管理所有权限 2-可上传/下载/查看 3-可查看/下载 4-仅可查看
     */
    groupType?: number
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询云盘文件 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/getList`
 */
type PostCloudStorageAttachmentGetListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/getList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 查询云盘文件 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/getList`
 */
const postCloudStorageAttachmentGetListRequestConfig: PostCloudStorageAttachmentGetListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_34,
  devUrl: devUrl_0_0_0_34,
  prodUrl: prodUrl_0_0_0_34,
  path: '/cloudStorageAttachment/getList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_34,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageAttachmentGetList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询云盘文件 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/getList`
 */
export const postCloudStorageAttachmentGetList = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentGetListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentGetListResponse>(
    prepare(postCloudStorageAttachmentGetListRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentGetList.requestConfig = postCloudStorageAttachmentGetListRequestConfig

/**
 * 接口 移动的文件夹列表 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getMoveFolderList`
 */
export interface GetCloudStorageAttachmentGetMoveFolderListRequest {
  /**
   * 目录code 不传默认查根目录
   */
  code?: string
  /**
   * 目录类型 1-企业云盘 2-项目云盘
   */
  type: string
  /**
   * content
   */
  content?: string
}

/**
 * 接口 移动的文件夹列表 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getMoveFolderList`
 */
export interface GetCloudStorageAttachmentGetMoveFolderListResponse {
  code?: string
  data?: {
    /**
     * 层级code
     */
    code?: string
    /**
     * 文件夹名称
     */
    folderName?: string
    /**
     * 文件夹类型 0-系统文件夹 1-文件夹 2-表单文件夹
     */
    folderType?: number
    /**
     * 权限组类型 1-可管理所有权限 2-可上传/下载/查看 3-可查看/下载 4-仅可查看
     */
    groupType?: number
    /**
     * 主键
     */
    id?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 移动的文件夹列表 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getMoveFolderList`
 */
type GetCloudStorageAttachmentGetMoveFolderListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/getMoveFolderList',
    undefined,
    string,
    'code' | 'type' | 'content',
    false
  >
>

/**
 * 接口 移动的文件夹列表 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getMoveFolderList`
 */
const getCloudStorageAttachmentGetMoveFolderListRequestConfig: GetCloudStorageAttachmentGetMoveFolderListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_34,
    devUrl: devUrl_0_0_0_34,
    prodUrl: prodUrl_0_0_0_34,
    path: '/cloudStorageAttachment/getMoveFolderList',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_34,
    paramNames: [],
    queryNames: ['code', 'type', 'content'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getCloudStorageAttachmentGetMoveFolderList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 移动的文件夹列表 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getMoveFolderList`
 */
export const getCloudStorageAttachmentGetMoveFolderList = /*#__PURE__*/ (
  requestData: GetCloudStorageAttachmentGetMoveFolderListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageAttachmentGetMoveFolderListResponse>(
    prepare(getCloudStorageAttachmentGetMoveFolderListRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageAttachmentGetMoveFolderList.requestConfig = getCloudStorageAttachmentGetMoveFolderListRequestConfig

/**
 * 接口 传输列表 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getTransferList`
 */
export interface GetCloudStorageAttachmentGetTransferListRequest {
  /**
   * projectId
   */
  projectId?: string
}

/**
 * 接口 传输列表 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getTransferList`
 */
export interface GetCloudStorageAttachmentGetTransferListResponse {
  code?: string
  data?: {
    /**
     * 文件id
     */
    attachmentId?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 方向 0-下载 1-上传
     */
    direction?: number
    /**
     * 文件名称
     */
    fileName?: string
    /**
     * 文件大小 （b）
     */
    fileSize?: number
    /**
     * 文件类型
     */
    fileType?: string
    /**
     * 文件存储路径
     */
    fileUrl?: string
    /**
     * 云盘文件夹id
     */
    folderId?: number
    /**
     * 主键
     */
    id?: number
    /**
     * 文件是否删除
     */
    isDel?: boolean
    /**
     * 项目id
     */
    projectId?: number
    /**
     * 真实文件类型
     */
    realFileType?: string
    /**
     * 缩略图url
     */
    thumbnailUrl?: string
    /**
     * 目录类型 1-企业云盘 2-项目云盘
     */
    type?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 传输列表 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getTransferList`
 */
type GetCloudStorageAttachmentGetTransferListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/getTransferList',
    undefined,
    string,
    'projectId',
    false
  >
>

/**
 * 接口 传输列表 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getTransferList`
 */
const getCloudStorageAttachmentGetTransferListRequestConfig: GetCloudStorageAttachmentGetTransferListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_34,
    devUrl: devUrl_0_0_0_34,
    prodUrl: prodUrl_0_0_0_34,
    path: '/cloudStorageAttachment/getTransferList',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_34,
    paramNames: [],
    queryNames: ['projectId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getCloudStorageAttachmentGetTransferList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 传输列表 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `GET /cloudStorageAttachment/getTransferList`
 */
export const getCloudStorageAttachmentGetTransferList = /*#__PURE__*/ (
  requestData: GetCloudStorageAttachmentGetTransferListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageAttachmentGetTransferListResponse>(
    prepare(getCloudStorageAttachmentGetTransferListRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageAttachmentGetTransferList.requestConfig = getCloudStorageAttachmentGetTransferListRequestConfig

/**
 * 接口 移动 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/move`
 */
export interface PostCloudStorageAttachmentMoveRequest {
  /**
   * 云盘文件夹id
   */
  folderId?: number
  /**
   * 文件ids
   */
  ids?: number[]
}

/**
 * 接口 移动 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/move`
 */
export interface PostCloudStorageAttachmentMoveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 移动 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/move`
 */
type PostCloudStorageAttachmentMoveRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/move',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 移动 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/move`
 */
const postCloudStorageAttachmentMoveRequestConfig: PostCloudStorageAttachmentMoveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_34,
  devUrl: devUrl_0_0_0_34,
  prodUrl: prodUrl_0_0_0_34,
  path: '/cloudStorageAttachment/move',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_34,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageAttachmentMove',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 移动 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/move`
 */
export const postCloudStorageAttachmentMove = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentMoveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentMoveResponse>(
    prepare(postCloudStorageAttachmentMoveRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentMove.requestConfig = postCloudStorageAttachmentMoveRequestConfig

/**
 * 接口 重命名 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/rename`
 */
export interface PostCloudStorageAttachmentRenameRequest {
  /**
   * 文件id
   */
  id?: number
  /**
   * 新的文件名称
   */
  name?: string
}

/**
 * 接口 重命名 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/rename`
 */
export interface PostCloudStorageAttachmentRenameResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 重命名 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/rename`
 */
type PostCloudStorageAttachmentRenameRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/rename',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 重命名 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/rename`
 */
const postCloudStorageAttachmentRenameRequestConfig: PostCloudStorageAttachmentRenameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_34,
  devUrl: devUrl_0_0_0_34,
  prodUrl: prodUrl_0_0_0_34,
  path: '/cloudStorageAttachment/rename',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_34,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageAttachmentRename',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 重命名 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/rename`
 */
export const postCloudStorageAttachmentRename = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentRenameRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentRenameResponse>(
    prepare(postCloudStorageAttachmentRenameRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentRename.requestConfig = postCloudStorageAttachmentRenameRequestConfig

/**
 * 接口 上传文件 的 **请求类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/upload`
 */
export interface PostCloudStorageAttachmentUploadRequest {
  /**
   * 文件名称
   */
  fileName?: string
  /**
   * 文件大小 （b）
   */
  fileSize?: number
  /**
   * 文件类型
   */
  fileType?: string
  /**
   * 文件存储路径
   */
  fileUrl?: string
  /**
   * 云盘文件夹id
   */
  folderId?: number
  /**
   * 项目id
   */
  projectId?: string
  /**
   * 真实文件类型
   */
  realFileType?: string
  /**
   * 缩略图url
   */
  thumbnailUrl?: string
  /**
   * 目录类型 1-企业云盘 2-项目云盘
   */
  type?: number
}

/**
 * 接口 上传文件 的 **返回类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/upload`
 */
export interface PostCloudStorageAttachmentUploadResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 上传文件 的 **请求配置的类型**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/upload`
 */
type PostCloudStorageAttachmentUploadRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageAttachment/upload',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 上传文件 的 **请求配置**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/upload`
 */
const postCloudStorageAttachmentUploadRequestConfig: PostCloudStorageAttachmentUploadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_34,
  devUrl: devUrl_0_0_0_34,
  prodUrl: prodUrl_0_0_0_34,
  path: '/cloudStorageAttachment/upload',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_34,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageAttachmentUpload',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 上传文件 的 **请求函数**
 *
 * @分类 【云盘】文件
 * @请求头 `POST /cloudStorageAttachment/upload`
 */
export const postCloudStorageAttachmentUpload = /*#__PURE__*/ (
  requestData: PostCloudStorageAttachmentUploadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageAttachmentUploadResponse>(
    prepare(postCloudStorageAttachmentUploadRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageAttachmentUpload.requestConfig = postCloudStorageAttachmentUploadRequestConfig

const mockUrl_0_0_0_35 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_35 = '' as any
const prodUrl_0_0_0_35 = '' as any
const dataKey_0_0_0_35 = undefined as any

/**
 * 接口 新增 的 **请求类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/add`
 */
export interface PostCloudStorageFolderAddRequest {
  [k: string]: unknown
}

/**
 * 接口 新增 的 **返回类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/add`
 */
export interface PostCloudStorageFolderAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增 的 **请求配置的类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/add`
 */
type PostCloudStorageFolderAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/cloudStorageFolder/add', undefined, string, string, false>
>

/**
 * 接口 新增 的 **请求配置**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/add`
 */
const postCloudStorageFolderAddRequestConfig: PostCloudStorageFolderAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_35,
  devUrl: devUrl_0_0_0_35,
  prodUrl: prodUrl_0_0_0_35,
  path: '/cloudStorageFolder/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_35,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageFolderAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增 的 **请求函数**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/add`
 */
export const postCloudStorageFolderAdd = /*#__PURE__*/ (
  requestData: PostCloudStorageFolderAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageFolderAddResponse>(
    prepare(postCloudStorageFolderAddRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageFolderAdd.requestConfig = postCloudStorageFolderAddRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/delete`
 */
export interface GetCloudStorageFolderDeleteRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/delete`
 */
export interface GetCloudStorageFolderDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/delete`
 */
type GetCloudStorageFolderDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/cloudStorageFolder/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/delete`
 */
const getCloudStorageFolderDeleteRequestConfig: GetCloudStorageFolderDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_35,
  devUrl: devUrl_0_0_0_35,
  prodUrl: prodUrl_0_0_0_35,
  path: '/cloudStorageFolder/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_35,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCloudStorageFolderDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/delete`
 */
export const getCloudStorageFolderDelete = /*#__PURE__*/ (
  requestData: GetCloudStorageFolderDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageFolderDeleteResponse>(
    prepare(getCloudStorageFolderDeleteRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageFolderDelete.requestConfig = getCloudStorageFolderDeleteRequestConfig

/**
 * 接口 查询文件夹路径 的 **请求类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/getFolderUrl`
 */
export interface GetCloudStorageFolderGetFolderUrlRequest {
  /**
   * id
   */
  id?: string
  /**
   * projectId
   */
  projectId?: string
  /**
   * type
   */
  type: string
}

/**
 * 接口 查询文件夹路径 的 **返回类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/getFolderUrl`
 */
export interface GetCloudStorageFolderGetFolderUrlResponse {
  code?: string
  data?: {
    /**
     * 文件夹唯一code （4位一级）
     */
    code?: string
    /**
     * 文件夹名称
     */
    folderName?: string
    /**
     * 文件夹类型 0-系统文件夹 1-文件夹 2-表单文件夹
     */
    folderType?: number
    /**
     * 主键
     */
    id?: number
    /**
     * 排序字段
     */
    sort?: number
    /**
     * 目录类型 1-企业云盘目录 2-项目云盘目录
     */
    type?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询文件夹路径 的 **请求配置的类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/getFolderUrl`
 */
type GetCloudStorageFolderGetFolderUrlRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageFolder/getFolderUrl',
    undefined,
    string,
    'id' | 'projectId' | 'type',
    false
  >
>

/**
 * 接口 查询文件夹路径 的 **请求配置**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/getFolderUrl`
 */
const getCloudStorageFolderGetFolderUrlRequestConfig: GetCloudStorageFolderGetFolderUrlRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_35,
  devUrl: devUrl_0_0_0_35,
  prodUrl: prodUrl_0_0_0_35,
  path: '/cloudStorageFolder/getFolderUrl',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_35,
  paramNames: [],
  queryNames: ['id', 'projectId', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCloudStorageFolderGetFolderUrl',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询文件夹路径 的 **请求函数**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/getFolderUrl`
 */
export const getCloudStorageFolderGetFolderUrl = /*#__PURE__*/ (
  requestData: GetCloudStorageFolderGetFolderUrlRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageFolderGetFolderUrlResponse>(
    prepare(getCloudStorageFolderGetFolderUrlRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageFolderGetFolderUrl.requestConfig = getCloudStorageFolderGetFolderUrlRequestConfig

/**
 * 接口 修改 的 **请求类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/modify`
 */
export interface PostCloudStorageFolderModifyRequest {
  [k: string]: unknown
}

/**
 * 接口 修改 的 **返回类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/modify`
 */
export interface PostCloudStorageFolderModifyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改 的 **请求配置的类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/modify`
 */
type PostCloudStorageFolderModifyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/cloudStorageFolder/modify', undefined, string, string, false>
>

/**
 * 接口 修改 的 **请求配置**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/modify`
 */
const postCloudStorageFolderModifyRequestConfig: PostCloudStorageFolderModifyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_35,
  devUrl: devUrl_0_0_0_35,
  prodUrl: prodUrl_0_0_0_35,
  path: '/cloudStorageFolder/modify',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_35,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageFolderModify',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改 的 **请求函数**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/modify`
 */
export const postCloudStorageFolderModify = /*#__PURE__*/ (
  requestData: PostCloudStorageFolderModifyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageFolderModifyResponse>(
    prepare(postCloudStorageFolderModifyRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageFolderModify.requestConfig = postCloudStorageFolderModifyRequestConfig

/**
 * 接口 排序 的 **请求类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/sort`
 */
export type PostCloudStorageFolderSortRequest = {
  /**
   * 主键id
   */
  id?: number
  /**
   * 排序
   */
  sort?: number
}[]

/**
 * 接口 排序 的 **返回类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/sort`
 */
export interface PostCloudStorageFolderSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 排序 的 **请求配置的类型**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/sort`
 */
type PostCloudStorageFolderSortRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/cloudStorageFolder/sort', undefined, string, string, false>
>

/**
 * 接口 排序 的 **请求配置**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/sort`
 */
const postCloudStorageFolderSortRequestConfig: PostCloudStorageFolderSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_35,
  devUrl: devUrl_0_0_0_35,
  prodUrl: prodUrl_0_0_0_35,
  path: '/cloudStorageFolder/sort',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_35,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCloudStorageFolderSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 排序 的 **请求函数**
 *
 * @分类 【云盘】目录
 * @请求头 `POST /cloudStorageFolder/sort`
 */
export const postCloudStorageFolderSort = /*#__PURE__*/ (
  requestData: PostCloudStorageFolderSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageFolderSortResponse>(
    prepare(postCloudStorageFolderSortRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageFolderSort.requestConfig = postCloudStorageFolderSortRequestConfig

/**
 * 接口 目录树 的 **请求类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/tree`
 */
export interface GetCloudStorageFolderTreeRequest {
  /**
   * folderName
   */
  folderName?: string
  /**
   * type
   */
  type: string
}

/**
 * 接口 目录树 的 **返回类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/tree`
 */
export interface GetCloudStorageFolderTreeResponse {
  code?: string
  data?: {
    /**
     * 儿子节点
     */
    children?: {
      [k: string]: unknown
    }[]
    /**
     * 层级code
     */
    code?: string
    /**
     * 文件夹名称
     */
    folderName?: string
    /**
     * 文件夹类型 0-系统文件夹 1-文件夹 2-表单文件夹
     */
    folderType?: number
    /**
     * 主键
     */
    id?: number
    /**
     * 修改人
     */
    modifier?: string
    /**
     * 父节点code
     */
    parentCode?: string
    /**
     * 父节点文件夹名称
     */
    parentFolderName?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 修改时间
     */
    updateTime?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 目录树 的 **请求配置的类型**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/tree`
 */
type GetCloudStorageFolderTreeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageFolder/tree',
    undefined,
    string,
    'folderName' | 'type',
    false
  >
>

/**
 * 接口 目录树 的 **请求配置**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/tree`
 */
const getCloudStorageFolderTreeRequestConfig: GetCloudStorageFolderTreeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_35,
  devUrl: devUrl_0_0_0_35,
  prodUrl: prodUrl_0_0_0_35,
  path: '/cloudStorageFolder/tree',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_35,
  paramNames: [],
  queryNames: ['folderName', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCloudStorageFolderTree',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 目录树 的 **请求函数**
 *
 * @分类 【云盘】目录
 * @请求头 `GET /cloudStorageFolder/tree`
 */
export const getCloudStorageFolderTree = /*#__PURE__*/ (
  requestData: GetCloudStorageFolderTreeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageFolderTreeResponse>(
    prepare(getCloudStorageFolderTreeRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageFolderTree.requestConfig = getCloudStorageFolderTreeRequestConfig

const mockUrl_0_0_0_36 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_36 = '' as any
const prodUrl_0_0_0_36 = '' as any
const dataKey_0_0_0_36 = undefined as any

/**
 * 接口 获取文件夹权限 的 **请求类型**
 *
 * @分类 【云盘】目录权限
 * @请求头 `GET /cloudStorageFolderPermission/getFolderPermission`
 */
export interface GetCloudStorageFolderPermissionGetFolderPermissionRequest {
  /**
   * folderId
   */
  folderId: string
}

/**
 * 接口 获取文件夹权限 的 **返回类型**
 *
 * @分类 【云盘】目录权限
 * @请求头 `GET /cloudStorageFolderPermission/getFolderPermission`
 */
export interface GetCloudStorageFolderPermissionGetFolderPermissionResponse {
  code?: string
  data?: {
    /**
     * 权限控制类型 0-全员可见 1-指定用户访问
     */
    controlType?: number
    /**
     * 云盘文件夹id
     */
    folderId?: number
    /**
     * 权限列表
     */
    permissionList?: {
      /**
       * 权限组类型 1-可管理所有权限 2-可上传/下载/查看 3-可查看/下载 4-仅可查看
       */
      groupType?: number
      /**
       * 用户权限类型
       */
      permissionTypes?: {
        /**
         * 权限id（部门、人员、角色）
         */
        permissionId?: number
        /**
         * 权限名称
         */
        permissionName?: string
        /**
         * 用户权限类型 1-部门 2-人员 3-角色
         */
        permissionType?: number
      }[]
    }[]
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取文件夹权限 的 **请求配置的类型**
 *
 * @分类 【云盘】目录权限
 * @请求头 `GET /cloudStorageFolderPermission/getFolderPermission`
 */
type GetCloudStorageFolderPermissionGetFolderPermissionRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageFolderPermission/getFolderPermission',
    undefined,
    string,
    'folderId',
    false
  >
>

/**
 * 接口 获取文件夹权限 的 **请求配置**
 *
 * @分类 【云盘】目录权限
 * @请求头 `GET /cloudStorageFolderPermission/getFolderPermission`
 */
const getCloudStorageFolderPermissionGetFolderPermissionRequestConfig: GetCloudStorageFolderPermissionGetFolderPermissionRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_36,
    devUrl: devUrl_0_0_0_36,
    prodUrl: prodUrl_0_0_0_36,
    path: '/cloudStorageFolderPermission/getFolderPermission',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_36,
    paramNames: [],
    queryNames: ['folderId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getCloudStorageFolderPermissionGetFolderPermission',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获取文件夹权限 的 **请求函数**
 *
 * @分类 【云盘】目录权限
 * @请求头 `GET /cloudStorageFolderPermission/getFolderPermission`
 */
export const getCloudStorageFolderPermissionGetFolderPermission = /*#__PURE__*/ (
  requestData: GetCloudStorageFolderPermissionGetFolderPermissionRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCloudStorageFolderPermissionGetFolderPermissionResponse>(
    prepare(getCloudStorageFolderPermissionGetFolderPermissionRequestConfig, requestData),
    ...args,
  )
}

getCloudStorageFolderPermissionGetFolderPermission.requestConfig =
  getCloudStorageFolderPermissionGetFolderPermissionRequestConfig

/**
 * 接口 权限设置 的 **请求类型**
 *
 * @分类 【云盘】目录权限
 * @请求头 `POST /cloudStorageFolderPermission/set`
 */
export interface PostCloudStorageFolderPermissionSetRequest {
  /**
   * 权限控制类型 0-全员可见 1-指定用户访问
   */
  controlType?: number
  /**
   * 云盘文件夹id
   */
  folderId?: number
  /**
   * 权限列表
   */
  permissionList?: {
    /**
     * 权限组类型 1-可管理所有权限 2-可上传/下载/查看 3-可查看/下载 4-仅可查看
     */
    groupType?: number
    /**
     * 权限id（部门、人员、角色）
     */
    permissionId?: number
    /**
     * 用户权限类型 1-部门 2-人员 3-角色
     */
    permissionType?: number
  }[]
}

/**
 * 接口 权限设置 的 **返回类型**
 *
 * @分类 【云盘】目录权限
 * @请求头 `POST /cloudStorageFolderPermission/set`
 */
export interface PostCloudStorageFolderPermissionSetResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 权限设置 的 **请求配置的类型**
 *
 * @分类 【云盘】目录权限
 * @请求头 `POST /cloudStorageFolderPermission/set`
 */
type PostCloudStorageFolderPermissionSetRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/cloudStorageFolderPermission/set',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 权限设置 的 **请求配置**
 *
 * @分类 【云盘】目录权限
 * @请求头 `POST /cloudStorageFolderPermission/set`
 */
const postCloudStorageFolderPermissionSetRequestConfig: PostCloudStorageFolderPermissionSetRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_36,
    devUrl: devUrl_0_0_0_36,
    prodUrl: prodUrl_0_0_0_36,
    path: '/cloudStorageFolderPermission/set',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_36,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postCloudStorageFolderPermissionSet',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 权限设置 的 **请求函数**
 *
 * @分类 【云盘】目录权限
 * @请求头 `POST /cloudStorageFolderPermission/set`
 */
export const postCloudStorageFolderPermissionSet = /*#__PURE__*/ (
  requestData: PostCloudStorageFolderPermissionSetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCloudStorageFolderPermissionSetResponse>(
    prepare(postCloudStorageFolderPermissionSetRequestConfig, requestData),
    ...args,
  )
}

postCloudStorageFolderPermissionSet.requestConfig = postCloudStorageFolderPermissionSetRequestConfig

const mockUrl_0_0_0_37 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_37 = '' as any
const prodUrl_0_0_0_37 = '' as any
const dataKey_0_0_0_37 = undefined as any

/**
 * 接口 获取er图 的 **请求类型**
 *
 * @分类 【低代码->业务模型】ER图
 * @请求头 `POST /model/er/list`
 */
export interface PostModelErListRequest {
  /**
   * 模型id
   */
  moduleId?: string
}

/**
 * 接口 获取er图 的 **返回类型**
 *
 * @分类 【低代码->业务模型】ER图
 * @请求头 `POST /model/er/list`
 */
export interface PostModelErListResponse {
  /**
   * 业务模型字段
   */
  attrs?: {
    /**
     * 字段编码
     */
    fieldCode?: string
    /**
     * 字段数据类型
     */
    fieldType?: string
    /**
     * 图片标识
     */
    icoType?: string
    /**
     * 字段关系
     */
    relation?: {
      /**
       * 关系字段
       */
      relationField?: string
      /**
       * 关系模型
       */
      relationModel?: string
    }[]
  }[]
  /**
   * 业务模型编码
   */
  modelCode?: string
  /**
   * 业务模型应用
   */
  modelModule?: string
  /**
   * 业务模型名称
   */
  modelName?: string
}

/**
 * 接口 获取er图 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】ER图
 * @请求头 `POST /model/er/list`
 */
type PostModelErListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/er/list', undefined, string, string, false>
>

/**
 * 接口 获取er图 的 **请求配置**
 *
 * @分类 【低代码->业务模型】ER图
 * @请求头 `POST /model/er/list`
 */
const postModelErListRequestConfig: PostModelErListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_37,
  devUrl: devUrl_0_0_0_37,
  prodUrl: prodUrl_0_0_0_37,
  path: '/model/er/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_37,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelErList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取er图 的 **请求函数**
 *
 * @分类 【低代码->业务模型】ER图
 * @请求头 `POST /model/er/list`
 */
export const postModelErList = /*#__PURE__*/ (requestData: PostModelErListRequest, ...args: UserRequestRestArgs) => {
  return request<PostModelErListResponse>(prepare(postModelErListRequestConfig, requestData), ...args)
}

postModelErList.requestConfig = postModelErListRequestConfig

const mockUrl_0_0_0_38 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_38 = '' as any
const prodUrl_0_0_0_38 = '' as any
const dataKey_0_0_0_38 = undefined as any

/**
 * 接口 一键生成 的 **请求类型**
 *
 * @分类 【低代码->业务模型】一键生成模型表单列表菜单按钮
 * @请求头 `POST /model/optimize/oneClickDeploy`
 */
export interface PostModelOptimizeOneClickDeployRequest {
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 模型和字段共用编码
   */
  modelCodeOrColumnCode?: string
  /**
   * 模型id
   */
  modelId?: string
  /**
   * 如果从模型生成，需要应用id
   */
  moduleId?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 开始生成的层次 1从应用生成 2从模型生成 3只生成菜单和按钮
   */
  type?: string
}

/**
 * 接口 一键生成 的 **返回类型**
 *
 * @分类 【低代码->业务模型】一键生成模型表单列表菜单按钮
 * @请求头 `POST /model/optimize/oneClickDeploy`
 */
export interface PostModelOptimizeOneClickDeployResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 一键生成 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】一键生成模型表单列表菜单按钮
 * @请求头 `POST /model/optimize/oneClickDeploy`
 */
type PostModelOptimizeOneClickDeployRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/optimize/oneClickDeploy',
    undefined,
    string,
    'columnId' | 'modelCodeOrColumnCode' | 'modelId' | 'moduleId' | 'name' | 'type',
    false
  >
>

/**
 * 接口 一键生成 的 **请求配置**
 *
 * @分类 【低代码->业务模型】一键生成模型表单列表菜单按钮
 * @请求头 `POST /model/optimize/oneClickDeploy`
 */
const postModelOptimizeOneClickDeployRequestConfig: PostModelOptimizeOneClickDeployRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_38,
  devUrl: devUrl_0_0_0_38,
  prodUrl: prodUrl_0_0_0_38,
  path: '/model/optimize/oneClickDeploy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_38,
  paramNames: [],
  queryNames: ['columnId', 'modelCodeOrColumnCode', 'modelId', 'moduleId', 'name', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelOptimizeOneClickDeploy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 一键生成 的 **请求函数**
 *
 * @分类 【低代码->业务模型】一键生成模型表单列表菜单按钮
 * @请求头 `POST /model/optimize/oneClickDeploy`
 */
export const postModelOptimizeOneClickDeploy = /*#__PURE__*/ (
  requestData: PostModelOptimizeOneClickDeployRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelOptimizeOneClickDeployResponse>(
    prepare(postModelOptimizeOneClickDeployRequestConfig, requestData),
    ...args,
  )
}

postModelOptimizeOneClickDeploy.requestConfig = postModelOptimizeOneClickDeployRequestConfig

const mockUrl_0_0_0_39 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_39 = '' as any
const prodUrl_0_0_0_39 = '' as any
const dataKey_0_0_0_39 = undefined as any

/**
 * 接口 关联子表模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/add`
 */
export interface PostModelConnectAddRequest {
  /**
   * 子表
   */
  childId?: string
  id?: string
  /**
   * 主表
   */
  primaryId?: string
}

/**
 * 接口 关联子表模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/add`
 */
export interface PostModelConnectAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 关联子表模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/add`
 */
type PostModelConnectAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/connect/add', undefined, string, string, false>
>

/**
 * 接口 关联子表模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/add`
 */
const postModelConnectAddRequestConfig: PostModelConnectAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_39,
  devUrl: devUrl_0_0_0_39,
  prodUrl: prodUrl_0_0_0_39,
  path: '/model/connect/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_39,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelConnectAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 关联子表模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/add`
 */
export const postModelConnectAdd = /*#__PURE__*/ (
  requestData: PostModelConnectAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelConnectAddResponse>(prepare(postModelConnectAddRequestConfig, requestData), ...args)
}

postModelConnectAdd.requestConfig = postModelConnectAddRequestConfig

/**
 * 接口 取消子表模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/cancel`
 */
export interface PostModelConnectCancelRequest {
  /**
   * 子表
   */
  childId?: string
  id?: string
  /**
   * 主表
   */
  primaryId?: string
}

/**
 * 接口 取消子表模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/cancel`
 */
export interface PostModelConnectCancelResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 取消子表模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/cancel`
 */
type PostModelConnectCancelRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/connect/cancel', undefined, string, string, false>
>

/**
 * 接口 取消子表模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/cancel`
 */
const postModelConnectCancelRequestConfig: PostModelConnectCancelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_39,
  devUrl: devUrl_0_0_0_39,
  prodUrl: prodUrl_0_0_0_39,
  path: '/model/connect/cancel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_39,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelConnectCancel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 取消子表模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/cancel`
 */
export const postModelConnectCancel = /*#__PURE__*/ (
  requestData: PostModelConnectCancelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelConnectCancelResponse>(prepare(postModelConnectCancelRequestConfig, requestData), ...args)
}

postModelConnectCancel.requestConfig = postModelConnectCancelRequestConfig

/**
 * 接口 查询子表模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/list`
 */
export interface PostModelConnectListRequest {
  /**
   * 子表
   */
  childId?: string
  id?: string
  /**
   * 主表
   */
  primaryId?: string
}

/**
 * 接口 查询子表模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/list`
 */
export interface PostModelConnectListResponse {
  /**
   * 子表所属模块
   */
  childModule?: string
  /**
   * 子表
   */
  childTable?: string
  createTime?: string
  /**
   * 隐藏删除按钮
   */
  hideDel?: boolean
  id?: string
  /**
   * 1存在  0 删除
   */
  isDel?: number
  /**
   * 主表
   */
  primaryTable?: string
}

/**
 * 接口 查询子表模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/list`
 */
type PostModelConnectListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/connect/list', undefined, string, string, false>
>

/**
 * 接口 查询子表模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/list`
 */
const postModelConnectListRequestConfig: PostModelConnectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_39,
  devUrl: devUrl_0_0_0_39,
  prodUrl: prodUrl_0_0_0_39,
  path: '/model/connect/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_39,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelConnectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询子表模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型主子表关联
 * @请求头 `POST /model/connect/list`
 */
export const postModelConnectList = /*#__PURE__*/ (
  requestData: PostModelConnectListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelConnectListResponse>(prepare(postModelConnectListRequestConfig, requestData), ...args)
}

postModelConnectList.requestConfig = postModelConnectListRequestConfig

const mockUrl_0_0_0_40 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_40 = '' as any
const prodUrl_0_0_0_40 = '' as any
const dataKey_0_0_0_40 = undefined as any

/**
 * 接口 中文数据类型列表 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/dataType/list`
 */
export interface GetModelDataTypeListRequest {}

/**
 * 接口 中文数据类型列表 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/dataType/list`
 */
export interface GetModelDataTypeListResponse {
  /**
   * 编码
   */
  code?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 是否删除1 存在 0删除
   */
  isDel?: number
  /**
   * 名称
   */
  name?: string
  /**
   * 类型 1自动编号 2配置项 3关联 4计算公式
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 中文数据类型列表 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/dataType/list`
 */
type GetModelDataTypeListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/dataType/list', undefined, string, string, true>
>

/**
 * 接口 中文数据类型列表 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/dataType/list`
 */
const getModelDataTypeListRequestConfig: GetModelDataTypeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_40,
  devUrl: devUrl_0_0_0_40,
  prodUrl: prodUrl_0_0_0_40,
  path: '/model/dataType/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_40,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelDataTypeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 中文数据类型列表 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/dataType/list`
 */
export const getModelDataTypeList = /*#__PURE__*/ (
  requestData?: GetModelDataTypeListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelDataTypeListResponse>(prepare(getModelDataTypeListRequestConfig, requestData), ...args)
}

getModelDataTypeList.requestConfig = getModelDataTypeListRequestConfig

/**
 * 接口 删除模型字段校验 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/check`
 */
export interface GetModelModelColumnCheckRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 删除模型字段校验 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/check`
 */
export interface GetModelModelColumnCheckResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除模型字段校验 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/check`
 */
type GetModelModelColumnCheckRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/modelColumn/check', undefined, string, 'id', false>
>

/**
 * 接口 删除模型字段校验 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/check`
 */
const getModelModelColumnCheckRequestConfig: GetModelModelColumnCheckRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_40,
  devUrl: devUrl_0_0_0_40,
  prodUrl: prodUrl_0_0_0_40,
  path: '/model/modelColumn/check',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_40,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelColumnCheck',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除模型字段校验 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/check`
 */
export const getModelModelColumnCheck = /*#__PURE__*/ (
  requestData: GetModelModelColumnCheckRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelColumnCheckResponse>(prepare(getModelModelColumnCheckRequestConfig, requestData), ...args)
}

getModelModelColumnCheck.requestConfig = getModelModelColumnCheckRequestConfig

/**
 * 接口 查看某个字段详情 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/detail`
 */
export interface GetModelModelColumnDetailRequest {
  /**
   * dataType
   */
  dataType?: string
  /**
   * id
   */
  id?: string
}

/**
 * 接口 查看某个字段详情 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/detail`
 */
export interface GetModelModelColumnDetailResponse {
  /**
   * 中文数据类型扩展信息描述
   */
  fieldTypeDescribe?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 关联的字段id
   */
  joinColumnId?: string
  /**
   * 关联的字段文本
   */
  joinColumnText?: string
  /**
   * 关联的模型id
   */
  joinModelId?: string
  /**
   * 关联的模型文本
   */
  joinModelText?: string
  /**
   * 中文，目前只有配置项类型用
   */
  name?: string
}

/**
 * 接口 查看某个字段详情 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/detail`
 */
type GetModelModelColumnDetailRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/modelColumn/detail',
    undefined,
    string,
    'dataType' | 'id',
    false
  >
>

/**
 * 接口 查看某个字段详情 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/detail`
 */
const getModelModelColumnDetailRequestConfig: GetModelModelColumnDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_40,
  devUrl: devUrl_0_0_0_40,
  prodUrl: prodUrl_0_0_0_40,
  path: '/model/modelColumn/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_40,
  paramNames: [],
  queryNames: ['dataType', 'id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelColumnDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看某个字段详情 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/detail`
 */
export const getModelModelColumnDetail = /*#__PURE__*/ (
  requestData: GetModelModelColumnDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelColumnDetailResponse>(
    prepare(getModelModelColumnDetailRequestConfig, requestData),
    ...args,
  )
}

getModelModelColumnDetail.requestConfig = getModelModelColumnDetailRequestConfig

/**
 * 接口 查看字段详情 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/details`
 */
export interface GetModelModelColumnDetailsRequest {
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 标识
   */
  flag?: string
  /**
   * 校验能否修改或者删除的标识 0不需要校验 1正常校验
   */
  quotedCheckFlag?: string
  id?: string
}

/**
 * 接口 查看字段详情 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/details`
 */
export interface GetModelModelColumnDetailsResponse {
  /**
   * 模型字段列表
   */
  fieldList?: {
    /**
     * 表对应的字段
     */
    columnCode: string
    /**
     * 表对应字段默认的中文名称
     */
    columnName: string
    corpCode?: string
    /**
     * 字段对应的默认控件类型
     */
    defaultControlType?: string
    /**
     * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
     */
    fieldClassify?: string
    /**
     * 字段类型描述
     */
    fieldTypeDescribe?: string
    /**
     * 前端传回来的中文字段类型，存id
     */
    fieldTypeId: string
    /**
     * 前端传回来的中文字段类型文本
     */
    fieldTypeText?: string
    /**
     * 该字段对应的默认控件信息
     */
    formDefaultConfig?: string
    /**
     * 隐藏删除按钮
     */
    hideDel?: boolean
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除，1：正常
     */
    isDel?: number
    /**
     * 是否是新增字段 0：不是新增 1：是新增
     */
    isInsert?: number
    /**
     * 是否非空
     */
    isNull?: string
    /**
     * 是否被表单、列表调用 0否 1是
     */
    isQuotedByFormOrList?: number
    issued?: boolean
    /**
     * 关联的字段
     */
    joinColumnId?: string
    /**
     * 关联的模型
     */
    joinModelId?: string
    /**
     * 表
     */
    modelId: string
    /**
     * 是否唯一
     */
    only?: string
    /**
     * 排序id
     */
    sortId?: string
  }[]
  /**
   * 模型表名（英）
   */
  modelCode: string
  /**
   * 业务模型id
   */
  modelId: string
  /**
   * 模型表名（中）
   */
  modelName?: string
  /**
   * 所属模块id
   */
  moduleId: string
  /**
   * 所属模块（中）
   */
  moduleName?: string
}

/**
 * 接口 查看字段详情 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/details`
 */
type GetModelModelColumnDetailsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/modelColumn/details',
    undefined,
    string,
    'columnName' | 'flag' | 'quotedCheckFlag' | 'id',
    false
  >
>

/**
 * 接口 查看字段详情 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/details`
 */
const getModelModelColumnDetailsRequestConfig: GetModelModelColumnDetailsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_40,
  devUrl: devUrl_0_0_0_40,
  prodUrl: prodUrl_0_0_0_40,
  path: '/model/modelColumn/details',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_40,
  paramNames: [],
  queryNames: ['columnName', 'flag', 'quotedCheckFlag', 'id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelColumnDetails',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看字段详情 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/details`
 */
export const getModelModelColumnDetails = /*#__PURE__*/ (
  requestData: GetModelModelColumnDetailsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelColumnDetailsResponse>(
    prepare(getModelModelColumnDetailsRequestConfig, requestData),
    ...args,
  )
}

getModelModelColumnDetails.requestConfig = getModelModelColumnDetailsRequestConfig

/**
 * 接口 获取模型id 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/getId`
 */
export interface GetModelModelColumnGetIdRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 获取模型id 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/getId`
 */
export interface GetModelModelColumnGetIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取模型id 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/getId`
 */
type GetModelModelColumnGetIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/modelColumn/getId', undefined, string, 'id', false>
>

/**
 * 接口 获取模型id 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/getId`
 */
const getModelModelColumnGetIdRequestConfig: GetModelModelColumnGetIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_40,
  devUrl: devUrl_0_0_0_40,
  prodUrl: prodUrl_0_0_0_40,
  path: '/model/modelColumn/getId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_40,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelColumnGetId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取模型id 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `GET /model/modelColumn/getId`
 */
export const getModelModelColumnGetId = /*#__PURE__*/ (
  requestData: GetModelModelColumnGetIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelColumnGetIdResponse>(prepare(getModelModelColumnGetIdRequestConfig, requestData), ...args)
}

getModelModelColumnGetId.requestConfig = getModelModelColumnGetIdRequestConfig

/**
 * 接口 保存业务模型字段 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `POST /model/modelColumn/save`
 */
export interface PostModelModelColumnSaveRequest {
  /**
   * 模型字段列表
   */
  fieldList?: {
    /**
     * 表对应的字段
     */
    columnCode: string
    /**
     * 表对应字段默认的中文名称
     */
    columnName: string
    corpCode?: string
    /**
     * 字段对应的默认控件类型
     */
    defaultControlType?: string
    /**
     * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
     */
    fieldClassify?: string
    /**
     * 字段类型描述
     */
    fieldTypeDescribe?: string
    /**
     * 前端传回来的中文字段类型，存id
     */
    fieldTypeId: string
    /**
     * 前端传回来的中文字段类型文本
     */
    fieldTypeText?: string
    /**
     * 该字段对应的默认控件信息
     */
    formDefaultConfig?: string
    /**
     * 隐藏删除按钮
     */
    hideDel?: boolean
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除，1：正常
     */
    isDel?: number
    /**
     * 是否是新增字段 0：不是新增 1：是新增
     */
    isInsert?: number
    /**
     * 是否非空
     */
    isNull?: string
    /**
     * 是否被表单、列表调用 0否 1是
     */
    isQuotedByFormOrList?: number
    issued?: boolean
    /**
     * 关联的字段
     */
    joinColumnId?: string
    /**
     * 关联的模型
     */
    joinModelId?: string
    /**
     * 表
     */
    modelId: string
    /**
     * 是否唯一
     */
    only?: string
    /**
     * 排序id
     */
    sortId?: string
  }[]
  /**
   * 被删除的模型字段列表
   */
  fieldListForDel?: {
    /**
     * 表对应的字段
     */
    columnCode: string
    /**
     * 表对应字段默认的中文名称
     */
    columnName: string
    corpCode?: string
    /**
     * 字段对应的默认控件类型
     */
    defaultControlType?: string
    /**
     * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
     */
    fieldClassify?: string
    /**
     * 字段类型描述
     */
    fieldTypeDescribe?: string
    /**
     * 前端传回来的中文字段类型，存id
     */
    fieldTypeId: string
    /**
     * 前端传回来的中文字段类型文本
     */
    fieldTypeText?: string
    /**
     * 该字段对应的默认控件信息
     */
    formDefaultConfig?: string
    /**
     * 隐藏删除按钮
     */
    hideDel?: boolean
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除，1：正常
     */
    isDel?: number
    /**
     * 是否是新增字段 0：不是新增 1：是新增
     */
    isInsert?: number
    /**
     * 是否非空
     */
    isNull?: string
    /**
     * 是否被表单、列表调用 0否 1是
     */
    isQuotedByFormOrList?: number
    issued?: boolean
    /**
     * 关联的字段
     */
    joinColumnId?: string
    /**
     * 关联的模型
     */
    joinModelId?: string
    /**
     * 表
     */
    modelId: string
    /**
     * 是否唯一
     */
    only?: string
    /**
     * 排序id
     */
    sortId?: string
  }[]
  /**
   * 模型表名（英）
   */
  modelCode: string
  /**
   * 业务模型id
   */
  modelId: string
  /**
   * 模型表名（中）
   */
  modelName?: string
  /**
   * 所属模块id
   */
  moduleId: string
  /**
   * 所属模块（中）
   */
  moduleName?: string
}

/**
 * 接口 保存业务模型字段 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `POST /model/modelColumn/save`
 */
export interface PostModelModelColumnSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存业务模型字段 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `POST /model/modelColumn/save`
 */
type PostModelModelColumnSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/modelColumn/save', undefined, string, string, false>
>

/**
 * 接口 保存业务模型字段 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `POST /model/modelColumn/save`
 */
const postModelModelColumnSaveRequestConfig: PostModelModelColumnSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_40,
  devUrl: devUrl_0_0_0_40,
  prodUrl: prodUrl_0_0_0_40,
  path: '/model/modelColumn/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_40,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModelColumnSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存业务模型字段 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型右侧字段
 * @请求头 `POST /model/modelColumn/save`
 */
export const postModelModelColumnSave = /*#__PURE__*/ (
  requestData: PostModelModelColumnSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModelColumnSaveResponse>(prepare(postModelModelColumnSaveRequestConfig, requestData), ...args)
}

postModelModelColumnSave.requestConfig = postModelModelColumnSaveRequestConfig

const mockUrl_0_0_0_41 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_41 = '' as any
const prodUrl_0_0_0_41 = '' as any
const dataKey_0_0_0_41 = undefined as any

/**
 * 接口 新增业务模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/add`
 */
export interface PostModelModelAddRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 新增业务模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/add`
 */
export interface PostModelModelAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增业务模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/add`
 */
type PostModelModelAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/model/add', undefined, string, string, false>
>

/**
 * 接口 新增业务模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/add`
 */
const postModelModelAddRequestConfig: PostModelModelAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModelAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增业务模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/add`
 */
export const postModelModelAdd = /*#__PURE__*/ (
  requestData: PostModelModelAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModelAddResponse>(prepare(postModelModelAddRequestConfig, requestData), ...args)
}

postModelModelAdd.requestConfig = postModelModelAddRequestConfig

/**
 * 接口 复制业务模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/copy`
 */
export interface PostModelModelCopyRequest {
  /**
   * 模块id
   */
  moduleId: string
  /**
   * 新的模型编码
   */
  newModelCode: string
  /**
   * 新的模型名称
   */
  newModelName: string
  /**
   * 要复制的模型编码
   */
  oldModelCode: string
}

/**
 * 接口 复制业务模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/copy`
 */
export interface PostModelModelCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 复制业务模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/copy`
 */
type PostModelModelCopyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/model/copy', undefined, string, string, false>
>

/**
 * 接口 复制业务模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/copy`
 */
const postModelModelCopyRequestConfig: PostModelModelCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/copy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModelCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 复制业务模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/copy`
 */
export const postModelModelCopy = /*#__PURE__*/ (
  requestData: PostModelModelCopyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModelCopyResponse>(prepare(postModelModelCopyRequestConfig, requestData), ...args)
}

postModelModelCopy.requestConfig = postModelModelCopyRequestConfig

/**
 * 接口 复制业务模型名称显示以及校验 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/copyModelName`
 */
export interface GetModelModelCopyModelNameRequest {
  /**
   * codeName
   */
  codeName?: string
}

/**
 * 接口 复制业务模型名称显示以及校验 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/copyModelName`
 */
export interface GetModelModelCopyModelNameResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 复制业务模型名称显示以及校验 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/copyModelName`
 */
type GetModelModelCopyModelNameRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/model/copyModelName',
    undefined,
    string,
    'codeName',
    false
  >
>

/**
 * 接口 复制业务模型名称显示以及校验 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/copyModelName`
 */
const getModelModelCopyModelNameRequestConfig: GetModelModelCopyModelNameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/copyModelName',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: ['codeName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelCopyModelName',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 复制业务模型名称显示以及校验 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/copyModelName`
 */
export const getModelModelCopyModelName = /*#__PURE__*/ (
  requestData: GetModelModelCopyModelNameRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelCopyModelNameResponse>(
    prepare(getModelModelCopyModelNameRequestConfig, requestData),
    ...args,
  )
}

getModelModelCopyModelName.requestConfig = getModelModelCopyModelNameRequestConfig

/**
 * 接口 删除业务模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/delete`
 */
export interface GetModelModelDeleteRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 删除业务模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/delete`
 */
export interface GetModelModelDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除业务模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/delete`
 */
type GetModelModelDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/model/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除业务模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/delete`
 */
const getModelModelDeleteRequestConfig: GetModelModelDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除业务模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/delete`
 */
export const getModelModelDelete = /*#__PURE__*/ (
  requestData: GetModelModelDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelDeleteResponse>(prepare(getModelModelDeleteRequestConfig, requestData), ...args)
}

getModelModelDelete.requestConfig = getModelModelDeleteRequestConfig

/**
 * 接口 查看业务模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/list`
 */
export interface PostModelModelListRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 查看业务模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/list`
 */
export interface PostModelModelListResponse {
  adminName?: string
  /**
   * 树
   */
  childrens?: {
    [k: string]: unknown
  }[]
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: string
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 逻辑删除 0：删除，1：正常
   */
  isDel?: number
  issued?: boolean
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 父类名称
   */
  parentName?: string
  /**
   * 排序id
   */
  sortId?: number
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: string
  userIdList?: number[]
}

/**
 * 接口 查看业务模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/list`
 */
type PostModelModelListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/model/list', undefined, string, string, false>
>

/**
 * 接口 查看业务模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/list`
 */
const postModelModelListRequestConfig: PostModelModelListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModelList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看业务模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/list`
 */
export const postModelModelList = /*#__PURE__*/ (
  requestData: PostModelModelListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModelListResponse>(prepare(postModelModelListRequestConfig, requestData), ...args)
}

postModelModelList.requestConfig = postModelModelListRequestConfig

/**
 * 接口 移动业务模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/sort`
 */
export interface GetModelModelSortRequest {
  /**
   * dragBackUpId
   */
  dragBackUpId: string
  /**
   * dragId
   */
  dragId: string
  /**
   * fatherId
   */
  fatherId: string
}

/**
 * 接口 移动业务模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/sort`
 */
export interface GetModelModelSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 移动业务模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/sort`
 */
type GetModelModelSortRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/model/sort',
    undefined,
    string,
    'dragBackUpId' | 'dragId' | 'fatherId',
    false
  >
>

/**
 * 接口 移动业务模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/sort`
 */
const getModelModelSortRequestConfig: GetModelModelSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/sort',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: ['dragBackUpId', 'dragId', 'fatherId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModelSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 移动业务模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `GET /model/model/sort`
 */
export const getModelModelSort = /*#__PURE__*/ (
  requestData: GetModelModelSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModelSortResponse>(prepare(getModelModelSortRequestConfig, requestData), ...args)
}

getModelModelSort.requestConfig = getModelModelSortRequestConfig

/**
 * 接口 编辑业务模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/update`
 */
export interface PostModelModelUpdateRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 编辑业务模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/update`
 */
export interface PostModelModelUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑业务模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/update`
 */
type PostModelModelUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/model/update', undefined, string, string, false>
>

/**
 * 接口 编辑业务模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/update`
 */
const postModelModelUpdateRequestConfig: PostModelModelUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_41,
  devUrl: devUrl_0_0_0_41,
  prodUrl: prodUrl_0_0_0_41,
  path: '/model/model/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_41,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModelUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑业务模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型左侧目录
 * @请求头 `POST /model/model/update`
 */
export const postModelModelUpdate = /*#__PURE__*/ (
  requestData: PostModelModelUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModelUpdateResponse>(prepare(postModelModelUpdateRequestConfig, requestData), ...args)
}

postModelModelUpdate.requestConfig = postModelModelUpdateRequestConfig

const mockUrl_0_0_0_42 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_42 = '' as any
const prodUrl_0_0_0_42 = '' as any
const dataKey_0_0_0_42 = undefined as any

/**
 * 接口 新增应用管理 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/add`
 */
export interface PostModelModuleAddRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 新增应用管理 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/add`
 */
export interface PostModelModuleAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增应用管理 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/add`
 */
type PostModelModuleAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/module/add', undefined, string, string, false>
>

/**
 * 接口 新增应用管理 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/add`
 */
const postModelModuleAddRequestConfig: PostModelModuleAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_42,
  devUrl: devUrl_0_0_0_42,
  prodUrl: prodUrl_0_0_0_42,
  path: '/model/module/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_42,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModuleAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增应用管理 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/add`
 */
export const postModelModuleAdd = /*#__PURE__*/ (
  requestData: PostModelModuleAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModuleAddResponse>(prepare(postModelModuleAddRequestConfig, requestData), ...args)
}

postModelModuleAdd.requestConfig = postModelModuleAddRequestConfig

/**
 * 接口 删除应用管理 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/delete`
 */
export interface PostModelModuleDeleteRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 删除应用管理 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/delete`
 */
export interface PostModelModuleDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除应用管理 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/delete`
 */
type PostModelModuleDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/module/delete', undefined, string, string, false>
>

/**
 * 接口 删除应用管理 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/delete`
 */
const postModelModuleDeleteRequestConfig: PostModelModuleDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_42,
  devUrl: devUrl_0_0_0_42,
  prodUrl: prodUrl_0_0_0_42,
  path: '/model/module/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_42,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModuleDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除应用管理 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/delete`
 */
export const postModelModuleDelete = /*#__PURE__*/ (
  requestData: PostModelModuleDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModuleDeleteResponse>(prepare(postModelModuleDeleteRequestConfig, requestData), ...args)
}

postModelModuleDelete.requestConfig = postModelModuleDeleteRequestConfig

/**
 * 接口 查看应用管理 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/list`
 */
export interface PostModelModuleListRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 查看应用管理 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/list`
 */
export interface PostModelModuleListResponse {
  adminName?: string
  /**
   * 树
   */
  childrens?: {
    [k: string]: unknown
  }[]
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: string
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 逻辑删除 0：删除，1：正常
   */
  isDel?: number
  issued?: boolean
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 父类名称
   */
  parentName?: string
  /**
   * 排序id
   */
  sortId?: number
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: string
  userIdList?: number[]
}

/**
 * 接口 查看应用管理 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/list`
 */
type PostModelModuleListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/module/list', undefined, string, string, false>
>

/**
 * 接口 查看应用管理 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/list`
 */
const postModelModuleListRequestConfig: PostModelModuleListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_42,
  devUrl: devUrl_0_0_0_42,
  prodUrl: prodUrl_0_0_0_42,
  path: '/model/module/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_42,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModuleList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看应用管理 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/list`
 */
export const postModelModuleList = /*#__PURE__*/ (
  requestData: PostModelModuleListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModuleListResponse>(prepare(postModelModuleListRequestConfig, requestData), ...args)
}

postModelModuleList.requestConfig = postModelModuleListRequestConfig

/**
 * 接口 查看报表应用管理 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/reportApplicationList`
 */
export interface PostModelModuleReportApplicationListRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 查看报表应用管理 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/reportApplicationList`
 */
export interface PostModelModuleReportApplicationListResponse {
  adminName?: string
  /**
   * 树
   */
  childrens?: {
    [k: string]: unknown
  }[]
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: string
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 逻辑删除 0：删除，1：正常
   */
  isDel?: number
  issued?: boolean
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 父类名称
   */
  parentName?: string
  /**
   * 排序id
   */
  sortId?: number
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: string
  userIdList?: number[]
}

/**
 * 接口 查看报表应用管理 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/reportApplicationList`
 */
type PostModelModuleReportApplicationListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/module/reportApplicationList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 查看报表应用管理 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/reportApplicationList`
 */
const postModelModuleReportApplicationListRequestConfig: PostModelModuleReportApplicationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_42,
    devUrl: devUrl_0_0_0_42,
    prodUrl: prodUrl_0_0_0_42,
    path: '/model/module/reportApplicationList',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_42,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postModelModuleReportApplicationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 查看报表应用管理 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/reportApplicationList`
 */
export const postModelModuleReportApplicationList = /*#__PURE__*/ (
  requestData: PostModelModuleReportApplicationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModuleReportApplicationListResponse>(
    prepare(postModelModuleReportApplicationListRequestConfig, requestData),
    ...args,
  )
}

postModelModuleReportApplicationList.requestConfig = postModelModuleReportApplicationListRequestConfig

/**
 * 接口 应用管理排序 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `GET /model/module/sort`
 */
export interface GetModelModuleSortRequest {
  /**
   * id
   */
  id?: string
  /**
   * sortId
   */
  sortId?: string
  /**
   * sortType
   */
  sortType?: string
}

/**
 * 接口 应用管理排序 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `GET /model/module/sort`
 */
export interface GetModelModuleSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 应用管理排序 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `GET /model/module/sort`
 */
type GetModelModuleSortRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/module/sort',
    undefined,
    string,
    'id' | 'sortId' | 'sortType',
    false
  >
>

/**
 * 接口 应用管理排序 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `GET /model/module/sort`
 */
const getModelModuleSortRequestConfig: GetModelModuleSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_42,
  devUrl: devUrl_0_0_0_42,
  prodUrl: prodUrl_0_0_0_42,
  path: '/model/module/sort',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_42,
  paramNames: [],
  queryNames: ['id', 'sortId', 'sortType'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelModuleSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 应用管理排序 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `GET /model/module/sort`
 */
export const getModelModuleSort = /*#__PURE__*/ (
  requestData: GetModelModuleSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelModuleSortResponse>(prepare(getModelModuleSortRequestConfig, requestData), ...args)
}

getModelModuleSort.requestConfig = getModelModuleSortRequestConfig

/**
 * 接口 编辑应用管理 的 **请求类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/update`
 */
export interface PostModelModuleUpdateRequest {
  /**
   * 分类（1、系统  2、自定义  3、隐藏）
   */
  classify?: number
  /**
   * 公司唯一标识
   */
  corpCode?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 页面模板类型（0：内链url;1:配置项；2：自定义表单；3：自定义列表；4：自定义报表；5：外链url）
   */
  modeType?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 描述
   */
  moduleDesc?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 报表ID
   */
  reportId?: string
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: number
  /**
   * 管理员
   */
  userIdList?: number[]
}

/**
 * 接口 编辑应用管理 的 **返回类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/update`
 */
export interface PostModelModuleUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑应用管理 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/update`
 */
type PostModelModuleUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/module/update', undefined, string, string, false>
>

/**
 * 接口 编辑应用管理 的 **请求配置**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/update`
 */
const postModelModuleUpdateRequestConfig: PostModelModuleUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_42,
  devUrl: devUrl_0_0_0_42,
  prodUrl: prodUrl_0_0_0_42,
  path: '/model/module/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_42,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModuleUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑应用管理 的 **请求函数**
 *
 * @分类 【低代码->业务模型】模型应用管理
 * @请求头 `POST /model/module/update`
 */
export const postModelModuleUpdate = /*#__PURE__*/ (
  requestData: PostModelModuleUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModuleUpdateResponse>(prepare(postModelModuleUpdateRequestConfig, requestData), ...args)
}

postModelModuleUpdate.requestConfig = postModelModuleUpdateRequestConfig

const mockUrl_0_0_0_43 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_43 = '' as any
const prodUrl_0_0_0_43 = '' as any
const dataKey_0_0_0_43 = undefined as any

/**
 * 接口 表单生成模型用 -- 字段列表 的 **请求类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/formToModel/columnList`
 */
export interface GetModelFormToModelColumnListRequest {
  /**
   * modelId
   */
  modelId?: string
}

/**
 * 接口 表单生成模型用 -- 字段列表 的 **返回类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/formToModel/columnList`
 */
export interface GetModelFormToModelColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单生成模型用 -- 字段列表 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/formToModel/columnList`
 */
type GetModelFormToModelColumnListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/formToModel/columnList',
    undefined,
    string,
    'modelId',
    false
  >
>

/**
 * 接口 表单生成模型用 -- 字段列表 的 **请求配置**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/formToModel/columnList`
 */
const getModelFormToModelColumnListRequestConfig: GetModelFormToModelColumnListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_43,
  devUrl: devUrl_0_0_0_43,
  prodUrl: prodUrl_0_0_0_43,
  path: '/model/formToModel/columnList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_43,
  paramNames: [],
  queryNames: ['modelId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelFormToModelColumnList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单生成模型用 -- 字段列表 的 **请求函数**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/formToModel/columnList`
 */
export const getModelFormToModelColumnList = /*#__PURE__*/ (
  requestData: GetModelFormToModelColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelFormToModelColumnListResponse>(
    prepare(getModelFormToModelColumnListRequestConfig, requestData),
    ...args,
  )
}

getModelFormToModelColumnList.requestConfig = getModelFormToModelColumnListRequestConfig

/**
 * 接口 表单生成模型 的 **请求类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/modelFormToModule/save`
 */
export interface PostModelModelFormToModuleSaveRequest {
  /**
   * 是否激活:1是0否
   */
  enabled?: number
  /**
   * 表单编码(数据库主表名)
   */
  formCode?: string
  /**
   * 表单描述
   */
  formDesc?: string
  /**
   * 表单分组id
   */
  formGroupId?: number
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单key
   */
  formKey?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 表单模型关系
   */
  formTableInfo?: {
    /**
     * 所属模型ID
     */
    belongModelId?: string
    /**
     * 引用模型ID
     */
    referModelId?: string
    /**
     * 模型对应的字段
     */
    tableColumn?: string[]
    /**
     * 模型对应的字段ID
     */
    tableColumnId?: string[]
    /**
     * 模型名称
     */
    tableName?: string
  }[]
  /**
   * 表单resouce路径
   */
  formUrl?: string
  /**
   * 相关联的列表ID
   */
  linkListIds?: string[]
  /**
   * 关联业务模型ID
   */
  modelId?: string
  /**
   * 版本号
   */
  version?: number
}

/**
 * 接口 表单生成模型 的 **返回类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/modelFormToModule/save`
 */
export interface PostModelModelFormToModuleSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单生成模型 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/modelFormToModule/save`
 */
type PostModelModelFormToModuleSaveRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/modelFormToModule/save',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 表单生成模型 的 **请求配置**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/modelFormToModule/save`
 */
const postModelModelFormToModuleSaveRequestConfig: PostModelModelFormToModuleSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_43,
  devUrl: devUrl_0_0_0_43,
  prodUrl: prodUrl_0_0_0_43,
  path: '/model/modelFormToModule/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_43,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelModelFormToModuleSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单生成模型 的 **请求函数**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/modelFormToModule/save`
 */
export const postModelModelFormToModuleSave = /*#__PURE__*/ (
  requestData: PostModelModelFormToModuleSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelModelFormToModuleSaveResponse>(
    prepare(postModelModelFormToModuleSaveRequestConfig, requestData),
    ...args,
  )
}

postModelModelFormToModuleSave.requestConfig = postModelModelFormToModuleSaveRequestConfig

/**
 * 接口 提供默认前缀 的 **请求类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/prefix/getPrefix`
 */
export interface PostModelPrefixGetPrefixRequest {}

/**
 * 接口 提供默认前缀 的 **返回类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/prefix/getPrefix`
 */
export interface PostModelPrefixGetPrefixResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 提供默认前缀 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/prefix/getPrefix`
 */
type PostModelPrefixGetPrefixRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/model/prefix/getPrefix', undefined, string, string, true>
>

/**
 * 接口 提供默认前缀 的 **请求配置**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/prefix/getPrefix`
 */
const postModelPrefixGetPrefixRequestConfig: PostModelPrefixGetPrefixRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_43,
  devUrl: devUrl_0_0_0_43,
  prodUrl: prodUrl_0_0_0_43,
  path: '/model/prefix/getPrefix',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_43,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postModelPrefixGetPrefix',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 提供默认前缀 的 **请求函数**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `POST /model/prefix/getPrefix`
 */
export const postModelPrefixGetPrefix = /*#__PURE__*/ (
  requestData?: PostModelPrefixGetPrefixRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostModelPrefixGetPrefixResponse>(prepare(postModelPrefixGetPrefixRequestConfig, requestData), ...args)
}

postModelPrefixGetPrefix.requestConfig = postModelPrefixGetPrefixRequestConfig

/**
 * 接口 根据项目控件code提供信息 的 **请求类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/project/getMessage`
 */
export interface GetModelProjectGetMessageRequest {
  /**
   * controlTypeCode
   */
  controlTypeCode?: string
}

/**
 * 接口 根据项目控件code提供信息 的 **返回类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/project/getMessage`
 */
export interface GetModelProjectGetMessageResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据项目控件code提供信息 的 **请求配置的类型**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/project/getMessage`
 */
type GetModelProjectGetMessageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/model/project/getMessage',
    undefined,
    string,
    'controlTypeCode',
    false
  >
>

/**
 * 接口 根据项目控件code提供信息 的 **请求配置**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/project/getMessage`
 */
const getModelProjectGetMessageRequestConfig: GetModelProjectGetMessageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_43,
  devUrl: devUrl_0_0_0_43,
  prodUrl: prodUrl_0_0_0_43,
  path: '/model/project/getMessage',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_43,
  paramNames: [],
  queryNames: ['controlTypeCode'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getModelProjectGetMessage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据项目控件code提供信息 的 **请求函数**
 *
 * @分类 【低代码->业务模型】表单生成模型
 * @请求头 `GET /model/project/getMessage`
 */
export const getModelProjectGetMessage = /*#__PURE__*/ (
  requestData: GetModelProjectGetMessageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetModelProjectGetMessageResponse>(
    prepare(getModelProjectGetMessageRequestConfig, requestData),
    ...args,
  )
}

getModelProjectGetMessage.requestConfig = getModelProjectGetMessageRequestConfig

const mockUrl_0_0_0_44 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_44 = '' as any
const prodUrl_0_0_0_44 = '' as any
const dataKey_0_0_0_44 = undefined as any

/**
 * 接口 查询关系列表 的 **请求类型**
 *
 * @分类 obtain-controller
 * @请求头 `GET /druid/obtainList`
 */
export interface GetDruidObtainListRequest {
  /**
   * formId
   */
  formId?: string
  /**
   * formName
   */
  formName?: string
  /**
   * listId
   */
  listId?: string
  /**
   * listName
   */
  listName?: string
  /**
   * menuName
   */
  menuName?: string
  /**
   * modelId
   */
  modelId?: string
  /**
   * modelName
   */
  modelName?: string
}

/**
 * 接口 查询关系列表 的 **返回类型**
 *
 * @分类 obtain-controller
 * @请求头 `GET /druid/obtainList`
 */
export type GetDruidObtainListResponse = any

/**
 * 接口 查询关系列表 的 **请求配置的类型**
 *
 * @分类 obtain-controller
 * @请求头 `GET /druid/obtainList`
 */
type GetDruidObtainListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/druid/obtainList',
    undefined,
    string,
    'formId' | 'formName' | 'listId' | 'listName' | 'menuName' | 'modelId' | 'modelName',
    false
  >
>

/**
 * 接口 查询关系列表 的 **请求配置**
 *
 * @分类 obtain-controller
 * @请求头 `GET /druid/obtainList`
 */
const getDruidObtainListRequestConfig: GetDruidObtainListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_44,
  devUrl: devUrl_0_0_0_44,
  prodUrl: prodUrl_0_0_0_44,
  path: '/druid/obtainList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_44,
  paramNames: [],
  queryNames: ['formId', 'formName', 'listId', 'listName', 'menuName', 'modelId', 'modelName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDruidObtainList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询关系列表 的 **请求函数**
 *
 * @分类 obtain-controller
 * @请求头 `GET /druid/obtainList`
 */
export const getDruidObtainList = /*#__PURE__*/ (
  requestData: GetDruidObtainListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDruidObtainListResponse>(prepare(getDruidObtainListRequestConfig, requestData), ...args)
}

getDruidObtainList.requestConfig = getDruidObtainListRequestConfig

const mockUrl_0_0_0_45 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_45 = '' as any
const prodUrl_0_0_0_45 = '' as any
const dataKey_0_0_0_45 = undefined as any

/**
 * 接口 列表列字段信息添加 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/add`
 */
export interface PostListLabelAddRequest {
  /**
   * 对齐方式1左对齐2居中3右对齐
   */
  alignType?: string
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 模型字段id
   */
  columnId?: string
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 数据删除
   */
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  tabId?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 配置项：config 地址：address 部门：department 人员：user
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 宽度0自适应宽度，其他数值固定宽度，单位px
   */
  width?: number
}

/**
 * 接口 列表列字段信息添加 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/add`
 */
export interface PostListLabelAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表列字段信息添加 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/add`
 */
type PostListLabelAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/add', undefined, string, string, false>
>

/**
 * 接口 列表列字段信息添加 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/add`
 */
const postListLabelAddRequestConfig: PostListLabelAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表列字段信息添加 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/add`
 */
export const postListLabelAdd = /*#__PURE__*/ (requestData: PostListLabelAddRequest, ...args: UserRequestRestArgs) => {
  return request<PostListLabelAddResponse>(prepare(postListLabelAddRequestConfig, requestData), ...args)
}

postListLabelAdd.requestConfig = postListLabelAddRequestConfig

/**
 * 接口 列表值查询 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/dataList`
 */
export interface PostListLabelDataListRequest {
  allProject?: number
  className?: string
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  /**
   * 前端要表单详情的字段列表的标识 0不需要 1需要
   */
  columnMapsFlag?: string
  /**
   * 当前页
   */
  current?: number
  /**
   * 过滤查询条件
   */
  filterList?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 过滤查询条件 兼容或查询
   */
  filterList_2?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[][]
  flag?: string
  /**
   * 表单→关联列表控件→ 弹窗列表字段 的列表
   */
  formColumnIdList?: string[]
  /**
   * 查询条件
   */
  list?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 列表id
   */
  listMainId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务流下推数据过滤
   */
  primaryIdList?: number[]
  /**
   * 主键Key=value
   */
  primaryKey?: string
  /**
   * 项目id，子项目专用
   */
  projectId?: number
  projectIds?: string
  /**
   * 业务规则id
   */
  ruleId?: string
  /**
   * 业务流标记列表
   */
  signList?: number[]
  /**
   * 页面大小
   */
  size?: number
  /**
   * 列表要排序的字段编码
   */
  sortColumnCode?: string
  /**
   * 升序降序 升序：asc 降序：desc
   */
  sortType?: string
  subProjectColumnName?: string
  /**
   * 前端tab控件主键
   */
  tabTimestampId?: string
  /**
   * 1是列表使用,2是表单使用
   */
  useType?: string
  /**
   * 用户id，项目专用
   */
  userId?: number
}

/**
 * 接口 列表值查询 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/dataList`
 */
export interface PostListLabelDataListResponse {
  /**
   * 对齐方式1左对齐2居中3右对齐
   */
  alignType?: string
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 模型字段id
   */
  columnId?: string
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 数据删除
   */
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  tabId?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 配置项：config 地址：address 部门：department 人员：user
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 宽度0自适应宽度，其他数值固定宽度，单位px
   */
  width?: number
}

/**
 * 接口 列表值查询 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/dataList`
 */
type PostListLabelDataListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/dataList', undefined, string, string, false>
>

/**
 * 接口 列表值查询 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/dataList`
 */
const postListLabelDataListRequestConfig: PostListLabelDataListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/dataList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelDataList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表值查询 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/dataList`
 */
export const postListLabelDataList = /*#__PURE__*/ (
  requestData: PostListLabelDataListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelDataListResponse>(prepare(postListLabelDataListRequestConfig, requestData), ...args)
}

postListLabelDataList.requestConfig = postListLabelDataListRequestConfig

/**
 * 接口 列表列字段信息删除 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/delete`
 */
export interface PostListLabelDeleteRequest {
  /**
   * 对齐方式1左对齐2居中3右对齐
   */
  alignType?: string
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 模型字段id
   */
  columnId?: string
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 数据删除
   */
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  tabId?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 配置项：config 地址：address 部门：department 人员：user
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 宽度0自适应宽度，其他数值固定宽度，单位px
   */
  width?: number
}

/**
 * 接口 列表列字段信息删除 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/delete`
 */
export interface PostListLabelDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表列字段信息删除 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/delete`
 */
type PostListLabelDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/delete', undefined, string, string, false>
>

/**
 * 接口 列表列字段信息删除 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/delete`
 */
const postListLabelDeleteRequestConfig: PostListLabelDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表列字段信息删除 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/delete`
 */
export const postListLabelDelete = /*#__PURE__*/ (
  requestData: PostListLabelDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelDeleteResponse>(prepare(postListLabelDeleteRequestConfig, requestData), ...args)
}

postListLabelDelete.requestConfig = postListLabelDeleteRequestConfig

/**
 * 接口 删除列表数据 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/deleteData`
 */
export type PostListLabelDeleteDataRequest = {
  allProject?: number
  className?: string
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  /**
   * 前端要表单详情的字段列表的标识 0不需要 1需要
   */
  columnMapsFlag?: string
  /**
   * 当前页
   */
  current?: number
  /**
   * 过滤查询条件
   */
  filterList?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 过滤查询条件 兼容或查询
   */
  filterList_2?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[][]
  flag?: string
  /**
   * 表单→关联列表控件→ 弹窗列表字段 的列表
   */
  formColumnIdList?: string[]
  /**
   * 查询条件
   */
  list?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 列表id
   */
  listMainId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务流下推数据过滤
   */
  primaryIdList?: number[]
  /**
   * 主键Key=value
   */
  primaryKey?: string
  /**
   * 项目id，子项目专用
   */
  projectId?: number
  projectIds?: string
  /**
   * 业务规则id
   */
  ruleId?: string
  /**
   * 业务流标记列表
   */
  signList?: number[]
  /**
   * 页面大小
   */
  size?: number
  /**
   * 列表要排序的字段编码
   */
  sortColumnCode?: string
  /**
   * 升序降序 升序：asc 降序：desc
   */
  sortType?: string
  subProjectColumnName?: string
  /**
   * 前端tab控件主键
   */
  tabTimestampId?: string
  /**
   * 1是列表使用,2是表单使用
   */
  useType?: string
  /**
   * 用户id，项目专用
   */
  userId?: number
}[]

/**
 * 接口 删除列表数据 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/deleteData`
 */
export interface PostListLabelDeleteDataResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除列表数据 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/deleteData`
 */
type PostListLabelDeleteDataRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/deleteData', undefined, string, string, false>
>

/**
 * 接口 删除列表数据 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/deleteData`
 */
const postListLabelDeleteDataRequestConfig: PostListLabelDeleteDataRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/deleteData',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelDeleteData',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除列表数据 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/deleteData`
 */
export const postListLabelDeleteData = /*#__PURE__*/ (
  requestData: PostListLabelDeleteDataRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelDeleteDataResponse>(prepare(postListLabelDeleteDataRequestConfig, requestData), ...args)
}

postListLabelDeleteData.requestConfig = postListLabelDeleteDataRequestConfig

/**
 * 接口 表单查询列表值使用 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/form/List`
 */
export interface PostListLabelFormListRequest {
  allProject?: number
  className?: string
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  /**
   * 前端要表单详情的字段列表的标识 0不需要 1需要
   */
  columnMapsFlag?: string
  /**
   * 当前页
   */
  current?: number
  /**
   * 过滤查询条件
   */
  filterList?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 过滤查询条件 兼容或查询
   */
  filterList_2?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[][]
  flag?: string
  /**
   * 表单→关联列表控件→ 弹窗列表字段 的列表
   */
  formColumnIdList?: string[]
  /**
   * 查询条件
   */
  list?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 列表id
   */
  listMainId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务流下推数据过滤
   */
  primaryIdList?: number[]
  /**
   * 主键Key=value
   */
  primaryKey?: string
  /**
   * 项目id，子项目专用
   */
  projectId?: number
  projectIds?: string
  /**
   * 业务规则id
   */
  ruleId?: string
  /**
   * 业务流标记列表
   */
  signList?: number[]
  /**
   * 页面大小
   */
  size?: number
  /**
   * 列表要排序的字段编码
   */
  sortColumnCode?: string
  /**
   * 升序降序 升序：asc 降序：desc
   */
  sortType?: string
  subProjectColumnName?: string
  /**
   * 前端tab控件主键
   */
  tabTimestampId?: string
  /**
   * 1是列表使用,2是表单使用
   */
  useType?: string
  /**
   * 用户id，项目专用
   */
  userId?: number
}

/**
 * 接口 表单查询列表值使用 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/form/List`
 */
export interface PostListLabelFormListResponse {
  /**
   * 对齐方式1左对齐2居中3右对齐
   */
  alignType?: string
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 模型字段id
   */
  columnId?: string
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 数据删除
   */
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  tabId?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 配置项：config 地址：address 部门：department 人员：user
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 宽度0自适应宽度，其他数值固定宽度，单位px
   */
  width?: number
}

/**
 * 接口 表单查询列表值使用 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/form/List`
 */
type PostListLabelFormListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/form/List', undefined, string, string, false>
>

/**
 * 接口 表单查询列表值使用 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/form/List`
 */
const postListLabelFormListRequestConfig: PostListLabelFormListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/form/List',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelFormList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单查询列表值使用 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/form/List`
 */
export const postListLabelFormList = /*#__PURE__*/ (
  requestData: PostListLabelFormListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelFormListResponse>(prepare(postListLabelFormListRequestConfig, requestData), ...args)
}

postListLabelFormList.requestConfig = postListLabelFormListRequestConfig

/**
 * 接口 根据列表ID获取来源数据ID 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `GET /list/label/getListOriginDataId`
 */
export interface GetListLabelGetListOriginDataIdRequest {
  /**
   * 列表ID不能为空
   */
  listMainId?: string
  /**
   * 列表关联ID
   */
  relatedId?: string
  /**
   * originListId
   */
  originListId: string
}

/**
 * 接口 根据列表ID获取来源数据ID 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `GET /list/label/getListOriginDataId`
 */
export interface GetListLabelGetListOriginDataIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据列表ID获取来源数据ID 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `GET /list/label/getListOriginDataId`
 */
type GetListLabelGetListOriginDataIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/list/label/getListOriginDataId',
    undefined,
    string,
    'listMainId' | 'relatedId' | 'originListId',
    false
  >
>

/**
 * 接口 根据列表ID获取来源数据ID 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `GET /list/label/getListOriginDataId`
 */
const getListLabelGetListOriginDataIdRequestConfig: GetListLabelGetListOriginDataIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/getListOriginDataId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: ['listMainId', 'relatedId', 'originListId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListLabelGetListOriginDataId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据列表ID获取来源数据ID 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `GET /list/label/getListOriginDataId`
 */
export const getListLabelGetListOriginDataId = /*#__PURE__*/ (
  requestData: GetListLabelGetListOriginDataIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListLabelGetListOriginDataIdResponse>(
    prepare(getListLabelGetListOriginDataIdRequestConfig, requestData),
    ...args,
  )
}

getListLabelGetListOriginDataId.requestConfig = getListLabelGetListOriginDataIdRequestConfig

/**
 * 接口 列表链接权限 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkPermission`
 */
export interface PostListLabelLinkPermissionRequest {
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 数据id
   */
  dataId?: string
  /**
   * 列表id
   */
  listId?: string
  /**
   * 菜单校验权限开关 false：不校验 true：校验
   */
  permissionSwitch?: boolean
}

/**
 * 接口 列表链接权限 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkPermission`
 */
export interface PostListLabelLinkPermissionResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表链接权限 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkPermission`
 */
type PostListLabelLinkPermissionRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/linkPermission', undefined, string, string, false>
>

/**
 * 接口 列表链接权限 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkPermission`
 */
const postListLabelLinkPermissionRequestConfig: PostListLabelLinkPermissionRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/linkPermission',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelLinkPermission',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表链接权限 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkPermission`
 */
export const postListLabelLinkPermission = /*#__PURE__*/ (
  requestData: PostListLabelLinkPermissionRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelLinkPermissionResponse>(
    prepare(postListLabelLinkPermissionRequestConfig, requestData),
    ...args,
  )
}

postListLabelLinkPermission.requestConfig = postListLabelLinkPermissionRequestConfig

/**
 * 接口 列表链接跳转 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkRedirect`
 */
export interface PostListLabelLinkRedirectRequest {
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 数据id
   */
  dataId?: string
  /**
   * 列表id
   */
  listId?: string
  /**
   * 菜单校验权限开关 false：不校验 true：校验
   */
  permissionSwitch?: boolean
}

/**
 * 接口 列表链接跳转 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkRedirect`
 */
export interface PostListLabelLinkRedirectResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表链接跳转 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkRedirect`
 */
type PostListLabelLinkRedirectRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/linkRedirect', undefined, string, string, false>
>

/**
 * 接口 列表链接跳转 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkRedirect`
 */
const postListLabelLinkRedirectRequestConfig: PostListLabelLinkRedirectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/linkRedirect',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelLinkRedirect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表链接跳转 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/linkRedirect`
 */
export const postListLabelLinkRedirect = /*#__PURE__*/ (
  requestData: PostListLabelLinkRedirectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelLinkRedirectResponse>(
    prepare(postListLabelLinkRedirectRequestConfig, requestData),
    ...args,
  )
}

postListLabelLinkRedirect.requestConfig = postListLabelLinkRedirectRequestConfig

/**
 * 接口 列表列字段信息修改 的 **请求类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/update`
 */
export interface PostListLabelUpdateRequest {
  /**
   * 对齐方式1左对齐2居中3右对齐
   */
  alignType?: string
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 模型字段id
   */
  columnId?: string
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 数据删除
   */
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  tabId?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 配置项：config 地址：address 部门：department 人员：user
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 宽度0自适应宽度，其他数值固定宽度，单位px
   */
  width?: number
}

/**
 * 接口 列表列字段信息修改 的 **返回类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/update`
 */
export interface PostListLabelUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表列字段信息修改 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/update`
 */
type PostListLabelUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/update', undefined, string, string, false>
>

/**
 * 接口 列表列字段信息修改 的 **请求配置**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/update`
 */
const postListLabelUpdateRequestConfig: PostListLabelUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_45,
  devUrl: devUrl_0_0_0_45,
  prodUrl: prodUrl_0_0_0_45,
  path: '/list/label/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_45,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表列字段信息修改 的 **请求函数**
 *
 * @分类 【低代码->列表】列表label相关操作
 * @请求头 `POST /list/label/update`
 */
export const postListLabelUpdate = /*#__PURE__*/ (
  requestData: PostListLabelUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelUpdateResponse>(prepare(postListLabelUpdateRequestConfig, requestData), ...args)
}

postListLabelUpdate.requestConfig = postListLabelUpdateRequestConfig

const mockUrl_0_0_0_46 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_46 = '' as any
const prodUrl_0_0_0_46 = '' as any
const dataKey_0_0_0_46 = undefined as any

/**
 * 接口 列表应用层 的 **请求类型**
 *
 * @分类 【低代码->列表】列表应用层
 * @请求头 `POST /list/label/dataList2`
 */
export interface PostListLabelDataList2Request {
  allProject?: number
  /**
   * 类路径
   */
  className?: string
  /**
   * 业务流数据过滤模型对应模板字段
   */
  columnMap?: {}
  /**
   * 前端要表单详情的字段列表的标识 0不需要 1需要
   */
  columnMapsFlag?: string
  /**
   * 当前页
   */
  current?: number
  dataQueryInterceptEventDTO?: {
    [k: string]: unknown
  }
  /**
   * 过滤查询条件
   */
  filterList?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 过滤查询条件
   */
  filterList_2?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[][]
  flag?: string
  /**
   * 表单→关联列表控件→ 弹窗列表字段 的列表
   */
  formColumnIdList?: string[]
  /**
   * 查询条件列表
   */
  list?: {
    /**
     * 业务类型
     */
    businessType?: number
    /**
     * 子表模型id
     */
    childModelId?: string
    /**
     * 拼接好的字段，方便。例如table.name
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 业务模型字段的数据类型（拿过来不能编辑）
     */
    columnType?: string
    /**
     * 配置项id
     */
    configItemId?: string
    /**
     * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
     * 9人员10部门11配置项12地址13数组14关联15计算公式
     * 16引用17项目
     */
    controlType?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 区别手输、绑定列表id 1：手输 2：绑定列表id
     */
    formRelationStatus?: number
    id?: string
    isDel?: number
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * 业务模型字段的注释（拿过来不能编辑）
     */
    name?: string
    /**
     * 查询条件设置
     */
    searchCondition?: string
    /**
     * 查询类型1模糊2精准3范围4精准(单)5精准(多)
     */
    searchType?: number
    /**
     * 下来查询数据源
     */
    source?: string
    tabId?: string
    /**
     * 标题，字段名称可编辑
     */
    title?: string
    /**
     * 0 是普通 1.是左侧树
     */
    treeType?: number
    /**
     * 1数据过滤,2是条件查询
     */
    type?: number
    /**
     * 修改时间
     */
    updateTime?: string
    /**
     * 查询的值
     */
    value?: string
  }[]
  /**
   * 列表id
   */
  listMainId?: string
  /**
   * 主模型id
   */
  modelId?: string
  /**
   * 业务流下推数据过滤
   */
  primaryIdList?: number[]
  /**
   * 主键Key=value
   */
  primaryKey?: string
  /**
   * 项目id，子项目专用
   */
  projectId?: number
  projectIds?: string
  /**
   * 业务规则id
   */
  ruleId?: string
  /**
   * 业务流标记列表
   */
  signList?: number[]
  /**
   * 页面大小
   */
  size?: number
  /**
   * 按照列字段排序-列表要排序的字段编码
   */
  sortColumnCode?: string
  /**
   * 按照列字段排序-升序降序标识 升序：asc 降序：desc
   */
  sortType?: string
  subProjectColumnName?: string
  /**
   * 前端tab控件主键
   */
  tabTimestampId?: string
  /**
   * 使用类型 1列表应用层自身使用 2关联列表使用 3项目使用 4 5
   */
  useType?: string
  /**
   * 用户id，项目专用
   */
  userId?: number
}

/**
 * 接口 列表应用层 的 **返回类型**
 *
 * @分类 【低代码->列表】列表应用层
 * @请求头 `POST /list/label/dataList2`
 */
export interface PostListLabelDataList2Response {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表应用层 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表应用层
 * @请求头 `POST /list/label/dataList2`
 */
type PostListLabelDataList2RequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/label/dataList2', undefined, string, string, false>
>

/**
 * 接口 列表应用层 的 **请求配置**
 *
 * @分类 【低代码->列表】列表应用层
 * @请求头 `POST /list/label/dataList2`
 */
const postListLabelDataList2RequestConfig: PostListLabelDataList2RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_46,
  devUrl: devUrl_0_0_0_46,
  prodUrl: prodUrl_0_0_0_46,
  path: '/list/label/dataList2',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_46,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListLabelDataList2',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表应用层 的 **请求函数**
 *
 * @分类 【低代码->列表】列表应用层
 * @请求头 `POST /list/label/dataList2`
 */
export const postListLabelDataList2 = /*#__PURE__*/ (
  requestData: PostListLabelDataList2Request,
  ...args: UserRequestRestArgs
) => {
  return request<PostListLabelDataList2Response>(prepare(postListLabelDataList2RequestConfig, requestData), ...args)
}

postListLabelDataList2.requestConfig = postListLabelDataList2RequestConfig

const mockUrl_0_0_0_47 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_47 = '' as any
const prodUrl_0_0_0_47 = '' as any
const dataKey_0_0_0_47 = undefined as any

/**
 * 接口 列表主信息复制功能 的 **请求类型**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/copySave`
 */
export interface PostListMainCopySaveRequest {
  description?: string
  listMainId?: string
  listView?: number
  modelId?: string
  morePushDown?: {
    merge?: boolean
    ruleIds?: string[]
    userIds?: number[]
  }
  name?: string
  sqlUniqueMark?: string[]
  widgetJson?: string
}

/**
 * 接口 列表主信息复制功能 的 **返回类型**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/copySave`
 */
export interface PostListMainCopySaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息复制功能 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/copySave`
 */
type PostListMainCopySaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/copySave', undefined, string, string, false>
>

/**
 * 接口 列表主信息复制功能 的 **请求配置**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/copySave`
 */
const postListMainCopySaveRequestConfig: PostListMainCopySaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_47,
  devUrl: devUrl_0_0_0_47,
  prodUrl: prodUrl_0_0_0_47,
  path: '/list/main/copySave',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_47,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListMainCopySave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息复制功能 的 **请求函数**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/copySave`
 */
export const postListMainCopySave = /*#__PURE__*/ (
  requestData: PostListMainCopySaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListMainCopySaveResponse>(prepare(postListMainCopySaveRequestConfig, requestData), ...args)
}

postListMainCopySave.requestConfig = postListMainCopySaveRequestConfig

/**
 * 接口 列表界面数据保存入口 的 **请求类型**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/save`
 */
export interface PostListMainSaveRequest {
  description?: string
  listMainId?: string
  listView?: number
  modelId?: string
  morePushDown?: {
    merge?: boolean
    ruleIds?: string[]
    userIds?: number[]
  }
  name?: string
  sqlUniqueMark?: string[]
  widgetJson?: string
}

/**
 * 接口 列表界面数据保存入口 的 **返回类型**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/save`
 */
export interface PostListMainSaveResponse {
  [k: string]: unknown
}

/**
 * 接口 列表界面数据保存入口 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/save`
 */
type PostListMainSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/save', undefined, string, string, false>
>

/**
 * 接口 列表界面数据保存入口 的 **请求配置**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/save`
 */
const postListMainSaveRequestConfig: PostListMainSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_47,
  devUrl: devUrl_0_0_0_47,
  prodUrl: prodUrl_0_0_0_47,
  path: '/list/main/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_47,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListMainSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表界面数据保存入口 的 **请求函数**
 *
 * @分类 【低代码->列表】列表数据保存和复制功能
 * @请求头 `POST /list/main/save`
 */
export const postListMainSave = /*#__PURE__*/ (requestData: PostListMainSaveRequest, ...args: UserRequestRestArgs) => {
  return request<PostListMainSaveResponse>(prepare(postListMainSaveRequestConfig, requestData), ...args)
}

postListMainSave.requestConfig = postListMainSaveRequestConfig

const mockUrl_0_0_0_48 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_48 = '' as any
const prodUrl_0_0_0_48 = '' as any
const dataKey_0_0_0_48 = undefined as any

/**
 * 接口 列表（查询\/过滤）信息添加 的 **请求类型**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/add`
 */
export interface PostListSearchSearchAddRequest {
  /**
   * 业务类型
   */
  businessType?: number
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 拼接好的字段，方便。例如table.name
   */
  columnCode?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 业务模型字段的数据类型（拿过来不能编辑）
   */
  columnType?: string
  /**
   * 配置项id
   */
  configItemId?: string
  /**
   * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
   * 9人员10部门11配置项12地址13数组14关联15计算公式
   * 16引用17项目
   */
  controlType?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 区别手输、绑定列表id 1：手输 2：绑定列表id
   */
  formRelationStatus?: number
  id?: string
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务模型字段的注释（拿过来不能编辑）
   */
  name?: string
  /**
   * 查询条件设置
   */
  searchCondition?: string
  /**
   * 查询类型1模糊2精准3范围4精准(单)5精准(多)
   */
  searchType?: number
  /**
   * 下来查询数据源
   */
  source?: string
  tabId?: string
  /**
   * 标题，字段名称可编辑
   */
  title?: string
  /**
   * 0 是普通 1.是左侧树
   */
  treeType?: number
  /**
   * 1数据过滤,2是条件查询
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 查询的值
   */
  value?: string
}

/**
 * 接口 列表（查询\/过滤）信息添加 的 **返回类型**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/add`
 */
export interface PostListSearchSearchAddResponse {
  /**
   * 业务类型
   */
  businessType?: number
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 拼接好的字段，方便。例如table.name
   */
  columnCode?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 业务模型字段的数据类型（拿过来不能编辑）
   */
  columnType?: string
  /**
   * 配置项id
   */
  configItemId?: string
  /**
   * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
   * 9人员10部门11配置项12地址13数组14关联15计算公式
   * 16引用17项目
   */
  controlType?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 区别手输、绑定列表id 1：手输 2：绑定列表id
   */
  formRelationStatus?: number
  id?: string
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务模型字段的注释（拿过来不能编辑）
   */
  name?: string
  /**
   * 查询条件设置
   */
  searchCondition?: string
  /**
   * 查询类型1模糊2精准3范围4精准(单)5精准(多)
   */
  searchType?: number
  /**
   * 下来查询数据源
   */
  source?: string
  tabId?: string
  /**
   * 标题，字段名称可编辑
   */
  title?: string
  /**
   * 0 是普通 1.是左侧树
   */
  treeType?: number
  /**
   * 1数据过滤,2是条件查询
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 查询的值
   */
  value?: string
}

/**
 * 接口 列表（查询\/过滤）信息添加 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/add`
 */
type PostListSearchSearchAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/listSearch/search/add', undefined, string, string, false>
>

/**
 * 接口 列表（查询\/过滤）信息添加 的 **请求配置**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/add`
 */
const postListSearchSearchAddRequestConfig: PostListSearchSearchAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_48,
  devUrl: devUrl_0_0_0_48,
  prodUrl: prodUrl_0_0_0_48,
  path: '/listSearch/search/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_48,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListSearchSearchAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表（查询\/过滤）信息添加 的 **请求函数**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/add`
 */
export const postListSearchSearchAdd = /*#__PURE__*/ (
  requestData: PostListSearchSearchAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListSearchSearchAddResponse>(prepare(postListSearchSearchAddRequestConfig, requestData), ...args)
}

postListSearchSearchAdd.requestConfig = postListSearchSearchAddRequestConfig

/**
 * 接口 列表（查询\/过滤）信息修改 的 **请求类型**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/update`
 */
export interface PostListSearchSearchUpdateRequest {
  /**
   * 业务类型
   */
  businessType?: number
  /**
   * 子表模型id
   */
  childModelId?: string
  /**
   * 拼接好的字段，方便。例如table.name
   */
  columnCode?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 业务模型字段的数据类型（拿过来不能编辑）
   */
  columnType?: string
  /**
   * 配置项id
   */
  configItemId?: string
  /**
   * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
   * 9人员10部门11配置项12地址13数组14关联15计算公式
   * 16引用17项目
   */
  controlType?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 区别手输、绑定列表id 1：手输 2：绑定列表id
   */
  formRelationStatus?: number
  id?: string
  isDel?: number
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务模型字段的注释（拿过来不能编辑）
   */
  name?: string
  /**
   * 查询条件设置
   */
  searchCondition?: string
  /**
   * 查询类型1模糊2精准3范围4精准(单)5精准(多)
   */
  searchType?: number
  /**
   * 下来查询数据源
   */
  source?: string
  tabId?: string
  /**
   * 标题，字段名称可编辑
   */
  title?: string
  /**
   * 0 是普通 1.是左侧树
   */
  treeType?: number
  /**
   * 1数据过滤,2是条件查询
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 查询的值
   */
  value?: string
}

/**
 * 接口 列表（查询\/过滤）信息修改 的 **返回类型**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/update`
 */
export interface PostListSearchSearchUpdateResponse {
  /**
   * 拼接好的字段，方便。例如table.name
   */
  column?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 业务模型字段的数据类型（拿过来不能编辑）
   */
  columnType?: string
  /**
   * 查询条件设置
   */
  condition?: string
  /**
   * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
   * 9人员10部门11配置项12地址13数组14关联15计算公式
   * 16引用17项目
   */
  controlType?: string
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  isDel?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 业务模型字段的注释（拿过来不能编辑）
   */
  name?: string
  /**
   * 查询类型1模糊2精准3范围
   */
  searchType?: string
  /**
   * 下来查询数据源
   */
  source?: string
  tabId?: string
  /**
   * 标题，字段名称可编辑
   */
  title?: string
  /**
   * 1数据过滤,2是条件查询
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表（查询\/过滤）信息修改 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/update`
 */
type PostListSearchSearchUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/listSearch/search/update', undefined, string, string, false>
>

/**
 * 接口 列表（查询\/过滤）信息修改 的 **请求配置**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/update`
 */
const postListSearchSearchUpdateRequestConfig: PostListSearchSearchUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_48,
  devUrl: devUrl_0_0_0_48,
  prodUrl: prodUrl_0_0_0_48,
  path: '/listSearch/search/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_48,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListSearchSearchUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表（查询\/过滤）信息修改 的 **请求函数**
 *
 * @分类 【低代码->列表】列表数据搜索功能
 * @请求头 `POST /listSearch/search/update`
 */
export const postListSearchSearchUpdate = /*#__PURE__*/ (
  requestData: PostListSearchSearchUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListSearchSearchUpdateResponse>(
    prepare(postListSearchSearchUpdateRequestConfig, requestData),
    ...args,
  )
}

postListSearchSearchUpdate.requestConfig = postListSearchSearchUpdateRequestConfig

const mockUrl_0_0_0_49 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_49 = '' as any
const prodUrl_0_0_0_49 = '' as any
const dataKey_0_0_0_49 = undefined as any

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息添加 的 **请求类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/add`
 */
export interface PostListTabAddRequest {
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 删除
   */
  isDel?: number
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 列表id
   */
  mainId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * tap切换名称
   */
  name?: string
  /**
   * 选型框设置0单选1多选
   */
  optionBox?: number
  /**
   * 分页大小
   */
  pageSize?: number
  /**
   * 分页设置0不分页1分页
   */
  pageType?: number
  /**
   * 默认排序字段
   */
  sortColumnId?: string
  /**
   * 默认排序字段名称
   */
  sortColumnName?: string
  /**
   * 排序类型1降序2正序
   */
  sortType?: string
  /**
   * 前端控件id
   */
  tabTimestampId?: string
  /**
   * 1上下2左右3隐藏，查询统一样式
   */
  titleLayout?: number
  /**
   * 1普通列表2左侧树列表
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息添加 的 **返回类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/add`
 */
export interface PostListTabAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息添加 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/add`
 */
type PostListTabAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/tab/add', undefined, string, string, false>
>

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息添加 的 **请求配置**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/add`
 */
const postListTabAddRequestConfig: PostListTabAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_49,
  devUrl: devUrl_0_0_0_49,
  prodUrl: prodUrl_0_0_0_49,
  path: '/list/tab/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_49,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListTabAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息添加 的 **请求函数**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/add`
 */
export const postListTabAdd = /*#__PURE__*/ (requestData: PostListTabAddRequest, ...args: UserRequestRestArgs) => {
  return request<PostListTabAddResponse>(prepare(postListTabAddRequestConfig, requestData), ...args)
}

postListTabAdd.requestConfig = postListTabAddRequestConfig

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息删除 的 **请求类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/delete`
 */
export interface PostListTabDeleteRequest {
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 删除
   */
  isDel?: number
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 列表id
   */
  mainId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * tap切换名称
   */
  name?: string
  /**
   * 选型框设置0单选1多选
   */
  optionBox?: number
  /**
   * 分页大小
   */
  pageSize?: number
  /**
   * 分页设置0不分页1分页
   */
  pageType?: number
  /**
   * 默认排序字段
   */
  sortColumnId?: string
  /**
   * 默认排序字段名称
   */
  sortColumnName?: string
  /**
   * 排序类型1降序2正序
   */
  sortType?: string
  /**
   * 前端控件id
   */
  tabTimestampId?: string
  /**
   * 1上下2左右3隐藏，查询统一样式
   */
  titleLayout?: number
  /**
   * 1普通列表2左侧树列表
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息删除 的 **返回类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/delete`
 */
export interface PostListTabDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息删除 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/delete`
 */
type PostListTabDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/tab/delete', undefined, string, string, false>
>

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息删除 的 **请求配置**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/delete`
 */
const postListTabDeleteRequestConfig: PostListTabDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_49,
  devUrl: devUrl_0_0_0_49,
  prodUrl: prodUrl_0_0_0_49,
  path: '/list/tab/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_49,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListTabDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息删除 的 **请求函数**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/delete`
 */
export const postListTabDelete = /*#__PURE__*/ (
  requestData: PostListTabDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListTabDeleteResponse>(prepare(postListTabDeleteRequestConfig, requestData), ...args)
}

postListTabDelete.requestConfig = postListTabDeleteRequestConfig

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息修改 的 **请求类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/update`
 */
export interface PostListTabUpdateRequest {
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 删除
   */
  isDel?: number
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 列表id
   */
  mainId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * tap切换名称
   */
  name?: string
  /**
   * 选型框设置0单选1多选
   */
  optionBox?: number
  /**
   * 分页大小
   */
  pageSize?: number
  /**
   * 分页设置0不分页1分页
   */
  pageType?: number
  /**
   * 默认排序字段
   */
  sortColumnId?: string
  /**
   * 默认排序字段名称
   */
  sortColumnName?: string
  /**
   * 排序类型1降序2正序
   */
  sortType?: string
  /**
   * 前端控件id
   */
  tabTimestampId?: string
  /**
   * 1上下2左右3隐藏，查询统一样式
   */
  titleLayout?: number
  /**
   * 1普通列表2左侧树列表
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息修改 的 **返回类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/update`
 */
export interface PostListTabUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息修改 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/update`
 */
type PostListTabUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/tab/update', undefined, string, string, false>
>

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息修改 的 **请求配置**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/update`
 */
const postListTabUpdateRequestConfig: PostListTabUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_49,
  devUrl: devUrl_0_0_0_49,
  prodUrl: prodUrl_0_0_0_49,
  path: '/list/tab/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_49,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListTabUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表（tab页\/只有一个tab默认是主页面）信息修改 的 **请求函数**
 *
 * @分类 【低代码->列表】列表标签功能相关使用
 * @请求头 `POST /list/tab/update`
 */
export const postListTabUpdate = /*#__PURE__*/ (
  requestData: PostListTabUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListTabUpdateResponse>(prepare(postListTabUpdateRequestConfig, requestData), ...args)
}

postListTabUpdate.requestConfig = postListTabUpdateRequestConfig

const mockUrl_0_0_0_50 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_50 = '' as any
const prodUrl_0_0_0_50 = '' as any
const dataKey_0_0_0_50 = undefined as any

/**
 * 接口 列表主信息添加 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/add`
 */
export interface PostListMainAddRequest {
  /**
   * 子表信息模型id列表 0停用 1启用
   */
  childModelIdList?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 当前页
   */
  current?: number
  /**
   * 列表设计器描述
   */
  description?: string
  id?: string
  /**
   * 是否删除:0否1是
   */
  isDel?: number
  /**
   * 前端json数据
   */
  jsonContent?: string
  /**
   * 1：普通表格 2：树形表格 3：左侧树形+普通表格
   */
  listView?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 列表关联的模型ID
   */
  modelId?: string
  /**
   * 列表设计器名称
   */
  name?: string
  /**
   * 显示子表信息标识 0：不显示 1：显示
   */
  showChildMessageFlag?: number
  /**
   * 分页大小
   */
  size?: number
  /**
   * ‘显示合计’字段列表
   */
  totalColumnIdList?: string
  /**
   * 树形字段
   */
  treeColumnId?: string
  /**
   * 默认展开状态:展开全部 1:指定层级 2:收起全部(type=3)
   */
  treeExpandType?: number
  /**
   * 指定层级的数值(type=3)
   */
  treeExpandTypeExt?: number
  /**
   * 指定节点的数值(type=3)
   */
  treeOptionalLayerExt?: number
  /**
   * 可选层级类型:全部节点 1：指定节点 2：仅末级节点(type=3)
   */
  treeOptionalLayerType?: number
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 列表主信息添加 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/add`
 */
export interface PostListMainAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息添加 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/add`
 */
type PostListMainAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/add', undefined, string, string, false>
>

/**
 * 接口 列表主信息添加 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/add`
 */
const postListMainAddRequestConfig: PostListMainAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListMainAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息添加 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/add`
 */
export const postListMainAdd = /*#__PURE__*/ (requestData: PostListMainAddRequest, ...args: UserRequestRestArgs) => {
  return request<PostListMainAddResponse>(prepare(postListMainAddRequestConfig, requestData), ...args)
}

postListMainAdd.requestConfig = postListMainAddRequestConfig

/**
 * 接口 列表主信息条件查询列表 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/conditionList`
 */
export interface PostListMainConditionListRequest {
  /**
   * 子表信息模型id列表 0停用 1启用
   */
  childModelIdList?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 当前页
   */
  current?: number
  /**
   * 列表设计器描述
   */
  description?: string
  id?: string
  /**
   * 是否删除:0否1是
   */
  isDel?: number
  /**
   * 前端json数据
   */
  jsonContent?: string
  /**
   * 1：普通表格 2：树形表格 3：左侧树形+普通表格
   */
  listView?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 列表关联的模型ID
   */
  modelId?: string
  /**
   * 列表设计器名称
   */
  name?: string
  /**
   * 显示子表信息标识 0：不显示 1：显示
   */
  showChildMessageFlag?: number
  /**
   * 分页大小
   */
  size?: number
  /**
   * ‘显示合计’字段列表
   */
  totalColumnIdList?: string
  /**
   * 树形字段
   */
  treeColumnId?: string
  /**
   * 默认展开状态:展开全部 1:指定层级 2:收起全部(type=3)
   */
  treeExpandType?: number
  /**
   * 指定层级的数值(type=3)
   */
  treeExpandTypeExt?: number
  /**
   * 指定节点的数值(type=3)
   */
  treeOptionalLayerExt?: number
  /**
   * 可选层级类型:全部节点 1：指定节点 2：仅末级节点(type=3)
   */
  treeOptionalLayerType?: number
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 列表主信息条件查询列表 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/conditionList`
 */
export interface PostListMainConditionListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息条件查询列表 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/conditionList`
 */
type PostListMainConditionListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/conditionList', undefined, string, string, false>
>

/**
 * 接口 列表主信息条件查询列表 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/conditionList`
 */
const postListMainConditionListRequestConfig: PostListMainConditionListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/conditionList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListMainConditionList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息条件查询列表 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/conditionList`
 */
export const postListMainConditionList = /*#__PURE__*/ (
  requestData: PostListMainConditionListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListMainConditionListResponse>(
    prepare(postListMainConditionListRequestConfig, requestData),
    ...args,
  )
}

postListMainConditionList.requestConfig = postListMainConditionListRequestConfig

/**
 * 接口 列表主信息删除 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/delete`
 */
export interface GetListMainDeleteRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 列表主信息删除 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/delete`
 */
export interface GetListMainDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息删除 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/delete`
 */
type GetListMainDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/delete', undefined, string, 'id', false>
>

/**
 * 接口 列表主信息删除 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/delete`
 */
const getListMainDeleteRequestConfig: GetListMainDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListMainDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息删除 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/delete`
 */
export const getListMainDelete = /*#__PURE__*/ (
  requestData: GetListMainDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListMainDeleteResponse>(prepare(getListMainDeleteRequestConfig, requestData), ...args)
}

getListMainDelete.requestConfig = getListMainDeleteRequestConfig

/**
 * 接口 列表主信息查询详情 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/details`
 */
export interface GetListMainDetailsRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 列表主信息查询详情 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/details`
 */
export interface GetListMainDetailsResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息查询详情 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/details`
 */
type GetListMainDetailsRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/details', undefined, string, 'id', false>
>

/**
 * 接口 列表主信息查询详情 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/details`
 */
const getListMainDetailsRequestConfig: GetListMainDetailsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/details',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListMainDetails',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息查询详情 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/details`
 */
export const getListMainDetails = /*#__PURE__*/ (
  requestData: GetListMainDetailsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListMainDetailsResponse>(prepare(getListMainDetailsRequestConfig, requestData), ...args)
}

getListMainDetails.requestConfig = getListMainDetailsRequestConfig

/**
 * 接口 列表左侧树形结构 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/leftTree`
 */
export interface GetListMainLeftTreeRequest {
  /**
   * 通用id（配置项id、……）
   */
  id?: string
  /**
   * 数据类型（参考model_data_type表）,config：配置项、department：部门
   */
  modelDataType: string
  /**
   * 查询参数
   */
  name?: string
}

/**
 * 接口 列表左侧树形结构 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/leftTree`
 */
export interface GetListMainLeftTreeResponse {
  code?: string
  data?: {
    /**
     * 树儿子
     */
    children?: {
      [k: string]: unknown
    }[]
    /**
     * 树节点id
     */
    id?: string
    /**
     * 树节点名称
     */
    name?: string
    /**
     * 树父节点id
     */
    parentId?: string
    /**
     * 层级
     */
    rank?: number
    /**
     * 排序
     */
    sort?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表左侧树形结构 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/leftTree`
 */
type GetListMainLeftTreeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/list/main/leftTree',
    undefined,
    string,
    'id' | 'modelDataType' | 'name',
    false
  >
>

/**
 * 接口 列表左侧树形结构 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/leftTree`
 */
const getListMainLeftTreeRequestConfig: GetListMainLeftTreeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/leftTree',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: ['id', 'modelDataType', 'name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListMainLeftTree',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表左侧树形结构 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/leftTree`
 */
export const getListMainLeftTree = /*#__PURE__*/ (
  requestData: GetListMainLeftTreeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListMainLeftTreeResponse>(prepare(getListMainLeftTreeRequestConfig, requestData), ...args)
}

getListMainLeftTree.requestConfig = getListMainLeftTreeRequestConfig

/**
 * 接口 列表主信息查询列表 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/list`
 */
export interface GetListMainListRequest {}

/**
 * 接口 列表主信息查询列表 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/list`
 */
export interface GetListMainListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息查询列表 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/list`
 */
type GetListMainListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/list', undefined, string, string, true>
>

/**
 * 接口 列表主信息查询列表 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/list`
 */
const getListMainListRequestConfig: GetListMainListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListMainList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息查询列表 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/list`
 */
export const getListMainList = /*#__PURE__*/ (requestData?: GetListMainListRequest, ...args: UserRequestRestArgs) => {
  return request<GetListMainListResponse>(prepare(getListMainListRequestConfig, requestData), ...args)
}

getListMainList.requestConfig = getListMainListRequestConfig

/**
 * 接口 列表主信息查询列表树形结构 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/treeList`
 */
export interface GetListMainTreeListRequest {}

/**
 * 接口 列表主信息查询列表树形结构 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/treeList`
 */
export interface GetListMainTreeListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息查询列表树形结构 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/treeList`
 */
type GetListMainTreeListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/treeList', undefined, string, string, true>
>

/**
 * 接口 列表主信息查询列表树形结构 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/treeList`
 */
const getListMainTreeListRequestConfig: GetListMainTreeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/treeList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListMainTreeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息查询列表树形结构 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `GET /list/main/treeList`
 */
export const getListMainTreeList = /*#__PURE__*/ (
  requestData?: GetListMainTreeListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListMainTreeListResponse>(prepare(getListMainTreeListRequestConfig, requestData), ...args)
}

getListMainTreeList.requestConfig = getListMainTreeListRequestConfig

/**
 * 接口 列表主信息修改 的 **请求类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/update`
 */
export interface PostListMainUpdateRequest {
  /**
   * 子表信息模型id列表 0停用 1启用
   */
  childModelIdList?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 当前页
   */
  current?: number
  /**
   * 列表设计器描述
   */
  description?: string
  id?: string
  /**
   * 是否删除:0否1是
   */
  isDel?: number
  /**
   * 前端json数据
   */
  jsonContent?: string
  /**
   * 1：普通表格 2：树形表格 3：左侧树形+普通表格
   */
  listView?: number
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 列表关联的模型ID
   */
  modelId?: string
  /**
   * 列表设计器名称
   */
  name?: string
  /**
   * 显示子表信息标识 0：不显示 1：显示
   */
  showChildMessageFlag?: number
  /**
   * 分页大小
   */
  size?: number
  /**
   * ‘显示合计’字段列表
   */
  totalColumnIdList?: string
  /**
   * 树形字段
   */
  treeColumnId?: string
  /**
   * 默认展开状态:展开全部 1:指定层级 2:收起全部(type=3)
   */
  treeExpandType?: number
  /**
   * 指定层级的数值(type=3)
   */
  treeExpandTypeExt?: number
  /**
   * 指定节点的数值(type=3)
   */
  treeOptionalLayerExt?: number
  /**
   * 可选层级类型:全部节点 1：指定节点 2：仅末级节点(type=3)
   */
  treeOptionalLayerType?: number
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 列表主信息修改 的 **返回类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/update`
 */
export interface PostListMainUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表主信息修改 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/update`
 */
type PostListMainUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/main/update', undefined, string, string, false>
>

/**
 * 接口 列表主信息修改 的 **请求配置**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/update`
 */
const postListMainUpdateRequestConfig: PostListMainUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_50,
  devUrl: devUrl_0_0_0_50,
  prodUrl: prodUrl_0_0_0_50,
  path: '/list/main/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_50,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListMainUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表主信息修改 的 **请求函数**
 *
 * @分类 【低代码->列表】列表相关操作
 * @请求头 `POST /list/main/update`
 */
export const postListMainUpdate = /*#__PURE__*/ (
  requestData: PostListMainUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListMainUpdateResponse>(prepare(postListMainUpdateRequestConfig, requestData), ...args)
}

postListMainUpdate.requestConfig = postListMainUpdateRequestConfig

const mockUrl_0_0_0_51 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_51 = '' as any
const prodUrl_0_0_0_51 = '' as any
const dataKey_0_0_0_51 = undefined as any

/**
 * 接口 列表按钮信息添加 的 **请求类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/add`
 */
export interface PostListButtonAddRequest {
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 1主要按钮2普通按钮3次要按钮4风险按钮5文字按钮
   */
  cssType?: string
  /**
   * 表单ID
   */
  formId?: string
  id?: string
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 按钮名称，限制6个字符以内
   */
  name?: string
  /**
   * 按钮操作1：是删除，2：是修改，3：是查看
   */
  positionType?: string
  /**
   * 请求跳转的后端地址
   */
  rest?: string
  /**
   * 请求跳转的前端地址
   */
  route?: string
  tabId?: string
  /**
   * 按钮类型1:列表按钮2非列表按钮
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表按钮信息添加 的 **返回类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/add`
 */
export interface PostListButtonAddResponse {
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 1主要按钮2普通按钮3次要按钮4风险按钮5文字按钮
   */
  cssType?: string
  /**
   * 表单ID
   */
  formId?: string
  id?: string
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 按钮名称，限制6个字符以内
   */
  name?: string
  /**
   * 按钮操作1：是删除，2：是修改，3：是查看
   */
  positionType?: string
  /**
   * 请求跳转的后端地址
   */
  rest?: string
  /**
   * 请求跳转的前端地址
   */
  route?: string
  tabId?: string
  /**
   * 按钮类型1:列表按钮2非列表按钮
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表按钮信息添加 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/add`
 */
type PostListButtonAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/button/add', undefined, string, string, false>
>

/**
 * 接口 列表按钮信息添加 的 **请求配置**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/add`
 */
const postListButtonAddRequestConfig: PostListButtonAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_51,
  devUrl: devUrl_0_0_0_51,
  prodUrl: prodUrl_0_0_0_51,
  path: '/list/button/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_51,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListButtonAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表按钮信息添加 的 **请求函数**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/add`
 */
export const postListButtonAdd = /*#__PURE__*/ (
  requestData: PostListButtonAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListButtonAddResponse>(prepare(postListButtonAddRequestConfig, requestData), ...args)
}

postListButtonAdd.requestConfig = postListButtonAddRequestConfig

/**
 * 接口 导入配置查询 的 **请求类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `GET /list/button/importColumn`
 */
export interface GetListButtonImportColumnRequest {
  /**
   * buttonId
   */
  buttonId?: string
  /**
   * formId
   */
  formId: string
  /**
   * tabId
   */
  tabId?: string
}

/**
 * 接口 导入配置查询 的 **返回类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `GET /list/button/importColumn`
 */
export interface GetListButtonImportColumnResponse {
  /**
   * 子节点字段
   */
  children?: {
    [k: string]: unknown
  }[]
  /**
   * 字段编码
   */
  columnCode?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 字段名称
   */
  columnName?: string
  /**
   * 0不允许编辑1允许编辑
   */
  enable?: number
  /**
   * 明细表表头显示
   */
  formTitle?: string
  /**
   * 0非主表1主表2非字段只显示
   */
  master?: number
  /**
   * 模型id
   */
  modelId?: string
  /**
   * 是否必填
   */
  required?: boolean
  /**
   * 字段状态0隐藏1显示
   */
  status?: number
}

/**
 * 接口 导入配置查询 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `GET /list/button/importColumn`
 */
type GetListButtonImportColumnRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/list/button/importColumn',
    undefined,
    string,
    'buttonId' | 'formId' | 'tabId',
    false
  >
>

/**
 * 接口 导入配置查询 的 **请求配置**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `GET /list/button/importColumn`
 */
const getListButtonImportColumnRequestConfig: GetListButtonImportColumnRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_51,
  devUrl: devUrl_0_0_0_51,
  prodUrl: prodUrl_0_0_0_51,
  path: '/list/button/importColumn',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_51,
  paramNames: [],
  queryNames: ['buttonId', 'formId', 'tabId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListButtonImportColumn',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 导入配置查询 的 **请求函数**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `GET /list/button/importColumn`
 */
export const getListButtonImportColumn = /*#__PURE__*/ (
  requestData: GetListButtonImportColumnRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListButtonImportColumnResponse>(
    prepare(getListButtonImportColumnRequestConfig, requestData),
    ...args,
  )
}

getListButtonImportColumn.requestConfig = getListButtonImportColumnRequestConfig

/**
 * 接口 列表按钮信息修改 的 **请求类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/update`
 */
export interface PostListButtonUpdateRequest {
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 1主要按钮2普通按钮3次要按钮4风险按钮5文字按钮
   */
  cssType?: string
  /**
   * 表单ID
   */
  formId?: string
  id?: string
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 按钮名称，限制6个字符以内
   */
  name?: string
  /**
   * 按钮操作1：是删除，2：是修改，3：是查看
   */
  positionType?: string
  /**
   * 请求跳转的后端地址
   */
  rest?: string
  /**
   * 请求跳转的前端地址
   */
  route?: string
  tabId?: string
  /**
   * 按钮类型1:列表按钮2非列表按钮
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表按钮信息修改 的 **返回类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/update`
 */
export interface PostListButtonUpdateResponse {
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 1主要按钮2普通按钮3次要按钮4风险按钮5文字按钮
   */
  cssType?: string
  /**
   * 表单ID
   */
  formId?: string
  id?: string
  /**
   * 前端可能要保存的js代码
   */
  jsContent?: string
  /**
   * 按钮名称，限制6个字符以内
   */
  name?: string
  /**
   * 按钮操作1：是删除，2：是修改，3：是查看
   */
  positionType?: string
  /**
   * 请求跳转的后端地址
   */
  rest?: string
  /**
   * 请求跳转的前端地址
   */
  route?: string
  tabId?: string
  /**
   * 按钮类型1:列表按钮2非列表按钮
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 列表按钮信息修改 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/update`
 */
type PostListButtonUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list/button/update', undefined, string, string, false>
>

/**
 * 接口 列表按钮信息修改 的 **请求配置**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/update`
 */
const postListButtonUpdateRequestConfig: PostListButtonUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_51,
  devUrl: devUrl_0_0_0_51,
  prodUrl: prodUrl_0_0_0_51,
  path: '/list/button/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_51,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postListButtonUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表按钮信息修改 的 **请求函数**
 *
 * @分类 【低代码->列表】按钮相关操作
 * @请求头 `POST /list/button/update`
 */
export const postListButtonUpdate = /*#__PURE__*/ (
  requestData: PostListButtonUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostListButtonUpdateResponse>(prepare(postListButtonUpdateRequestConfig, requestData), ...args)
}

postListButtonUpdate.requestConfig = postListButtonUpdateRequestConfig

const mockUrl_0_0_0_52 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_52 = '' as any
const prodUrl_0_0_0_52 = '' as any
const dataKey_0_0_0_52 = undefined as any

/**
 * 接口 自定义列表的文件路径树形菜单 的 **请求类型**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list`
 */
export interface GetListRequest {}

/**
 * 接口 自定义列表的文件路径树形菜单 的 **返回类型**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list`
 */
export interface GetListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 自定义列表的文件路径树形菜单 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list`
 */
type GetListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/list', undefined, string, string, true>
>

/**
 * 接口 自定义列表的文件路径树形菜单 的 **请求配置**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list`
 */
const getListRequestConfig: GetListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_52,
  devUrl: devUrl_0_0_0_52,
  prodUrl: prodUrl_0_0_0_52,
  path: '/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_52,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 自定义列表的文件路径树形菜单 的 **请求函数**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list`
 */
export const getList = /*#__PURE__*/ (requestData?: GetListRequest, ...args: UserRequestRestArgs) => {
  return request<GetListResponse>(prepare(getListRequestConfig, requestData), ...args)
}

getList.requestConfig = getListRequestConfig

/**
 * 接口 根据模型id查询字段列表 的 **请求类型**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list/modelColumnByModelId/list`
 */
export interface GetListModelColumnByModelIdListRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 根据模型id查询字段列表 的 **返回类型**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list/modelColumnByModelId/list`
 */
export interface GetListModelColumnByModelIdListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据模型id查询字段列表 的 **请求配置的类型**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list/modelColumnByModelId/list`
 */
type GetListModelColumnByModelIdListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/list/modelColumnByModelId/list',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 根据模型id查询字段列表 的 **请求配置**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list/modelColumnByModelId/list`
 */
const getListModelColumnByModelIdListRequestConfig: GetListModelColumnByModelIdListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_52,
  devUrl: devUrl_0_0_0_52,
  prodUrl: prodUrl_0_0_0_52,
  path: '/list/modelColumnByModelId/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_52,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getListModelColumnByModelIdList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据模型id查询字段列表 的 **请求函数**
 *
 * @分类 【低代码->列表】模型提供给列表的控制层
 * @请求头 `GET /list/modelColumnByModelId/list`
 */
export const getListModelColumnByModelIdList = /*#__PURE__*/ (
  requestData: GetListModelColumnByModelIdListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetListModelColumnByModelIdListResponse>(
    prepare(getListModelColumnByModelIdListRequestConfig, requestData),
    ...args,
  )
}

getListModelColumnByModelIdList.requestConfig = getListModelColumnByModelIdListRequestConfig

const mockUrl_0_0_0_53 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_53 = '' as any
const prodUrl_0_0_0_53 = '' as any
const dataKey_0_0_0_53 = undefined as any

/**
 * 接口 控件类型与数据类型关系列表 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/controlType/connectList`
 */
export interface PostPlatformControlTypeConnectListRequest {
  /**
   * 控件类型编码
   */
  controlTypeCode?: string
  /**
   * 控件类型id
   */
  controlTypeId?: string
  /**
   * 控件类型中文
   */
  controlTypeText?: string
}

/**
 * 接口 控件类型与数据类型关系列表 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/controlType/connectList`
 */
export interface PostPlatformControlTypeConnectListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 控件类型与数据类型关系列表 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/controlType/connectList`
 */
type PostPlatformControlTypeConnectListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/controlType/connectList',
    undefined,
    string,
    'controlTypeCode' | 'controlTypeId' | 'controlTypeText',
    false
  >
>

/**
 * 接口 控件类型与数据类型关系列表 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/controlType/connectList`
 */
const postPlatformControlTypeConnectListRequestConfig: PostPlatformControlTypeConnectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/controlType/connectList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: ['controlTypeCode', 'controlTypeId', 'controlTypeText'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformControlTypeConnectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 控件类型与数据类型关系列表 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/controlType/connectList`
 */
export const postPlatformControlTypeConnectList = /*#__PURE__*/ (
  requestData: PostPlatformControlTypeConnectListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformControlTypeConnectListResponse>(
    prepare(postPlatformControlTypeConnectListRequestConfig, requestData),
    ...args,
  )
}

postPlatformControlTypeConnectList.requestConfig = postPlatformControlTypeConnectListRequestConfig

/**
 * 接口 表单控件类型列表 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/controlType/list`
 */
export interface GetPlatformControlTypeListRequest {}

/**
 * 接口 表单控件类型列表 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/controlType/list`
 */
export interface GetPlatformControlTypeListResponse {
  /**
   * 英文
   */
  code?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 逻辑删除 0删除 1正常
   */
  isDel?: string
  /**
   * 控件名称
   */
  name?: string
  /**
   * 控件类型
   */
  type?: number
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 表单控件类型列表 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/controlType/list`
 */
type GetPlatformControlTypeListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/controlType/list', undefined, string, string, true>
>

/**
 * 接口 表单控件类型列表 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/controlType/list`
 */
const getPlatformControlTypeListRequestConfig: GetPlatformControlTypeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/controlType/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformControlTypeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单控件类型列表 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/controlType/list`
 */
export const getPlatformControlTypeList = /*#__PURE__*/ (
  requestData?: GetPlatformControlTypeListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformControlTypeListResponse>(
    prepare(getPlatformControlTypeListRequestConfig, requestData),
    ...args,
  )
}

getPlatformControlTypeList.requestConfig = getPlatformControlTypeListRequestConfig

/**
 * 接口 根据模型id查找对应的表单数据 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getByModelId`
 */
export interface GetPlatformFormBaseGetByModelIdRequest {
  /**
   * 模型ID
   */
  modelId?: string
}

/**
 * 接口 根据模型id查找对应的表单数据 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getByModelId`
 */
export interface GetPlatformFormBaseGetByModelIdResponse {
  /**
   * 表单ID
   */
  id?: string
  /**
   * 表单名称
   */
  name?: string
}

/**
 * 接口 根据模型id查找对应的表单数据 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getByModelId`
 */
type GetPlatformFormBaseGetByModelIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/getByModelId',
    undefined,
    string,
    'modelId',
    false
  >
>

/**
 * 接口 根据模型id查找对应的表单数据 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getByModelId`
 */
const getPlatformFormBaseGetByModelIdRequestConfig: GetPlatformFormBaseGetByModelIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/formBase/getByModelId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: ['modelId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseGetByModelId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据模型id查找对应的表单数据 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getByModelId`
 */
export const getPlatformFormBaseGetByModelId = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseGetByModelIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseGetByModelIdResponse>(
    prepare(getPlatformFormBaseGetByModelIdRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseGetByModelId.requestConfig = getPlatformFormBaseGetByModelIdRequestConfig

/**
 * 接口 获取用户全信息接口 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getDepInfo`
 */
export interface GetPlatformFormBaseGetDepInfoRequest {
  /**
   * depId
   */
  depId: string
}

/**
 * 接口 获取用户全信息接口 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getDepInfo`
 */
export interface GetPlatformFormBaseGetDepInfoResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取用户全信息接口 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getDepInfo`
 */
type GetPlatformFormBaseGetDepInfoRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/getDepInfo',
    undefined,
    string,
    'depId',
    false
  >
>

/**
 * 接口 获取用户全信息接口 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getDepInfo`
 */
const getPlatformFormBaseGetDepInfoRequestConfig: GetPlatformFormBaseGetDepInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/formBase/getDepInfo',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: ['depId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseGetDepInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取用户全信息接口 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/getDepInfo`
 */
export const getPlatformFormBaseGetDepInfo = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseGetDepInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseGetDepInfoResponse>(
    prepare(getPlatformFormBaseGetDepInfoRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseGetDepInfo.requestConfig = getPlatformFormBaseGetDepInfoRequestConfig

/**
 * 接口 根据表单id和projectId获取数据 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/formBase/getFormValue`
 */
export interface PostPlatformFormBaseGetFormValueRequest {
  formId?: string
  projectId?: string
}

/**
 * 接口 根据表单id和projectId获取数据 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/formBase/getFormValue`
 */
export interface PostPlatformFormBaseGetFormValueResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据表单id和projectId获取数据 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/formBase/getFormValue`
 */
type PostPlatformFormBaseGetFormValueRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/getFormValue',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 根据表单id和projectId获取数据 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/formBase/getFormValue`
 */
const postPlatformFormBaseGetFormValueRequestConfig: PostPlatformFormBaseGetFormValueRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/formBase/getFormValue',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBaseGetFormValue',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据表单id和projectId获取数据 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `POST /platform/formBase/getFormValue`
 */
export const postPlatformFormBaseGetFormValue = /*#__PURE__*/ (
  requestData: PostPlatformFormBaseGetFormValueRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBaseGetFormValueResponse>(
    prepare(postPlatformFormBaseGetFormValueRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormBaseGetFormValue.requestConfig = postPlatformFormBaseGetFormValueRequestConfig

/**
 * 接口 表单设计层系统字段列表 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/sysColumnList`
 */
export interface GetPlatformFormBaseSysColumnListRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 表单设计层系统字段列表 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/sysColumnList`
 */
export interface GetPlatformFormBaseSysColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单设计层系统字段列表 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/sysColumnList`
 */
type GetPlatformFormBaseSysColumnListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/sysColumnList',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 表单设计层系统字段列表 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/sysColumnList`
 */
const getPlatformFormBaseSysColumnListRequestConfig: GetPlatformFormBaseSysColumnListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/formBase/sysColumnList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseSysColumnList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单设计层系统字段列表 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/formBase/sysColumnList`
 */
export const getPlatformFormBaseSysColumnList = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseSysColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseSysColumnListResponse>(
    prepare(getPlatformFormBaseSysColumnListRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseSysColumnList.requestConfig = getPlatformFormBaseSysColumnListRequestConfig

/**
 * 接口 根据模型id查找对应的模型基础信息 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelByModelId/detail`
 */
export interface GetPlatformModelByModelIdDetailRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 根据模型id查找对应的模型基础信息 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelByModelId/detail`
 */
export interface GetPlatformModelByModelIdDetailResponse {
  /**
   * 子表模型数据
   */
  childModelList?: {
    /**
     * 模型字段列表
     */
    fieldList?: {
      /**
       * 表对应的字段
       */
      columnCode: string
      /**
       * 表对应字段默认的中文名称
       */
      columnName: string
      corpCode?: string
      /**
       * 字段对应的默认控件类型
       */
      defaultControlType?: string
      /**
       * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
       */
      fieldClassify?: string
      /**
       * 字段类型描述
       */
      fieldTypeDescribe?: string
      /**
       * 前端传回来的中文字段类型，存id
       */
      fieldTypeId: string
      /**
       * 前端传回来的中文字段类型文本
       */
      fieldTypeText?: string
      /**
       * 该字段对应的默认控件信息
       */
      formDefaultConfig?: string
      /**
       * 隐藏删除按钮
       */
      hideDel?: boolean
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除，1：正常
       */
      isDel?: number
      /**
       * 是否是新增字段 0：不是新增 1：是新增
       */
      isInsert?: number
      /**
       * 是否非空
       */
      isNull?: string
      /**
       * 是否被表单、列表调用 0否 1是
       */
      isQuotedByFormOrList?: number
      issued?: boolean
      /**
       * 关联的字段
       */
      joinColumnId?: string
      /**
       * 关联的模型
       */
      joinModelId?: string
      /**
       * 表
       */
      modelId: string
      /**
       * 是否唯一
       */
      only?: string
      /**
       * 排序id
       */
      sortId?: string
    }[]
    /**
     * 主键id
     */
    id?: string
    /**
     * 名称英文（模块名，模型名）
     */
    modelCode?: string
    /**
     * 名称中文（模块名，模型名）
     */
    modelName?: string
    /**
     * 父类id
     */
    parentId?: string
    /**
     * 类型区分（1、模块名  2、模型名）
     */
    type?: string
  }[]
  /**
   * 模型字段列表
   */
  fieldList?: {
    /**
     * 表对应的字段
     */
    columnCode: string
    /**
     * 表对应字段默认的中文名称
     */
    columnName: string
    corpCode?: string
    /**
     * 字段对应的默认控件类型
     */
    defaultControlType?: string
    /**
     * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
     */
    fieldClassify?: string
    /**
     * 字段类型描述
     */
    fieldTypeDescribe?: string
    /**
     * 前端传回来的中文字段类型，存id
     */
    fieldTypeId: string
    /**
     * 前端传回来的中文字段类型文本
     */
    fieldTypeText?: string
    /**
     * 该字段对应的默认控件信息
     */
    formDefaultConfig?: string
    /**
     * 隐藏删除按钮
     */
    hideDel?: boolean
    /**
     * 主键id
     */
    id?: string
    /**
     * 逻辑删除 0：删除，1：正常
     */
    isDel?: number
    /**
     * 是否是新增字段 0：不是新增 1：是新增
     */
    isInsert?: number
    /**
     * 是否非空
     */
    isNull?: string
    /**
     * 是否被表单、列表调用 0否 1是
     */
    isQuotedByFormOrList?: number
    issued?: boolean
    /**
     * 关联的字段
     */
    joinColumnId?: string
    /**
     * 关联的模型
     */
    joinModelId?: string
    /**
     * 表
     */
    modelId: string
    /**
     * 是否唯一
     */
    only?: string
    /**
     * 排序id
     */
    sortId?: string
  }[]
  /**
   * 主键id
   */
  id?: string
  /**
   * 名称英文（模块名，模型名）
   */
  modelCode?: string
  /**
   * 名称中文（模块名，模型名）
   */
  modelName?: string
  /**
   * 父类id
   */
  parentId?: string
  /**
   * 是否展示发票识别按钮
   */
  showBillBtn?: boolean
  /**
   * 类型区分（1、模块名  2、模型名）
   */
  type?: string
}

/**
 * 接口 根据模型id查找对应的模型基础信息 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelByModelId/detail`
 */
type GetPlatformModelByModelIdDetailRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/modelByModelId/detail',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 根据模型id查找对应的模型基础信息 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelByModelId/detail`
 */
const getPlatformModelByModelIdDetailRequestConfig: GetPlatformModelByModelIdDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_53,
  devUrl: devUrl_0_0_0_53,
  prodUrl: prodUrl_0_0_0_53,
  path: '/platform/modelByModelId/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_53,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformModelByModelIdDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据模型id查找对应的模型基础信息 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelByModelId/detail`
 */
export const getPlatformModelByModelIdDetail = /*#__PURE__*/ (
  requestData: GetPlatformModelByModelIdDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformModelByModelIdDetailResponse>(
    prepare(getPlatformModelByModelIdDetailRequestConfig, requestData),
    ...args,
  )
}

getPlatformModelByModelIdDetail.requestConfig = getPlatformModelByModelIdDetailRequestConfig

/**
 * 接口 根据控件id查找对应模型id下的对应数据类型的字段 的 **请求类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelColumnByCondition/list`
 */
export interface GetPlatformModelColumnByConditionListRequest {
  /**
   * controlCode
   */
  controlCode?: string
  /**
   * modelId
   */
  modelId?: string
}

/**
 * 接口 根据控件id查找对应模型id下的对应数据类型的字段 的 **返回类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelColumnByCondition/list`
 */
export interface GetPlatformModelColumnByConditionListResponse {
  /**
   * 是否自增
   */
  autoIncrement?: string
  /**
   * 莫
   */
  columnCode?: string
  /**
   * 表对应字段默认的中文名称
   */
  columnName?: string
  cprojectModelId?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 小数点
   */
  decimalPoint?: number
  /**
   * 系统/自定义字段 1系统 2自定义 默认2
   */
  fieldClassify?: string
  /**
   * 字段类型描述
   */
  fieldTypeDescribe?: string
  /**
   * 前端传回来的中文字段类型，存id
   */
  fieldTypeId?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 逻辑删除 0：删除，1：正常
   */
  isDel?: number
  /**
   * 是否非空
   */
  isNull?: string
  /**
   * 关联的模型,主键id
   */
  joinColumnId?: string
  /**
   * 关联字段字段名称
   */
  joinColumnName?: string
  /**
   * 关联的模型id
   */
  joinModelId?: string
  /**
   * 字段长度
   */
  length?: number
  /**
   * 模型id
   */
  modelId?: string
  /**
   * 是否唯一
   */
  only?: string
  /**
   * 是否主键
   */
  primaryKey?: string
  /**
   * 排序id
   */
  sortId?: string
  /**
   * 数据库实际存储的字段类型
   */
  type?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 根据控件id查找对应模型id下的对应数据类型的字段 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelColumnByCondition/list`
 */
type GetPlatformModelColumnByConditionListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/modelColumnByCondition/list',
    undefined,
    string,
    'controlCode' | 'modelId',
    false
  >
>

/**
 * 接口 根据控件id查找对应模型id下的对应数据类型的字段 的 **请求配置**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelColumnByCondition/list`
 */
const getPlatformModelColumnByConditionListRequestConfig: GetPlatformModelColumnByConditionListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_53,
    devUrl: devUrl_0_0_0_53,
    prodUrl: prodUrl_0_0_0_53,
    path: '/platform/modelColumnByCondition/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_53,
    paramNames: [],
    queryNames: ['controlCode', 'modelId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getPlatformModelColumnByConditionList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 根据控件id查找对应模型id下的对应数据类型的字段 的 **请求函数**
 *
 * @分类 【低代码>表单】模型提供给表单的接口的控制层
 * @请求头 `GET /platform/modelColumnByCondition/list`
 */
export const getPlatformModelColumnByConditionList = /*#__PURE__*/ (
  requestData: GetPlatformModelColumnByConditionListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformModelColumnByConditionListResponse>(
    prepare(getPlatformModelColumnByConditionListRequestConfig, requestData),
    ...args,
  )
}

getPlatformModelColumnByConditionList.requestConfig = getPlatformModelColumnByConditionListRequestConfig

const mockUrl_0_0_0_54 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_54 = '' as any
const prodUrl_0_0_0_54 = '' as any
const dataKey_0_0_0_54 = undefined as any

/**
 * 接口 映射关联接口 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/businessColumnRelationQuery`
 */
export interface GetPlatformDesignBusinessColumnRelationQueryRequest {
  /**
   * columnId
   */
  columnId?: string
  /**
   * formId
   */
  formId?: string
  /**
   * formValueId
   */
  formValueId?: string
  /**
   * value
   */
  value?: string
}

/**
 * 接口 映射关联接口 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/businessColumnRelationQuery`
 */
export interface GetPlatformDesignBusinessColumnRelationQueryResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 映射关联接口 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/businessColumnRelationQuery`
 */
type GetPlatformDesignBusinessColumnRelationQueryRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/design/businessColumnRelationQuery',
    undefined,
    string,
    'columnId' | 'formId' | 'formValueId' | 'value',
    false
  >
>

/**
 * 接口 映射关联接口 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/businessColumnRelationQuery`
 */
const getPlatformDesignBusinessColumnRelationQueryRequestConfig: GetPlatformDesignBusinessColumnRelationQueryRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_54,
    devUrl: devUrl_0_0_0_54,
    prodUrl: prodUrl_0_0_0_54,
    path: '/platform/design/businessColumnRelationQuery',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_54,
    paramNames: [],
    queryNames: ['columnId', 'formId', 'formValueId', 'value'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getPlatformDesignBusinessColumnRelationQuery',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 映射关联接口 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/businessColumnRelationQuery`
 */
export const getPlatformDesignBusinessColumnRelationQuery = /*#__PURE__*/ (
  requestData: GetPlatformDesignBusinessColumnRelationQueryRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformDesignBusinessColumnRelationQueryResponse>(
    prepare(getPlatformDesignBusinessColumnRelationQueryRequestConfig, requestData),
    ...args,
  )
}

getPlatformDesignBusinessColumnRelationQuery.requestConfig = getPlatformDesignBusinessColumnRelationQueryRequestConfig

/**
 * 接口 项目接口查询 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/obtainProjectList`
 */
export interface GetPlatformDesignObtainProjectListRequest {
  /**
   * projectId
   */
  projectId?: string
}

/**
 * 接口 项目接口查询 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/obtainProjectList`
 */
export interface GetPlatformDesignObtainProjectListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 项目接口查询 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/obtainProjectList`
 */
type GetPlatformDesignObtainProjectListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/design/obtainProjectList',
    undefined,
    string,
    'projectId',
    false
  >
>

/**
 * 接口 项目接口查询 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/obtainProjectList`
 */
const getPlatformDesignObtainProjectListRequestConfig: GetPlatformDesignObtainProjectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/design/obtainProjectList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: ['projectId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformDesignObtainProjectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 项目接口查询 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/design/obtainProjectList`
 */
export const getPlatformDesignObtainProjectList = /*#__PURE__*/ (
  requestData: GetPlatformDesignObtainProjectListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformDesignObtainProjectListResponse>(
    prepare(getPlatformDesignObtainProjectListRequestConfig, requestData),
    ...args,
  )
}

getPlatformDesignObtainProjectList.requestConfig = getPlatformDesignObtainProjectListRequestConfig

/**
 * 接口 获取关联项目formValueId 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getFormValueIdByListAndDataId`
 */
export interface GetPlatformFormBaseGetFormValueIdByListAndDataIdRequest {
  /**
   * 数据行id
   */
  dataId?: string
  /**
   * 关联模型id(列表使用)
   */
  joinModelId?: string
  /**
   * 列表id(表单使用)
   */
  listId?: string
  /**
   * 菜单校验权限开关 false：不校验 true：校验
   */
  permissionSwitch?: string
}

/**
 * 接口 获取关联项目formValueId 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getFormValueIdByListAndDataId`
 */
export interface GetPlatformFormBaseGetFormValueIdByListAndDataIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取关联项目formValueId 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getFormValueIdByListAndDataId`
 */
type GetPlatformFormBaseGetFormValueIdByListAndDataIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/getFormValueIdByListAndDataId',
    undefined,
    string,
    'dataId' | 'joinModelId' | 'listId' | 'permissionSwitch',
    false
  >
>

/**
 * 接口 获取关联项目formValueId 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getFormValueIdByListAndDataId`
 */
const getPlatformFormBaseGetFormValueIdByListAndDataIdRequestConfig: GetPlatformFormBaseGetFormValueIdByListAndDataIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_54,
    devUrl: devUrl_0_0_0_54,
    prodUrl: prodUrl_0_0_0_54,
    path: '/platform/formBase/getFormValueIdByListAndDataId',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_54,
    paramNames: [],
    queryNames: ['dataId', 'joinModelId', 'listId', 'permissionSwitch'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getPlatformFormBaseGetFormValueIdByListAndDataId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获取关联项目formValueId 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getFormValueIdByListAndDataId`
 */
export const getPlatformFormBaseGetFormValueIdByListAndDataId = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseGetFormValueIdByListAndDataIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseGetFormValueIdByListAndDataIdResponse>(
    prepare(getPlatformFormBaseGetFormValueIdByListAndDataIdRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseGetFormValueIdByListAndDataId.requestConfig =
  getPlatformFormBaseGetFormValueIdByListAndDataIdRequestConfig

/**
 * 接口 删除填写后的表单 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getInstanceId`
 */
export interface GetPlatformFormBaseGetInstanceIdRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 删除填写后的表单 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getInstanceId`
 */
export interface GetPlatformFormBaseGetInstanceIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除填写后的表单 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getInstanceId`
 */
type GetPlatformFormBaseGetInstanceIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/getInstanceId',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 删除填写后的表单 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getInstanceId`
 */
const getPlatformFormBaseGetInstanceIdRequestConfig: GetPlatformFormBaseGetInstanceIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formBase/getInstanceId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseGetInstanceId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除填写后的表单 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formBase/getInstanceId`
 */
export const getPlatformFormBaseGetInstanceId = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseGetInstanceIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseGetInstanceIdResponse>(
    prepare(getPlatformFormBaseGetInstanceIdRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseGetInstanceId.requestConfig = getPlatformFormBaseGetInstanceIdRequestConfig

/**
 * 接口 改造新增formValue数据 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/addv2`
 */
export interface PostPlatformFormValueAddv2Request {
  /**
   * 添加修改标识 1添加 2修改
   */
  addOrUpdate?: number
  businessAddForm?: {
    /**
     * 单据转换规则id
     */
    billRuleId?: string
    /**
     * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
     */
    originKeyId?: string
    /**
     * 来源表单主表主键id
     */
    originKeyMainId?: string
    /**
     * 转换方式, swapTypeEnum类
     */
    swapType?: string
  }
  /**
   * 客户二开路径
   */
  className?: string
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 表单ID
   */
  formName?: string
  /**
   * formValueId
   */
  formValueId?: string
  /**
   * 类型1业务表单 2流程表单
   */
  formValueType?: number
  id?: number
  /**
   * 主数据
   */
  masterData?: {
    /**
     * 明细表数据
     */
    childrenSingleLineData?: {
      [k: string]: unknown
    }[]
    /**
     * 列编码
     */
    columnCode?: string
    columnData?: {
      /**
       * 颜色配置
       */
      color?: string
      /**
       * 关联id
       */
      jointId?: string
      /**
       * 1:手输2:选择
       */
      manual?: number
      /**
       * 1:选项来源2:配置项
       */
      sourceType?: string
      /**
       * 中文名称
       */
      zhName?: string
    }
    /**
     * 列编码
     */
    columnId?: string
    /**
     * 组件名称
     */
    componentName?: string
    /**
     * 唯一标识
     */
    fieldId?: string
    /**
     * 模型id
     */
    modelId?: string
    /**
     * 标题
     */
    title?: string
    /**
     * 具体值
     */
    value?: {}
  }[]
  /**
   * 前端不传，后端查询放进来给业务流用
   */
  modelId?: string
  /**
   * 流程实例ID
   */
  procInstId?: string
  /**
   * 1流程运行中2手动添加3归档。前端默认给2即可
   */
  runtimeState?: number
  /**
   * 超额检查标记列表
   */
  signList?: number[]
  /**
   * 前端不传，后端查询放进来给业务流用
   */
  tableName?: string
  /**
   * 业务流任务id
   */
  taskId?: string
  tokenUserInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
}

/**
 * 接口 改造新增formValue数据 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/addv2`
 */
export interface PostPlatformFormValueAddv2Response {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 改造新增formValue数据 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/addv2`
 */
type PostPlatformFormValueAddv2RequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formValue/addv2', undefined, string, string, false>
>

/**
 * 接口 改造新增formValue数据 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/addv2`
 */
const postPlatformFormValueAddv2RequestConfig: PostPlatformFormValueAddv2RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formValue/addv2',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormValueAddv2',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 改造新增formValue数据 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/addv2`
 */
export const postPlatformFormValueAddv2 = /*#__PURE__*/ (
  requestData: PostPlatformFormValueAddv2Request,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormValueAddv2Response>(
    prepare(postPlatformFormValueAddv2RequestConfig, requestData),
    ...args,
  )
}

postPlatformFormValueAddv2.requestConfig = postPlatformFormValueAddv2RequestConfig

/**
 * 接口 批量更新填写后的表单 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/batchUpdate`
 */
export type PostPlatformFormValueBatchUpdateRequest = {
  /**
   * formValueId
   */
  formValueId?: string
  id?: number
  /**
   * 主数据
   */
  masterData?: {
    /**
     * 明细表数据
     */
    childrenSingleLineData?: {
      /**
       * 子表数据
       */
      childrenDataList?: {
        /**
         * 字段id
         */
        columnId?: string
        /**
         * 子表模型id
         */
        modelId?: string
        /**
         * 具体值
         */
        value?: {}
      }[]
      /**
       * Id
       */
      id?: number
    }[]
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 明细表组建名称
     */
    componentName?: string
    /**
     * 模型id
     */
    modelId?: string
    /**
     * 具体值
     */
    value?: {}
  }[]
}[]

/**
 * 接口 批量更新填写后的表单 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/batchUpdate`
 */
export interface PostPlatformFormValueBatchUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 批量更新填写后的表单 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/batchUpdate`
 */
type PostPlatformFormValueBatchUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/batchUpdate',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 批量更新填写后的表单 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/batchUpdate`
 */
const postPlatformFormValueBatchUpdateRequestConfig: PostPlatformFormValueBatchUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formValue/batchUpdate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormValueBatchUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 批量更新填写后的表单 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/batchUpdate`
 */
export const postPlatformFormValueBatchUpdate = /*#__PURE__*/ (
  requestData: PostPlatformFormValueBatchUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormValueBatchUpdateResponse>(
    prepare(postPlatformFormValueBatchUpdateRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormValueBatchUpdate.requestConfig = postPlatformFormValueBatchUpdateRequestConfig

/**
 * 接口 数据穿透 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/dataThrough`
 */
export interface GetPlatformFormValueDataThroughRequest {
  /**
   * 列表数据行ID
   */
  listRowId?: string
  /**
   * 来源列表ID
   */
  originListId?: string
}

/**
 * 接口 数据穿透 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/dataThrough`
 */
export interface GetPlatformFormValueDataThroughResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 数据穿透 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/dataThrough`
 */
type GetPlatformFormValueDataThroughRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/dataThrough',
    undefined,
    string,
    'listRowId' | 'originListId',
    false
  >
>

/**
 * 接口 数据穿透 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/dataThrough`
 */
const getPlatformFormValueDataThroughRequestConfig: GetPlatformFormValueDataThroughRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formValue/dataThrough',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: ['listRowId', 'originListId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormValueDataThrough',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 数据穿透 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/dataThrough`
 */
export const getPlatformFormValueDataThrough = /*#__PURE__*/ (
  requestData: GetPlatformFormValueDataThroughRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormValueDataThroughResponse>(
    prepare(getPlatformFormValueDataThroughRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormValueDataThrough.requestConfig = getPlatformFormValueDataThroughRequestConfig

/**
 * 接口 获取填写后的表单详情V2 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/detail2`
 */
export interface GetPlatformFormValueDetail2Request {
  /**
   * 表单值ID
   */
  formValueId?: string
}

/**
 * 接口 获取填写后的表单详情V2 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/detail2`
 */
export interface GetPlatformFormValueDetail2Response {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取填写后的表单详情V2 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/detail2`
 */
type GetPlatformFormValueDetail2RequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/detail2',
    undefined,
    string,
    'formValueId',
    false
  >
>

/**
 * 接口 获取填写后的表单详情V2 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/detail2`
 */
const getPlatformFormValueDetail2RequestConfig: GetPlatformFormValueDetail2RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formValue/detail2',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: ['formValueId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormValueDetail2',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取填写后的表单详情V2 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/detail2`
 */
export const getPlatformFormValueDetail2 = /*#__PURE__*/ (
  requestData: GetPlatformFormValueDetail2Request,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormValueDetail2Response>(
    prepare(getPlatformFormValueDetail2RequestConfig, requestData),
    ...args,
  )
}

getPlatformFormValueDetail2.requestConfig = getPlatformFormValueDetail2RequestConfig

/**
 * 接口 获取和列表某行数据相关联的表单 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getListRelateFormValue`
 */
export interface GetPlatformFormValueGetListRelateFormValueRequest {
  /**
   * 列表数据行ID
   */
  listRowId?: string
  /**
   * 来源表单ID
   */
  originFormId?: string
  targetFormId: string
}

/**
 * 接口 获取和列表某行数据相关联的表单 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getListRelateFormValue`
 */
export interface GetPlatformFormValueGetListRelateFormValueResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取和列表某行数据相关联的表单 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getListRelateFormValue`
 */
type GetPlatformFormValueGetListRelateFormValueRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/getListRelateFormValue',
    undefined,
    string,
    'listRowId' | 'originFormId' | 'targetFormId',
    false
  >
>

/**
 * 接口 获取和列表某行数据相关联的表单 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getListRelateFormValue`
 */
const getPlatformFormValueGetListRelateFormValueRequestConfig: GetPlatformFormValueGetListRelateFormValueRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_54,
    devUrl: devUrl_0_0_0_54,
    prodUrl: prodUrl_0_0_0_54,
    path: '/platform/formValue/getListRelateFormValue',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_54,
    paramNames: [],
    queryNames: ['listRowId', 'originFormId', 'targetFormId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getPlatformFormValueGetListRelateFormValue',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 获取和列表某行数据相关联的表单 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getListRelateFormValue`
 */
export const getPlatformFormValueGetListRelateFormValue = /*#__PURE__*/ (
  requestData: GetPlatformFormValueGetListRelateFormValueRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormValueGetListRelateFormValueResponse>(
    prepare(getPlatformFormValueGetListRelateFormValueRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormValueGetListRelateFormValue.requestConfig = getPlatformFormValueGetListRelateFormValueRequestConfig

/**
 * 接口 获取上级节点对应的数据 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getParentData`
 */
export interface GetPlatformFormValueGetParentDataRequest {
  /**
   * 模型字段名
   */
  columnCode?: string
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 模型ID
   */
  modelId?: string
  /**
   * 项目ID
   */
  projectId?: string
}

/**
 * 接口 获取上级节点对应的数据 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getParentData`
 */
export interface GetPlatformFormValueGetParentDataResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取上级节点对应的数据 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getParentData`
 */
type GetPlatformFormValueGetParentDataRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/getParentData',
    undefined,
    string,
    'columnCode' | 'formId' | 'modelId' | 'projectId',
    false
  >
>

/**
 * 接口 获取上级节点对应的数据 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getParentData`
 */
const getPlatformFormValueGetParentDataRequestConfig: GetPlatformFormValueGetParentDataRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formValue/getParentData',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: ['columnCode', 'formId', 'modelId', 'projectId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormValueGetParentData',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取上级节点对应的数据 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `GET /platform/formValue/getParentData`
 */
export const getPlatformFormValueGetParentData = /*#__PURE__*/ (
  requestData: GetPlatformFormValueGetParentDataRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormValueGetParentDataResponse>(
    prepare(getPlatformFormValueGetParentDataRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormValueGetParentData.requestConfig = getPlatformFormValueGetParentDataRequestConfig

/**
 * 接口 更新填写后的表单 的 **请求类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/update2`
 */
export interface PostPlatformFormValueUpdate2Request {
  /**
   * 添加修改标识 1添加 2修改
   */
  addOrUpdate?: number
  businessAddForm?: {
    /**
     * 单据转换规则id
     */
    billRuleId?: string
    /**
     * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
     */
    originKeyId?: string
    /**
     * 来源表单主表主键id
     */
    originKeyMainId?: string
    /**
     * 转换方式, swapTypeEnum类
     */
    swapType?: string
  }
  /**
   * 客户二开路径
   */
  className?: string
  /**
   * 表单ID
   */
  formId?: string
  /**
   * 表单ID
   */
  formName?: string
  /**
   * formValueId
   */
  formValueId?: string
  /**
   * 类型1业务表单 2流程表单
   */
  formValueType?: number
  id?: number
  /**
   * 主数据
   */
  masterData?: {
    /**
     * 明细表数据
     */
    childrenSingleLineData?: {
      [k: string]: unknown
    }[]
    /**
     * 列编码
     */
    columnCode?: string
    columnData?: {
      /**
       * 颜色配置
       */
      color?: string
      /**
       * 关联id
       */
      jointId?: string
      /**
       * 1:手输2:选择
       */
      manual?: number
      /**
       * 1:选项来源2:配置项
       */
      sourceType?: string
      /**
       * 中文名称
       */
      zhName?: string
    }
    /**
     * 列编码
     */
    columnId?: string
    /**
     * 组件名称
     */
    componentName?: string
    /**
     * 唯一标识
     */
    fieldId?: string
    /**
     * 模型id
     */
    modelId?: string
    /**
     * 标题
     */
    title?: string
    /**
     * 具体值
     */
    value?: {}
  }[]
  /**
   * 前端不传，后端查询放进来给业务流用
   */
  modelId?: string
  /**
   * 流程实例ID
   */
  procInstId?: string
  /**
   * 1流程运行中2手动添加3归档。前端默认给2即可
   */
  runtimeState?: number
  /**
   * 超额检查标记列表
   */
  signList?: number[]
  /**
   * 前端不传，后端查询放进来给业务流用
   */
  tableName?: string
  /**
   * 业务流任务id
   */
  taskId?: string
  tokenUserInfo?: {
    depId?: number
    phone?: string
    roleId?: number[]
    trueName?: string
    userid?: number
    username?: string
  }
}

/**
 * 接口 更新填写后的表单 的 **返回类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/update2`
 */
export interface PostPlatformFormValueUpdate2Response {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 更新填写后的表单 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/update2`
 */
type PostPlatformFormValueUpdate2RequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/update2',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 更新填写后的表单 的 **请求配置**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/update2`
 */
const postPlatformFormValueUpdate2RequestConfig: PostPlatformFormValueUpdate2RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_54,
  devUrl: devUrl_0_0_0_54,
  prodUrl: prodUrl_0_0_0_54,
  path: '/platform/formValue/update2',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_54,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormValueUpdate2',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新填写后的表单 的 **请求函数**
 *
 * @分类 【低代码>表单】表单值应用
 * @请求头 `POST /platform/formValue/update2`
 */
export const postPlatformFormValueUpdate2 = /*#__PURE__*/ (
  requestData: PostPlatformFormValueUpdate2Request,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormValueUpdate2Response>(
    prepare(postPlatformFormValueUpdate2RequestConfig, requestData),
    ...args,
  )
}

postPlatformFormValueUpdate2.requestConfig = postPlatformFormValueUpdate2RequestConfig

const mockUrl_0_0_0_55 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_55 = '' as any
const prodUrl_0_0_0_55 = '' as any
const dataKey_0_0_0_55 = undefined as any

/**
 * 接口 添加专栏信息评论 的 **请求类型**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/add`
 */
export interface PostSpecialColumnCommentAddRequest {
  /**
   * 评论内容
   */
  content?: string
  createTime?: string
  /**
   * 评论人
   */
  creater?: number
  id?: string
  /**
   * 是否删除:0否1是
   */
  isDel?: number
  /**
   * 专栏信息ID
   */
  specialColumnInfoId?: string
  updateTime?: string
}

/**
 * 接口 添加专栏信息评论 的 **返回类型**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/add`
 */
export interface PostSpecialColumnCommentAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加专栏信息评论 的 **请求配置的类型**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/add`
 */
type PostSpecialColumnCommentAddRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/special/column/comment/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 添加专栏信息评论 的 **请求配置**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/add`
 */
const postSpecialColumnCommentAddRequestConfig: PostSpecialColumnCommentAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_55,
  devUrl: devUrl_0_0_0_55,
  prodUrl: prodUrl_0_0_0_55,
  path: '/special/column/comment/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_55,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSpecialColumnCommentAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加专栏信息评论 的 **请求函数**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/add`
 */
export const postSpecialColumnCommentAdd = /*#__PURE__*/ (
  requestData: PostSpecialColumnCommentAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSpecialColumnCommentAddResponse>(
    prepare(postSpecialColumnCommentAddRequestConfig, requestData),
    ...args,
  )
}

postSpecialColumnCommentAdd.requestConfig = postSpecialColumnCommentAddRequestConfig

/**
 * 接口 添加专栏信息评论列表 的 **请求类型**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/list`
 */
export interface PostSpecialColumnCommentListRequest {
  /**
   * 评论内容
   */
  content?: string
  createTime?: string
  /**
   * 评论人
   */
  creater?: number
  id?: string
  /**
   * 是否删除:0否1是
   */
  isDel?: number
  /**
   * 专栏信息ID
   */
  specialColumnInfoId?: string
  updateTime?: string
}

/**
 * 接口 添加专栏信息评论列表 的 **返回类型**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/list`
 */
export interface PostSpecialColumnCommentListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加专栏信息评论列表 的 **请求配置的类型**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/list`
 */
type PostSpecialColumnCommentListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/special/column/comment/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 添加专栏信息评论列表 的 **请求配置**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/list`
 */
const postSpecialColumnCommentListRequestConfig: PostSpecialColumnCommentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_55,
  devUrl: devUrl_0_0_0_55,
  prodUrl: prodUrl_0_0_0_55,
  path: '/special/column/comment/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_55,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSpecialColumnCommentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加专栏信息评论列表 的 **请求函数**
 *
 * @分类 special-column-comment-controller
 * @请求头 `POST /special/column/comment/list`
 */
export const postSpecialColumnCommentList = /*#__PURE__*/ (
  requestData: PostSpecialColumnCommentListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSpecialColumnCommentListResponse>(
    prepare(postSpecialColumnCommentListRequestConfig, requestData),
    ...args,
  )
}

postSpecialColumnCommentList.requestConfig = postSpecialColumnCommentListRequestConfig

const mockUrl_0_0_0_56 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_56 = '' as any
const prodUrl_0_0_0_56 = '' as any
const dataKey_0_0_0_56 = undefined as any

/**
 * 接口 生成FormValueId 的 **请求类型**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/generateFormValueId`
 */
export interface PostPlatformFormValueGenerateFormValueIdRequest {
  tableName: string
}

/**
 * 接口 生成FormValueId 的 **返回类型**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/generateFormValueId`
 */
export interface PostPlatformFormValueGenerateFormValueIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 生成FormValueId 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/generateFormValueId`
 */
type PostPlatformFormValueGenerateFormValueIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/generateFormValueId',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 生成FormValueId 的 **请求配置**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/generateFormValueId`
 */
const postPlatformFormValueGenerateFormValueIdRequestConfig: PostPlatformFormValueGenerateFormValueIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_56,
    devUrl: devUrl_0_0_0_56,
    prodUrl: prodUrl_0_0_0_56,
    path: '/platform/formValue/generateFormValueId',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_56,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postPlatformFormValueGenerateFormValueId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 生成FormValueId 的 **请求函数**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/generateFormValueId`
 */
export const postPlatformFormValueGenerateFormValueId = /*#__PURE__*/ (
  requestData: PostPlatformFormValueGenerateFormValueIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormValueGenerateFormValueIdResponse>(
    prepare(postPlatformFormValueGenerateFormValueIdRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormValueGenerateFormValueId.requestConfig = postPlatformFormValueGenerateFormValueIdRequestConfig

/**
 * 接口 回滚生成FormValueId 的 **请求类型**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/reGenerateFormValueId`
 */
export interface PostPlatformFormValueReGenerateFormValueIdRequest {
  tableName: string
}

/**
 * 接口 回滚生成FormValueId 的 **返回类型**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/reGenerateFormValueId`
 */
export interface PostPlatformFormValueReGenerateFormValueIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 回滚生成FormValueId 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/reGenerateFormValueId`
 */
type PostPlatformFormValueReGenerateFormValueIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formValue/reGenerateFormValueId',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 回滚生成FormValueId 的 **请求配置**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/reGenerateFormValueId`
 */
const postPlatformFormValueReGenerateFormValueIdRequestConfig: PostPlatformFormValueReGenerateFormValueIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_56,
    devUrl: devUrl_0_0_0_56,
    prodUrl: prodUrl_0_0_0_56,
    path: '/platform/formValue/reGenerateFormValueId',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_56,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postPlatformFormValueReGenerateFormValueId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 回滚生成FormValueId 的 **请求函数**
 *
 * @分类 【低代码>表单】表单数据订正
 * @请求头 `POST /platform/formValue/reGenerateFormValueId`
 */
export const postPlatformFormValueReGenerateFormValueId = /*#__PURE__*/ (
  requestData: PostPlatformFormValueReGenerateFormValueIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormValueReGenerateFormValueIdResponse>(
    prepare(postPlatformFormValueReGenerateFormValueIdRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormValueReGenerateFormValueId.requestConfig = postPlatformFormValueReGenerateFormValueIdRequestConfig

const mockUrl_0_0_0_57 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_57 = '' as any
const prodUrl_0_0_0_57 = '' as any
const dataKey_0_0_0_57 = undefined as any

/**
 * 接口 新增表单设计 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/add`
 */
export interface PostPlatformFormBaseAddRequest {
  /**
   * 单据转换规则配置下推
   */
  businessPushConfigDTO?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 绑定id（流程id/表单id/列表id）
     */
    bindId?: string
    /**
     * 绑定类型1、表单 2、工作流 3、列表
     */
    bindType?: string
    /**
     * 调用转换规则
     */
    callTheRule?: string
    id?: string
    /**
     * 规则状态1、存在 2、删除
     */
    isDel?: string
    /**
     * 运行顺序
     */
    runOrder?: string
    /**
     * 选择模式 1、手动选择,2、自动选择所有数据,3、数据合并
     */
    selectMode?: string
    /**
     * 目标表单
     */
    targetForm?: string
    /**
     * 规则触发字段
     */
    triggerField?: string
    /**
     * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
     */
    triggerTime?: string
  }[]
  /**
   * 业务流规则配置
   */
  businessRuleConfigDTO?: {
    /**
     * 绑定id
     */
    bindId?: string
    /**
     * 单据转换规则配置
     */
    businessRuleConfigs?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 绑定id（流程id/表单id/列表id）
       */
      bindId?: string
      /**
       * 绑定类型1、表单 2、工作流 3、列表
       */
      bindType?: string
      /**
       * 调用转换规则
       */
      callTheRule?: string
      id?: string
      /**
       * 规则状态1、存在 2、删除
       */
      isDel?: string
      /**
       * 运行顺序
       */
      runOrder?: string
      /**
       * 选择模式 1、手动选择,2、自动选择所有数据,3、数据合并
       */
      selectMode?: string
      /**
       * 目标表单
       */
      targetForm?: string
      /**
       * 规则触发字段
       */
      triggerField?: string
      /**
       * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
       */
      triggerTime?: string
    }[]
    /**
     * 选择模式 1、手动选择,2、自动选择所有数据
     */
    selectMode?: string
    /**
     * 规则触发字段
     */
    triggerField?: string
    /**
     * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
     */
    triggerTime?: string
  }
  /**
   * 业务流显示字段保存dto
   */
  businessShowColumnDTO?: {
    /**
     * 存储字段id  格式：1,2,3,4
     */
    columnId?: string
  }[]
  /**
   * 是否激活:1是0否
   */
  enabled?: number
  /**
   * 表单编码(数据库主表名)
   */
  formCode?: string
  /**
   * 表单描述
   */
  formDesc?: string
  /**
   * 表单分组id
   */
  formGroupId?: string
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单key
   */
  formKey?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 表单模型关系
   */
  formTableInfo?: {
    /**
     * 所属模型ID
     */
    belongModelId?: string
    /**
     * 动态更新 1.动态，2.固定值
     */
    dynamicUpdate?: number
    /**
     * 引用模型ID
     */
    referModelId?: string
    /**
     * 模型对应的字段
     */
    tableColumn?: string[]
    /**
     * 模型对应的字段ID
     */
    tableColumnId?: string[]
    /**
     * 模型对应的字段详情列表
     */
    tableColumnInfos?: {
      /**
       * 别名
       */
      alias?: string
      /**
       * 字段编码
       */
      columnCode?: string
      /**
       * 配置项内容
       */
      configContent?: string
      /**
       * 控件类型
       */
      controlType?: string
      /**
       * 小数位数
       */
      decimalPlaces?: string
      /**
       * 动态更新 1.动态，2.固定值
       */
      dynamicUpdate?: number
      /**
       * 计算公式
       */
      formula?: string
      /**
       * 字段主键
       */
      id?: string
      /**
       * 0不是配置项1是配置项
       */
      isConfig?: string
      /**
       * 是否链接
       */
      isLink?: boolean
      /**
       * 1四舍五入、2进一、3去尾
       */
      operationType?: string
      /**
       * 0不是百分比、1是百分比
       */
      percentage?: string
      /**
       * 是否必填
       */
      required?: boolean
      /**
       * 明细表标题
       */
      title?: string
      /**
       * 数据类型
       */
      type?: string
    }[]
    /**
     * 模型名称
     */
    tableName?: string
  }[]
  /**
   * 表单resouce路径
   */
  formUrl?: string
  /**
   * 高级计算公式
   */
  formulaList?: {
    /**
     * 关联表单字段信息
     */
    columnDTOList?: {
      /**
       * 字段名称
       */
      columnName?: string
      /**
       * 字段类型
       */
      dateType?: number
      /**
       * 表单明细表对应的值
       */
      detailedList?: {
        /**
         * 字段名称
         */
        columnName?: string
        /**
         * 字段类型
         */
        dateType?: number
        /**
         * 子表单提交对应的值
         */
        value?: string
      }[]
      /**
       * 子模型id
       */
      referModelId?: string
      /**
       * 主表单提交对应的值
       */
      value?: string
    }[]
    /**
     * 字段名称
     */
    columnNames?: string[]
    /**
     * 关联表单id
     */
    fromId?: string
  }[]
  /**
   * 相关联的列表ID
   */
  linkListIds?: string[]
  /**
   * 主子模型列表
   */
  modelConnectDTOList?: {
    /**
     * 子表
     */
    childId?: string
    id?: string
    /**
     * 主表
     */
    primaryId?: string
  }[]
  /**
   * 关联业务模型ID
   */
  modelId?: string
  /**
   * 保存模型字段列表
   */
  modelSaveModelColumnDTOList?: {
    /**
     * 模型字段列表
     */
    fieldList?: {
      /**
       * 表对应的字段
       */
      columnCode: string
      /**
       * 表对应字段默认的中文名称
       */
      columnName: string
      corpCode?: string
      /**
       * 字段对应的默认控件类型
       */
      defaultControlType?: string
      /**
       * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
       */
      fieldClassify?: string
      /**
       * 字段类型描述
       */
      fieldTypeDescribe?: string
      /**
       * 前端传回来的中文字段类型，存id
       */
      fieldTypeId: string
      /**
       * 前端传回来的中文字段类型文本
       */
      fieldTypeText?: string
      /**
       * 该字段对应的默认控件信息
       */
      formDefaultConfig?: string
      /**
       * 隐藏删除按钮
       */
      hideDel?: boolean
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除，1：正常
       */
      isDel?: number
      /**
       * 是否是新增字段 0：不是新增 1：是新增
       */
      isInsert?: number
      /**
       * 是否非空
       */
      isNull?: string
      /**
       * 是否被表单、列表调用 0否 1是
       */
      isQuotedByFormOrList?: number
      issued?: boolean
      /**
       * 关联的字段
       */
      joinColumnId?: string
      /**
       * 关联的模型
       */
      joinModelId?: string
      /**
       * 表
       */
      modelId: string
      /**
       * 是否唯一
       */
      only?: string
      /**
       * 排序id
       */
      sortId?: string
    }[]
    /**
     * 被删除的模型字段列表
     */
    fieldListForDel?: {
      /**
       * 表对应的字段
       */
      columnCode: string
      /**
       * 表对应字段默认的中文名称
       */
      columnName: string
      corpCode?: string
      /**
       * 字段对应的默认控件类型
       */
      defaultControlType?: string
      /**
       * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
       */
      fieldClassify?: string
      /**
       * 字段类型描述
       */
      fieldTypeDescribe?: string
      /**
       * 前端传回来的中文字段类型，存id
       */
      fieldTypeId: string
      /**
       * 前端传回来的中文字段类型文本
       */
      fieldTypeText?: string
      /**
       * 该字段对应的默认控件信息
       */
      formDefaultConfig?: string
      /**
       * 隐藏删除按钮
       */
      hideDel?: boolean
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除，1：正常
       */
      isDel?: number
      /**
       * 是否是新增字段 0：不是新增 1：是新增
       */
      isInsert?: number
      /**
       * 是否非空
       */
      isNull?: string
      /**
       * 是否被表单、列表调用 0否 1是
       */
      isQuotedByFormOrList?: number
      issued?: boolean
      /**
       * 关联的字段
       */
      joinColumnId?: string
      /**
       * 关联的模型
       */
      joinModelId?: string
      /**
       * 表
       */
      modelId: string
      /**
       * 是否唯一
       */
      only?: string
      /**
       * 排序id
       */
      sortId?: string
    }[]
    /**
     * 模型表名（英）
     */
    modelCode: string
    /**
     * 业务模型id
     */
    modelId: string
    /**
     * 模型表名（中）
     */
    modelName?: string
    /**
     * 所属模块id
     */
    moduleId: string
    /**
     * 所属模块（中）
     */
    moduleName?: string
  }[]
  /**
   * 表单使用的高级查询语句
   */
  sqlUniqueMark?: string[]
  /**
   * 版本号
   */
  version?: number
}

/**
 * 接口 新增表单设计 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/add`
 */
export interface PostPlatformFormBaseAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增表单设计 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/add`
 */
type PostPlatformFormBaseAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formBase/add', undefined, string, string, false>
>

/**
 * 接口 新增表单设计 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/add`
 */
const postPlatformFormBaseAddRequestConfig: PostPlatformFormBaseAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBaseAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增表单设计 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/add`
 */
export const postPlatformFormBaseAdd = /*#__PURE__*/ (
  requestData: PostPlatformFormBaseAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBaseAddResponse>(prepare(postPlatformFormBaseAddRequestConfig, requestData), ...args)
}

postPlatformFormBaseAdd.requestConfig = postPlatformFormBaseAddRequestConfig

/**
 * 接口 字段删除拦截 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/control/delete`
 */
export interface PostPlatformFormBaseControlDeleteRequest {
  /**
   * 字段模型id
   */
  childModelId?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 表单ID
   */
  id?: string
}

/**
 * 接口 字段删除拦截 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/control/delete`
 */
export interface PostPlatformFormBaseControlDeleteResponse {
  /**
   * 分类（1、系统（自带加锁）  2、解锁  3、加锁  4、隐藏）
   */
  classify?: number
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  creator?: number
  /**
   * 是否激活:1是0否
   */
  enabled?: number
  /**
   * 表单编码(数据库主表名)
   */
  formCode?: string
  /**
   * 表单描述
   */
  formDesc?: string
  /**
   * 表单分组id
   */
  formGroupId?: string
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单key
   */
  formKey?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 表单resouce路径
   */
  formUrl?: string
  /**
   * 隐藏删除按钮
   */
  hideDel?: boolean
  /**
   * 主键
   */
  id?: string
  /**
   * 内置字段列表
   */
  innerColumnList?: string[]
  /**
   * 逻辑删除：0，删除；1，正常
   */
  isDel?: number
  issued?: boolean
  /**
   * 关联业务模型code
   */
  modelCode?: string
  /**
   * 关联业务模型ID
   */
  modelId?: string
  /**
   * 更新人
   */
  modifier?: number
  /**
   * 排序
   */
  sort?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 操作人id
   */
  userId?: number
  /**
   * 版本号
   */
  version?: number
}

/**
 * 接口 字段删除拦截 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/control/delete`
 */
type PostPlatformFormBaseControlDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/control/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 字段删除拦截 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/control/delete`
 */
const postPlatformFormBaseControlDeleteRequestConfig: PostPlatformFormBaseControlDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/control/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBaseControlDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 字段删除拦截 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/control/delete`
 */
export const postPlatformFormBaseControlDelete = /*#__PURE__*/ (
  requestData: PostPlatformFormBaseControlDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBaseControlDeleteResponse>(
    prepare(postPlatformFormBaseControlDeleteRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormBaseControlDelete.requestConfig = postPlatformFormBaseControlDeleteRequestConfig

/**
 * 接口 表单设计复制 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/copy`
 */
export interface GetPlatformFormBaseCopyRequest {
  /**
   * 表单ID
   */
  id?: string
}

/**
 * 接口 表单设计复制 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/copy`
 */
export interface GetPlatformFormBaseCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单设计复制 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/copy`
 */
type GetPlatformFormBaseCopyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formBase/copy', undefined, string, 'id', false>
>

/**
 * 接口 表单设计复制 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/copy`
 */
const getPlatformFormBaseCopyRequestConfig: GetPlatformFormBaseCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/copy',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单设计复制 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/copy`
 */
export const getPlatformFormBaseCopy = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseCopyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseCopyResponse>(prepare(getPlatformFormBaseCopyRequestConfig, requestData), ...args)
}

getPlatformFormBaseCopy.requestConfig = getPlatformFormBaseCopyRequestConfig

/**
 * 接口 删除表单设计 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/delete`
 */
export interface GetPlatformFormBaseDeleteRequest {
  /**
   * 字段模型id
   */
  childModelId?: string
  /**
   * 字段id
   */
  columnId?: string
  /**
   * 表单ID
   */
  id?: string
}

/**
 * 接口 删除表单设计 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/delete`
 */
export interface GetPlatformFormBaseDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除表单设计 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/delete`
 */
type GetPlatformFormBaseDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/delete',
    undefined,
    string,
    'childModelId' | 'columnId' | 'id',
    false
  >
>

/**
 * 接口 删除表单设计 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/delete`
 */
const getPlatformFormBaseDeleteRequestConfig: GetPlatformFormBaseDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: ['childModelId', 'columnId', 'id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除表单设计 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/delete`
 */
export const getPlatformFormBaseDelete = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseDeleteResponse>(
    prepare(getPlatformFormBaseDeleteRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseDelete.requestConfig = getPlatformFormBaseDeleteRequestConfig

/**
 * 接口 获取表单设计详情 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/detail`
 */
export interface GetPlatformFormBaseDetailRequest {
  /**
   * 表单ID
   */
  id?: string
}

/**
 * 接口 获取表单设计详情 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/detail`
 */
export interface GetPlatformFormBaseDetailResponse {
  /**
   * 分类（1、系统（自带加锁）  2、解锁  3、加锁  4、隐藏）
   */
  classify?: number
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  creator?: number
  /**
   * 是否激活:1是0否
   */
  enabled?: number
  /**
   * 表单编码(数据库主表名)
   */
  formCode?: string
  /**
   * 表单描述
   */
  formDesc?: string
  /**
   * 表单分组id
   */
  formGroupId?: string
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单key
   */
  formKey?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 表单resouce路径
   */
  formUrl?: string
  /**
   * 隐藏删除按钮
   */
  hideDel?: boolean
  /**
   * 主键
   */
  id?: string
  /**
   * 内置字段列表
   */
  innerColumnList?: string[]
  /**
   * 逻辑删除：0，删除；1，正常
   */
  isDel?: number
  issued?: boolean
  /**
   * 关联业务模型code
   */
  modelCode?: string
  /**
   * 关联业务模型ID
   */
  modelId?: string
  /**
   * 更新人
   */
  modifier?: number
  /**
   * 排序
   */
  sort?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 操作人id
   */
  userId?: number
  /**
   * 版本号
   */
  version?: number
}

/**
 * 接口 获取表单设计详情 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/detail`
 */
type GetPlatformFormBaseDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formBase/detail', undefined, string, 'id', false>
>

/**
 * 接口 获取表单设计详情 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/detail`
 */
const getPlatformFormBaseDetailRequestConfig: GetPlatformFormBaseDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取表单设计详情 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/detail`
 */
export const getPlatformFormBaseDetail = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseDetailResponse>(
    prepare(getPlatformFormBaseDetailRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseDetail.requestConfig = getPlatformFormBaseDetailRequestConfig

/**
 * 接口 根据表单Id（参数二选一）获取表单名称 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/getFromNameById`
 */
export interface GetPlatformFormBaseGetFromNameByIdRequest {
  /**
   * formBaseId
   */
  formId?: string
  /**
   * 表单值ID
   */
  formValueId?: string
}

/**
 * 接口 根据表单Id（参数二选一）获取表单名称 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/getFromNameById`
 */
export interface GetPlatformFormBaseGetFromNameByIdResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据表单Id（参数二选一）获取表单名称 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/getFromNameById`
 */
type GetPlatformFormBaseGetFromNameByIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/getFromNameById',
    undefined,
    string,
    'formId' | 'formValueId',
    false
  >
>

/**
 * 接口 根据表单Id（参数二选一）获取表单名称 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/getFromNameById`
 */
const getPlatformFormBaseGetFromNameByIdRequestConfig: GetPlatformFormBaseGetFromNameByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/getFromNameById',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: ['formId', 'formValueId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseGetFromNameById',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据表单Id（参数二选一）获取表单名称 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/getFromNameById`
 */
export const getPlatformFormBaseGetFromNameById = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseGetFromNameByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseGetFromNameByIdResponse>(
    prepare(getPlatformFormBaseGetFromNameByIdRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseGetFromNameById.requestConfig = getPlatformFormBaseGetFromNameByIdRequestConfig

/**
 * 接口 获取表单数据（根据应用分组） 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/groupByApp`
 */
export interface GetPlatformFormBaseGroupByAppRequest {
  /**
   * needPermission
   */
  needPermission?: string
}

/**
 * 接口 获取表单数据（根据应用分组） 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/groupByApp`
 */
export interface GetPlatformFormBaseGroupByAppResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取表单数据（根据应用分组） 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/groupByApp`
 */
type GetPlatformFormBaseGroupByAppRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/groupByApp',
    undefined,
    string,
    'needPermission',
    false
  >
>

/**
 * 接口 获取表单数据（根据应用分组） 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/groupByApp`
 */
const getPlatformFormBaseGroupByAppRequestConfig: GetPlatformFormBaseGroupByAppRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/groupByApp',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: ['needPermission'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseGroupByApp',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取表单数据（根据应用分组） 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/groupByApp`
 */
export const getPlatformFormBaseGroupByApp = /*#__PURE__*/ (
  requestData: GetPlatformFormBaseGroupByAppRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseGroupByAppResponse>(
    prepare(getPlatformFormBaseGroupByAppRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseGroupByApp.requestConfig = getPlatformFormBaseGroupByAppRequestConfig

/**
 * 接口 配置菜单时获取表单下拉 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/menuOptionList`
 */
export interface GetPlatformFormBaseMenuOptionListRequest {}

/**
 * 接口 配置菜单时获取表单下拉 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/menuOptionList`
 */
export interface GetPlatformFormBaseMenuOptionListResponse {
  /**
   * 表单节点
   */
  children?: {
    /**
     * 表单名称
     */
    label?: string
    /**
     * 表单分组Id
     */
    parentId?: string
    /**
     * 表单ID
     */
    value?: string
  }[]
  /**
   * 表单分组Id
   */
  groupId?: string
  /**
   * 表单分组名
   */
  groupName?: string
  /**
   * 表单分组名
   */
  label?: string
  /**
   * 表单分组Id
   */
  value?: string
}

/**
 * 接口 配置菜单时获取表单下拉 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/menuOptionList`
 */
type GetPlatformFormBaseMenuOptionListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/menuOptionList',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 配置菜单时获取表单下拉 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/menuOptionList`
 */
const getPlatformFormBaseMenuOptionListRequestConfig: GetPlatformFormBaseMenuOptionListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/menuOptionList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPlatformFormBaseMenuOptionList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 配置菜单时获取表单下拉 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `GET /platform/formBase/menuOptionList`
 */
export const getPlatformFormBaseMenuOptionList = /*#__PURE__*/ (
  requestData?: GetPlatformFormBaseMenuOptionListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetPlatformFormBaseMenuOptionListResponse>(
    prepare(getPlatformFormBaseMenuOptionListRequestConfig, requestData),
    ...args,
  )
}

getPlatformFormBaseMenuOptionList.requestConfig = getPlatformFormBaseMenuOptionListRequestConfig

/**
 * 接口 获取表单分页列表 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/page`
 */
export interface PostPlatformFormBasePageRequest {
  current?: number
  /**
   * 模型id
   */
  modelId?: string
  /**
   * 表单名称
   */
  name?: string
  /**
   * 是否需要权限
   */
  needPermission?: boolean
  size?: number
}

/**
 * 接口 获取表单分页列表 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/page`
 */
export interface PostPlatformFormBasePageResponse {
  /**
   * 分类（1、系统（自带加锁）  2、解锁  3、加锁  4、隐藏）
   */
  classify?: number
  corpCode?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  creator?: number
  /**
   * 是否激活:1是0否
   */
  enabled?: number
  /**
   * 表单编码(数据库主表名)
   */
  formCode?: string
  /**
   * 表单描述
   */
  formDesc?: string
  /**
   * 表单分组id
   */
  formGroupId?: string
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单key
   */
  formKey?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 表单resouce路径
   */
  formUrl?: string
  /**
   * 隐藏删除按钮
   */
  hideDel?: boolean
  /**
   * 主键
   */
  id?: string
  /**
   * 内置字段列表
   */
  innerColumnList?: string[]
  /**
   * 逻辑删除：0，删除；1，正常
   */
  isDel?: number
  issued?: boolean
  /**
   * 关联业务模型code
   */
  modelCode?: string
  /**
   * 关联业务模型ID
   */
  modelId?: string
  /**
   * 更新人
   */
  modifier?: number
  /**
   * 排序
   */
  sort?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 操作人id
   */
  userId?: number
  /**
   * 版本号
   */
  version?: number
}

/**
 * 接口 获取表单分页列表 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/page`
 */
type PostPlatformFormBasePageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formBase/page', undefined, string, string, false>
>

/**
 * 接口 获取表单分页列表 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/page`
 */
const postPlatformFormBasePageRequestConfig: PostPlatformFormBasePageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/page',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBasePage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取表单分页列表 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/page`
 */
export const postPlatformFormBasePage = /*#__PURE__*/ (
  requestData: PostPlatformFormBasePageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBasePageResponse>(prepare(postPlatformFormBasePageRequestConfig, requestData), ...args)
}

postPlatformFormBasePage.requestConfig = postPlatformFormBasePageRequestConfig

/**
 * 接口 表单设计排序 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/sort`
 */
export interface PostPlatformFormBaseSortRequest {
  /**
   * 主键id
   */
  id?: string
  /**
   * 0:向上 1:向下
   */
  sortWay?: number
}

/**
 * 接口 表单设计排序 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/sort`
 */
export interface PostPlatformFormBaseSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单设计排序 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/sort`
 */
type PostPlatformFormBaseSortRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formBase/sort', undefined, string, string, false>
>

/**
 * 接口 表单设计排序 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/sort`
 */
const postPlatformFormBaseSortRequestConfig: PostPlatformFormBaseSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/sort',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBaseSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单设计排序 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/sort`
 */
export const postPlatformFormBaseSort = /*#__PURE__*/ (
  requestData: PostPlatformFormBaseSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBaseSortResponse>(prepare(postPlatformFormBaseSortRequestConfig, requestData), ...args)
}

postPlatformFormBaseSort.requestConfig = postPlatformFormBaseSortRequestConfig

/**
 * 接口 更新表单设计 的 **请求类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/update`
 */
export interface PostPlatformFormBaseUpdateRequest {
  /**
   * 单据转换规则配置下推
   */
  businessPushConfigDTO?: {
    /**
     * 基础信息id
     */
    billRuleId?: string
    /**
     * 绑定id（流程id/表单id/列表id）
     */
    bindId?: string
    /**
     * 绑定类型1、表单 2、工作流 3、列表
     */
    bindType?: string
    /**
     * 调用转换规则
     */
    callTheRule?: string
    id?: string
    /**
     * 规则状态1、存在 2、删除
     */
    isDel?: string
    /**
     * 运行顺序
     */
    runOrder?: string
    /**
     * 选择模式 1、手动选择,2、自动选择所有数据,3、数据合并
     */
    selectMode?: string
    /**
     * 目标表单
     */
    targetForm?: string
    /**
     * 规则触发字段
     */
    triggerField?: string
    /**
     * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
     */
    triggerTime?: string
  }[]
  /**
   * 业务流规则配置
   */
  businessRuleConfigDTO?: {
    /**
     * 绑定id
     */
    bindId?: string
    /**
     * 单据转换规则配置
     */
    businessRuleConfigs?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 绑定id（流程id/表单id/列表id）
       */
      bindId?: string
      /**
       * 绑定类型1、表单 2、工作流 3、列表
       */
      bindType?: string
      /**
       * 调用转换规则
       */
      callTheRule?: string
      id?: string
      /**
       * 规则状态1、存在 2、删除
       */
      isDel?: string
      /**
       * 运行顺序
       */
      runOrder?: string
      /**
       * 选择模式 1、手动选择,2、自动选择所有数据,3、数据合并
       */
      selectMode?: string
      /**
       * 目标表单
       */
      targetForm?: string
      /**
       * 规则触发字段
       */
      triggerField?: string
      /**
       * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
       */
      triggerTime?: string
    }[]
    /**
     * 选择模式 1、手动选择,2、自动选择所有数据
     */
    selectMode?: string
    /**
     * 规则触发字段
     */
    triggerField?: string
    /**
     * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
     */
    triggerTime?: string
  }
  /**
   * 业务流显示字段保存dto
   */
  businessShowColumnDTO?: {
    /**
     * 存储字段id  格式：1,2,3,4
     */
    columnId?: string
  }[]
  /**
   * 动态更新 1.动态，2.固定值
   */
  dynamicUpdate?: number
  /**
   * 是否激活:1是0否
   */
  enabled?: number
  /**
   * 表单编码(数据库主表名)
   */
  formCode?: string
  /**
   * 表单描述
   */
  formDesc?: string
  /**
   * 表单分组id
   */
  formGroupId?: number
  /**
   * 表单json字符串
   */
  formJson?: string
  /**
   * 表单key
   */
  formKey?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 表单设计器打开的时间
   */
  formOpenTime?: string
  /**
   * 表单模型关系
   */
  formTableInfo?: {
    /**
     * 所属模型ID
     */
    belongModelId?: string
    /**
     * 动态更新 1.动态，2.固定值
     */
    dynamicUpdate?: number
    /**
     * 引用模型ID
     */
    referModelId?: string
    /**
     * 模型对应的字段
     */
    tableColumn?: string[]
    /**
     * 模型对应的字段ID
     */
    tableColumnId?: string[]
    /**
     * 模型对应的字段详情列表
     */
    tableColumnInfos?: {
      /**
       * 别名
       */
      alias?: string
      /**
       * 字段编码
       */
      columnCode?: string
      /**
       * 配置项内容
       */
      configContent?: string
      /**
       * 控件类型
       */
      controlType?: string
      /**
       * 小数位数
       */
      decimalPlaces?: string
      /**
       * 动态更新 1.动态，2.固定值
       */
      dynamicUpdate?: number
      /**
       * 计算公式
       */
      formula?: string
      /**
       * 字段主键
       */
      id?: string
      /**
       * 0不是配置项1是配置项
       */
      isConfig?: string
      /**
       * 是否链接
       */
      isLink?: boolean
      /**
       * 1四舍五入、2进一、3去尾
       */
      operationType?: string
      /**
       * 0不是百分比、1是百分比
       */
      percentage?: string
      /**
       * 是否必填
       */
      required?: boolean
      /**
       * 明细表标题
       */
      title?: string
      /**
       * 数据类型
       */
      type?: string
    }[]
    /**
     * 模型名称
     */
    tableName?: string
  }[]
  /**
   * 表单resouce路径
   */
  formUrl?: string
  /**
   * 表单ID
   */
  id?: string
  /**
   * 相关联的列表ID
   */
  linkListIds?: string[]
  /**
   * 主子模型列表
   */
  modelConnectDTOList?: {
    /**
     * 子表
     */
    childId?: string
    id?: string
    /**
     * 主表
     */
    primaryId?: string
  }[]
  /**
   * 关联业务模型ID
   */
  modelId?: string
  /**
   * 保存模型字段列表
   */
  modelSaveModelColumnDTOList?: {
    /**
     * 模型字段列表
     */
    fieldList?: {
      /**
       * 表对应的字段
       */
      columnCode: string
      /**
       * 表对应字段默认的中文名称
       */
      columnName: string
      corpCode?: string
      /**
       * 字段对应的默认控件类型
       */
      defaultControlType?: string
      /**
       * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
       */
      fieldClassify?: string
      /**
       * 字段类型描述
       */
      fieldTypeDescribe?: string
      /**
       * 前端传回来的中文字段类型，存id
       */
      fieldTypeId: string
      /**
       * 前端传回来的中文字段类型文本
       */
      fieldTypeText?: string
      /**
       * 该字段对应的默认控件信息
       */
      formDefaultConfig?: string
      /**
       * 隐藏删除按钮
       */
      hideDel?: boolean
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除，1：正常
       */
      isDel?: number
      /**
       * 是否是新增字段 0：不是新增 1：是新增
       */
      isInsert?: number
      /**
       * 是否非空
       */
      isNull?: string
      /**
       * 是否被表单、列表调用 0否 1是
       */
      isQuotedByFormOrList?: number
      issued?: boolean
      /**
       * 关联的字段
       */
      joinColumnId?: string
      /**
       * 关联的模型
       */
      joinModelId?: string
      /**
       * 表
       */
      modelId: string
      /**
       * 是否唯一
       */
      only?: string
      /**
       * 排序id
       */
      sortId?: string
    }[]
    /**
     * 被删除的模型字段列表
     */
    fieldListForDel?: {
      /**
       * 表对应的字段
       */
      columnCode: string
      /**
       * 表对应字段默认的中文名称
       */
      columnName: string
      corpCode?: string
      /**
       * 字段对应的默认控件类型
       */
      defaultControlType?: string
      /**
       * 系统/自定义字段 1系统 2自定义 3隐藏字段 4锁定字段 默认2
       */
      fieldClassify?: string
      /**
       * 字段类型描述
       */
      fieldTypeDescribe?: string
      /**
       * 前端传回来的中文字段类型，存id
       */
      fieldTypeId: string
      /**
       * 前端传回来的中文字段类型文本
       */
      fieldTypeText?: string
      /**
       * 该字段对应的默认控件信息
       */
      formDefaultConfig?: string
      /**
       * 隐藏删除按钮
       */
      hideDel?: boolean
      /**
       * 主键id
       */
      id?: string
      /**
       * 逻辑删除 0：删除，1：正常
       */
      isDel?: number
      /**
       * 是否是新增字段 0：不是新增 1：是新增
       */
      isInsert?: number
      /**
       * 是否非空
       */
      isNull?: string
      /**
       * 是否被表单、列表调用 0否 1是
       */
      isQuotedByFormOrList?: number
      issued?: boolean
      /**
       * 关联的字段
       */
      joinColumnId?: string
      /**
       * 关联的模型
       */
      joinModelId?: string
      /**
       * 表
       */
      modelId: string
      /**
       * 是否唯一
       */
      only?: string
      /**
       * 排序id
       */
      sortId?: string
    }[]
    /**
     * 模型表名（英）
     */
    modelCode: string
    /**
     * 业务模型id
     */
    modelId: string
    /**
     * 模型表名（中）
     */
    modelName?: string
    /**
     * 所属模块id
     */
    moduleId: string
    /**
     * 所属模块（中）
     */
    moduleName?: string
  }[]
  /**
   * 查询语句-唯一标识
   */
  sqlUniqueMark?: string[]
  /**
   * 版本号
   */
  version?: number
}

/**
 * 接口 更新表单设计 的 **返回类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/update`
 */
export interface PostPlatformFormBaseUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 更新表单设计 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/update`
 */
type PostPlatformFormBaseUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/platform/formBase/update', undefined, string, string, false>
>

/**
 * 接口 更新表单设计 的 **请求配置**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/update`
 */
const postPlatformFormBaseUpdateRequestConfig: PostPlatformFormBaseUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_57,
  devUrl: devUrl_0_0_0_57,
  prodUrl: prodUrl_0_0_0_57,
  path: '/platform/formBase/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_57,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBaseUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新表单设计 的 **请求函数**
 *
 * @分类 【低代码>表单】表单设计
 * @请求头 `POST /platform/formBase/update`
 */
export const postPlatformFormBaseUpdate = /*#__PURE__*/ (
  requestData: PostPlatformFormBaseUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBaseUpdateResponse>(
    prepare(postPlatformFormBaseUpdateRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormBaseUpdate.requestConfig = postPlatformFormBaseUpdateRequestConfig

const mockUrl_0_0_0_58 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_58 = '' as any
const prodUrl_0_0_0_58 = '' as any
const dataKey_0_0_0_58 = undefined as any

/**
 * 接口 表单计算器 的 **请求类型**
 *
 * @分类 【低代码>表单】计算器
 * @请求头 `POST /platform/formBase/calculator`
 */
export interface PostPlatformFormBaseCalculatorRequest {
  /**
   * 关联表单字段信息
   */
  columnDTOList?: {
    /**
     * 字段名称
     */
    columnName?: string
    /**
     * 字段类型
     */
    dateType?: number
    /**
     * 表单明细表对应的值
     */
    detailedList?: {
      /**
       * 字段名称
       */
      columnName?: string
      /**
       * 字段类型
       */
      dateType?: number
      /**
       * 子表单提交对应的值
       */
      value?: string
    }[]
    /**
     * 子模型id
     */
    referModelId?: string
    /**
     * 主表单提交对应的值
     */
    value?: string
  }[]
  /**
   * 字段名称
   */
  columnNames?: string[]
  /**
   * 关联表单id
   */
  fromId?: string
}

/**
 * 接口 表单计算器 的 **返回类型**
 *
 * @分类 【低代码>表单】计算器
 * @请求头 `POST /platform/formBase/calculator`
 */
export interface PostPlatformFormBaseCalculatorResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 表单计算器 的 **请求配置的类型**
 *
 * @分类 【低代码>表单】计算器
 * @请求头 `POST /platform/formBase/calculator`
 */
type PostPlatformFormBaseCalculatorRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/platform/formBase/calculator',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 表单计算器 的 **请求配置**
 *
 * @分类 【低代码>表单】计算器
 * @请求头 `POST /platform/formBase/calculator`
 */
const postPlatformFormBaseCalculatorRequestConfig: PostPlatformFormBaseCalculatorRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_58,
  devUrl: devUrl_0_0_0_58,
  prodUrl: prodUrl_0_0_0_58,
  path: '/platform/formBase/calculator',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_58,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFormBaseCalculator',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 表单计算器 的 **请求函数**
 *
 * @分类 【低代码>表单】计算器
 * @请求头 `POST /platform/formBase/calculator`
 */
export const postPlatformFormBaseCalculator = /*#__PURE__*/ (
  requestData: PostPlatformFormBaseCalculatorRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFormBaseCalculatorResponse>(
    prepare(postPlatformFormBaseCalculatorRequestConfig, requestData),
    ...args,
  )
}

postPlatformFormBaseCalculator.requestConfig = postPlatformFormBaseCalculatorRequestConfig

const mockUrl_0_0_0_59 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_59 = '' as any
const prodUrl_0_0_0_59 = '' as any
const dataKey_0_0_0_59 = undefined as any

/**
 * 接口 添加公告详情评论 的 **请求类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/add`
 */
export interface PostCollaborateNoticeCommentAddRequest {
  /**
   * 评论内容
   */
  content?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * ID
   */
  id?: number
  /**
   * 逻辑删除：0，删除；1，正常
   */
  isDel?: number
  /**
   * 公告ID
   */
  noticeId?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 评论人ID
   */
  userId?: number
}

/**
 * 接口 添加公告详情评论 的 **返回类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/add`
 */
export interface PostCollaborateNoticeCommentAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加公告详情评论 的 **请求配置的类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/add`
 */
type PostCollaborateNoticeCommentAddRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/collaborate/notice/comment/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 添加公告详情评论 的 **请求配置**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/add`
 */
const postCollaborateNoticeCommentAddRequestConfig: PostCollaborateNoticeCommentAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_59,
  devUrl: devUrl_0_0_0_59,
  prodUrl: prodUrl_0_0_0_59,
  path: '/collaborate/notice/comment/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_59,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCollaborateNoticeCommentAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加公告详情评论 的 **请求函数**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/add`
 */
export const postCollaborateNoticeCommentAdd = /*#__PURE__*/ (
  requestData: PostCollaborateNoticeCommentAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCollaborateNoticeCommentAddResponse>(
    prepare(postCollaborateNoticeCommentAddRequestConfig, requestData),
    ...args,
  )
}

postCollaborateNoticeCommentAdd.requestConfig = postCollaborateNoticeCommentAddRequestConfig

/**
 * 接口 删除公告详情评论 的 **请求类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `GET /collaborate/notice/comment/delete`
 */
export interface GetCollaborateNoticeCommentDeleteRequest {
  /**
   * id
   */
  id?: string
}

/**
 * 接口 删除公告详情评论 的 **返回类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `GET /collaborate/notice/comment/delete`
 */
export interface GetCollaborateNoticeCommentDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除公告详情评论 的 **请求配置的类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `GET /collaborate/notice/comment/delete`
 */
type GetCollaborateNoticeCommentDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/collaborate/notice/comment/delete',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 删除公告详情评论 的 **请求配置**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `GET /collaborate/notice/comment/delete`
 */
const getCollaborateNoticeCommentDeleteRequestConfig: GetCollaborateNoticeCommentDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_59,
  devUrl: devUrl_0_0_0_59,
  prodUrl: prodUrl_0_0_0_59,
  path: '/collaborate/notice/comment/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_59,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCollaborateNoticeCommentDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除公告详情评论 的 **请求函数**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `GET /collaborate/notice/comment/delete`
 */
export const getCollaborateNoticeCommentDelete = /*#__PURE__*/ (
  requestData: GetCollaborateNoticeCommentDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCollaborateNoticeCommentDeleteResponse>(
    prepare(getCollaborateNoticeCommentDeleteRequestConfig, requestData),
    ...args,
  )
}

getCollaborateNoticeCommentDelete.requestConfig = getCollaborateNoticeCommentDeleteRequestConfig

/**
 * 接口 查看公告详情评论 的 **请求类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/list`
 */
export interface PostCollaborateNoticeCommentListRequest {
  /**
   * 评论内容
   */
  content?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * ID
   */
  id?: number
  /**
   * 逻辑删除：0，删除；1，正常
   */
  isDel?: number
  /**
   * 公告ID
   */
  noticeId?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 评论人ID
   */
  userId?: number
}

/**
 * 接口 查看公告详情评论 的 **返回类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/list`
 */
export interface PostCollaborateNoticeCommentListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查看公告详情评论 的 **请求配置的类型**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/list`
 */
type PostCollaborateNoticeCommentListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/collaborate/notice/comment/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 查看公告详情评论 的 **请求配置**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/list`
 */
const postCollaborateNoticeCommentListRequestConfig: PostCollaborateNoticeCommentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_59,
  devUrl: devUrl_0_0_0_59,
  prodUrl: prodUrl_0_0_0_59,
  path: '/collaborate/notice/comment/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_59,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCollaborateNoticeCommentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看公告详情评论 的 **请求函数**
 *
 * @分类 【公告】公告详情评论
 * @请求头 `POST /collaborate/notice/comment/list`
 */
export const postCollaborateNoticeCommentList = /*#__PURE__*/ (
  requestData: PostCollaborateNoticeCommentListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCollaborateNoticeCommentListResponse>(
    prepare(postCollaborateNoticeCommentListRequestConfig, requestData),
    ...args,
  )
}

postCollaborateNoticeCommentList.requestConfig = postCollaborateNoticeCommentListRequestConfig

const mockUrl_0_0_0_60 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_60 = '' as any
const prodUrl_0_0_0_60 = '' as any
const dataKey_0_0_0_60 = undefined as any

/**
 * 接口 同步外部数据 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /auth/external/apiDefinition/sync`
 */
export type PostAuthExternalApiDefinitionSyncRequest = string[]

/**
 * 接口 同步外部数据 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /auth/external/apiDefinition/sync`
 */
export interface PostAuthExternalApiDefinitionSyncResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 同步外部数据 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /auth/external/apiDefinition/sync`
 */
type PostAuthExternalApiDefinitionSyncRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/auth/external/apiDefinition/sync',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 同步外部数据 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /auth/external/apiDefinition/sync`
 */
const postAuthExternalApiDefinitionSyncRequestConfig: PostAuthExternalApiDefinitionSyncRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/auth/external/apiDefinition/sync',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAuthExternalApiDefinitionSync',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 同步外部数据 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /auth/external/apiDefinition/sync`
 */
export const postAuthExternalApiDefinitionSync = /*#__PURE__*/ (
  requestData: PostAuthExternalApiDefinitionSyncRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAuthExternalApiDefinitionSyncResponse>(
    prepare(postAuthExternalApiDefinitionSyncRequestConfig, requestData),
    ...args,
  )
}

postAuthExternalApiDefinitionSync.requestConfig = postAuthExternalApiDefinitionSyncRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/delete`
 */
export interface GetExternalApiDefinitionDeleteRequest {
  /**
   * 主键
   */
  id?: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/delete`
 */
export interface GetExternalApiDefinitionDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/delete`
 */
type GetExternalApiDefinitionDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/delete',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/delete`
 */
const getExternalApiDefinitionDeleteRequestConfig: GetExternalApiDefinitionDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getExternalApiDefinitionDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/delete`
 */
export const getExternalApiDefinitionDelete = /*#__PURE__*/ (
  requestData: GetExternalApiDefinitionDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetExternalApiDefinitionDeleteResponse>(
    prepare(getExternalApiDefinitionDeleteRequestConfig, requestData),
    ...args,
  )
}

getExternalApiDefinitionDelete.requestConfig = getExternalApiDefinitionDeleteRequestConfig

/**
 * 接口 详情 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/detail`
 */
export interface GetExternalApiDefinitionDetailRequest {
  /**
   * 主键
   */
  id?: string
}

/**
 * 接口 详情 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/detail`
 */
export interface GetExternalApiDefinitionDetailResponse {
  /**
   * 编码
   */
  code?: string
  /**
   * 数据同步方式
   */
  dataSyncMode?: number
  /**
   * 描述
   */
  description?: string
  /**
   * 属性字段对应表
   */
  fieldColumns?: {
    /**
     * 字段
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 名称
     */
    fieldName?: string
    /**
     * 类型
     */
    fieldType?: number
    /**
     * 类型名称
     */
    fieldTypeName?: string
    /**
     * 备注
     */
    filedRemark?: string
  }[]
  /**
   * 表单id
   */
  formId?: string
  /**
   * 请求头参数
   */
  headerParams?: {
    /**
     * 接口定义id
     */
    apiDefinitionId?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否为空0不为空1为空
     */
    empty?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 类型
     */
    type?: number
    /**
     * 默认值
     */
    value?: string
  }[]
  /**
   * 主键
   */
  id?: string
  /**
   * 请求方式
   */
  method?: number
  /**
   * 关联模型id
   */
  modelId?: string
  /**
   * 关联模型编码
   */
  modelTableCode?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 请求参数
   */
  requestParams?: {
    /**
     * 接口定义id
     */
    apiDefinitionId?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否为空0不为空1为空
     */
    empty?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 类型
     */
    type?: number
    /**
     * 默认值
     */
    value?: string
  }[]
  /**
   * 规则
   */
  resolveRule?: string
  /**
   * 状态0禁用1启用
   */
  status?: number
  /**
   * 类型
   */
  type?: number
  /**
   * 请求路径
   */
  url?: string
}

/**
 * 接口 详情 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/detail`
 */
type GetExternalApiDefinitionDetailRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/detail',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 详情 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/detail`
 */
const getExternalApiDefinitionDetailRequestConfig: GetExternalApiDefinitionDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getExternalApiDefinitionDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 详情 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/detail`
 */
export const getExternalApiDefinitionDetail = /*#__PURE__*/ (
  requestData: GetExternalApiDefinitionDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetExternalApiDefinitionDetailResponse>(
    prepare(getExternalApiDefinitionDetailRequestConfig, requestData),
    ...args,
  )
}

getExternalApiDefinitionDetail.requestConfig = getExternalApiDefinitionDetailRequestConfig

/**
 * 接口 调试启用|禁用 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/enable`
 */
export interface GetExternalApiDefinitionEnableRequest {
  /**
   * 主键
   */
  id?: string
}

/**
 * 接口 调试启用|禁用 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/enable`
 */
export interface GetExternalApiDefinitionEnableResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 调试启用|禁用 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/enable`
 */
type GetExternalApiDefinitionEnableRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/enable',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 调试启用|禁用 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/enable`
 */
const getExternalApiDefinitionEnableRequestConfig: GetExternalApiDefinitionEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/enable',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getExternalApiDefinitionEnable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 调试启用|禁用 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/enable`
 */
export const getExternalApiDefinitionEnable = /*#__PURE__*/ (
  requestData: GetExternalApiDefinitionEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetExternalApiDefinitionEnableResponse>(
    prepare(getExternalApiDefinitionEnableRequestConfig, requestData),
    ...args,
  )
}

getExternalApiDefinitionEnable.requestConfig = getExternalApiDefinitionEnableRequestConfig

/**
 * 接口 返回JSON属性 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/fields`
 */
export interface PostExternalApiDefinitionFieldsRequest {
  /**
   * 解析规则
   */
  resolveRule?: string
}

/**
 * 接口 返回JSON属性 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/fields`
 */
export interface PostExternalApiDefinitionFieldsResponse {
  [k: string]: unknown
}

/**
 * 接口 返回JSON属性 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/fields`
 */
type PostExternalApiDefinitionFieldsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/fields',
    undefined,
    string,
    'resolveRule',
    false
  >
>

/**
 * 接口 返回JSON属性 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/fields`
 */
const postExternalApiDefinitionFieldsRequestConfig: PostExternalApiDefinitionFieldsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/fields',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: ['resolveRule'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExternalApiDefinitionFields',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 返回JSON属性 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/fields`
 */
export const postExternalApiDefinitionFields = /*#__PURE__*/ (
  requestData: PostExternalApiDefinitionFieldsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExternalApiDefinitionFieldsResponse>(
    prepare(postExternalApiDefinitionFieldsRequestConfig, requestData),
    ...args,
  )
}

postExternalApiDefinitionFields.requestConfig = postExternalApiDefinitionFieldsRequestConfig

/**
 * 接口 分页 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/page`
 */
export interface GetExternalApiDefinitionPageRequest {
  /**
   * 编码
   */
  code?: string
  /**
   * 当前页
   */
  current: string
  /**
   * 名称
   */
  name?: string
  /**
   * 页数
   */
  size: string
}

/**
 * 接口 分页 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/page`
 */
export interface GetExternalApiDefinitionPageResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 分页 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/page`
 */
type GetExternalApiDefinitionPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/page',
    undefined,
    string,
    'code' | 'current' | 'name' | 'size',
    false
  >
>

/**
 * 接口 分页 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/page`
 */
const getExternalApiDefinitionPageRequestConfig: GetExternalApiDefinitionPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/page',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: ['code', 'current', 'name', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getExternalApiDefinitionPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `GET /external/apiDefinition/page`
 */
export const getExternalApiDefinitionPage = /*#__PURE__*/ (
  requestData: GetExternalApiDefinitionPageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetExternalApiDefinitionPageResponse>(
    prepare(getExternalApiDefinitionPageRequestConfig, requestData),
    ...args,
  )
}

getExternalApiDefinitionPage.requestConfig = getExternalApiDefinitionPageRequestConfig

/**
 * 接口 http客户端 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/request`
 */
export interface PostExternalApiDefinitionRequestRequest {
  /**
   * 编码
   */
  code?: string
  /**
   * 数据同步方式
   */
  dataSyncMode?: number
  /**
   * 描述
   */
  description?: string
  /**
   * 返回字段和表字段的对应关系
   */
  fieldColumns?: {
    /**
     * 字段
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 名称
     */
    fieldName?: string
    /**
     * 类型
     */
    fieldType?: number
    /**
     * 备注
     */
    filedRemark?: string
  }[]
  /**
   * 关联的表单id
   */
  formId?: string
  /**
   * 请求头参数
   */
  headerParams?: {
    /**
     * 接口定义id
     */
    apiDefinitionId?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否为空0不为空1为空
     */
    empty?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 类型
     */
    type?: number
    /**
     * 默认值
     */
    value?: string
  }[]
  /**
   * 主键
   */
  id?: string
  /**
   * 请求方式
   */
  method?: number
  /**
   * 关联模型id
   */
  modelId?: string
  /**
   * 关联模型编码
   */
  modelTableCode?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 请求参数
   */
  requestParams?: {
    /**
     * 接口定义id
     */
    apiDefinitionId?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否为空0不为空1为空
     */
    empty?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 类型
     */
    type?: number
    /**
     * 默认值
     */
    value?: string
  }[]
  /**
   * 请求规则
   */
  resolveRule?: string
  /**
   * 状态0禁用1启用
   */
  status?: number
  /**
   * 类型
   */
  type?: number
  /**
   * 请求路径
   */
  url?: string
}

/**
 * 接口 http客户端 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/request`
 */
export interface PostExternalApiDefinitionRequestResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 http客户端 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/request`
 */
type PostExternalApiDefinitionRequestRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/request',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 http客户端 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/request`
 */
const postExternalApiDefinitionRequestRequestConfig: PostExternalApiDefinitionRequestRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/request',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExternalApiDefinitionRequest',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 http客户端 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/request`
 */
export const postExternalApiDefinitionRequest = /*#__PURE__*/ (
  requestData: PostExternalApiDefinitionRequestRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExternalApiDefinitionRequestResponse>(
    prepare(postExternalApiDefinitionRequestRequestConfig, requestData),
    ...args,
  )
}

postExternalApiDefinitionRequest.requestConfig = postExternalApiDefinitionRequestRequestConfig

/**
 * 接口 新增 的 **请求类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/save`
 */
export interface PostExternalApiDefinitionSaveRequest {
  /**
   * 编码
   */
  code?: string
  /**
   * 数据同步方式
   */
  dataSyncMode?: number
  /**
   * 描述
   */
  description?: string
  /**
   * 返回字段和表字段的对应关系
   */
  fieldColumns?: {
    /**
     * 字段
     */
    columnCode?: string
    /**
     * 字段id
     */
    columnId?: string
    /**
     * 名称
     */
    fieldName?: string
    /**
     * 类型
     */
    fieldType?: number
    /**
     * 备注
     */
    filedRemark?: string
  }[]
  /**
   * 关联的表单id
   */
  formId?: string
  /**
   * 请求头参数
   */
  headerParams?: {
    /**
     * 接口定义id
     */
    apiDefinitionId?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否为空0不为空1为空
     */
    empty?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 类型
     */
    type?: number
    /**
     * 默认值
     */
    value?: string
  }[]
  /**
   * 主键
   */
  id?: string
  /**
   * 请求方式
   */
  method?: number
  /**
   * 关联模型id
   */
  modelId?: string
  /**
   * 关联模型编码
   */
  modelTableCode?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 请求参数
   */
  requestParams?: {
    /**
     * 接口定义id
     */
    apiDefinitionId?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否为空0不为空1为空
     */
    empty?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 类型
     */
    type?: number
    /**
     * 默认值
     */
    value?: string
  }[]
  /**
   * 请求规则
   */
  resolveRule?: string
  /**
   * 状态0禁用1启用
   */
  status?: number
  /**
   * 类型
   */
  type?: number
  /**
   * 请求路径
   */
  url?: string
}

/**
 * 接口 新增 的 **返回类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/save`
 */
export interface PostExternalApiDefinitionSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增 的 **请求配置的类型**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/save`
 */
type PostExternalApiDefinitionSaveRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/external/apiDefinition/save',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 新增 的 **请求配置**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/save`
 */
const postExternalApiDefinitionSaveRequestConfig: PostExternalApiDefinitionSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_60,
  devUrl: devUrl_0_0_0_60,
  prodUrl: prodUrl_0_0_0_60,
  path: '/external/apiDefinition/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_60,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExternalApiDefinitionSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增 的 **请求函数**
 *
 * @分类 【外部api】接口定义
 * @请求头 `POST /external/apiDefinition/save`
 */
export const postExternalApiDefinitionSave = /*#__PURE__*/ (
  requestData: PostExternalApiDefinitionSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExternalApiDefinitionSaveResponse>(
    prepare(postExternalApiDefinitionSaveRequestConfig, requestData),
    ...args,
  )
}

postExternalApiDefinitionSave.requestConfig = postExternalApiDefinitionSaveRequestConfig

const mockUrl_0_0_0_61 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_61 = '' as any
const prodUrl_0_0_0_61 = '' as any
const dataKey_0_0_0_61 = undefined as any

/**
 * 接口 【导入】列表导出 的 **请求类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportExcel`
 */
export interface PostExcelExportExcelRequest {
  /**
   * 按钮id
   */
  buttonId?: number
  /**
   * 条件
   */
  conditions?: {
    columnCode?: string
    value?: {}
  }[]
  current?: number
  /**
   * 地址
   */
  errorUrl?: string
  /**
   * 地址链接
   */
  errorUrlQuery?: string
  /**
   * 导出类型1-不导出数据 2-全部 3-当前页
   */
  exportType?: number
  /**
   * 表单id
   */
  formId?: string
  /**
   * 表单名称
   */
  formName?: string
  /**
   * 是否子项目，前端用于跳转
   */
  isChildProject?: boolean
  /**
   * 列表id
   */
  listMainId?: string
  /**
   * 主表行 主键id
   */
  mainIds?: string[]
  /**
   * 菜单名称
   */
  menuName?: string
  size?: number
  /**
   * 标签Id
   */
  tabId?: number
}

/**
 * 接口 【导入】列表导出 的 **返回类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportExcel`
 */
export interface PostExcelExportExcelResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 【导入】列表导出 的 **请求配置的类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportExcel`
 */
type PostExcelExportExcelRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/excel/exportExcel', undefined, string, string, false>
>

/**
 * 接口 【导入】列表导出 的 **请求配置**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportExcel`
 */
const postExcelExportExcelRequestConfig: PostExcelExportExcelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_61,
  devUrl: devUrl_0_0_0_61,
  prodUrl: prodUrl_0_0_0_61,
  path: '/excel/exportExcel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_61,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExcelExportExcel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 【导入】列表导出 的 **请求函数**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportExcel`
 */
export const postExcelExportExcel = /*#__PURE__*/ (
  requestData: PostExcelExportExcelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExcelExportExcelResponse>(prepare(postExcelExportExcelRequestConfig, requestData), ...args)
}

postExcelExportExcel.requestConfig = postExcelExportExcelRequestConfig

/**
 * 接口 【导出】列表导出 的 **请求类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportListExcel`
 */
export interface PostExcelExportListExcelRequest {
  /**
   * 子表名称
   */
  childFormName?: string
  current?: number
  /**
   * 列表应用层入参DTO
   */
  listParam?: {
    allProject?: number
    /**
     * 类路径
     */
    className?: string
    /**
     * 业务流数据过滤模型对应模板字段
     */
    columnMap?: {}
    /**
     * 前端要表单详情的字段列表的标识 0不需要 1需要
     */
    columnMapsFlag?: string
    /**
     * 当前页
     */
    current?: number
    dataQueryInterceptEventDTO?: {
      [k: string]: unknown
    }
    /**
     * 过滤查询条件
     */
    filterList?: {
      /**
       * 业务类型
       */
      businessType?: number
      /**
       * 子表模型id
       */
      childModelId?: string
      /**
       * 拼接好的字段，方便。例如table.name
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 业务模型字段的数据类型（拿过来不能编辑）
       */
      columnType?: string
      /**
       * 配置项id
       */
      configItemId?: string
      /**
       * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
       * 9人员10部门11配置项12地址13数组14关联15计算公式
       * 16引用17项目
       */
      controlType?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 区别手输、绑定列表id 1：手输 2：绑定列表id
       */
      formRelationStatus?: number
      id?: string
      isDel?: number
      /**
       * 模型ID
       */
      modelId?: string
      /**
       * 业务模型字段的注释（拿过来不能编辑）
       */
      name?: string
      /**
       * 查询条件设置
       */
      searchCondition?: string
      /**
       * 查询类型1模糊2精准3范围4精准(单)5精准(多)
       */
      searchType?: number
      /**
       * 下来查询数据源
       */
      source?: string
      tabId?: string
      /**
       * 标题，字段名称可编辑
       */
      title?: string
      /**
       * 0 是普通 1.是左侧树
       */
      treeType?: number
      /**
       * 1数据过滤,2是条件查询
       */
      type?: number
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 查询的值
       */
      value?: string
    }[]
    /**
     * 过滤查询条件
     */
    filterList_2?: {
      /**
       * 业务类型
       */
      businessType?: number
      /**
       * 子表模型id
       */
      childModelId?: string
      /**
       * 拼接好的字段，方便。例如table.name
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 业务模型字段的数据类型（拿过来不能编辑）
       */
      columnType?: string
      /**
       * 配置项id
       */
      configItemId?: string
      /**
       * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
       * 9人员10部门11配置项12地址13数组14关联15计算公式
       * 16引用17项目
       */
      controlType?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 区别手输、绑定列表id 1：手输 2：绑定列表id
       */
      formRelationStatus?: number
      id?: string
      isDel?: number
      /**
       * 模型ID
       */
      modelId?: string
      /**
       * 业务模型字段的注释（拿过来不能编辑）
       */
      name?: string
      /**
       * 查询条件设置
       */
      searchCondition?: string
      /**
       * 查询类型1模糊2精准3范围4精准(单)5精准(多)
       */
      searchType?: number
      /**
       * 下来查询数据源
       */
      source?: string
      tabId?: string
      /**
       * 标题，字段名称可编辑
       */
      title?: string
      /**
       * 0 是普通 1.是左侧树
       */
      treeType?: number
      /**
       * 1数据过滤,2是条件查询
       */
      type?: number
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 查询的值
       */
      value?: string
    }[][]
    flag?: string
    /**
     * 表单→关联列表控件→ 弹窗列表字段 的列表
     */
    formColumnIdList?: string[]
    /**
     * 查询条件列表
     */
    list?: {
      /**
       * 业务类型
       */
      businessType?: number
      /**
       * 子表模型id
       */
      childModelId?: string
      /**
       * 拼接好的字段，方便。例如table.name
       */
      columnCode?: string
      /**
       * 字段id
       */
      columnId?: string
      /**
       * 业务模型字段的数据类型（拿过来不能编辑）
       */
      columnType?: string
      /**
       * 配置项id
       */
      configItemId?: string
      /**
       * 1短文本2长文本3富文本4数值5日期6自动编号7图片8附件
       * 9人员10部门11配置项12地址13数组14关联15计算公式
       * 16引用17项目
       */
      controlType?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 区别手输、绑定列表id 1：手输 2：绑定列表id
       */
      formRelationStatus?: number
      id?: string
      isDel?: number
      /**
       * 模型ID
       */
      modelId?: string
      /**
       * 业务模型字段的注释（拿过来不能编辑）
       */
      name?: string
      /**
       * 查询条件设置
       */
      searchCondition?: string
      /**
       * 查询类型1模糊2精准3范围4精准(单)5精准(多)
       */
      searchType?: number
      /**
       * 下来查询数据源
       */
      source?: string
      tabId?: string
      /**
       * 标题，字段名称可编辑
       */
      title?: string
      /**
       * 0 是普通 1.是左侧树
       */
      treeType?: number
      /**
       * 1数据过滤,2是条件查询
       */
      type?: number
      /**
       * 修改时间
       */
      updateTime?: string
      /**
       * 查询的值
       */
      value?: string
    }[]
    /**
     * 列表id
     */
    listMainId?: string
    /**
     * 主模型id
     */
    modelId?: string
    /**
     * 业务流下推数据过滤
     */
    primaryIdList?: number[]
    /**
     * 主键Key=value
     */
    primaryKey?: string
    /**
     * 项目id，子项目专用
     */
    projectId?: number
    projectIds?: string
    /**
     * 业务规则id
     */
    ruleId?: string
    /**
     * 业务流标记列表
     */
    signList?: number[]
    /**
     * 页面大小
     */
    size?: number
    /**
     * 按照列字段排序-列表要排序的字段编码
     */
    sortColumnCode?: string
    /**
     * 按照列字段排序-升序降序标识 升序：asc 降序：desc
     */
    sortType?: string
    subProjectColumnName?: string
    /**
     * 前端tab控件主键
     */
    tabTimestampId?: string
    /**
     * 使用类型 1列表应用层自身使用 2关联列表使用 3项目使用 4 5
     */
    useType?: string
    /**
     * 用户id，项目专用
     */
    userId?: number
  }
  /**
   * 列表对应的菜单名称
   */
  menuName?: string
  size?: number
  /**
   * 导出表头
   */
  tableHeaders?: {
    /**
     * 字段code
     */
    columnCode?: string
    /**
     * 字段名称
     */
    columnName?: string
    /**
     * 是否子表
     */
    isChild?: boolean
  }[]
}

/**
 * 接口 【导出】列表导出 的 **返回类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportListExcel`
 */
export type PostExcelExportListExcelResponse = any

/**
 * 接口 【导出】列表导出 的 **请求配置的类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportListExcel`
 */
type PostExcelExportListExcelRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/excel/exportListExcel', undefined, string, string, false>
>

/**
 * 接口 【导出】列表导出 的 **请求配置**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportListExcel`
 */
const postExcelExportListExcelRequestConfig: PostExcelExportListExcelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_61,
  devUrl: devUrl_0_0_0_61,
  prodUrl: prodUrl_0_0_0_61,
  path: '/excel/exportListExcel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_61,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExcelExportListExcel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 【导出】列表导出 的 **请求函数**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/exportListExcel`
 */
export const postExcelExportListExcel = /*#__PURE__*/ (
  requestData: PostExcelExportListExcelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExcelExportListExcelResponse>(prepare(postExcelExportListExcelRequestConfig, requestData), ...args)
}

postExcelExportListExcel.requestConfig = postExcelExportListExcelRequestConfig

/**
 * 接口 【导入】导入表头信息 的 **请求类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/getColAndHead`
 */
export interface PostExcelGetColAndHeadRequest {
  /**
   * 按钮id
   */
  buttonId?: number
  /**
   * 表单ID
   */
  formId?: string
  /**
   * excel的OSS路径
   */
  ossUrl?: string
  /**
   * tab的id
   */
  tabId?: number
}

/**
 * 接口 【导入】导入表头信息 的 **返回类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/getColAndHead`
 */
export interface PostExcelGetColAndHeadResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 【导入】导入表头信息 的 **请求配置的类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/getColAndHead`
 */
type PostExcelGetColAndHeadRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/excel/getColAndHead', undefined, string, string, false>
>

/**
 * 接口 【导入】导入表头信息 的 **请求配置**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/getColAndHead`
 */
const postExcelGetColAndHeadRequestConfig: PostExcelGetColAndHeadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_61,
  devUrl: devUrl_0_0_0_61,
  prodUrl: prodUrl_0_0_0_61,
  path: '/excel/getColAndHead',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_61,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExcelGetColAndHead',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 【导入】导入表头信息 的 **请求函数**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/getColAndHead`
 */
export const postExcelGetColAndHead = /*#__PURE__*/ (
  requestData: PostExcelGetColAndHeadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExcelGetColAndHeadResponse>(prepare(postExcelGetColAndHeadRequestConfig, requestData), ...args)
}

postExcelGetColAndHead.requestConfig = postExcelGetColAndHeadRequestConfig

/**
 * 接口 明细表导入 的 **请求类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/importDetailExcel`
 */
export interface PostExcelImportDetailExcelRequest {
  detailDataList?: {
    columnId?: string
    columnName?: string
    componentName?: string
    headName?: string
    /**
     * 关联列表支持手输，true:支持 false：不支持
     */
    relationCanInput?: boolean
    value?: string
    zhName?: string
  }[]
  fields?: string[]
  modelId?: string
  url?: string
}

/**
 * 接口 明细表导入 的 **返回类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/importDetailExcel`
 */
export interface PostExcelImportDetailExcelResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 明细表导入 的 **请求配置的类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/importDetailExcel`
 */
type PostExcelImportDetailExcelRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/excel/importDetailExcel', undefined, string, string, false>
>

/**
 * 接口 明细表导入 的 **请求配置**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/importDetailExcel`
 */
const postExcelImportDetailExcelRequestConfig: PostExcelImportDetailExcelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_61,
  devUrl: devUrl_0_0_0_61,
  prodUrl: prodUrl_0_0_0_61,
  path: '/excel/importDetailExcel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_61,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExcelImportDetailExcel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 明细表导入 的 **请求函数**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/importDetailExcel`
 */
export const postExcelImportDetailExcel = /*#__PURE__*/ (
  requestData: PostExcelImportDetailExcelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExcelImportDetailExcelResponse>(
    prepare(postExcelImportDetailExcelRequestConfig, requestData),
    ...args,
  )
}

postExcelImportDetailExcel.requestConfig = postExcelImportDetailExcelRequestConfig

/**
 * 接口 【导入】列表导入 的 **请求类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/verExcelData`
 */
export interface PostExcelVerExcelDataRequest {
  /**
   * 二开事件类名
   */
  className?: string
  /**
   * 错误跳转路由
   */
  errorUrl?: string
  /**
   * 错误地址参数
   */
  errorUrlQuery?: string
  /**
   * formId
   */
  formId?: string
  /**
   * 表单名字
   */
  formName?: string
  /**
   * 是否子项目，前端用于跳转
   */
  isChildProject?: boolean
  /**
   * 关联项目id，项目字段要与该相同
   */
  linkProjectId?: string
  /**
   * 绑定列表
   */
  list?: {
    /**
     * 字段和表头以及列数对应对象列表
     */
    dataAndExcel?: {
      /**
       * 控件类型
       */
      componentName?: string
      /**
       * 对应的Excel列数
       */
      curColumn?: number
      /**
       * 字段编码
       */
      fieldCode?: string
      /**
       * 字段中文名
       */
      fieldName?: string
      /**
       * 树形编码规则
       */
      treeCode?: string
    }[]
    /**
     * 表单中文名
     */
    formName?: string
    /**
     * 模型ID
     */
    modelId?: string
    /**
     * sheet索引
     */
    sheetNo?: number
  }[]
  /**
   * 菜单名字
   */
  menuName?: string
  /**
   * 树型编码参数
   */
  treeInputCode?: string
  /**
   * oss地址
   */
  url?: string
}

/**
 * 接口 【导入】列表导入 的 **返回类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/verExcelData`
 */
export interface PostExcelVerExcelDataResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 【导入】列表导入 的 **请求配置的类型**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/verExcelData`
 */
type PostExcelVerExcelDataRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/excel/verExcelData', undefined, string, string, false>
>

/**
 * 接口 【导入】列表导入 的 **请求配置**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/verExcelData`
 */
const postExcelVerExcelDataRequestConfig: PostExcelVerExcelDataRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_61,
  devUrl: devUrl_0_0_0_61,
  prodUrl: prodUrl_0_0_0_61,
  path: '/excel/verExcelData',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_61,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postExcelVerExcelData',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 【导入】列表导入 的 **请求函数**
 *
 * @分类 【导入】导入导出
 * @请求头 `POST /excel/verExcelData`
 */
export const postExcelVerExcelData = /*#__PURE__*/ (
  requestData: PostExcelVerExcelDataRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostExcelVerExcelDataResponse>(prepare(postExcelVerExcelDataRequestConfig, requestData), ...args)
}

postExcelVerExcelData.requestConfig = postExcelVerExcelDataRequestConfig

const mockUrl_0_0_0_62 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_62 = '' as any
const prodUrl_0_0_0_62 = '' as any
const dataKey_0_0_0_62 = undefined as any

/**
 * 接口 获取根节点 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/area/list`
 */
export interface GetTotalPackAreaListRequest {
  /**
   * 子配置项ID
   */
  childId?: string
}

/**
 * 接口 获取根节点 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/area/list`
 */
export interface GetTotalPackAreaListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取根节点 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/area/list`
 */
type GetTotalPackAreaListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/totalPack/area/list', undefined, string, 'childId', false>
>

/**
 * 接口 获取根节点 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/area/list`
 */
const getTotalPackAreaListRequestConfig: GetTotalPackAreaListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/area/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: ['childId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTotalPackAreaList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取根节点 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/area/list`
 */
export const getTotalPackAreaList = /*#__PURE__*/ (
  requestData: GetTotalPackAreaListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetTotalPackAreaListResponse>(prepare(getTotalPackAreaListRequestConfig, requestData), ...args)
}

getTotalPackAreaList.requestConfig = getTotalPackAreaListRequestConfig

/**
 * 接口 【款项支付】检验管控条件是否满足 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/checkValidWhenSubmit`
 */
export interface PostTotalPackCheckValidWhenSubmitRequest {
  /**
   * 主表中【账户可支付余额】
   */
  accountCanPayMoney?: number
  /**
   * 主表中【付款账户】
   */
  accountId?: string
  /**
   * 主表中【账户余额】
   */
  accountPayMoney?: number
  /**
   * 无合同信息
   */
  annoContractInfo?: {
    /**
     * 申请支付金额
     */
    applyPayMoney?: string
    /**
     * 无合同类别
     */
    contractType?: string
    /**
     * 实际支付金额
     */
    realPayMoney?: string
  }[]
  /**
   * 主表中【申请支付金额】
   */
  applyPayMoney?: number
  /**
   * 合同信息
   */
  contractInfo?: {
    /**
     * 申请支付金额
     */
    applyPayMoney?: string
    /**
     * 合同ID
     */
    contractId?: string
    /**
     * 实际支付金额
     */
    realPayMoney?: string
  }[]
  /**
   * 明细表中鼠标焦点所在行的【申请支付余额】
   */
  focusApplyPayMoney?: number
  /**
   * 明细表中鼠标焦点所在行的【合同ID】
   */
  focusContractId?: string
  /**
   * 明细表中鼠标焦点所在行的【无合同类别】
   */
  focusContractType?: string
  /**
   * 明细表中鼠标焦点所在行的【实际支付余额】
   */
  focusRealPayMoney?: number
  /**
   * 表单值ID
   */
  formValueId?: string
  /**
   * 有无合同（true:有合同 false/NULL:无合同）
   */
  hasContract?: boolean
  /**
   * 操作类型（1：表单提交 2:添加或编辑）
   */
  operateType?: number
  /**
   * 项目ID
   */
  projectId?: string
  /**
   * 主表中【实际支付金额】
   */
  realPayMoney?: number
}

/**
 * 接口 【款项支付】检验管控条件是否满足 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/checkValidWhenSubmit`
 */
export interface PostTotalPackCheckValidWhenSubmitResponse {
  code?: string
  data?: {
    /**
     * 错误提示消息
     */
    errorTip?: string
    /**
     * 错误提示类型
     */
    errorType?: string
    /**
     * 是否存在问题，true:成功 false:失败
     */
    success?: boolean
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 【款项支付】检验管控条件是否满足 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/checkValidWhenSubmit`
 */
type PostTotalPackCheckValidWhenSubmitRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/totalPack/checkValidWhenSubmit',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 【款项支付】检验管控条件是否满足 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/checkValidWhenSubmit`
 */
const postTotalPackCheckValidWhenSubmitRequestConfig: PostTotalPackCheckValidWhenSubmitRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/checkValidWhenSubmit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postTotalPackCheckValidWhenSubmit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 【款项支付】检验管控条件是否满足 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/checkValidWhenSubmit`
 */
export const postTotalPackCheckValidWhenSubmit = /*#__PURE__*/ (
  requestData: PostTotalPackCheckValidWhenSubmitRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostTotalPackCheckValidWhenSubmitResponse>(
    prepare(postTotalPackCheckValidWhenSubmitRequestConfig, requestData),
    ...args,
  )
}

postTotalPackCheckValidWhenSubmit.requestConfig = postTotalPackCheckValidWhenSubmitRequestConfig

/**
 * 接口 获取【暂扣退还】开累相关数据 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getGiveBack`
 */
export interface GetTotalPackGetGiveBackRequest {
  /**
   * 账户ID
   */
  accountId?: string
  /**
   * 申请退还金额
   */
  applyBackMoney?: string
  /**
   * 合同Id
   */
  contractId?: string
  /**
   * 表单详情ID
   */
  formValueId?: string
  /**
   * 暂扣退还ID
   */
  id?: string
  /**
   * 项目Id
   */
  projectId?: string
  /**
   * 实际退还金额
   */
  realBackMoney?: string
  /**
   * 相关字段是否触发（true:触发 false:没触发）
   */
  relateFieldChange?: string
}

/**
 * 接口 获取【暂扣退还】开累相关数据 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getGiveBack`
 */
export interface GetTotalPackGetGiveBackResponse {
  code?: string
  data?: {
    /**
     * 账户余额（实时）
     */
    balanceNowRealTime?: number
    /**
     * 开累暂扣退还（实时）
     */
    deductSumBackRealTime?: number
    /**
     * 开累暂扣（实时）
     */
    deductSumRealTime?: number
    /**
     * 流程中暂扣退还（实时）
     */
    returnProcessRealTime?: number
    /**
     * 规则判断是否成功 true:成功 false:失败
     */
    success?: boolean
    /**
     * 判断失败时的提示信息
     */
    tip?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取【暂扣退还】开累相关数据 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getGiveBack`
 */
type GetTotalPackGetGiveBackRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/totalPack/getGiveBack',
    undefined,
    string,
    | 'accountId'
    | 'applyBackMoney'
    | 'contractId'
    | 'formValueId'
    | 'id'
    | 'projectId'
    | 'realBackMoney'
    | 'relateFieldChange',
    false
  >
>

/**
 * 接口 获取【暂扣退还】开累相关数据 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getGiveBack`
 */
const getTotalPackGetGiveBackRequestConfig: GetTotalPackGetGiveBackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/getGiveBack',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: [
    'accountId',
    'applyBackMoney',
    'contractId',
    'formValueId',
    'id',
    'projectId',
    'realBackMoney',
    'relateFieldChange',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTotalPackGetGiveBack',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取【暂扣退还】开累相关数据 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getGiveBack`
 */
export const getTotalPackGetGiveBack = /*#__PURE__*/ (
  requestData: GetTotalPackGetGiveBackRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetTotalPackGetGiveBackResponse>(prepare(getTotalPackGetGiveBackRequestConfig, requestData), ...args)
}

getTotalPackGetGiveBack.requestConfig = getTotalPackGetGiveBackRequestConfig

/**
 * 接口 获取【款项支付】账户相关金额 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentAccountMoney`
 */
export interface GetTotalPackGetPaymentAccountMoneyRequest {
  /**
   * 账户ID
   */
  accountId?: string
}

/**
 * 接口 获取【款项支付】账户相关金额 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentAccountMoney`
 */
export interface GetTotalPackGetPaymentAccountMoneyResponse {
  code?: string
  data?: {
    /**
     * 账户余额（实时）
     */
    balance?: string
    /**
     * 可支付余额（实时）
     */
    canUseBalance?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取【款项支付】账户相关金额 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentAccountMoney`
 */
type GetTotalPackGetPaymentAccountMoneyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/totalPack/getPaymentAccountMoney',
    undefined,
    string,
    'accountId',
    false
  >
>

/**
 * 接口 获取【款项支付】账户相关金额 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentAccountMoney`
 */
const getTotalPackGetPaymentAccountMoneyRequestConfig: GetTotalPackGetPaymentAccountMoneyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/getPaymentAccountMoney',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: ['accountId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTotalPackGetPaymentAccountMoney',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取【款项支付】账户相关金额 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentAccountMoney`
 */
export const getTotalPackGetPaymentAccountMoney = /*#__PURE__*/ (
  requestData: GetTotalPackGetPaymentAccountMoneyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetTotalPackGetPaymentAccountMoneyResponse>(
    prepare(getTotalPackGetPaymentAccountMoneyRequestConfig, requestData),
    ...args,
  )
}

getTotalPackGetPaymentAccountMoney.requestConfig = getTotalPackGetPaymentAccountMoneyRequestConfig

/**
 * 接口 获取【款项支付】相关金额 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentMoney`
 */
export interface GetTotalPackGetPaymentMoneyRequest {
  /**
   * 账户ID
   */
  accountId?: string
  /**
   * 表单值ID
   */
  formValueId?: string
  /**
   * 操作类型（1：表单加载 2:编辑金额字段）
   */
  operateType?: string
}

/**
 * 接口 获取【款项支付】相关金额 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentMoney`
 */
export interface GetTotalPackGetPaymentMoneyResponse {
  code?: string
  data?: {
    /**
     * 可支付余额（实时）
     */
    accountCanPayMoney?: number
    /**
     * 账户余额（实时）
     */
    accountLeaveMoney?: number
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取【款项支付】相关金额 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentMoney`
 */
type GetTotalPackGetPaymentMoneyRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/totalPack/getPaymentMoney',
    undefined,
    string,
    'accountId' | 'formValueId' | 'operateType',
    false
  >
>

/**
 * 接口 获取【款项支付】相关金额 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentMoney`
 */
const getTotalPackGetPaymentMoneyRequestConfig: GetTotalPackGetPaymentMoneyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/getPaymentMoney',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: ['accountId', 'formValueId', 'operateType'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTotalPackGetPaymentMoney',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取【款项支付】相关金额 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getPaymentMoney`
 */
export const getTotalPackGetPaymentMoney = /*#__PURE__*/ (
  requestData: GetTotalPackGetPaymentMoneyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetTotalPackGetPaymentMoneyResponse>(
    prepare(getTotalPackGetPaymentMoneyRequestConfig, requestData),
    ...args,
  )
}

getTotalPackGetPaymentMoney.requestConfig = getTotalPackGetPaymentMoneyRequestConfig

/**
 * 接口 获取【供应商考评】相关数据 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getSupplyGrade`
 */
export interface GetTotalPackGetSupplyGradeRequest {
  /**
   * 供应商ID
   */
  supplyId?: string
}

/**
 * 接口 获取【供应商考评】相关数据 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getSupplyGrade`
 */
export interface GetTotalPackGetSupplyGradeResponse {
  code?: string
  data?: {
    /**
     * 最近一次的考评时间
     */
    lastTime?: string
    /**
     * 最近一次的考评结果
     */
    lastTimeRate?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取【供应商考评】相关数据 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getSupplyGrade`
 */
type GetTotalPackGetSupplyGradeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/totalPack/getSupplyGrade',
    undefined,
    string,
    'supplyId',
    false
  >
>

/**
 * 接口 获取【供应商考评】相关数据 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getSupplyGrade`
 */
const getTotalPackGetSupplyGradeRequestConfig: GetTotalPackGetSupplyGradeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/getSupplyGrade',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: ['supplyId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTotalPackGetSupplyGrade',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取【供应商考评】相关数据 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `GET /totalPack/getSupplyGrade`
 */
export const getTotalPackGetSupplyGrade = /*#__PURE__*/ (
  requestData: GetTotalPackGetSupplyGradeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetTotalPackGetSupplyGradeResponse>(
    prepare(getTotalPackGetSupplyGradeRequestConfig, requestData),
    ...args,
  )
}

getTotalPackGetSupplyGrade.requestConfig = getTotalPackGetSupplyGradeRequestConfig

/**
 * 接口 同步标准物资库 的 **请求类型**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/syncStandardGoods`
 */
export interface PostTotalPackSyncStandardGoodsRequest {
  /**
   * 项目id
   */
  projectId?: string
}

/**
 * 接口 同步标准物资库 的 **返回类型**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/syncStandardGoods`
 */
export interface PostTotalPackSyncStandardGoodsResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 同步标准物资库 的 **请求配置的类型**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/syncStandardGoods`
 */
type PostTotalPackSyncStandardGoodsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/totalPack/syncStandardGoods',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 同步标准物资库 的 **请求配置**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/syncStandardGoods`
 */
const postTotalPackSyncStandardGoodsRequestConfig: PostTotalPackSyncStandardGoodsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_62,
  devUrl: devUrl_0_0_0_62,
  prodUrl: prodUrl_0_0_0_62,
  path: '/totalPack/syncStandardGoods',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_62,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postTotalPackSyncStandardGoods',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 同步标准物资库 的 **请求函数**
 *
 * @分类 【总包】
 * @请求头 `POST /totalPack/syncStandardGoods`
 */
export const postTotalPackSyncStandardGoods = /*#__PURE__*/ (
  requestData: PostTotalPackSyncStandardGoodsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostTotalPackSyncStandardGoodsResponse>(
    prepare(postTotalPackSyncStandardGoodsRequestConfig, requestData),
    ...args,
  )
}

postTotalPackSyncStandardGoods.requestConfig = postTotalPackSyncStandardGoodsRequestConfig

const mockUrl_0_0_0_63 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_63 = '' as any
const prodUrl_0_0_0_63 = '' as any
const dataKey_0_0_0_63 = undefined as any

/**
 * 接口 构建数据集字段 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/buildField`
 */
export interface GetDataCardBuildFieldRequest {
  /**
   * dsId
   */
  dsId: string
}

/**
 * 接口 构建数据集字段 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/buildField`
 */
export interface GetDataCardBuildFieldResponse {
  code?: string
  data?: {
    /**
     * 字段
     */
    field?: string
    /**
     * 字段名称
     */
    fieldName?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 构建数据集字段 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/buildField`
 */
type GetDataCardBuildFieldRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/buildField', undefined, string, 'dsId', false>
>

/**
 * 接口 构建数据集字段 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/buildField`
 */
const getDataCardBuildFieldRequestConfig: GetDataCardBuildFieldRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/buildField',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: ['dsId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataCardBuildField',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 构建数据集字段 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/buildField`
 */
export const getDataCardBuildField = /*#__PURE__*/ (
  requestData: GetDataCardBuildFieldRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataCardBuildFieldResponse>(prepare(getDataCardBuildFieldRequestConfig, requestData), ...args)
}

getDataCardBuildField.requestConfig = getDataCardBuildFieldRequestConfig

/**
 * 接口 计算 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/calculateResult`
 */
export interface PostDataCardCalculateResultRequest {
  dimension?: {
    /**
     * 维度名称
     */
    fieldName?: string
  }
  /**
   * 数据集id
   */
  dsId?: string
  /**
   * 度量
   */
  metric?: {
    /**
     * 聚合方式 无处理-NONE 求和-SUM 最小值-MIN 最大值-MAX 平均值-AVERAGE 计数-COUNT 去重计数-DE_REPETITION_COUNT
     */
    aggregateType?: string
    /**
     * 度量字段
     */
    field?: string
    /**
     * 字段名称
     */
    fieldName?: string
  }[]
  /**
   * sql参数
   */
  parameter?: {}
}

/**
 * 接口 计算 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/calculateResult`
 */
export interface PostDataCardCalculateResultResponse {
  code?: string
  data?: {
    dimension?: {
      /**
       * 维度名称
       */
      fieldName?: string
    }
    /**
     * 度量
     */
    metric?: {
      /**
       * 度量字段
       */
      field?: string
      /**
       * 字段名称
       */
      fieldName?: string
      /**
       * 计算结果
       */
      result?: {}
    }[]
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 计算 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/calculateResult`
 */
type PostDataCardCalculateResultRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/calculateResult', undefined, string, string, false>
>

/**
 * 接口 计算 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/calculateResult`
 */
const postDataCardCalculateResultRequestConfig: PostDataCardCalculateResultRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/calculateResult',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataCardCalculateResult',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 计算 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/calculateResult`
 */
export const postDataCardCalculateResult = /*#__PURE__*/ (
  requestData: PostDataCardCalculateResultRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataCardCalculateResultResponse>(
    prepare(postDataCardCalculateResultRequestConfig, requestData),
    ...args,
  )
}

postDataCardCalculateResult.requestConfig = postDataCardCalculateResultRequestConfig

/**
 * 接口 图表列表 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/chartList`
 */
export interface PostDataCardChartListRequest {
  current?: number
  /**
   * 数据集id
   */
  dsId?: string
  /**
   * 字段
   */
  fields?: {
    /**
     * 字段
     */
    field?: string
    /**
     * 字段名称
     */
    fieldName?: string
  }[]
  /**
   * sql参数
   */
  parameter?: {}
  size?: number
}

/**
 * 接口 图表列表 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/chartList`
 */
export interface PostDataCardChartListResponse {
  code?: string
  data?: {}[]
  msg?: string
  resultNo?: string
  status?: boolean
  total?: number
}

/**
 * 接口 图表列表 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/chartList`
 */
type PostDataCardChartListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/chartList', undefined, string, string, false>
>

/**
 * 接口 图表列表 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/chartList`
 */
const postDataCardChartListRequestConfig: PostDataCardChartListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/chartList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataCardChartList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 图表列表 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/chartList`
 */
export const postDataCardChartList = /*#__PURE__*/ (
  requestData: PostDataCardChartListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataCardChartListResponse>(prepare(postDataCardChartListRequestConfig, requestData), ...args)
}

postDataCardChartList.requestConfig = postDataCardChartListRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/delete`
 */
export interface GetDataCardDeleteRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/delete`
 */
export interface GetDataCardDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/delete`
 */
type GetDataCardDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/delete`
 */
const getDataCardDeleteRequestConfig: GetDataCardDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataCardDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/delete`
 */
export const getDataCardDelete = /*#__PURE__*/ (
  requestData: GetDataCardDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataCardDeleteResponse>(prepare(getDataCardDeleteRequestConfig, requestData), ...args)
}

getDataCardDelete.requestConfig = getDataCardDeleteRequestConfig

/**
 * 接口 详情 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/detail`
 */
export interface GetDataCardDetailRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 详情 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/detail`
 */
export interface GetDataCardDetailResponse {
  code?: string
  data?: {
    /**
     * 数据源id
     */
    dsId?: string
    /**
     * 主键
     */
    id?: string
    /**
     * 卡片名称
     */
    name?: string
    /**
     * 卡片说明
     */
    remark?: string
    /**
     * 卡片类型 1-柱形 2-线形 3-饼图 4-指标 5-列表
     */
    type?: number
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 详情 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/detail`
 */
type GetDataCardDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/detail', undefined, string, 'id', false>
>

/**
 * 接口 详情 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/detail`
 */
const getDataCardDetailRequestConfig: GetDataCardDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataCardDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 详情 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/detail`
 */
export const getDataCardDetail = /*#__PURE__*/ (
  requestData: GetDataCardDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataCardDetailResponse>(prepare(getDataCardDetailRequestConfig, requestData), ...args)
}

getDataCardDetail.requestConfig = getDataCardDetailRequestConfig

/**
 * 接口 获取卡片设计器json 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/getJson`
 */
export interface GetDataCardGetJsonRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 获取卡片设计器json 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/getJson`
 */
export interface GetDataCardGetJsonResponse {
  code?: string
  data?: {
    /**
     * 卡片配置json
     */
    cardConfigJson?: {}
    /**
     * 卡片json
     */
    cardJson?: string
    /**
     * 主键
     */
    id?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取卡片设计器json 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/getJson`
 */
type GetDataCardGetJsonRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/getJson', undefined, string, 'id', false>
>

/**
 * 接口 获取卡片设计器json 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/getJson`
 */
const getDataCardGetJsonRequestConfig: GetDataCardGetJsonRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/getJson',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataCardGetJson',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取卡片设计器json 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `GET /dataCard/getJson`
 */
export const getDataCardGetJson = /*#__PURE__*/ (
  requestData: GetDataCardGetJsonRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataCardGetJsonResponse>(prepare(getDataCardGetJsonRequestConfig, requestData), ...args)
}

getDataCardGetJson.requestConfig = getDataCardGetJsonRequestConfig

/**
 * 接口 列表 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/list`
 */
export interface PostDataCardListRequest {
  /**
   * 卡片名称
   */
  name?: string
}

/**
 * 接口 列表 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/list`
 */
export interface PostDataCardListResponse {
  code?: string
  data?: {
    /**
     * 卡片配置json
     */
    cardConfig?: {}
    /**
     * 数据集id
     */
    dsId?: string
    /**
     * 主键
     */
    id?: string
    /**
     * 卡片名称
     */
    name?: string
    /**
     * 卡片类型 1-柱形 2-线形 3-饼图 4-指标 5-列表
     */
    type?: number
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/list`
 */
type PostDataCardListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/list', undefined, string, string, false>
>

/**
 * 接口 列表 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/list`
 */
const postDataCardListRequestConfig: PostDataCardListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataCardList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/list`
 */
export const postDataCardList = /*#__PURE__*/ (requestData: PostDataCardListRequest, ...args: UserRequestRestArgs) => {
  return request<PostDataCardListResponse>(prepare(postDataCardListRequestConfig, requestData), ...args)
}

postDataCardList.requestConfig = postDataCardListRequestConfig

/**
 * 接口 分页列表 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/page`
 */
export interface PostDataCardPageRequest {
  current?: number
  /**
   * 卡片名称
   */
  name?: string
  size?: number
}

/**
 * 接口 分页列表 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/page`
 */
export interface PostDataCardPageResponse {
  code?: string
  data?: {
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 创建人
     */
    creator?: string
    /**
     * 数据源名称
     */
    dsName?: string
    /**
     * 主键
     */
    id?: string
    /**
     * 卡片名称
     */
    name?: string
    /**
     * 卡片说明
     */
    remark?: string
    /**
     * 卡片类型 1-柱形 2-线形 3-饼图 4-指标 5-列表
     */
    type?: number
    /**
     * 卡片类型名称
     */
    typeName?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
  total?: number
}

/**
 * 接口 分页列表 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/page`
 */
type PostDataCardPageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/page', undefined, string, string, false>
>

/**
 * 接口 分页列表 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/page`
 */
const postDataCardPageRequestConfig: PostDataCardPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/page',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataCardPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页列表 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/page`
 */
export const postDataCardPage = /*#__PURE__*/ (requestData: PostDataCardPageRequest, ...args: UserRequestRestArgs) => {
  return request<PostDataCardPageResponse>(prepare(postDataCardPageRequestConfig, requestData), ...args)
}

postDataCardPage.requestConfig = postDataCardPageRequestConfig

/**
 * 接口 保存 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/save`
 */
export interface PostDataCardSaveRequest {
  [k: string]: unknown
}

/**
 * 接口 保存 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/save`
 */
export interface PostDataCardSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/save`
 */
type PostDataCardSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/save', undefined, string, string, false>
>

/**
 * 接口 保存 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/save`
 */
const postDataCardSaveRequestConfig: PostDataCardSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataCardSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/save`
 */
export const postDataCardSave = /*#__PURE__*/ (requestData: PostDataCardSaveRequest, ...args: UserRequestRestArgs) => {
  return request<PostDataCardSaveResponse>(prepare(postDataCardSaveRequestConfig, requestData), ...args)
}

postDataCardSave.requestConfig = postDataCardSaveRequestConfig

/**
 * 接口 修改 的 **请求类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/update`
 */
export interface PostDataCardUpdateRequest {
  [k: string]: unknown
}

/**
 * 接口 修改 的 **返回类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/update`
 */
export interface PostDataCardUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改 的 **请求配置的类型**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/update`
 */
type PostDataCardUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataCard/update', undefined, string, string, false>
>

/**
 * 接口 修改 的 **请求配置**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/update`
 */
const postDataCardUpdateRequestConfig: PostDataCardUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_63,
  devUrl: devUrl_0_0_0_63,
  prodUrl: prodUrl_0_0_0_63,
  path: '/dataCard/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_63,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataCardUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改 的 **请求函数**
 *
 * @分类 【数据卡片】
 * @请求头 `POST /dataCard/update`
 */
export const postDataCardUpdate = /*#__PURE__*/ (
  requestData: PostDataCardUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataCardUpdateResponse>(prepare(postDataCardUpdateRequestConfig, requestData), ...args)
}

postDataCardUpdate.requestConfig = postDataCardUpdateRequestConfig

const mockUrl_0_0_0_64 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_64 = '' as any
const prodUrl_0_0_0_64 = '' as any
const dataKey_0_0_0_64 = undefined as any

/**
 * 接口 app看板列表 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/appGetDataBoardList`
 */
export interface PostDataBoardAppGetDataBoardListRequest {
  /**
   * 看板名称
   */
  name?: string
  /**
   * 经营模式id (project_mould)
   */
  projectMouldId?: number
  /**
   * 看板类型 0-个人 1-系统 2-项目 3-工程 4-其他
   */
  type?: number
}

/**
 * 接口 app看板列表 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/appGetDataBoardList`
 */
export interface PostDataBoardAppGetDataBoardListResponse {
  code?: string
  data?: {
    /**
     * 主键
     */
    id?: string
    /**
     * 看板名称
     */
    name?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 app看板列表 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/appGetDataBoardList`
 */
type PostDataBoardAppGetDataBoardListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/dataBoard/appGetDataBoardList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 app看板列表 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/appGetDataBoardList`
 */
const postDataBoardAppGetDataBoardListRequestConfig: PostDataBoardAppGetDataBoardListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/appGetDataBoardList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataBoardAppGetDataBoardList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 app看板列表 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/appGetDataBoardList`
 */
export const postDataBoardAppGetDataBoardList = /*#__PURE__*/ (
  requestData: PostDataBoardAppGetDataBoardListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataBoardAppGetDataBoardListResponse>(
    prepare(postDataBoardAppGetDataBoardListRequestConfig, requestData),
    ...args,
  )
}

postDataBoardAppGetDataBoardList.requestConfig = postDataBoardAppGetDataBoardListRequestConfig

/**
 * 接口 app项目列表 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/appGetProjectList`
 */
export interface GetDataBoardAppGetProjectListRequest {}

/**
 * 接口 app项目列表 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/appGetProjectList`
 */
export interface GetDataBoardAppGetProjectListResponse {
  code?: string
  data?: {
    /**
     * 经营模式code
     */
    manageMode?: string
    /**
     * 经营模式名称
     */
    manageModeName?: string
    /**
     * 工程项目
     */
    projects?: {
      /**
       * 项目id
       */
      id?: string
      /**
       * 项目名称
       */
      projectName?: string
    }[]
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 app项目列表 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/appGetProjectList`
 */
type GetDataBoardAppGetProjectListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/dataBoard/appGetProjectList',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 app项目列表 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/appGetProjectList`
 */
const getDataBoardAppGetProjectListRequestConfig: GetDataBoardAppGetProjectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/appGetProjectList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataBoardAppGetProjectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 app项目列表 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/appGetProjectList`
 */
export const getDataBoardAppGetProjectList = /*#__PURE__*/ (
  requestData?: GetDataBoardAppGetProjectListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataBoardAppGetProjectListResponse>(
    prepare(getDataBoardAppGetProjectListRequestConfig, requestData),
    ...args,
  )
}

getDataBoardAppGetProjectList.requestConfig = getDataBoardAppGetProjectListRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/delete`
 */
export interface GetDataBoardDeleteRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/delete`
 */
export interface GetDataBoardDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/delete`
 */
type GetDataBoardDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/delete', undefined, string, 'id', false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/delete`
 */
const getDataBoardDeleteRequestConfig: GetDataBoardDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/delete',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataBoardDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/delete`
 */
export const getDataBoardDelete = /*#__PURE__*/ (
  requestData: GetDataBoardDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataBoardDeleteResponse>(prepare(getDataBoardDeleteRequestConfig, requestData), ...args)
}

getDataBoardDelete.requestConfig = getDataBoardDeleteRequestConfig

/**
 * 接口 详情 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/detail`
 */
export interface GetDataBoardDetailRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 详情 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/detail`
 */
export interface GetDataBoardDetailResponse {
  code?: string
  data?: {
    /**
     * 看板设计器json
     */
    boardJson?: string
    /**
     * 编码
     */
    code?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 创建人
     */
    creator?: number
    /**
     * 主键
     */
    id?: string
    /**
     * 看板名称
     */
    name?: string
    /**
     * 经营模式id (project_mould)
     */
    projectMouldId?: number
    /**
     * 看板说明
     */
    remark?: string
    /**
     * 看板类型 0-个人 1-系统 2-项目 3-工程 4-其他
     */
    type?: number
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 详情 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/detail`
 */
type GetDataBoardDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/detail', undefined, string, 'id', false>
>

/**
 * 接口 详情 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/detail`
 */
const getDataBoardDetailRequestConfig: GetDataBoardDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataBoardDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 详情 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/detail`
 */
export const getDataBoardDetail = /*#__PURE__*/ (
  requestData: GetDataBoardDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataBoardDetailResponse>(prepare(getDataBoardDetailRequestConfig, requestData), ...args)
}

getDataBoardDetail.requestConfig = getDataBoardDetailRequestConfig

/**
 * 接口 获取看板设计器json 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/getJson`
 */
export interface GetDataBoardGetJsonRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 获取看板设计器json 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/getJson`
 */
export interface GetDataBoardGetJsonResponse {
  code?: string
  data?: {
    /**
     * 看板json
     */
    boardJson?: string
    /**
     * 主键
     */
    id?: string
  }
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 获取看板设计器json 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/getJson`
 */
type GetDataBoardGetJsonRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/getJson', undefined, string, 'id', false>
>

/**
 * 接口 获取看板设计器json 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/getJson`
 */
const getDataBoardGetJsonRequestConfig: GetDataBoardGetJsonRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/getJson',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataBoardGetJson',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取看板设计器json 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `GET /dataBoard/getJson`
 */
export const getDataBoardGetJson = /*#__PURE__*/ (
  requestData: GetDataBoardGetJsonRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataBoardGetJsonResponse>(prepare(getDataBoardGetJsonRequestConfig, requestData), ...args)
}

getDataBoardGetJson.requestConfig = getDataBoardGetJsonRequestConfig

/**
 * 接口 列表 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/list`
 */
export interface PostDataBoardListRequest {
  /**
   * 看板名称
   */
  name?: string
  /**
   * 经营模式id (project_mould)
   */
  projectMouldId?: number
  /**
   * 看板类型 0-个人 1-系统 2-项目 3-工程 4-其他
   */
  type?: number
}

/**
 * 接口 列表 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/list`
 */
export interface PostDataBoardListResponse {
  code?: string
  data?: {
    /**
     * 主键
     */
    id?: string
    /**
     * 看板名称
     */
    name?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 列表 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/list`
 */
type PostDataBoardListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/list', undefined, string, string, false>
>

/**
 * 接口 列表 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/list`
 */
const postDataBoardListRequestConfig: PostDataBoardListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataBoardList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列表 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/list`
 */
export const postDataBoardList = /*#__PURE__*/ (
  requestData: PostDataBoardListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataBoardListResponse>(prepare(postDataBoardListRequestConfig, requestData), ...args)
}

postDataBoardList.requestConfig = postDataBoardListRequestConfig

/**
 * 接口 分页列表 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/page`
 */
export interface PostDataBoardPageRequest {
  current?: number
  /**
   * 看板名称
   */
  name?: string
  size?: number
}

/**
 * 接口 分页列表 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/page`
 */
export interface PostDataBoardPageResponse {
  code?: string
  data?: {
    /**
     * 经营模式名称
     */
    businessModeName?: string
    /**
     * 编码
     */
    code?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 创建人
     */
    creator?: string
    /**
     * 主键
     */
    id?: string
    /**
     * 看板名称
     */
    name?: string
    /**
     * 经营模式id (project_mould)
     */
    projectMouldId?: number
    /**
     * 看板说明
     */
    remark?: string
    /**
     * 看板类型 0-个人 1-系统 2-项目 3-工程 4-其他
     */
    type?: number
    /**
     * 看板类型名称
     */
    typeName?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
  resultNo?: string
  status?: boolean
  total?: number
}

/**
 * 接口 分页列表 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/page`
 */
type PostDataBoardPageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/page', undefined, string, string, false>
>

/**
 * 接口 分页列表 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/page`
 */
const postDataBoardPageRequestConfig: PostDataBoardPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/page',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataBoardPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页列表 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/page`
 */
export const postDataBoardPage = /*#__PURE__*/ (
  requestData: PostDataBoardPageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataBoardPageResponse>(prepare(postDataBoardPageRequestConfig, requestData), ...args)
}

postDataBoardPage.requestConfig = postDataBoardPageRequestConfig

/**
 * 接口 保存 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/save`
 */
export interface PostDataBoardSaveRequest {
  /**
   * 看板设计器json
   */
  boardJson?: string
  /**
   * 编码
   */
  code?: string
  /**
   * 数据卡片id
   */
  dataCardIds?: string[]
  /**
   * 主键
   */
  id?: string
  /**
   * 看板名称
   */
  name?: string
  /**
   * 经营模式id (project_mould)
   */
  projectMouldId?: number
  /**
   * 看板说明
   */
  remark?: string
  /**
   * 看板类型 0-个人 1-系统 2-项目 3-工程 4-其他
   */
  type?: number
}

/**
 * 接口 保存 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/save`
 */
export interface PostDataBoardSaveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/save`
 */
type PostDataBoardSaveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/save', undefined, string, string, false>
>

/**
 * 接口 保存 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/save`
 */
const postDataBoardSaveRequestConfig: PostDataBoardSaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/save',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataBoardSave',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/save`
 */
export const postDataBoardSave = /*#__PURE__*/ (
  requestData: PostDataBoardSaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataBoardSaveResponse>(prepare(postDataBoardSaveRequestConfig, requestData), ...args)
}

postDataBoardSave.requestConfig = postDataBoardSaveRequestConfig

/**
 * 接口 修改 的 **请求类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/update`
 */
export interface PostDataBoardUpdateRequest {
  /**
   * 看板设计器json
   */
  boardJson?: string
  /**
   * 编码
   */
  code?: string
  /**
   * 数据卡片id
   */
  dataCardIds?: string[]
  /**
   * 主键
   */
  id?: string
  /**
   * 看板名称
   */
  name?: string
  /**
   * 经营模式id (project_mould)
   */
  projectMouldId?: number
  /**
   * 看板说明
   */
  remark?: string
  /**
   * 看板类型 0-个人 1-系统 2-项目 3-工程 4-其他
   */
  type?: number
}

/**
 * 接口 修改 的 **返回类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/update`
 */
export interface PostDataBoardUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改 的 **请求配置的类型**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/update`
 */
type PostDataBoardUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataBoard/update', undefined, string, string, false>
>

/**
 * 接口 修改 的 **请求配置**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/update`
 */
const postDataBoardUpdateRequestConfig: PostDataBoardUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_64,
  devUrl: devUrl_0_0_0_64,
  prodUrl: prodUrl_0_0_0_64,
  path: '/dataBoard/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_64,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDataBoardUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改 的 **请求函数**
 *
 * @分类 【数据看板】
 * @请求头 `POST /dataBoard/update`
 */
export const postDataBoardUpdate = /*#__PURE__*/ (
  requestData: PostDataBoardUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostDataBoardUpdateResponse>(prepare(postDataBoardUpdateRequestConfig, requestData), ...args)
}

postDataBoardUpdate.requestConfig = postDataBoardUpdateRequestConfig

const mockUrl_0_0_0_65 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_65 = '' as any
const prodUrl_0_0_0_65 = '' as any
const dataKey_0_0_0_65 = undefined as any

/**
 * 接口 根据key获取配置 的 **请求类型**
 *
 * @分类 【数据配置】
 * @请求头 `GET /dataConfig/getConfig`
 */
export interface GetDataConfigGetConfigRequest {
  /**
   * configKey
   */
  configKey: string
}

/**
 * 接口 根据key获取配置 的 **返回类型**
 *
 * @分类 【数据配置】
 * @请求头 `GET /dataConfig/getConfig`
 */
export interface GetDataConfigGetConfigResponse {
  code?: string
  data?: string
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据key获取配置 的 **请求配置的类型**
 *
 * @分类 【数据配置】
 * @请求头 `GET /dataConfig/getConfig`
 */
type GetDataConfigGetConfigRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/dataConfig/getConfig', undefined, string, 'configKey', false>
>

/**
 * 接口 根据key获取配置 的 **请求配置**
 *
 * @分类 【数据配置】
 * @请求头 `GET /dataConfig/getConfig`
 */
const getDataConfigGetConfigRequestConfig: GetDataConfigGetConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_65,
  devUrl: devUrl_0_0_0_65,
  prodUrl: prodUrl_0_0_0_65,
  path: '/dataConfig/getConfig',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_65,
  paramNames: [],
  queryNames: ['configKey'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDataConfigGetConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据key获取配置 的 **请求函数**
 *
 * @分类 【数据配置】
 * @请求头 `GET /dataConfig/getConfig`
 */
export const getDataConfigGetConfig = /*#__PURE__*/ (
  requestData: GetDataConfigGetConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDataConfigGetConfigResponse>(prepare(getDataConfigGetConfigRequestConfig, requestData), ...args)
}

getDataConfigGetConfig.requestConfig = getDataConfigGetConfigRequestConfig

const mockUrl_0_0_0_66 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_66 = '' as any
const prodUrl_0_0_0_66 = '' as any
const dataKey_0_0_0_66 = undefined as any

/**
 * 接口 添加专栏栏目 的 **请求类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/add`
 */
export type PostSpecialColumnAddRequest = {
  current?: number
  id?: string
  /**
   * 名称
   */
  name?: string
  size?: number
  /**
   * 排序
   */
  sort?: number
}[]

/**
 * 接口 添加专栏栏目 的 **返回类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/add`
 */
export interface PostSpecialColumnAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加专栏栏目 的 **请求配置的类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/add`
 */
type PostSpecialColumnAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/special/column/add', undefined, string, string, false>
>

/**
 * 接口 添加专栏栏目 的 **请求配置**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/add`
 */
const postSpecialColumnAddRequestConfig: PostSpecialColumnAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_66,
  devUrl: devUrl_0_0_0_66,
  prodUrl: prodUrl_0_0_0_66,
  path: '/special/column/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_66,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSpecialColumnAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加专栏栏目 的 **请求函数**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/add`
 */
export const postSpecialColumnAdd = /*#__PURE__*/ (
  requestData: PostSpecialColumnAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSpecialColumnAddResponse>(prepare(postSpecialColumnAddRequestConfig, requestData), ...args)
}

postSpecialColumnAdd.requestConfig = postSpecialColumnAddRequestConfig

/**
 * 接口 查看专栏栏目 的 **请求类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/list`
 */
export interface PostSpecialColumnListRequest {
  current?: number
  id?: string
  /**
   * 名称
   */
  name?: string
  size?: number
  /**
   * 排序
   */
  sort?: number
}

/**
 * 接口 查看专栏栏目 的 **返回类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/list`
 */
export interface PostSpecialColumnListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查看专栏栏目 的 **请求配置的类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/list`
 */
type PostSpecialColumnListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/special/column/list', undefined, string, string, false>
>

/**
 * 接口 查看专栏栏目 的 **请求配置**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/list`
 */
const postSpecialColumnListRequestConfig: PostSpecialColumnListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_66,
  devUrl: devUrl_0_0_0_66,
  prodUrl: prodUrl_0_0_0_66,
  path: '/special/column/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_66,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSpecialColumnList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看专栏栏目 的 **请求函数**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/list`
 */
export const postSpecialColumnList = /*#__PURE__*/ (
  requestData: PostSpecialColumnListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSpecialColumnListResponse>(prepare(postSpecialColumnListRequestConfig, requestData), ...args)
}

postSpecialColumnList.requestConfig = postSpecialColumnListRequestConfig

/**
 * 接口 修改专栏栏目 的 **请求类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/update`
 */
export type PostSpecialColumnUpdateRequest = {
  current?: number
  id?: string
  /**
   * 名称
   */
  name?: string
  size?: number
  /**
   * 排序
   */
  sort?: number
}[]

/**
 * 接口 修改专栏栏目 的 **返回类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/update`
 */
export interface PostSpecialColumnUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 修改专栏栏目 的 **请求配置的类型**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/update`
 */
type PostSpecialColumnUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/special/column/update', undefined, string, string, false>
>

/**
 * 接口 修改专栏栏目 的 **请求配置**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/update`
 */
const postSpecialColumnUpdateRequestConfig: PostSpecialColumnUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_66,
  devUrl: devUrl_0_0_0_66,
  prodUrl: prodUrl_0_0_0_66,
  path: '/special/column/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_66,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postSpecialColumnUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改专栏栏目 的 **请求函数**
 *
 * @分类 special-column-controller
 * @请求头 `POST /special/column/update`
 */
export const postSpecialColumnUpdate = /*#__PURE__*/ (
  requestData: PostSpecialColumnUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostSpecialColumnUpdateResponse>(prepare(postSpecialColumnUpdateRequestConfig, requestData), ...args)
}

postSpecialColumnUpdate.requestConfig = postSpecialColumnUpdateRequestConfig

const mockUrl_0_0_0_67 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_67 = '' as any
const prodUrl_0_0_0_67 = '' as any
const dataKey_0_0_0_67 = undefined as any

/**
 * 接口 新增 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/add`
 */
export interface PostFlowGroupAddRequest {
  /**
   * 0上移1下移
   */
  downward?: number
  /**
   * 主键
   */
  id?: string
  /**
   * 名称
   */
  name?: string
}

/**
 * 接口 新增 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/add`
 */
export interface PostFlowGroupAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 新增 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/add`
 */
type PostFlowGroupAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/group/add', undefined, string, string, false>
>

/**
 * 接口 新增 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/add`
 */
const postFlowGroupAddRequestConfig: PostFlowGroupAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowGroupAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新增 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/add`
 */
export const postFlowGroupAdd = /*#__PURE__*/ (requestData: PostFlowGroupAddRequest, ...args: UserRequestRestArgs) => {
  return request<PostFlowGroupAddResponse>(prepare(postFlowGroupAddRequestConfig, requestData), ...args)
}

postFlowGroupAdd.requestConfig = postFlowGroupAddRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/delete`
 */
export interface PostFlowGroupDeleteRequest {
  /**
   * 0上移1下移
   */
  downward?: number
  /**
   * 主键
   */
  id?: string
  /**
   * 名称
   */
  name?: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/delete`
 */
export interface PostFlowGroupDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/delete`
 */
type PostFlowGroupDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/group/delete', undefined, string, string, false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/delete`
 */
const postFlowGroupDeleteRequestConfig: PostFlowGroupDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowGroupDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/delete`
 */
export const postFlowGroupDelete = /*#__PURE__*/ (
  requestData: PostFlowGroupDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowGroupDeleteResponse>(prepare(postFlowGroupDeleteRequestConfig, requestData), ...args)
}

postFlowGroupDelete.requestConfig = postFlowGroupDeleteRequestConfig

/**
 * 接口 全部 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/list`
 */
export interface GetFlowGroupListRequest {}

/**
 * 接口 全部 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/list`
 */
export interface GetFlowGroupListResponse {
  /**
   * 创建时间
   */
  createTime?: string
  id?: string
  /**
   * 0删除1未删除
   */
  isDel?: number
  /**
   * 名称
   */
  name?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 全部 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/list`
 */
type GetFlowGroupListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/group/list', undefined, string, string, true>
>

/**
 * 接口 全部 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/list`
 */
const getFlowGroupListRequestConfig: GetFlowGroupListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowGroupList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 全部 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/list`
 */
export const getFlowGroupList = /*#__PURE__*/ (requestData?: GetFlowGroupListRequest, ...args: UserRequestRestArgs) => {
  return request<GetFlowGroupListResponse>(prepare(getFlowGroupListRequestConfig, requestData), ...args)
}

getFlowGroupList.requestConfig = getFlowGroupListRequestConfig

/**
 * 接口 分页 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/page`
 */
export interface GetFlowGroupPageRequest {
  /**
   * 当前页
   */
  current?: string
  /**
   * 页数
   */
  size?: string
}

/**
 * 接口 分页 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/page`
 */
export interface GetFlowGroupPageResponse {
  /**
   * 向下0不可以1可以
   */
  downward?: number
  /**
   * 主键
   */
  id?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 向上0不可以1可以
   */
  upward?: number
}

/**
 * 接口 分页 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/page`
 */
type GetFlowGroupPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/group/page',
    undefined,
    string,
    'current' | 'size',
    false
  >
>

/**
 * 接口 分页 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/page`
 */
const getFlowGroupPageRequestConfig: GetFlowGroupPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/page',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: ['current', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowGroupPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/page`
 */
export const getFlowGroupPage = /*#__PURE__*/ (requestData: GetFlowGroupPageRequest, ...args: UserRequestRestArgs) => {
  return request<GetFlowGroupPageResponse>(prepare(getFlowGroupPageRequestConfig, requestData), ...args)
}

getFlowGroupPage.requestConfig = getFlowGroupPageRequestConfig

/**
 * 接口 全部：权限 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/permissionList`
 */
export interface GetFlowGroupPermissionListRequest {}

/**
 * 接口 全部：权限 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/permissionList`
 */
export interface GetFlowGroupPermissionListResponse {
  /**
   * 颜色
   */
  color?: string
  /**
   * 创建者id
   */
  creatorId?: number
  /**
   * 0未发布1已发布
   */
  deploy?: number
  /**
   * 向下0不可以1可以
   */
  downward?: number
  /**
   * 表单id
   */
  formId?: string
  /**
   * 表单名称
   */
  formName?: string
  /**
   * 授权范围0部分1全员
   */
  fullScope?: number
  /**
   * 分组id
   */
  groupId?: string
  /**
   * 分组名称
   */
  groupName?: string
  /**
   * 是否有权限
   */
  hasPermission?: boolean
  /**
   * 主键
   */
  id?: string
  /**
   * 名称主题
   */
  name?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 状态0禁用1启用
   */
  status?: number
  /**
   * 向上0不可以1可以
   */
  upward?: number
}

/**
 * 接口 全部：权限 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/permissionList`
 */
type GetFlowGroupPermissionListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/group/permissionList', undefined, string, string, true>
>

/**
 * 接口 全部：权限 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/permissionList`
 */
const getFlowGroupPermissionListRequestConfig: GetFlowGroupPermissionListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/permissionList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowGroupPermissionList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 全部：权限 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `GET /flow/group/permissionList`
 */
export const getFlowGroupPermissionList = /*#__PURE__*/ (
  requestData?: GetFlowGroupPermissionListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowGroupPermissionListResponse>(
    prepare(getFlowGroupPermissionListRequestConfig, requestData),
    ...args,
  )
}

getFlowGroupPermissionList.requestConfig = getFlowGroupPermissionListRequestConfig

/**
 * 接口 排序 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/sort`
 */
export interface PostFlowGroupSortRequest {
  /**
   * 0上移1下移
   */
  downward?: number
  /**
   * 主键
   */
  id?: string
  /**
   * 名称
   */
  name?: string
}

/**
 * 接口 排序 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/sort`
 */
export interface PostFlowGroupSortResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 排序 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/sort`
 */
type PostFlowGroupSortRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/group/sort', undefined, string, string, false>
>

/**
 * 接口 排序 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/sort`
 */
const postFlowGroupSortRequestConfig: PostFlowGroupSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/sort',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowGroupSort',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 排序 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/sort`
 */
export const postFlowGroupSort = /*#__PURE__*/ (
  requestData: PostFlowGroupSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowGroupSortResponse>(prepare(postFlowGroupSortRequestConfig, requestData), ...args)
}

postFlowGroupSort.requestConfig = postFlowGroupSortRequestConfig

/**
 * 接口 编辑 的 **请求类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/update`
 */
export interface PostFlowGroupUpdateRequest {
  /**
   * 0上移1下移
   */
  downward?: number
  /**
   * 主键
   */
  id?: string
  /**
   * 名称
   */
  name?: string
}

/**
 * 接口 编辑 的 **返回类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/update`
 */
export interface PostFlowGroupUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑 的 **请求配置的类型**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/update`
 */
type PostFlowGroupUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/group/update', undefined, string, string, false>
>

/**
 * 接口 编辑 的 **请求配置**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/update`
 */
const postFlowGroupUpdateRequestConfig: PostFlowGroupUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_67,
  devUrl: devUrl_0_0_0_67,
  prodUrl: prodUrl_0_0_0_67,
  path: '/flow/group/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_67,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowGroupUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑 的 **请求函数**
 *
 * @分类 【新工作流】01分组
 * @请求头 `POST /flow/group/update`
 */
export const postFlowGroupUpdate = /*#__PURE__*/ (
  requestData: PostFlowGroupUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowGroupUpdateResponse>(prepare(postFlowGroupUpdateRequestConfig, requestData), ...args)
}

postFlowGroupUpdate.requestConfig = postFlowGroupUpdateRequestConfig

const mockUrl_0_0_0_68 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_68 = '' as any
const prodUrl_0_0_0_68 = '' as any
const dataKey_0_0_0_68 = undefined as any

/**
 * 接口 流程权限分组带定义 的 **请求类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinition/group`
 */
export interface GetFlowAppDefinitionGroupRequest {
  /**
   * 流程定义名称
   */
  name?: string
}

/**
 * 接口 流程权限分组带定义 的 **返回类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinition/group`
 */
export interface GetFlowAppDefinitionGroupResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 流程权限分组带定义 的 **请求配置的类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinition/group`
 */
type GetFlowAppDefinitionGroupRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/appDefinition/group', undefined, string, 'name', false>
>

/**
 * 接口 流程权限分组带定义 的 **请求配置**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinition/group`
 */
const getFlowAppDefinitionGroupRequestConfig: GetFlowAppDefinitionGroupRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_68,
  devUrl: devUrl_0_0_0_68,
  prodUrl: prodUrl_0_0_0_68,
  path: '/flow/appDefinition/group',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_68,
  paramNames: [],
  queryNames: ['name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowAppDefinitionGroup',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 流程权限分组带定义 的 **请求函数**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinition/group`
 */
export const getFlowAppDefinitionGroup = /*#__PURE__*/ (
  requestData: GetFlowAppDefinitionGroupRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowAppDefinitionGroupResponse>(
    prepare(getFlowAppDefinitionGroupRequestConfig, requestData),
    ...args,
  )
}

getFlowAppDefinitionGroup.requestConfig = getFlowAppDefinitionGroupRequestConfig

/**
 * 接口 流程名称查询历史删除 的 **请求类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/delete`
 */
export interface GetFlowAppDefinitionNameHistoryDeleteRequest {
  /**
   * 流程定义名称id，-1和不传清空所有
   */
  id?: string
}

/**
 * 接口 流程名称查询历史删除 的 **返回类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/delete`
 */
export interface GetFlowAppDefinitionNameHistoryDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 流程名称查询历史删除 的 **请求配置的类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/delete`
 */
type GetFlowAppDefinitionNameHistoryDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/appDefinitionNameHistory/delete',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 流程名称查询历史删除 的 **请求配置**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/delete`
 */
const getFlowAppDefinitionNameHistoryDeleteRequestConfig: GetFlowAppDefinitionNameHistoryDeleteRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_68,
    devUrl: devUrl_0_0_0_68,
    prodUrl: prodUrl_0_0_0_68,
    path: '/flow/appDefinitionNameHistory/delete',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_68,
    paramNames: [],
    queryNames: ['id'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getFlowAppDefinitionNameHistoryDelete',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 流程名称查询历史删除 的 **请求函数**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/delete`
 */
export const getFlowAppDefinitionNameHistoryDelete = /*#__PURE__*/ (
  requestData: GetFlowAppDefinitionNameHistoryDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowAppDefinitionNameHistoryDeleteResponse>(
    prepare(getFlowAppDefinitionNameHistoryDeleteRequestConfig, requestData),
    ...args,
  )
}

getFlowAppDefinitionNameHistoryDelete.requestConfig = getFlowAppDefinitionNameHistoryDeleteRequestConfig

/**
 * 接口 流程名称查询历史 的 **请求类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/list`
 */
export interface GetFlowAppDefinitionNameHistoryListRequest {}

/**
 * 接口 流程名称查询历史 的 **返回类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/list`
 */
export interface GetFlowAppDefinitionNameHistoryListResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 流程名称查询历史 的 **请求配置的类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/list`
 */
type GetFlowAppDefinitionNameHistoryListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/appDefinitionNameHistory/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 流程名称查询历史 的 **请求配置**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/list`
 */
const getFlowAppDefinitionNameHistoryListRequestConfig: GetFlowAppDefinitionNameHistoryListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_68,
    devUrl: devUrl_0_0_0_68,
    prodUrl: prodUrl_0_0_0_68,
    path: '/flow/appDefinitionNameHistory/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_68,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getFlowAppDefinitionNameHistoryList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 流程名称查询历史 的 **请求函数**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appDefinitionNameHistory/list`
 */
export const getFlowAppDefinitionNameHistoryList = /*#__PURE__*/ (
  requestData?: GetFlowAppDefinitionNameHistoryListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowAppDefinitionNameHistoryListResponse>(
    prepare(getFlowAppDefinitionNameHistoryListRequestConfig, requestData),
    ...args,
  )
}

getFlowAppDefinitionNameHistoryList.requestConfig = getFlowAppDefinitionNameHistoryListRequestConfig

/**
 * 接口 APP端数据统计 的 **请求类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appInstanceHandler/stat`
 */
export interface GetFlowAppInstanceHandlerStatRequest {
  /**
   * 1按照周2按照月统计数据
   */
  type: string
}

/**
 * 接口 APP端数据统计 的 **返回类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appInstanceHandler/stat`
 */
export interface GetFlowAppInstanceHandlerStatResponse {
  /**
   * 比较上周或者上月数量
   */
  compareLaunchNumber?: string
  /**
   * 已处理的
   */
  completeNumber?: string
  /**
   * 完成率
   */
  completeRate?: string
  /**
   * 已结束的
   */
  endedNumber?: string
  /**
   * 比较上周或者上月数量
   */
  lastWaitNumber?: string
  /**
   * 我发起的数量
   */
  launchNumber?: string
  /**
   * 通过率
   */
  passRate?: string
  /**
   * 我的流程Tab页跳转url
   */
  processTabH5Url?: string
  /**
   * 待处理
   */
  waitNumber?: string
}

/**
 * 接口 APP端数据统计 的 **请求配置的类型**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appInstanceHandler/stat`
 */
type GetFlowAppInstanceHandlerStatRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/appInstanceHandler/stat',
    undefined,
    string,
    'type',
    false
  >
>

/**
 * 接口 APP端数据统计 的 **请求配置**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appInstanceHandler/stat`
 */
const getFlowAppInstanceHandlerStatRequestConfig: GetFlowAppInstanceHandlerStatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_68,
  devUrl: devUrl_0_0_0_68,
  prodUrl: prodUrl_0_0_0_68,
  path: '/flow/appInstanceHandler/stat',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_68,
  paramNames: [],
  queryNames: ['type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowAppInstanceHandlerStat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 APP端数据统计 的 **请求函数**
 *
 * @分类 【新工作流】app端实例查询：包含分组
 * @请求头 `GET /flow/appInstanceHandler/stat`
 */
export const getFlowAppInstanceHandlerStat = /*#__PURE__*/ (
  requestData: GetFlowAppInstanceHandlerStatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowAppInstanceHandlerStatResponse>(
    prepare(getFlowAppInstanceHandlerStatRequestConfig, requestData),
    ...args,
  )
}

getFlowAppInstanceHandlerStat.requestConfig = getFlowAppInstanceHandlerStatRequestConfig

const mockUrl_0_0_0_69 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_69 = '' as any
const prodUrl_0_0_0_69 = '' as any
const dataKey_0_0_0_69 = undefined as any

/**
 * 接口 保存 的 **请求类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/add`
 */
export interface PostFlowEntrustAddRequest {
  /**
   * 全部委托0不是1是
   */
  all?: number
  /**
   * 受委托人id
   */
  delegateId?: number
  /**
   * 委托结束时间
   */
  endTime?: string
  /**
   * 流程定义id
   */
  flowCustomDefinitionIds?: string[]
  /**
   * 主键
   */
  id?: string
  /**
   * 委托开始时间
   */
  startTime?: string
}

/**
 * 接口 保存 的 **返回类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/add`
 */
export interface PostFlowEntrustAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 保存 的 **请求配置的类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/add`
 */
type PostFlowEntrustAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/entrust/add', undefined, string, string, false>
>

/**
 * 接口 保存 的 **请求配置**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/add`
 */
const postFlowEntrustAddRequestConfig: PostFlowEntrustAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_69,
  devUrl: devUrl_0_0_0_69,
  prodUrl: prodUrl_0_0_0_69,
  path: '/flow/entrust/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_69,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowEntrustAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 保存 的 **请求函数**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/add`
 */
export const postFlowEntrustAdd = /*#__PURE__*/ (
  requestData: PostFlowEntrustAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowEntrustAddResponse>(prepare(postFlowEntrustAddRequestConfig, requestData), ...args)
}

postFlowEntrustAdd.requestConfig = postFlowEntrustAddRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/delete`
 */
export interface PostFlowEntrustDeleteRequest {
  /**
   * 全部委托0不是1是
   */
  all?: number
  /**
   * 受委托人id
   */
  delegateId?: number
  /**
   * 委托结束时间
   */
  endTime?: string
  /**
   * 流程定义id
   */
  flowCustomDefinitionIds?: string[]
  /**
   * 主键
   */
  id?: string
  /**
   * 委托开始时间
   */
  startTime?: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/delete`
 */
export interface PostFlowEntrustDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/delete`
 */
type PostFlowEntrustDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/entrust/delete', undefined, string, string, false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/delete`
 */
const postFlowEntrustDeleteRequestConfig: PostFlowEntrustDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_69,
  devUrl: devUrl_0_0_0_69,
  prodUrl: prodUrl_0_0_0_69,
  path: '/flow/entrust/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_69,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowEntrustDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/delete`
 */
export const postFlowEntrustDelete = /*#__PURE__*/ (
  requestData: PostFlowEntrustDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowEntrustDeleteResponse>(prepare(postFlowEntrustDeleteRequestConfig, requestData), ...args)
}

postFlowEntrustDelete.requestConfig = postFlowEntrustDeleteRequestConfig

/**
 * 接口 分页：我委托的 的 **请求类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrust/page`
 */
export interface GetFlowEntrustPageRequest {
  /**
   * 当前页
   */
  current?: string
  /**
   * 页数
   */
  size?: string
}

/**
 * 接口 分页：我委托的 的 **返回类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrust/page`
 */
export interface GetFlowEntrustPageResponse {
  /**
   * 全部委托0不是1是
   */
  all?: number
  /**
   * 受委托人id
   */
  delegateId?: number
  /**
   * 受委托人姓名
   */
  delegateName?: string
  /**
   * 委托结束时间
   */
  endTime?: string
  /**
   * 流程定义id
   */
  flowCustomDefinitionIds?: string[]
  /**
   * 流程
   */
  flowCustomDefinitions?: {
    /**
     * 颜色
     */
    color?: string
    /**
     * 创建者id
     */
    creatorId?: number
    /**
     * 0未发布1已发布
     */
    deploy?: number
    /**
     * 向下0不可以1可以
     */
    downward?: number
    /**
     * 表单id
     */
    formId?: string
    /**
     * 表单名称
     */
    formName?: string
    /**
     * 授权范围0部分1全员
     */
    fullScope?: number
    /**
     * 分组id
     */
    groupId?: string
    /**
     * 分组名称
     */
    groupName?: string
    /**
     * 是否有权限
     */
    hasPermission?: boolean
    /**
     * 主键
     */
    id?: string
    /**
     * 名称主题
     */
    name?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 状态0禁用1启用
     */
    status?: number
    /**
     * 向上0不可以1可以
     */
    upward?: number
  }[]
  /**
   * 处理人id
   */
  handlerId?: number
  /**
   * 处理人姓名
   */
  handlerName?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 委托开始时间
   */
  startTime?: string
  /**
   * 1未到时间2进行中3已过期
   */
  status?: number
}

/**
 * 接口 分页：我委托的 的 **请求配置的类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrust/page`
 */
type GetFlowEntrustPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/entrust/page',
    undefined,
    string,
    'current' | 'size',
    false
  >
>

/**
 * 接口 分页：我委托的 的 **请求配置**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrust/page`
 */
const getFlowEntrustPageRequestConfig: GetFlowEntrustPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_69,
  devUrl: devUrl_0_0_0_69,
  prodUrl: prodUrl_0_0_0_69,
  path: '/flow/entrust/page',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_69,
  paramNames: [],
  queryNames: ['current', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowEntrustPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页：我委托的 的 **请求函数**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrust/page`
 */
export const getFlowEntrustPage = /*#__PURE__*/ (
  requestData: GetFlowEntrustPageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowEntrustPageResponse>(prepare(getFlowEntrustPageRequestConfig, requestData), ...args)
}

getFlowEntrustPage.requestConfig = getFlowEntrustPageRequestConfig

/**
 * 接口 编辑 的 **请求类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/update`
 */
export interface PostFlowEntrustUpdateRequest {
  /**
   * 全部委托0不是1是
   */
  all?: number
  /**
   * 受委托人id
   */
  delegateId?: number
  /**
   * 委托结束时间
   */
  endTime?: string
  /**
   * 流程定义id
   */
  flowCustomDefinitionIds?: string[]
  /**
   * 主键
   */
  id?: string
  /**
   * 委托开始时间
   */
  startTime?: string
}

/**
 * 接口 编辑 的 **返回类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/update`
 */
export interface PostFlowEntrustUpdateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 编辑 的 **请求配置的类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/update`
 */
type PostFlowEntrustUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/entrust/update', undefined, string, string, false>
>

/**
 * 接口 编辑 的 **请求配置**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/update`
 */
const postFlowEntrustUpdateRequestConfig: PostFlowEntrustUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_69,
  devUrl: devUrl_0_0_0_69,
  prodUrl: prodUrl_0_0_0_69,
  path: '/flow/entrust/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_69,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowEntrustUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 编辑 的 **请求函数**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `POST /flow/entrust/update`
 */
export const postFlowEntrustUpdate = /*#__PURE__*/ (
  requestData: PostFlowEntrustUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowEntrustUpdateResponse>(prepare(postFlowEntrustUpdateRequestConfig, requestData), ...args)
}

postFlowEntrustUpdate.requestConfig = postFlowEntrustUpdateRequestConfig

/**
 * 接口 分页:委托给我的 的 **请求类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrusted/page`
 */
export interface GetFlowEntrustedPageRequest {
  /**
   * 当前页
   */
  current?: string
  /**
   * 页数
   */
  size?: string
}

/**
 * 接口 分页:委托给我的 的 **返回类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrusted/page`
 */
export interface GetFlowEntrustedPageResponse {
  /**
   * 全部委托0不是1是
   */
  all?: number
  /**
   * 受委托人id
   */
  delegateId?: number
  /**
   * 受委托人姓名
   */
  delegateName?: string
  /**
   * 委托结束时间
   */
  endTime?: string
  /**
   * 流程定义id
   */
  flowCustomDefinitionIds?: string[]
  /**
   * 流程
   */
  flowCustomDefinitions?: {
    /**
     * 颜色
     */
    color?: string
    /**
     * 创建者id
     */
    creatorId?: number
    /**
     * 0未发布1已发布
     */
    deploy?: number
    /**
     * 向下0不可以1可以
     */
    downward?: number
    /**
     * 表单id
     */
    formId?: string
    /**
     * 表单名称
     */
    formName?: string
    /**
     * 授权范围0部分1全员
     */
    fullScope?: number
    /**
     * 分组id
     */
    groupId?: string
    /**
     * 分组名称
     */
    groupName?: string
    /**
     * 是否有权限
     */
    hasPermission?: boolean
    /**
     * 主键
     */
    id?: string
    /**
     * 名称主题
     */
    name?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 状态0禁用1启用
     */
    status?: number
    /**
     * 向上0不可以1可以
     */
    upward?: number
  }[]
  /**
   * 处理人id
   */
  handlerId?: number
  /**
   * 处理人姓名
   */
  handlerName?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 委托开始时间
   */
  startTime?: string
  /**
   * 1未到时间2进行中3已过期
   */
  status?: number
}

/**
 * 接口 分页:委托给我的 的 **请求配置的类型**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrusted/page`
 */
type GetFlowEntrustedPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/entrusted/page',
    undefined,
    string,
    'current' | 'size',
    false
  >
>

/**
 * 接口 分页:委托给我的 的 **请求配置**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrusted/page`
 */
const getFlowEntrustedPageRequestConfig: GetFlowEntrustedPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_69,
  devUrl: devUrl_0_0_0_69,
  prodUrl: prodUrl_0_0_0_69,
  path: '/flow/entrusted/page',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_69,
  paramNames: [],
  queryNames: ['current', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowEntrustedPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页:委托给我的 的 **请求函数**
 *
 * @分类 【新工作流】委托规则配置
 * @请求头 `GET /flow/entrusted/page`
 */
export const getFlowEntrustedPage = /*#__PURE__*/ (
  requestData: GetFlowEntrustedPageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowEntrustedPageResponse>(prepare(getFlowEntrustedPageRequestConfig, requestData), ...args)
}

getFlowEntrustedPage.requestConfig = getFlowEntrustedPageRequestConfig

const mockUrl_0_0_0_70 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_70 = '' as any
const prodUrl_0_0_0_70 = '' as any
const dataKey_0_0_0_70 = undefined as any

/**
 * 接口 历史签名查询 的 **请求类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/handler/historySign`
 */
export interface GetFlowHandlerHistorySignRequest {}

/**
 * 接口 历史签名查询 的 **返回类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/handler/historySign`
 */
export interface GetFlowHandlerHistorySignResponse {
  /**
   * true存在，false不存在
   */
  exist?: boolean
  /**
   * 历史签名
   */
  signUri?: string
}

/**
 * 接口 历史签名查询 的 **请求配置的类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/handler/historySign`
 */
type GetFlowHandlerHistorySignRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/handler/historySign', undefined, string, string, true>
>

/**
 * 接口 历史签名查询 的 **请求配置**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/handler/historySign`
 */
const getFlowHandlerHistorySignRequestConfig: GetFlowHandlerHistorySignRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_70,
  devUrl: devUrl_0_0_0_70,
  prodUrl: prodUrl_0_0_0_70,
  path: '/flow/handler/historySign',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_70,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowHandlerHistorySign',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 历史签名查询 的 **请求函数**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/handler/historySign`
 */
export const getFlowHandlerHistorySign = /*#__PURE__*/ (
  requestData?: GetFlowHandlerHistorySignRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowHandlerHistorySignResponse>(
    prepare(getFlowHandlerHistorySignRequestConfig, requestData),
    ...args,
  )
}

getFlowHandlerHistorySign.requestConfig = getFlowHandlerHistorySignRequestConfig

/**
 * 接口 查询当前审批人ids 的 **请求类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/currentHandlerIds`
 */
export interface GetFlowInstanceCurrentHandlerIdsRequest {
  /**
   * flowCustomInstanceId
   */
  flowCustomInstanceId: string
}

/**
 * 接口 查询当前审批人ids 的 **返回类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/currentHandlerIds`
 */
export interface GetFlowInstanceCurrentHandlerIdsResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查询当前审批人ids 的 **请求配置的类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/currentHandlerIds`
 */
type GetFlowInstanceCurrentHandlerIdsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/instance/currentHandlerIds',
    undefined,
    string,
    'flowCustomInstanceId',
    false
  >
>

/**
 * 接口 查询当前审批人ids 的 **请求配置**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/currentHandlerIds`
 */
const getFlowInstanceCurrentHandlerIdsRequestConfig: GetFlowInstanceCurrentHandlerIdsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_70,
  devUrl: devUrl_0_0_0_70,
  prodUrl: prodUrl_0_0_0_70,
  path: '/flow/instance/currentHandlerIds',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_70,
  paramNames: [],
  queryNames: ['flowCustomInstanceId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowInstanceCurrentHandlerIds',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询当前审批人ids 的 **请求函数**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/currentHandlerIds`
 */
export const getFlowInstanceCurrentHandlerIds = /*#__PURE__*/ (
  requestData: GetFlowInstanceCurrentHandlerIdsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowInstanceCurrentHandlerIdsResponse>(
    prepare(getFlowInstanceCurrentHandlerIdsRequestConfig, requestData),
    ...args,
  )
}

getFlowInstanceCurrentHandlerIds.requestConfig = getFlowInstanceCurrentHandlerIdsRequestConfig

/**
 * 接口 详情 的 **请求类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/detail`
 */
export interface GetFlowInstanceDetailRequest {
  /**
   * 平台流程实例id
   */
  id?: string
}

/**
 * 接口 详情 的 **返回类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/detail`
 */
export interface GetFlowInstanceDetailResponse {
  /**
   * 当前操作人信息
   */
  currentHandlerTrueNames?: string[]
  /**
   * 当前审批节点名称
   */
  currentTaskName?: string
  /**
   * 当前节点类型1单实例2顺序签3或签4会签
   */
  currentTaskType?: number
  /**
   * 1当前审批人审批中 2当前审批人已完成审批
   */
  currentUserApprovalStatus?: number
  /**
   * 当前审批人审批时间
   */
  currentUserApprovalTime?: string
  /**
   * 1发起人2发起人也是审批人3审批人4抄送人
   */
  currentUserDuty?: number
  /**
   * 任务定义
   */
  definitionTasks?: {
    /**
     * 字段
     */
    columnCode?: string
    /**
     * 完成条件
     */
    completeCondition?: string
    /**
     * 平台流程定义id
     */
    flowCustomDefinitionId?: string
    /**
     * 用户组ids
     */
    handlerGroupIds?: string
    /**
     * 指定用户处理人
     */
    handlerIds?: string
    /**
     * 指定角色集合
     */
    handlerRoleIds?: string
    /**
     * 1发起人自己 2 自选用户 3 自选角色  4 全公司 5 直接领导 6 部门负责人 7 指定用户 8 指定角色 9 表单部门负责人 10 表单直接领导 11 表单用户
     */
    handlerType?: number
    /**
     * 名称
     */
    name?: string
    /**
     * 数据推送链接
     */
    pushUrl?: string
    /**
     * 自选规则 1 全公司 2 指定角色 3 指定用户
     */
    selfHelp?: number
    /**
     * 表
     */
    tableCode?: string
    /**
     * 对应element属性中的id
     */
    taskKey?: string
    /**
     * 1单实例2顺序签3或签4会签
     */
    taskType?: number
    /**
     * 1 任务 2 网关
     */
    type?: number
    /**
     * 节点对应的变量名称
     */
    variableName?: string
  }[]
  /**
   * 动态抄送人id
   */
  dynamicTakerIds?: number[]
  /**
   * 固定抄送人id
   */
  fixedTakerIds?: number[]
  /**
   * 平台流程定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 平台流程定义名称
   */
  flowCustomDefinitionName?: string
  flowRuleBasic?: {
    /**
     * 0不支持退回后直达，1支持退回后直达
     */
    backDirect?: number
    /**
     * 0 禁止加签 1 允许加签
     */
    countersign?: number
    /**
     * 平台流程定义id
     */
    flowCustomDefinitionId?: string
    /**
     * 基础规则id
     */
    id?: string
    /**
     * 0不限制撤回1限制撤回
     */
    limitWithdraw?: number
    /**
     * 名称生成规则，0自定义1默认
     */
    nameGenerateDefault?: number
    /**
     * 自定义规则
     */
    nameGenerateRule?: string
    /**
     * 0 不下发 1 下推
     */
    pushDown?: number
    /**
     * 节点无人默认处理人
     */
    taskDefaultHandlerId?: number
    /**
     * 节点重复自动跳过0 不跳过 1 跳过
     */
    taskSkipWithRepeat?: number
    /**
     * 节点无人自动跳过0 不跳过 1 跳过
     */
    taskSkipWithoutHandler?: number
  }
  flowRuleFormPermission?: {
    /**
     * 发起节点0不是1是
     */
    initiate?: number
    /**
     * 表单规则
     */
    rule?: string
    /**
     * 流程定义key
     */
    taskKey?: string
  }
  /**
   * 表单id
   */
  formId?: string
  /**
   * 表单JSON数据
   */
  formJson?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 当前人来源0定义的处理人1节点无人默认处理人2转交产生的处理人3委托产生的处理人4加签产生的处理人5终止处理人6撤回产生的处理人
   */
  handlerSource?: number
  /**
   * 主键
   */
  id?: string
  /**
   * 0不是发起节点1发起节点
   */
  initiateTask?: number
  /**
   * 发起时间
   */
  initiateTime?: string
  /**
   * 发起人部门名称
   */
  initiatorDepName?: string
  /**
   * 发起人id
   */
  initiatorId?: number
  /**
   * 发起人名称
   */
  initiatorName?: string
  /**
   * 0不限制回退，1限制回退
   */
  limitBack?: number
  mixTakers?: {
    /**
     * 表单中的用户
     */
    columnCodes?: string[]
    /**
     * 固定抄送人
     */
    takerIds?: number[]
  }
  /**
   * 0不签名1必须签名
   */
  mustSign?: number
  /**
   * 名称主题
   */
  name?: string
  /**
   * 自选人
   */
  selfHandlers?: {
    /**
     * 单节点处理人
     */
    handlerId?: number
    /**
     * 多实例处理人
     */
    handlerIds?: number[]
    /**
     * 0多实例1单实例
     */
    single?: number
    /**
     * 变量名称
     */
    variableName?: string
  }[]
  /**
   * 流程编号
   */
  serialNumber?: string
  /**
   * 0 暂存 1 回退暂存（暂时没用到） 2 运行中  4 撤回 5 退回 10 终止 11 完成
   */
  status?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 0不可撤回1可撤回
   */
  withdraw?: number
}

/**
 * 接口 详情 的 **请求配置的类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/detail`
 */
type GetFlowInstanceDetailRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/instance/detail', undefined, string, 'id', false>
>

/**
 * 接口 详情 的 **请求配置**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/detail`
 */
const getFlowInstanceDetailRequestConfig: GetFlowInstanceDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_70,
  devUrl: devUrl_0_0_0_70,
  prodUrl: prodUrl_0_0_0_70,
  path: '/flow/instance/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_70,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowInstanceDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 详情 的 **请求函数**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/detail`
 */
export const getFlowInstanceDetail = /*#__PURE__*/ (
  requestData: GetFlowInstanceDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowInstanceDetailResponse>(prepare(getFlowInstanceDetailRequestConfig, requestData), ...args)
}

getFlowInstanceDetail.requestConfig = getFlowInstanceDetailRequestConfig

/**
 * 接口 可回退节点 的 **请求类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/fallback`
 */
export interface GetFlowInstanceFallbackRequest {
  /**
   * 平台流程实例id
   */
  id?: string
}

/**
 * 接口 可回退节点 的 **返回类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/fallback`
 */
export interface GetFlowInstanceFallbackResponse {
  /**
   * 平台任务定义id
   */
  flowCustomDefinitionTaskId?: string
  /**
   * 节点处理人名称
   */
  handlerNames?: string[]
  /**
   * 节点处理人数
   */
  handlerNumber?: number
  /**
   * 定义的节点key
   */
  taskKey?: string
  /**
   * 节点名称
   */
  taskName?: string
}

/**
 * 接口 可回退节点 的 **请求配置的类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/fallback`
 */
type GetFlowInstanceFallbackRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/instance/fallback', undefined, string, 'id', false>
>

/**
 * 接口 可回退节点 的 **请求配置**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/fallback`
 */
const getFlowInstanceFallbackRequestConfig: GetFlowInstanceFallbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_70,
  devUrl: devUrl_0_0_0_70,
  prodUrl: prodUrl_0_0_0_70,
  path: '/flow/instance/fallback',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_70,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowInstanceFallback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 可回退节点 的 **请求函数**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `GET /flow/instance/fallback`
 */
export const getFlowInstanceFallback = /*#__PURE__*/ (
  requestData: GetFlowInstanceFallbackRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowInstanceFallbackResponse>(prepare(getFlowInstanceFallbackRequestConfig, requestData), ...args)
}

getFlowInstanceFallback.requestConfig = getFlowInstanceFallbackRequestConfig

/**
 * 接口 分页查询：流程管理 的 **请求类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/mgtPage`
 */
export interface PostFlowInstanceMgtPageRequest {
  /**
   * 当前页
   */
  current?: number
  /**
   * 摘要
   */
  digest?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 序列号
   */
  serialNumber?: string
  /**
   * 大小
   */
  size?: number
  /**
   * 状态-1全部0 暂存 1 回退暂存 2 运行中  4 撤回  10 终止 11 完成
   */
  status?: number
}

/**
 * 接口 分页查询：流程管理 的 **返回类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/mgtPage`
 */
export interface PostFlowInstanceMgtPageResponse {
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 当前运行的任务id
   */
  currentCustomTaskId?: string
  /**
   * 当前运行节点
   */
  currentTaskKey?: string
  /**
   * 当前节点类型1 单实例 2 多实例会签 3多实例顺序签 4 多实例或签。 忘了实时更新了
   */
  currentTaskType?: number
  /**
   * 平台流程定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 表单id
   */
  formId?: string
  id?: string
  /**
   * 发起人节点
   */
  initiateTaskKey?: string
  /**
   * 发起时间
   */
  initiateTime?: string
  /**
   * 0草稿1已发起
   */
  initiated?: number
  /**
   * 发起人部门id
   */
  initiatorDepId?: number
  /**
   * 发起人部门名称
   */
  initiatorDepName?: string
  /**
   * 发起人id
   */
  initiatorId?: number
  /**
   * 发起人名称
   */
  initiatorName?: string
  /**
   * 0已删除1正常
   */
  isDel?: number
  /**
   * 名称主题
   */
  name?: string
  /**
   * 引擎流程定义id
   */
  processDefinitionId?: string
  /**
   * 引擎流程实例id
   */
  processInstanceId?: string
  /**
   * 流程编号
   */
  serialNumber?: string
  /**
   * 1运行中2已结束3撤回4驳回9终结（撤回和驳回属于退回的不同种类）
   */
  status?: number
  /**
   * 入库主表编码
   */
  tableCode?: string
  /**
   * 入库数据主键id
   */
  tablePrimaryId?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 0不可撤回1可撤回
   */
  withdraw?: number
}

/**
 * 接口 分页查询：流程管理 的 **请求配置的类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/mgtPage`
 */
type PostFlowInstanceMgtPageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/instance/mgtPage', undefined, string, string, false>
>

/**
 * 接口 分页查询：流程管理 的 **请求配置**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/mgtPage`
 */
const postFlowInstanceMgtPageRequestConfig: PostFlowInstanceMgtPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_70,
  devUrl: devUrl_0_0_0_70,
  prodUrl: prodUrl_0_0_0_70,
  path: '/flow/instance/mgtPage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_70,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowInstanceMgtPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页查询：流程管理 的 **请求函数**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/mgtPage`
 */
export const postFlowInstanceMgtPage = /*#__PURE__*/ (
  requestData: PostFlowInstanceMgtPageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowInstanceMgtPageResponse>(prepare(postFlowInstanceMgtPageRequestConfig, requestData), ...args)
}

postFlowInstanceMgtPage.requestConfig = postFlowInstanceMgtPageRequestConfig

/**
 * 接口 分页查询:我的流程 的 **请求类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/minePage`
 */
export interface PostFlowInstanceMinePageRequest {
  /**
   * 当前页
   */
  current?: number
  /**
   * 摘要
   */
  digest?: string
  /**
   * 表单id
   */
  formIds?: string[]
  /**
   * 发起人
   */
  initiator?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 处理类型 -1全部3同意10退回5转交
   */
  operateType?: number
  /**
   * 序列号
   */
  serialNumber?: string
  /**
   * 大小
   */
  size?: number
  /**
   * 状态-1全部0 暂存 1 回退暂存 2 运行中  4 撤回  10 终止 11 完成
   */
  status?: number
  /**
   * tab类型1待处理2已处理3我发起4抄送我
   */
  tabType?: number
}

/**
 * 接口 分页查询:我的流程 的 **返回类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/minePage`
 */
export interface PostFlowInstanceMinePageResponse {
  /**
   * 颜色
   */
  color?: string
  /**
   * 当前任务key
   */
  currentTaskKey?: string
  /**
   * 摘要
   */
  digests?: string[]
  /**
   * 摘要字符串
   */
  digestsStr?: string
  /**
   * 平台流程定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 流程定义名称
   */
  flowCustomDefinitionName?: string
  /**
   * 表单id
   */
  formId?: string
  /**
   * 表单名称
   */
  formName?: string
  /**
   * 处理时间
   */
  handleTime?: string
  /**
   * 处理人id
   */
  handlerId?: number
  /**
   * 当前审批人名称
   */
  handlerNames?: string
  id?: string
  /**
   * 0不是发起节点1是发起节点
   */
  initiateTask?: number
  /**
   * 发起节点key
   */
  initiateTaskKey?: string
  /**
   * 发起时间
   */
  initiateTime?: string
  /**
   * 发起人id
   */
  initiatorId?: number
  /**
   * 发起人名称
   */
  initiatorName?: string
  /**
   * 名称主题
   */
  name?: string
  /**
   * 操作
   */
  operate?: number
  /**
   * 流程编号
   */
  serialNumber?: string
  /**
   * 1运行中2已结束3撤回4驳回9终结（撤回和驳回属于退回的不同种类）
   */
  status?: number
}

/**
 * 接口 分页查询:我的流程 的 **请求配置的类型**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/minePage`
 */
type PostFlowInstanceMinePageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/instance/minePage', undefined, string, string, false>
>

/**
 * 接口 分页查询:我的流程 的 **请求配置**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/minePage`
 */
const postFlowInstanceMinePageRequestConfig: PostFlowInstanceMinePageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_70,
  devUrl: devUrl_0_0_0_70,
  prodUrl: prodUrl_0_0_0_70,
  path: '/flow/instance/minePage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_70,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowInstanceMinePage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 分页查询:我的流程 的 **请求函数**
 *
 * @分类 【新工作流】实例查询
 * @请求头 `POST /flow/instance/minePage`
 */
export const postFlowInstanceMinePage = /*#__PURE__*/ (
  requestData: PostFlowInstanceMinePageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowInstanceMinePageResponse>(prepare(postFlowInstanceMinePageRequestConfig, requestData), ...args)
}

postFlowInstanceMinePage.requestConfig = postFlowInstanceMinePageRequestConfig

const mockUrl_0_0_0_71 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_71 = '' as any
const prodUrl_0_0_0_71 = '' as any
const dataKey_0_0_0_71 = undefined as any

/**
 * 接口 查看当前人的流程身份 的 **请求类型**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/check/identity`
 */
export interface PostFlowCheckIdentityRequest {
  /**
   * 内容
   */
  content?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 平台实例状态
   */
  customInstanceStatus?: number
  /**
   * 平台定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 平台实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台任务id
   */
  flowCustomTaskId?: string
  id?: string
  /**
   * 消息名称主题
   */
  name?: string
  /**
   * 接收人id
   */
  recipientIds?: number[]
  /**
   * 发送人id
   */
  senderId?: number
  /**
   * 节点key
   */
  taskKey?: string
  /**
   * 1抄送2审批通知3催办4
   */
  type?: number
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 查看当前人的流程身份 的 **返回类型**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/check/identity`
 */
export interface PostFlowCheckIdentityResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 查看当前人的流程身份 的 **请求配置的类型**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/check/identity`
 */
type PostFlowCheckIdentityRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/check/identity', undefined, string, string, false>
>

/**
 * 接口 查看当前人的流程身份 的 **请求配置**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/check/identity`
 */
const postFlowCheckIdentityRequestConfig: PostFlowCheckIdentityRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_71,
  devUrl: devUrl_0_0_0_71,
  prodUrl: prodUrl_0_0_0_71,
  path: '/flow/check/identity',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_71,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowCheckIdentity',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查看当前人的流程身份 的 **请求函数**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/check/identity`
 */
export const postFlowCheckIdentity = /*#__PURE__*/ (
  requestData: PostFlowCheckIdentityRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowCheckIdentityResponse>(prepare(postFlowCheckIdentityRequestConfig, requestData), ...args)
}

postFlowCheckIdentity.requestConfig = postFlowCheckIdentityRequestConfig

/**
 * 接口 添加流程抄送人 的 **请求类型**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/history/message/add`
 */
export interface PostFlowHistoryMessageAddRequest {
  /**
   * 内容
   */
  content?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 平台实例状态
   */
  customInstanceStatus?: number
  /**
   * 平台定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 平台实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台任务id
   */
  flowCustomTaskId?: string
  id?: string
  /**
   * 消息名称主题
   */
  name?: string
  /**
   * 接收人id
   */
  recipientIds?: number[]
  /**
   * 发送人id
   */
  senderId?: number
  /**
   * 节点key
   */
  taskKey?: string
  /**
   * 1抄送2审批通知3催办4
   */
  type?: number
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 添加流程抄送人 的 **返回类型**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/history/message/add`
 */
export interface PostFlowHistoryMessageAddResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 添加流程抄送人 的 **请求配置的类型**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/history/message/add`
 */
type PostFlowHistoryMessageAddRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/history/message/add', undefined, string, string, false>
>

/**
 * 接口 添加流程抄送人 的 **请求配置**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/history/message/add`
 */
const postFlowHistoryMessageAddRequestConfig: PostFlowHistoryMessageAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_71,
  devUrl: devUrl_0_0_0_71,
  prodUrl: prodUrl_0_0_0_71,
  path: '/flow/history/message/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_71,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowHistoryMessageAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 添加流程抄送人 的 **请求函数**
 *
 * @分类 【新工作流】抄送人
 * @请求头 `POST /flow/history/message/add`
 */
export const postFlowHistoryMessageAdd = /*#__PURE__*/ (
  requestData: PostFlowHistoryMessageAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowHistoryMessageAddResponse>(
    prepare(postFlowHistoryMessageAddRequestConfig, requestData),
    ...args,
  )
}

postFlowHistoryMessageAdd.requestConfig = postFlowHistoryMessageAddRequestConfig

const mockUrl_0_0_0_72 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_72 = '' as any
const prodUrl_0_0_0_72 = '' as any
const dataKey_0_0_0_72 = undefined as any

/**
 * 接口 催办 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operate/urge`
 */
export interface PostFlowOperateUrgeRequest {
  /**
   * 流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 催办消息
   */
  message?: string
}

/**
 * 接口 催办 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operate/urge`
 */
export interface PostFlowOperateUrgeResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 催办 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operate/urge`
 */
type PostFlowOperateUrgeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operate/urge', undefined, string, string, false>
>

/**
 * 接口 催办 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operate/urge`
 */
const postFlowOperateUrgeRequestConfig: PostFlowOperateUrgeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operate/urge',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperateUrge',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 催办 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operate/urge`
 */
export const postFlowOperateUrge = /*#__PURE__*/ (
  requestData: PostFlowOperateUrgeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperateUrgeResponse>(prepare(postFlowOperateUrgeRequestConfig, requestData), ...args)
}

postFlowOperateUrge.requestConfig = postFlowOperateUrgeRequestConfig

/**
 * 接口 同意 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/approve`
 */
export interface PostFlowOperationApproveRequest {
  /**
   * 评论
   */
  comment?: string
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 超额检查标记列表
   */
  signList?: number[]
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 同意 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/approve`
 */
export interface PostFlowOperationApproveResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 同意 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/approve`
 */
type PostFlowOperationApproveRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/approve', undefined, string, string, false>
>

/**
 * 接口 同意 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/approve`
 */
const postFlowOperationApproveRequestConfig: PostFlowOperationApproveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/approve',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationApprove',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 同意 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/approve`
 */
export const postFlowOperationApprove = /*#__PURE__*/ (
  requestData: PostFlowOperationApproveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationApproveResponse>(prepare(postFlowOperationApproveRequestConfig, requestData), ...args)
}

postFlowOperationApprove.requestConfig = postFlowOperationApproveRequestConfig

/**
 * 接口 退回 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/back`
 */
export interface PostFlowOperationBackRequest {
  /**
   * 回退节点，字符串key
   */
  backTaskKey: string
  /**
   * 回退类型1 按顺序办理 2 直达回退节点
   */
  backType: number
  /**
   * 评论
   */
  comment?: string
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 退回 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/back`
 */
export interface PostFlowOperationBackResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 退回 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/back`
 */
type PostFlowOperationBackRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/back', undefined, string, string, false>
>

/**
 * 接口 退回 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/back`
 */
const postFlowOperationBackRequestConfig: PostFlowOperationBackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/back',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationBack',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 退回 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/back`
 */
export const postFlowOperationBack = /*#__PURE__*/ (
  requestData: PostFlowOperationBackRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationBackResponse>(prepare(postFlowOperationBackRequestConfig, requestData), ...args)
}

postFlowOperationBack.requestConfig = postFlowOperationBackRequestConfig

/**
 * 接口 加签 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/countersign`
 */
export interface PostFlowOperationCountersignRequest {
  /**
   * 评论
   */
  comment?: string
  /**
   * 1后加签2前加签
   */
  countersignType?: number
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 加签处理人
   */
  handlerIds?: number[]
  originTaskId?: string
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 加签 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/countersign`
 */
export interface PostFlowOperationCountersignResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 加签 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/countersign`
 */
type PostFlowOperationCountersignRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/operation/countersign',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 加签 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/countersign`
 */
const postFlowOperationCountersignRequestConfig: PostFlowOperationCountersignRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/countersign',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationCountersign',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 加签 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/countersign`
 */
export const postFlowOperationCountersign = /*#__PURE__*/ (
  requestData: PostFlowOperationCountersignRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationCountersignResponse>(
    prepare(postFlowOperationCountersignRequestConfig, requestData),
    ...args,
  )
}

postFlowOperationCountersign.requestConfig = postFlowOperationCountersignRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/delete`
 */
export interface PostFlowOperationDeleteRequest {
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/delete`
 */
export interface PostFlowOperationDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/delete`
 */
type PostFlowOperationDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/delete', undefined, string, string, false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/delete`
 */
const postFlowOperationDeleteRequestConfig: PostFlowOperationDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/delete`
 */
export const postFlowOperationDelete = /*#__PURE__*/ (
  requestData: PostFlowOperationDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationDeleteResponse>(prepare(postFlowOperationDeleteRequestConfig, requestData), ...args)
}

postFlowOperationDelete.requestConfig = postFlowOperationDeleteRequestConfig

/**
 * 接口 转交 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/forward`
 */
export interface PostFlowOperationForwardRequest {
  /**
   * 评论
   */
  comment?: string
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  /**
   * 转交人id
   */
  forwardUserId?: number
  originTaskId?: string
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 转交 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/forward`
 */
export interface PostFlowOperationForwardResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 转交 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/forward`
 */
type PostFlowOperationForwardRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/forward', undefined, string, string, false>
>

/**
 * 接口 转交 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/forward`
 */
const postFlowOperationForwardRequestConfig: PostFlowOperationForwardRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/forward',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationForward',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 转交 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/forward`
 */
export const postFlowOperationForward = /*#__PURE__*/ (
  requestData: PostFlowOperationForwardRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationForwardResponse>(prepare(postFlowOperationForwardRequestConfig, requestData), ...args)
}

postFlowOperationForward.requestConfig = postFlowOperationForwardRequestConfig

/**
 * 接口 暂存 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/storage`
 */
export interface PostFlowOperationStorageRequest {
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程定义id
   */
  flowCustomDefinitionId: string
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  /**
   * 表单JSON
   */
  formJson?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 自选处理人
   */
  selfHandlers?: {
    /**
     * 单节点处理人
     */
    handlerId?: number
    /**
     * 多实例处理人
     */
    handlerIds?: number[]
    /**
     * 0多实例1单实例
     */
    single?: number
    /**
     * 变量名称
     */
    variableName?: string
  }[]
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 暂存 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/storage`
 */
export interface PostFlowOperationStorageResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 暂存 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/storage`
 */
type PostFlowOperationStorageRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/storage', undefined, string, string, false>
>

/**
 * 接口 暂存 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/storage`
 */
const postFlowOperationStorageRequestConfig: PostFlowOperationStorageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/storage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationStorage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 暂存 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/storage`
 */
export const postFlowOperationStorage = /*#__PURE__*/ (
  requestData: PostFlowOperationStorageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationStorageResponse>(prepare(postFlowOperationStorageRequestConfig, requestData), ...args)
}

postFlowOperationStorage.requestConfig = postFlowOperationStorageRequestConfig

/**
 * 接口 提交 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/submit`
 */
export interface PostFlowOperationSubmitRequest {
  /**
   * 业务任务id
   */
  businessTaskId?: string
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程定义id
   */
  flowCustomDefinitionId: string
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  /**
   * 表单JSON
   */
  formJson?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 自选处理人
   */
  selfHandlers?: {
    /**
     * 单节点处理人
     */
    handlerId?: number
    /**
     * 多实例处理人
     */
    handlerIds?: number[]
    /**
     * 0多实例1单实例
     */
    single?: number
    /**
     * 变量名称
     */
    variableName?: string
  }[]
  /**
   * 超额检查标记列表
   */
  signList?: number[]
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 提交 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/submit`
 */
export interface PostFlowOperationSubmitResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 提交 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/submit`
 */
type PostFlowOperationSubmitRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/submit', undefined, string, string, false>
>

/**
 * 接口 提交 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/submit`
 */
const postFlowOperationSubmitRequestConfig: PostFlowOperationSubmitRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/submit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationSubmit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 提交 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/submit`
 */
export const postFlowOperationSubmit = /*#__PURE__*/ (
  requestData: PostFlowOperationSubmitRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationSubmitResponse>(prepare(postFlowOperationSubmitRequestConfig, requestData), ...args)
}

postFlowOperationSubmit.requestConfig = postFlowOperationSubmitRequestConfig

/**
 * 接口 终止 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/terminate`
 */
export interface PostFlowOperationTerminateRequest {
  /**
   * 评论
   */
  comment?: string
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 终止 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/terminate`
 */
export interface PostFlowOperationTerminateResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 终止 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/terminate`
 */
type PostFlowOperationTerminateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/terminate', undefined, string, string, false>
>

/**
 * 接口 终止 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/terminate`
 */
const postFlowOperationTerminateRequestConfig: PostFlowOperationTerminateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/terminate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationTerminate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 终止 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/terminate`
 */
export const postFlowOperationTerminate = /*#__PURE__*/ (
  requestData: PostFlowOperationTerminateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationTerminateResponse>(
    prepare(postFlowOperationTerminateRequestConfig, requestData),
    ...args,
  )
}

postFlowOperationTerminate.requestConfig = postFlowOperationTerminateRequestConfig

/**
 * 接口 撤回 的 **请求类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/withdraw`
 */
export interface PostFlowOperationWithdrawRequest {
  /**
   * 撤回评论
   */
  comment?: string
  /**
   * 是否归档节点
   */
  ended?: boolean
  /**
   * 工作流平台流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 平台定义的实例名称
   */
  flowCustomInstanceName?: string
  formValueJson?: {
    /**
     * 添加修改标识 1添加 2修改
     */
    addOrUpdate?: number
    businessAddForm?: {
      /**
       * 单据转换规则id
       */
      billRuleId?: string
      /**
       * 来源表单主键id(任何时候当前行数据的主键id都放在这里,主表的话写在这里)
       */
      originKeyId?: string
      /**
       * 来源表单主表主键id
       */
      originKeyMainId?: string
      /**
       * 转换方式, swapTypeEnum类
       */
      swapType?: string
    }
    /**
     * 客户二开路径
     */
    className?: string
    /**
     * 表单ID
     */
    formId?: string
    /**
     * 表单ID
     */
    formName?: string
    /**
     * formValueId
     */
    formValueId?: string
    /**
     * 类型1业务表单 2流程表单
     */
    formValueType?: number
    id?: number
    /**
     * 主数据
     */
    masterData?: {
      /**
       * 明细表数据
       */
      childrenSingleLineData?: {
        [k: string]: unknown
      }[]
      /**
       * 列编码
       */
      columnCode?: string
      columnData?: {
        /**
         * 颜色配置
         */
        color?: string
        /**
         * 关联id
         */
        jointId?: string
        /**
         * 1:手输2:选择
         */
        manual?: number
        /**
         * 1:选项来源2:配置项
         */
        sourceType?: string
        /**
         * 中文名称
         */
        zhName?: string
      }
      /**
       * 列编码
       */
      columnId?: string
      /**
       * 组件名称
       */
      componentName?: string
      /**
       * 唯一标识
       */
      fieldId?: string
      /**
       * 模型id
       */
      modelId?: string
      /**
       * 标题
       */
      title?: string
      /**
       * 具体值
       */
      value?: {}
    }[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    modelId?: string
    /**
     * 流程实例ID
     */
    procInstId?: string
    /**
     * 1流程运行中2手动添加3归档。前端默认给2即可
     */
    runtimeState?: number
    /**
     * 超额检查标记列表
     */
    signList?: number[]
    /**
     * 前端不传，后端查询放进来给业务流用
     */
    tableName?: string
    /**
     * 业务流任务id
     */
    taskId?: string
    tokenUserInfo?: {
      depId?: number
      phone?: string
      roleId?: number[]
      trueName?: string
      userid?: number
      username?: string
    }
  }
  originTaskId?: string
  /**
   * 超额检查标记列表
   */
  signList?: number[]
  /**
   * 签名uri
   */
  signUri?: string
  /**
   * 是否提交节点
   */
  submit?: boolean
  /**
   * 抄送人
   */
  takerIds?: number[]
  /**
   * 流程中变化的变量
   */
  variables?: {}
}

/**
 * 接口 撤回 的 **返回类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/withdraw`
 */
export interface PostFlowOperationWithdrawResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 撤回 的 **请求配置的类型**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/withdraw`
 */
type PostFlowOperationWithdrawRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/operation/withdraw', undefined, string, string, false>
>

/**
 * 接口 撤回 的 **请求配置**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/withdraw`
 */
const postFlowOperationWithdrawRequestConfig: PostFlowOperationWithdrawRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_72,
  devUrl: devUrl_0_0_0_72,
  prodUrl: prodUrl_0_0_0_72,
  path: '/flow/operation/withdraw',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_72,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowOperationWithdraw',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 撤回 的 **请求函数**
 *
 * @分类 【新工作流】操作
 * @请求头 `POST /flow/operation/withdraw`
 */
export const postFlowOperationWithdraw = /*#__PURE__*/ (
  requestData: PostFlowOperationWithdrawRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowOperationWithdrawResponse>(
    prepare(postFlowOperationWithdrawRequestConfig, requestData),
    ...args,
  )
}

postFlowOperationWithdraw.requestConfig = postFlowOperationWithdrawRequestConfig

const mockUrl_0_0_0_73 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_73 = '' as any
const prodUrl_0_0_0_73 = '' as any
const dataKey_0_0_0_73 = undefined as any

/**
 * 接口 流程图 的 **请求类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/flow`
 */
export interface GetFlowChartFlowRequest {
  /**
   * 平台定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 平台实例id
   */
  flowCustomInstanceId?: string
}

/**
 * 接口 流程图 的 **返回类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/flow`
 */
export interface GetFlowChartFlowResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 流程图 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/flow`
 */
type GetFlowChartFlowRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/chart/flow',
    undefined,
    string,
    'flowCustomDefinitionId' | 'flowCustomInstanceId',
    false
  >
>

/**
 * 接口 流程图 的 **请求配置**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/flow`
 */
const getFlowChartFlowRequestConfig: GetFlowChartFlowRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_73,
  devUrl: devUrl_0_0_0_73,
  prodUrl: prodUrl_0_0_0_73,
  path: '/flow/chart/flow',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_73,
  paramNames: [],
  queryNames: ['flowCustomDefinitionId', 'flowCustomInstanceId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowChartFlow',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 流程图 的 **请求函数**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/flow`
 */
export const getFlowChartFlow = /*#__PURE__*/ (requestData: GetFlowChartFlowRequest, ...args: UserRequestRestArgs) => {
  return request<GetFlowChartFlowResponse>(prepare(getFlowChartFlowRequestConfig, requestData), ...args)
}

getFlowChartFlow.requestConfig = getFlowChartFlowRequestConfig

/**
 * 接口 节点自选人列表 的 **请求类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/handler`
 */
export interface GetFlowChartHandlerRequest {
  /**
   * 平台流程任务定义id
   */
  flowCustomDefinitionTaskId?: string
}

/**
 * 接口 节点自选人列表 的 **返回类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/handler`
 */
export interface GetFlowChartHandlerResponse {
  /**
   * 评论
   */
  comment?: string
  /**
   * 处理人来源
   */
  handlerSource?: number
  /**
   * 头像
   */
  headImg?: string
  /**
   * 主键
   */
  id?: number
  /**
   * 0未开始1暂存2发起3通过4委托5转交6加签7前加签8后加签9终止10退回11驳回12撤回13提交14下一步15 撤回取消 16 终止取消 17 会签退回取消。 99 伪造节点，实际中审批人不审批的节点，例如顺序签的总签
   */
  operate?: number
  /**
   * 操作时间
   */
  operateTime?: string
  /**
   * 0未发生 1 正在发生 2 已发生 3 结束未审批（或签没有审批的节点）
   */
  running?: number
  /**
   * 签名
   */
  signUri?: string
  /**
   * 人员真实姓名
   */
  trueName?: string
}

/**
 * 接口 节点自选人列表 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/handler`
 */
type GetFlowChartHandlerRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/chart/handler',
    undefined,
    string,
    'flowCustomDefinitionTaskId',
    false
  >
>

/**
 * 接口 节点自选人列表 的 **请求配置**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/handler`
 */
const getFlowChartHandlerRequestConfig: GetFlowChartHandlerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_73,
  devUrl: devUrl_0_0_0_73,
  prodUrl: prodUrl_0_0_0_73,
  path: '/flow/chart/handler',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_73,
  paramNames: [],
  queryNames: ['flowCustomDefinitionTaskId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowChartHandler',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 节点自选人列表 的 **请求函数**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `GET /flow/chart/handler`
 */
export const getFlowChartHandler = /*#__PURE__*/ (
  requestData: GetFlowChartHandlerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowChartHandlerResponse>(prepare(getFlowChartHandlerRequestConfig, requestData), ...args)
}

getFlowChartHandler.requestConfig = getFlowChartHandlerRequestConfig

/**
 * 接口 审批进度 的 **请求类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `POST /flow/chart/progress`
 */
export interface PostFlowChartProgressRequest {
  /**
   * 流程定义id
   */
  flowCustomDefinitionId?: string
  /**
   * 流程实例id
   */
  flowCustomInstanceId?: string
  /**
   * 初始化参数，包含表单中需要传递的值
   */
  variables?: {}
}

/**
 * 接口 审批进度 的 **返回类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `POST /flow/chart/progress`
 */
export interface PostFlowChartProgressResponse {
  /**
   * 单实例时的评论
   */
  comment?: string
  /**
   * 平台任务的唯一标识
   */
  definitionTaskId?: string
  /**
   * 未来处理人
   */
  futureHandlers?: {
    /**
     * 评论
     */
    comment?: string
    /**
     * 处理人来源
     */
    handlerSource?: number
    /**
     * 头像
     */
    headImg?: string
    /**
     * 主键
     */
    id?: number
    /**
     * 0未开始1暂存2发起3通过4委托5转交6加签7前加签8后加签9终止10退回11驳回12撤回13提交14下一步15 撤回取消 16 终止取消 17 会签退回取消。 99 伪造节点，实际中审批人不审批的节点，例如顺序签的总签
     */
    operate?: number
    /**
     * 操作时间
     */
    operateTime?: string
    /**
     * 0未发生 1 正在发生 2 已发生 3 结束未审批（或签没有审批的节点）
     */
    running?: number
    /**
     * 签名
     */
    signUri?: string
    /**
     * 人员真实姓名
     */
    trueName?: string
  }[]
  /**
   * 将要处理的节点类型
   */
  futureTaskType?: number
  /**
   * 原始处理人数量
   */
  handlerNumber?: number
  /**
   * 总的处理人数量
   */
  handlerTotal?: number
  /**
   * 处理人类型，2自选人3自选角色4全公司
   */
  handlerType?: number
  /**
   * 单实例的头像
   */
  headImg?: string
  /**
   * 历史处理人
   */
  historyHandlers?: {
    /**
     * 评论
     */
    comment?: string
    /**
     * 处理人来源
     */
    handlerSource?: number
    /**
     * 头像
     */
    headImg?: string
    /**
     * 主键
     */
    id?: number
    /**
     * 0未开始1暂存2发起3通过4委托5转交6加签7前加签8后加签9终止10退回11驳回12撤回13提交14下一步15 撤回取消 16 终止取消 17 会签退回取消。 99 伪造节点，实际中审批人不审批的节点，例如顺序签的总签
     */
    operate?: number
    /**
     * 操作时间
     */
    operateTime?: string
    /**
     * 0未发生 1 正在发生 2 已发生 3 结束未审批（或签没有审批的节点）
     */
    running?: number
    /**
     * 签名
     */
    signUri?: string
    /**
     * 人员真实姓名
     */
    trueName?: string
  }[]
  /**
   * 当前处理人
   */
  nowHandlers?: {
    /**
     * 评论
     */
    comment?: string
    /**
     * 处理人来源
     */
    handlerSource?: number
    /**
     * 头像
     */
    headImg?: string
    /**
     * 主键
     */
    id?: number
    /**
     * 0未开始1暂存2发起3通过4委托5转交6加签7前加签8后加签9终止10退回11驳回12撤回13提交14下一步15 撤回取消 16 终止取消 17 会签退回取消。 99 伪造节点，实际中审批人不审批的节点，例如顺序签的总签
     */
    operate?: number
    /**
     * 操作时间
     */
    operateTime?: string
    /**
     * 0未发生 1 正在发生 2 已发生 3 结束未审批（或签没有审批的节点）
     */
    running?: number
    /**
     * 签名
     */
    signUri?: string
    /**
     * 人员真实姓名
     */
    trueName?: string
  }[]
  /**
   * 当前处理的节点类型
   */
  nowTaskType?: number
  /**
   * 单实例的处理
   */
  operate?: number
  /**
   * 单实例的处理时间
   */
  operateTime?: string
  /**
   * 当前主节点的运行状态0未发生 1 正在发生 2 已发生
   */
  running?: number
  /**
   * 抄送人名称
   */
  takerNames?: string[]
  /**
   * 节点key
   */
  taskKey?: string
  /**
   * 节点名称
   */
  taskName?: string
  /**
   * 外层节点类型 1单实例2顺序签3或签4会签
   */
  taskType?: number
  /**
   * 标题，3人或签
   */
  title?: string
  /**
   * 节点变量名称
   */
  variableName?: string
}

/**
 * 接口 审批进度 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `POST /flow/chart/progress`
 */
type PostFlowChartProgressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/chart/progress', undefined, string, string, false>
>

/**
 * 接口 审批进度 的 **请求配置**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `POST /flow/chart/progress`
 */
const postFlowChartProgressRequestConfig: PostFlowChartProgressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_73,
  devUrl: devUrl_0_0_0_73,
  prodUrl: prodUrl_0_0_0_73,
  path: '/flow/chart/progress',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_73,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowChartProgress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 审批进度 的 **请求函数**
 *
 * @分类 【新工作流】流程、审批进度图
 * @请求头 `POST /flow/chart/progress`
 */
export const postFlowChartProgress = /*#__PURE__*/ (
  requestData: PostFlowChartProgressRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowChartProgressResponse>(prepare(postFlowChartProgressRequestConfig, requestData), ...args)
}

postFlowChartProgress.requestConfig = postFlowChartProgressRequestConfig

const mockUrl_0_0_0_74 = 'http://127.0.0.1:52511/mock/0' as any
const devUrl_0_0_0_74 = '' as any
const prodUrl_0_0_0_74 = '' as any
const dataKey_0_0_0_74 = undefined as any

/**
 * 接口 根据流程定义id获取流程中的判断参数 的 **请求类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `GET /flow/definition/conditionParams`
 */
export interface GetFlowDefinitionConditionParamsRequest {
  /**
   * 平台流程定义id
   */
  flowCustomDefinitionId: string
}

/**
 * 接口 根据流程定义id获取流程中的判断参数 的 **返回类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `GET /flow/definition/conditionParams`
 */
export interface GetFlowDefinitionConditionParamsResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 根据流程定义id获取流程中的判断参数 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `GET /flow/definition/conditionParams`
 */
type GetFlowDefinitionConditionParamsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:52511/mock/0',
    '',
    '',
    '/flow/definition/conditionParams',
    undefined,
    string,
    'flowCustomDefinitionId',
    false
  >
>

/**
 * 接口 根据流程定义id获取流程中的判断参数 的 **请求配置**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `GET /flow/definition/conditionParams`
 */
const getFlowDefinitionConditionParamsRequestConfig: GetFlowDefinitionConditionParamsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_74,
  devUrl: devUrl_0_0_0_74,
  prodUrl: prodUrl_0_0_0_74,
  path: '/flow/definition/conditionParams',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_74,
  paramNames: [],
  queryNames: ['flowCustomDefinitionId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getFlowDefinitionConditionParams',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据流程定义id获取流程中的判断参数 的 **请求函数**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `GET /flow/definition/conditionParams`
 */
export const getFlowDefinitionConditionParams = /*#__PURE__*/ (
  requestData: GetFlowDefinitionConditionParamsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetFlowDefinitionConditionParamsResponse>(
    prepare(getFlowDefinitionConditionParamsRequestConfig, requestData),
    ...args,
  )
}

getFlowDefinitionConditionParams.requestConfig = getFlowDefinitionConditionParamsRequestConfig

/**
 * 接口 流程复制 的 **请求类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/copy`
 */
export interface PostFlowDefinitionCopyRequest {
  /**
   * 0向上排序1向下排序
   */
  down?: number
  /**
   * 当前定义id
   */
  flowCustomDefinitionId: string
  /**
   * 流程分组id，传递分组的id即可
   */
  groupId?: string
}

/**
 * 接口 流程复制 的 **返回类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/copy`
 */
export interface PostFlowDefinitionCopyResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 流程复制 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/copy`
 */
type PostFlowDefinitionCopyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/definition/copy', undefined, string, string, false>
>

/**
 * 接口 流程复制 的 **请求配置**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/copy`
 */
const postFlowDefinitionCopyRequestConfig: PostFlowDefinitionCopyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_74,
  devUrl: devUrl_0_0_0_74,
  prodUrl: prodUrl_0_0_0_74,
  path: '/flow/definition/copy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_74,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowDefinitionCopy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 流程复制 的 **请求函数**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/copy`
 */
export const postFlowDefinitionCopy = /*#__PURE__*/ (
  requestData: PostFlowDefinitionCopyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowDefinitionCopyResponse>(prepare(postFlowDefinitionCopyRequestConfig, requestData), ...args)
}

postFlowDefinitionCopy.requestConfig = postFlowDefinitionCopyRequestConfig

/**
 * 接口 删除 的 **请求类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/delete`
 */
export interface PostFlowDefinitionDeleteRequest {
  /**
   * 0向上排序1向下排序
   */
  down?: number
  /**
   * 当前定义id
   */
  flowCustomDefinitionId: string
  /**
   * 流程分组id，传递分组的id即可
   */
  groupId?: string
}

/**
 * 接口 删除 的 **返回类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/delete`
 */
export interface PostFlowDefinitionDeleteResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 删除 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/delete`
 */
type PostFlowDefinitionDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/definition/delete', undefined, string, string, false>
>

/**
 * 接口 删除 的 **请求配置**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/delete`
 */
const postFlowDefinitionDeleteRequestConfig: PostFlowDefinitionDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_74,
  devUrl: devUrl_0_0_0_74,
  prodUrl: prodUrl_0_0_0_74,
  path: '/flow/definition/delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_74,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowDefinitionDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除 的 **请求函数**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/delete`
 */
export const postFlowDefinitionDelete = /*#__PURE__*/ (
  requestData: PostFlowDefinitionDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowDefinitionDeleteResponse>(prepare(postFlowDefinitionDeleteRequestConfig, requestData), ...args)
}

postFlowDefinitionDelete.requestConfig = postFlowDefinitionDeleteRequestConfig

/**
 * 接口 发布流程定义 的 **请求类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/deploy`
 */
export interface PostFlowDefinitionDeployRequest {
  /**
   * bpmnXml信息
   */
  bpmnXml?: string
  /**
   * 业务流规则配置
   */
  businessRuleConfigDTO?: {
    /**
     * 绑定id
     */
    bindId?: string
    /**
     * 单据转换规则配置
     */
    businessRuleConfigs?: {
      /**
       * 基础信息id
       */
      billRuleId?: string
      /**
       * 绑定id（流程id/表单id/列表id）
       */
      bindId?: string
      /**
       * 绑定类型1、表单 2、工作流 3、列表
       */
      bindType?: string
      /**
       * 调用转换规则
       */
      callTheRule?: string
      id?: string
      /**
       * 规则状态1、存在 2、删除
       */
      isDel?: string
      /**
       * 运行顺序
       */
      runOrder?: string
      /**
       * 选择模式 1、手动选择,2、自动选择所有数据,3、数据合并
       */
      selectMode?: string
      /**
       * 目标表单
       */
      targetForm?: string
      /**
       * 规则触发字段
       */
      triggerField?: string
      /**
       * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
       */
      triggerTime?: string
    }[]
    /**
     * 选择模式 1、手动选择,2、自动选择所有数据
     */
    selectMode?: string
    /**
     * 规则触发字段
     */
    triggerField?: string
    /**
     * 触发时机(1:字段更新,2:单据添加/流程发起,3:表单结束下推)
     */
    triggerTime?: string
  }
  /**
   * bpmn信息
   */
  elements?: {
    attributes?: {
      flowableAssignee?: string
      flowableCollection?: string
      flowableCustomerType?: string
      id?: string
      isSequential?: string
      name?: string
      sourceRef?: string
      targetRef?: string
      xsiType?: string
    }
    elements?: {
      [k: string]: unknown
    }[]
    name?: string
    text?: string
    type?: string
  }[]
  flowRuleBasic?: {
    /**
     * 0不支持退回后直达，1支持退回后直达
     */
    backDirect?: number
    /**
     * 0 禁止加签 1 允许加签
     */
    countersign?: number
    /**
     * 平台流程定义id
     */
    flowCustomDefinitionId?: string
    /**
     * 基础规则id
     */
    id?: string
    /**
     * 0不限制撤回1限制撤回
     */
    limitWithdraw?: number
    /**
     * 名称生成规则，0自定义1默认
     */
    nameGenerateDefault?: number
    /**
     * 自定义规则
     */
    nameGenerateRule?: string
    /**
     * 0 不下发 1 下推
     */
    pushDown?: number
    /**
     * 节点无人默认处理人
     */
    taskDefaultHandlerId?: number
    /**
     * 节点重复自动跳过0 不跳过 1 跳过 2 跨节点去重
     */
    taskSkipWithRepeat?: number
    /**
     * 节点无人自动跳过0 不跳过 1 跳过
     */
    taskSkipWithoutHandler?: number
  }
  /**
   * 表单权限规则
   */
  flowRuleFormPermissions?: {
    /**
     * 表单规则
     */
    rule?: string
    /**
     * 流程定义key
     */
    taskKey?: string
  }[]
  flowRuleInitiator?: {
    /**
     * 部门id
     */
    departmentIds?: number[]
    /**
     * 发起人规则id
     */
    id?: string
    /**
     * 指定的发起人IDS
     */
    initiatorIds?: number[]
    /**
     * 限制类型 0不限制 1 限制
     */
    limit?: number
    /**
     * 角色id
     */
    roleIds?: number[]
  }
  /**
   * 固定抄送人规则
   */
  flowRuleTakers?: {
    /**
     * 包含发起人0不包含1包含
     */
    containInitiator?: number
    /**
     * 表单中的用户
     */
    formTakers?: {
      /**
       * 表单中的用户的编码
       */
      columnCode?: string
      /**
       * 表单中
       */
      columnName?: string
    }[]
    /**
     * 抄送人ids
     */
    takerIds?: number[]
    /**
     * 任务key
     */
    taskKey?: string
  }[]
  /**
   * 撤回限制规则
   */
  flowRuleWithdrawTasks?: {
    /**
     * 任务key
     */
    taskKey?: string
    /**
     * 任务名称
     */
    taskName?: string
  }[]
  /**
   * 表单id
   */
  formId?: string
  /**
   * 分组id
   */
  groupId?: string
  /**
   * FlowCustomDefinitionId
   */
  id?: string
  /**
   * 名称主题
   */
  name?: string
  /**
   * 前一个版本的id
   */
  previousId?: string
  /**
   * 状态0禁用1启用
   */
  status?: number
  /**
   * 流程定义任务回调URL
   */
  taskPushUrls?: {
    /**
     * 0不限制1限制
     */
    limitBack?: number
    /**
     * 0不比签名1签名
     */
    mustSign?: number
    /**
     * 流程推送链接
     */
    pushUrl?: string
    /**
     * 流程定义key
     */
    taskKey?: string
  }[]
}

/**
 * 接口 发布流程定义 的 **返回类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/deploy`
 */
export interface PostFlowDefinitionDeployResponse {
  code?: string
  data?: {}
  msg?: string
  resultNo?: string
  status?: boolean
}

/**
 * 接口 发布流程定义 的 **请求配置的类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/deploy`
 */
type PostFlowDefinitionDeployRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:52511/mock/0', '', '', '/flow/definition/deploy', undefined, string, string, false>
>

/**
 * 接口 发布流程定义 的 **请求配置**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/deploy`
 */
const postFlowDefinitionDeployRequestConfig: PostFlowDefinitionDeployRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_74,
  devUrl: devUrl_0_0_0_74,
  prodUrl: prodUrl_0_0_0_74,
  path: '/flow/definition/deploy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_74,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postFlowDefinitionDeploy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 发布流程定义 的 **请求函数**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `POST /flow/definition/deploy`
 */
export const postFlowDefinitionDeploy = /*#__PURE__*/ (
  requestData: PostFlowDefinitionDeployRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostFlowDefinitionDeployResponse>(prepare(postFlowDefinitionDeployRequestConfig, requestData), ...args)
}

postFlowDefinitionDeploy.requestConfig = postFlowDefinitionDeployRequestConfig

/**
 * 接口 流程详情 的 **请求类型**
 *
 * @分类 【新工作流】流程定义
 * @请求头 `GET /flow/definition/detail`
 */
export interface GetFlowDefinitionDetailRequest {
  /**
}
