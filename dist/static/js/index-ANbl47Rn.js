import{d as V,O as M,H as A,J as k,dL as F,M as I,r as L,d6 as C,b as m,g as _,c as N,w as l,F as g,u as s,t as v,i as o,j as n,z as b,n as y,h as d,L as E,dM as B}from"./index-FZTP20Zj.js";import{u as j}from"./hooks-77vwukb3.js";const H=d("div",null,"标签页复用，超出限制自动关闭",-1),S={class:"flex flex-wrap items-center"},U=d("p",null,"query传参模式：",-1),z={class:"flex flex-wrap items-center"},O=d("p",null,"params传参模式：",-1),K=V({name:"Tabs",__name:"index",setup(P){const{toDetail:c,router:u}=j(),x=M(A().wholeMenus,!0),f=k(()=>F(I(x),0,{disabled:!0})),p=L([]),h=k(()=>{var r;return(r=C())==null?void 0:r.multiTags});function $(){p.value.length!==0&&p.value.forEach(r=>{var a;const t=(a=B(f.value,r).redirect)!=null?a:B(f.value,r).path;C().handleTags("splice",t),t==="/tabs/index"&&u.push({path:h.value[h.value.length-1].path})})}return(r,t)=>{const a=m("el-button"),i=m("el-divider"),q=m("el-tree-select"),D=m("el-link"),T=m("el-card");return _(),N(T,{shadow:"never"},{header:l(()=>[H]),default:l(()=>[d("div",S,[U,(_(),y(g,null,b(6,e=>n(a,{key:e,class:"m-2",onClick:w=>s(c)({id:e},"query")},{default:l(()=>[o(" 打开"+v(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64)),n(a,{onClick:t[0]||(t[0]=e=>s(c)({id:666,name:"小明",age:18,job:"工程师"},"query"))},{default:l(()=>[o(" 多个参数 ")]),_:1})]),n(i),d("div",z,[O,(_(),y(g,null,b(6,e=>n(a,{key:e,class:"m-2",onClick:w=>s(c)({id:e},"params")},{default:l(()=>[o(" 打开"+v(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(i),n(q,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value=e),class:"!w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>s(E)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:f.value},{default:l(({data:e})=>[d("span",null,v(s(E)(e.meta.title)),1)]),_:1},8,["modelValue","props","data"]),n(a,{class:"m-2",onClick:$},{default:l(()=>[o("关闭标签")]),_:1}),n(i),n(a,{onClick:t[2]||(t[2]=e=>s(u).push({name:"Menu1-2-2"}))},{default:l(()=>[o(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(a,{onClick:t[3]||(t[3]=e=>s(u).push("/nested/menu1/menu1-2/menu1-2-2"))},{default:l(()=>[o(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),n(a,{onClick:t[4]||(t[4]=e=>s(u).push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:l(()=>[o(" 跳转页内菜单（传path对象） ")]),_:1}),n(i),n(a,{onClick:t[5]||(t[5]=e=>s(u).push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:l(()=>[o(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(a,{onClick:t[6]||(t[6]=e=>s(u).push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:l(()=>[o(" 携参跳转页内菜单（传path对象） ")]),_:1}),n(D,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:l(()=>[o(" 点击查看更多跳转方式 ")]),_:1}),n(i),n(a,{onClick:t[7]||(t[7]=e=>s(u).push({name:"Empty"}))},{default:l(()=>[o(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{K as default};
