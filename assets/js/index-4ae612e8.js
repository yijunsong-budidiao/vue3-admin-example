var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(r,t,s)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,n=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))o.call(r,t)&&c(e,t,r[t]);return e};import{y as i,E as p,G as l,z as b,A as u,B as d}from"./index-a6219548.js";const m="/admin";let O;let h=0;const E=()=>{0===h&&(O=i.service({fullscreen:!0,lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.5)"})),h++},v=()=>{h<=0||(h--,0===h&&O.close())};var f=(e=>(e[e.SUCCESS=200]="SUCCESS",e[e.ERROR=500]="ERROR",e[e.OVERDUE=599]="OVERDUE",e[e.TIMEOUT=1e4]="TIMEOUT",e.TYPE="success",e))(f||{}),k=(e=>(e.JSON="application/json;charset=UTF-8",e.TEXT="text/plain;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e))(k||{});const w=l(),g=new d,T={baseURL:"https://www.fastmock.site/mock/c3acc8bf79980f752a0b9a188faab0a8",timeout:f.TIMEOUT,withCredentials:!0};var U=new class{constructor(e){var s,a;c(this,"symbol"!=typeof(s="service")?s+"":s,a),this.service=b.create(e),this.service.interceptors.request.use((e=>{g.addPending(e),E();const s=w.token;return a=n({},e),r(a,t({headers:{"x-access-token":s}}));var a}),(e=>Promise.reject(e))),this.service.interceptors.response.use((e=>{const{data:r,config:t}=e;return g.removePending(t),v(),r.code==f.OVERDUE?(p.error(r.msg),w.setToken(""),u.replace({path:"/login"}),Promise.reject(r)):r.code&&r.code!==f.SUCCESS?(p.error(r.msg),Promise.reject(r)):r}),(async e=>{const{response:r}=e;return v(),r?(e=>{switch(e){case 400:p.error("请求失败！请您稍后重试");break;case 401:p.error("登录失效！请您重新登录");break;case 403:p.error("当前账号无权限访问！");break;case 404:p.error("你所访问的资源不存在！");break;case 405:p.error("请求方式错误！请您稍后重试");break;case 408:p.error("请求超时！请您稍后重试");break;case 500:p.error("服务异常！");break;case 502:p.error("网关错误！");break;case 503:p.error("服务不可用！");break;case 504:p.error("网关超时！");break;default:p.error("请求失败！")}})(r.status):window.navigator.onLine?Promise.reject(e):u.replace({path:"/500"})}))}get(e,r,t={}){return this.service.get(e,n({params:r},t))}post(e,r,t={}){return this.service.post(e,r,t)}put(e,r,t={}){return this.service.put(e,r,t)}delete(e,r,t={}){return this.service.delete(e,n({params:r},t))}}(T);export{k as C,m as P,U as h};