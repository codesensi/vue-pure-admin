import{d as t,r as n,a as _,c,w as a,o as l,e}from"./index-ceadd577.js";const d=e("div",{class:"card-header"},[e("span",{class:"font-medium"},"通过iframe引入按钮页面")],-1),m=["src"],h=t({name:"ButtonPage",__name:"index",setup(u){const{VITE_PUBLIC_PATH:s}={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},o=n(`${s}html/button.html`);return(f,i)=>{const r=_("el-card");return l(),c(r,{shadow:"never"},{header:a(()=>[d]),default:a(()=>[e("iframe",{src:o.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,m)]),_:1})}}});export{h as default};