import{a5 as t,a1 as s,a6 as a,A as e,a7 as i}from"./index-c678ee61.js";const h=t({id:"TabsState",state:()=>({tabsMenuValue:s,tabsMenuList:[{title:"首页",path:s,icon:"home-filled",close:!1}]}),getters:{},actions:{async addTabs(t){if(a.includes(t.path))return;const s={title:t.title,path:t.path,close:t.close};this.tabsMenuList.every((s=>s.path!==t.path))&&this.tabsMenuList.push(s),this.setTabsMenuValue(t.path),e.push(t.path)},async removeTabs(t){let s=this.tabsMenuValue;const a=this.tabsMenuList;s===t&&a.forEach(((i,h)=>{if(i.path!==t)return;const n=a[h+1]||a[h-1];n&&(s=n.path,e.push(n.path))})),this.tabsMenuValue=s,this.tabsMenuList=a.filter((s=>s.path!==t))},async changeTabs(t){this.tabsMenuList.forEach((s=>{s.title===t.label&&e.push(s.path)}))},async setTabsMenuValue(t){this.tabsMenuValue=t},async setTabsMenuList(t){this.tabsMenuList=t},async closeMultipleTab(t){this.tabsMenuList=this.tabsMenuList.filter((a=>a.path===t||a.path===s))},async goHome(){e.push(s),this.tabsMenuValue=s}},persist:i("TabsState")});export{h as T};
