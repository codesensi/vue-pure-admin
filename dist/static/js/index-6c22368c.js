import{d as x,J as A,D as F,x as h,bB as I,H as M,r as N,b2 as k,c as d,f as c,e as H,w as l,i as u,k as C,F as g,l as b,g as n,u as m,h as s,C as f,G as $,bC as y}from"./index-0dd8d5e4.js";import{u as S}from"./hooks-65e1ad34.js";const U=u("div",null,"标签页复用，超出限制自动关闭",-1),J={class:"flex flex-wrap items-center"},L=u("p",null,"query传参模式：",-1),P={class:"flex flex-wrap items-center"},j=u("p",null,"params传参模式：",-1),O=x({name:"Tabs",__name:"index",setup(z){const{toDetail:v,router:B}=S(),E=A(F().wholeMenus,!0),p=h(()=>I(M(E),0,{disabled:!0})),i=N([]),_=h(()=>{var a;return(a=k())==null?void 0:a.multiTags});function D(){i.value.length!==0&&i.value.forEach(a=>{const t=y(p.value,a).redirect??y(p.value,a).path;k().handleTags("splice",t),t==="/tabs/index"&&B.push({path:_.value[_.value.length-1].path})})}return(a,t)=>{const o=d("el-button"),r=d("el-divider"),T=d("el-tree-select"),q=d("el-link"),w=d("el-card");return c(),H(w,{shadow:"never"},{header:l(()=>[U]),default:l(()=>[u("div",J,[L,(c(),C(g,null,b(6,e=>n(o,{class:"m-2",key:e,onClick:V=>m(v)(e,"query")},{default:l(()=>[s(" 打开"+f(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(r),u("div",P,[j,(c(),C(g,null,b(6,e=>n(o,{class:"m-2",key:e,onClick:V=>m(v)(e,"params")},{default:l(()=>[s(" 打开"+f(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(r),n(T,{class:"w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>m($)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:p.value,modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e)},{default:l(({data:e})=>[u("span",null,f(m($)(e.meta.title)),1)]),_:1},8,["props","data","modelValue"]),n(o,{class:"m-2",onClick:D},{default:l(()=>[s("关闭标签")]),_:1}),n(r),n(o,{onClick:t[1]||(t[1]=e=>a.$router.push({name:"Menu1-2-2"}))},{default:l(()=>[s(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(o,{onClick:t[2]||(t[2]=e=>a.$router.push("/nested/menu1/menu1-2/menu1-2-2"))},{default:l(()=>[s(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),n(o,{onClick:t[3]||(t[3]=e=>a.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:l(()=>[s(" 跳转页内菜单（传path对象） ")]),_:1}),n(r),n(o,{onClick:t[4]||(t[4]=e=>a.$router.push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:l(()=>[s(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(o,{onClick:t[5]||(t[5]=e=>a.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:l(()=>[s(" 携参跳转页内菜单（传path对象） ")]),_:1}),n(q,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:l(()=>[s(" 点击查看更多跳转方式 ")]),_:1}),n(r),n(o,{onClick:t[6]||(t[6]=e=>a.$router.push({name:"Empty"}))},{default:l(()=>[s(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{O as default};
