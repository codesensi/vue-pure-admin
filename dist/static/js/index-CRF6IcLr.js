import{d as V,a9 as A,aa as F,p as g,gj as I,ad as M,a as N,fE as C,e as p,f as v,b as j,w as n,i as a,h as l,g as d,k as b,F as y,l as E,u as s,t as h,ac as B,gk as x}from"./index-CiYMlfUr.js";import{u as S}from"./hooks-D1Q6hOg9.js";const U=d("div",{class:"font-medium"},"标签页复用，超出限制自动关闭",-1),H={class:"flex flex-wrap items-center"},L=d("p",null,"query传参模式：",-1),P={class:"flex flex-wrap items-center"},z=d("p",null,"params传参模式：",-1),O=V({name:"Tabs",__name:"index",setup(G){const{toDetail:f,router:u}=S(),w=A(F().wholeMenus),_=g(()=>I(M(w),0,{disabled:!0})),c=N([]),k=g(()=>{var r;return(r=C())==null?void 0:r.multiTags});function $(){c.value.length!==0&&c.value.forEach(r=>{var i;const t=(i=x(_.value,r).redirect)!=null?i:x(_.value,r).path;C().handleTags("splice",t),t==="/tabs/index"&&u.push({path:k.value[k.value.length-1].path})})}return(r,t)=>{const i=p("el-link"),o=p("el-button"),m=p("el-divider"),q=p("el-tree-select"),D=p("el-card");return v(),j(D,{shadow:"never"},{header:n(()=>[U,a(i,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/tabs",target:"_blank"},{default:n(()=>[l(" 代码位置 src/views/tabs ")]),_:1})]),default:n(()=>[d("div",H,[L,(v(),b(y,null,E(6,e=>a(o,{key:e,class:"m-2",onClick:T=>s(f)({id:e},"query")},{default:n(()=>[l(" 打开"+h(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64)),a(o,{onClick:t[0]||(t[0]=e=>s(f)({id:666,name:"小明",age:18,job:"工程师"},"query"))},{default:n(()=>[l(" 多个参数 ")]),_:1})]),a(m),d("div",P,[z,(v(),b(y,null,E(6,e=>a(o,{key:e,class:"m-2",onClick:T=>s(f)({id:e},"params")},{default:n(()=>[l(" 打开"+h(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),a(m),a(q,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),class:"!w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>s(B)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:_.value},{default:n(({data:e})=>[d("span",null,h(s(B)(e.meta.title)),1)]),_:1},8,["modelValue","props","data"]),a(o,{class:"m-2",onClick:$},{default:n(()=>[l("关闭标签")]),_:1}),a(m),a(o,{onClick:t[2]||(t[2]=e=>s(u).push({name:"Menu1-2-2"}))},{default:n(()=>[l(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),a(o,{onClick:t[3]||(t[3]=e=>s(u).push("/nested/menu1/menu1-2/menu1-2-2"))},{default:n(()=>[l(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),a(o,{onClick:t[4]||(t[4]=e=>s(u).push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:n(()=>[l(" 跳转页内菜单（传path对象） ")]),_:1}),a(m),a(o,{onClick:t[5]||(t[5]=e=>s(u).push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:n(()=>[l(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),a(o,{onClick:t[6]||(t[6]=e=>s(u).push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:n(()=>[l(" 携参跳转页内菜单（传path对象） ")]),_:1}),a(i,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:n(()=>[l(" 点击查看更多跳转方式 ")]),_:1}),a(m),a(o,{onClick:t[7]||(t[7]=e=>s(u).push({name:"Empty"}))},{default:n(()=>[l(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{O as default};
