import{d as v,x as g,c as s,j as w,f as n,e as _,w as e,g as t,A as l,h as d,C as k,u as c,bv as x,bw as b,ae as p,m as y,i as f}from"./index-0dd8d5e4.js";const C=f("div",{class:"card-header"},"组件方式判断权限",-1),A=f("div",{class:"card-header"},"函数方式判断权限",-1),B=f("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),S=v({name:"PermissionButton",__name:"index",setup(N){const o=g(()=>({width:"85vw",justifyContent:"start"}));return(V,z)=>{const h=s("el-tag"),a=s("el-button"),r=s("Auth"),u=s("el-card"),m=s("el-space"),i=w("auth");return n(),_(m,{direction:"vertical",size:"large"},{default:e(()=>[t(h,{style:l(o.value),size:"large",effect:"dark"},{default:e(()=>[d(" 当前拥有的code列表："+k(c(x)()),1)]),_:1},8,["style"]),t(u,{shadow:"never",style:l(o.value)},{header:e(()=>[C]),default:e(()=>[t(r,{value:"btn_add"},{default:e(()=>[t(a,{type:"success"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_edit"]},{default:e(()=>[t(a,{type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_add","btn_edit","btn_delete"]},{default:e(()=>[t(a,{type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1},8,["style"]),t(u,{shadow:"never",style:l(o.value)},{header:e(()=>[A]),default:e(()=>[c(b)("btn_add")?(n(),_(a,{key:0,type:"success"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})):p("",!0),c(b)(["btn_edit"])?(n(),_(a,{key:1,type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):p("",!0),c(b)(["btn_add","btn_edit","btn_delete"])?(n(),_(a,{key:2,type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):p("",!0)]),_:1},8,["style"]),t(u,{shadow:"never",style:l(o.value)},{header:e(()=>[B]),default:e(()=>[y((n(),_(a,{type:"success"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[i,"btn_add"]]),y((n(),_(a,{type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[i,["btn_edit"]]]),y((n(),_(a,{type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[i,["btn_add","btn_edit","btn_delete"]]])]),_:1},8,["style"])]),_:1})}}});export{S as default};
