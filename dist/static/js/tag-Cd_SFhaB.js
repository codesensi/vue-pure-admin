import{d as Z,r as n,a8 as U,c as u,w as l,b as o,j as A,e as s,f as _,i as a,m as G,h as d,C as H,k as D,l as N,B as S,F as L,Z as J,n as M,aU as Q,p as X,q as Y,_ as ee}from"./index-DMfKamyG.js";const g=m=>(X("data-v-4afa29d0"),m=m(),Y(),m),le={class:"card-header"},ae=g(()=>_("p",{class:"mb-2"},"基础按钮",-1)),te=g(()=>_("br",null,null,-1)),se=g(()=>_("br",null,null,-1)),oe=g(()=>_("p",{class:"mb-2"},"动态编辑标签",-1)),ne=Z({name:"PureTag",__name:"tag",setup(m){const r=n("default"),f=n(!1),y=n(!1),k=n("dark"),c=n([{type:"primary",text:"Primary"},{type:"success",text:"Success"},{type:"info",text:"Info"},{type:"warning",text:"Warning"},{type:"danger",text:"Danger"}]),R=b=>{c.value.splice(c.value.indexOf(b),1)},$=U(c.value);function j(){c.value=U($)}const p=n(""),v=n(["Tag 1","Tag 2","Tag 3"]),V=n(!1),C=n(),F=b=>{v.value.splice(v.value.indexOf(b),1)},K=()=>{V.value=!0,M(()=>{C.value.input.focus()})},w=()=>{Q(p.value)||v.value.push(p.value),V.value=!1,p.value=""};return(b,t)=>{const O=o("el-link"),i=o("el-radio"),z=o("el-radio-group"),h=o("el-space"),T=o("el-checkbox"),x=o("el-button"),I=o("el-tag"),P=o("el-divider"),q=o("el-input"),E=o("el-card"),W=A("tippy");return s(),u(E,{shadow:"never"},{header:l(()=>[_("div",le,[a(h,{wrap:"",size:40},{default:l(()=>[G((s(),u(O,{href:"https://element-plus.org/zh-CN/component/tag.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:l(()=>[d(" Tag 标签 ")]),_:1})),[[W,{content:"点击查看详细文档"}]]),a(z,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),size:"small"},{default:l(()=>[a(i,{label:"large"},{default:l(()=>[d("大尺寸")]),_:1}),a(i,{label:"default"},{default:l(()=>[d("默认尺寸")]),_:1}),a(i,{label:"small"},{default:l(()=>[d("小尺寸")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),default:l(()=>[ae,a(z,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e),class:"mb-3"},{default:l(()=>[a(i,{label:"dark"}),a(i,{label:"light"}),a(i,{label:"plain"})]),_:1},8,["modelValue"]),te,a(h,{class:"mb-3"},{default:l(()=>[c.value.length>0?(s(),u(T,{key:0,modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=e=>f.value=e),label:"可移除"},null,8,["modelValue"])):(s(),u(x,{key:1,size:"small",text:"",bg:"",class:"mr-6",onClick:j},{default:l(()=>[d(" 重置 ")]),_:1})),f.value&&c.value.length>0?(s(),u(x,{key:2,size:"small",text:"",bg:"",class:"mr-6 ml-4",onClick:t[3]||(t[3]=e=>c.value=[])},{default:l(()=>[d(" 移除全部 ")]),_:1})):H("",!0),a(T,{modelValue:y.value,"onUpdate:modelValue":t[4]||(t[4]=e=>y.value=e),label:"圆形"},null,8,["modelValue"])]),_:1}),se,a(h,{wrap:""},{default:l(()=>[(s(!0),D(L,null,N(c.value,(e,B)=>(s(),u(I,{key:B,type:e.type,effect:k.value,closable:f.value,round:y.value,size:r.value,disabled:r.value==="disabled",onClose:ue=>R(e)},{default:l(()=>[d(S(e.text),1)]),_:2},1032,["type","effect","closable","round","size","disabled","onClose"]))),128))]),_:1}),a(P),oe,(s(!0),D(L,null,N(v.value,e=>(s(),u(I,{key:e,class:"mx-1",closable:"",size:r.value,"disable-transitions":!1,onClose:B=>F(e)},{default:l(()=>[d(S(e),1)]),_:2},1032,["size","onClose"]))),128)),V.value?(s(),u(q,{key:0,ref_key:"InputRef",ref:C,modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=e=>p.value=e),class:"ml-1 !w-20",size:"small",onKeyup:J(w,["enter"]),onBlur:w},null,8,["modelValue"])):(s(),u(x,{key:1,class:"button-new-tag ml-1",size:"small",onClick:K},{default:l(()=>[d(" 新建标签 ")]),_:1}))]),_:1})}}}),ce=ee(ne,[["__scopeId","data-v-4afa29d0"]]);export{ce as default};
