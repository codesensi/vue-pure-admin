import{R as h}from"./index-HeCVjKIy.js";import{T as C,E as g}from"./index.esm-5C_caiub.js";import{d as R,r as w,b5 as y,a as b,b as E,g as r,c as u,w as d,F as V,u as l,j as c,h as x,z as B,n as k}from"./index-FZTP20Zj.js";const L={class:"wangeditor"},i="default",O=R({name:"MultiEditor",__name:"multi",setup(U){const f=[{value:"<p>测试一</p>"},{value:"<p>测试二</p>"},{value:"<p>测试三</p>"},{value:"<p>测试四</p>"}],o=w([]);f.forEach(e=>{o.value.push({value:e.value,editorRef:y()})});const p={excludeKeys:"fullScreen"},m={placeholder:"请输入内容..."},v=(e,n)=>{o.value[n].editorRef=e};return b(()=>o.value.map(e=>{e.editorRef!=null&&e.editorRef.destroy()})),(e,n)=>{const _=E("el-row");return r(),u(_,{gutter:30,justify:"space-around"},{default:d(()=>[(r(!0),k(V,null,B(o.value,(t,s)=>(r(),u(l(h),{key:s,value:11},{default:d(()=>[x("div",L,[c(l(C),{editor:t.editorRef,defaultConfig:p,mode:i,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),c(l(g),{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,defaultConfig:m,mode:i,style:{height:"300px","overflow-y":"hidden"},onOnCreated:a=>v(a,s)},null,8,["modelValue","onUpdate:modelValue","onOnCreated"])])]),_:2},1024))),128))]),_:1})}}});export{O as _};
