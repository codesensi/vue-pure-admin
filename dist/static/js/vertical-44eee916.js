import{s as f,a as h}from"./vue-virtual-scroller.esm-490d869b.js";import{d as x,r,x as g,c as d,f as w,k as y,i as n,h as C,g as l,w as _,u as m,C as I,_ as V}from"./index-0dd8d5e4.js";const k={class:"dynamic-scroller-demo"},b={class:"flex-ac mb-4 shadow-2xl"},z={class:"flex items-center"},B=x({__name:"vertical",setup(N){const i=r([]),t=r("");for(let e=0;e<800;e++)i.value.push({id:e});const p=g(()=>{if(!t.value)return i.value;const e=t.value;return i.value.filter(a=>a.id==e)});return(e,a)=>{const u=d("el-input"),v=d("IconifyIconOnline");return w(),y("div",k,[n("div",b,[C(" 垂直模式 vertical "),l(u,{class:"!w-[350px]",clearable:"",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"Filter..."},null,8,["modelValue"])]),l(m(h),{items:p.value,"min-item-size":54,class:"scroller"},{default:_(({item:s,index:o,active:c})=>[l(m(f),{item:s,active:c,"size-dependencies":[s.id],"data-index":o,"data-active":c,title:`Click to change message ${o}`,class:"message"},{default:_(()=>[n("div",z,[l(v,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),n("span",null,I(s.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title"])]),_:1},8,["items"])])}}});const $=V(B,[["__scopeId","data-v-033e7191"]]);export{$ as default};
