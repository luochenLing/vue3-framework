(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const u of e)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const u={};return e.integrity&&(u.integrity=e.integrity),e.referrerPolicy&&(u.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?u.credentials="include":e.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(e){if(e.ep)return;e.ep=!0;const u=o(e);fetch(e.href,u)}})();const v="modulepreload",y=function(t){return"/"+t},d={},m=function(r,o,n){if(!o||o.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(o.map(u=>{if(u=y(u),u in d)return;d[u]=!0;const i=u.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!n)for(let s=e.length-1;s>=0;s--){const l=e[s];if(l.href===u&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":v,i||(c.as="script",c.crossOrigin=""),c.href=u,document.head.appendChild(c),i)return new Promise((s,l)=>{c.addEventListener("load",s),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>r()).catch(u=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=u,window.dispatchEvent(i),!i.defaultPrevented)throw u})},A=[{path:"/",redirect:"/login"},{path:"/home",component:()=>m(()=>import("./index-fe8a9961.js"),["assets/index-fe8a9961.js","assets/user-0fe795c2.js","assets/index-7c1db3be.css"])},{path:"/login",component:()=>m(()=>import("./index-007229b6.js"),["assets/index-007229b6.js","assets/user-0fe795c2.js"])}],C=VueRouter.createRouter({history:VueRouter.createWebHistory(),routes:A}),P=(t,r)=>{const o=t.__vccOpts||t;for(const[n,e]of r)o[n]=e;return o},R={};function w(t,r){const o=Vue.resolveComponent("router-view");return Vue.openBlock(),Vue.createBlock(o,null,{default:Vue.withCtx(({Component:n})=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(n)))]),_:1})}const $=P(R,[["render",w]]);function b(t){return typeof t=="object"&&t!==null}function p(t,r){return t=b(t)?t:Object.create(null),new Proxy(t,{get(o,n,e){return n==="key"?Reflect.get(o,n,e):Reflect.get(o,n,e)||Reflect.get(r,n,e)}})}function S(t,r){return r.reduce((o,n)=>o?.[n],t)}function O(t,r,o){return r.slice(0,-1).reduce((n,e)=>/^(__proto__)$/.test(e)?{}:n[e]=n[e]||{},t)[r[r.length-1]]=o,t}function T(t,r){return r.reduce((o,n)=>{const e=n.split(".");return O(o,e,S(t,e))},{})}function h(t,{storage:r,serializer:o,key:n,debug:e}){try{const u=r?.getItem(n);u&&t.$patch(o?.deserialize(u))}catch(u){e&&console.error(u)}}function g(t,{storage:r,serializer:o,key:n,paths:e,debug:u}){try{const i=Array.isArray(e)?T(t,e):t;r.setItem(n,o.serialize(i))}catch(i){u&&console.error(i)}}function V(t={}){return r=>{const{auto:o=!1}=t,{options:{persist:n=o},store:e,pinia:u}=r;if(!n)return;if(!(e.$id in u.state.value)){const a=u._s.get(e.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const i=(Array.isArray(n)?n.map(a=>p(a,t)):[p(n,t)]).map(({storage:a=localStorage,beforeRestore:E=null,afterRestore:c=null,serializer:s={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:F=null,debug:_=!1})=>{var f;return{storage:a,beforeRestore:E,afterRestore:c,serializer:s,key:((f=t.key)!=null?f:B=>B)(typeof l=="string"?l:l(e.$id)),paths:F,debug:_}});e.$persist=()=>{i.forEach(a=>{g(e.$state,a)})},e.$hydrate=({runHooks:a=!0}={})=>{i.forEach(E=>{const{beforeRestore:c,afterRestore:s}=E;a&&c?.(r),h(e,E),a&&s?.(r)})},i.forEach(a=>{const{beforeRestore:E,afterRestore:c}=a;E?.(r),h(e,a),c?.(r),e.$subscribe((s,l)=>{g(l,a)},{detached:!0})})}}var x=V(),k={name:"zh-cn",el:{colorpicker:{confirm:"确定",clear:"清空"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"}}};const D=Pinia.createPinia();D.use(x);Vue.createApp($).use(C).use(D).use(ElementPlus,{locale:k}).mount("#app");export{P as _};