import{ag as H,r as u,o as R,f as M,b as S,bx as T,bj as p,bH as W,a1 as Y,K as $,I as x}from"./index-16a5163c.js";import{_ as C}from"./form.vue_vue_type_script_setup_true_lang-fba4bb8b.js";import{m as o}from"./message-5d48ae52.js";import{g as F}from"./system-31dc1d53.js";import{u as O}from"./hooks-6f0ef5d2.js";import"./index-0ccbec8c.js";function V(){const n=H({name:"",status:null}),m=u(),l=u([]),i=u(!0),{tagStyle:r}=O(),d=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:t,props:e})=>M(S("el-tag"),{size:e.size,style:r.value(t.status)},{default:()=>[t.status===1?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:t})=>T(t).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:160,slot:"operation"}];function h(t){}function g(t){t&&(t.resetFields(),s())}async function s(){i.value=!0;const{data:t}=await F();let e=t;p(n.name)||(e=e.filter(a=>a.name.includes(n.name))),p(n.status)||(e=e.filter(a=>a.status===n.status)),l.value=W(e),setTimeout(()=>{i.value=!1},500)}function c(t){if(!t||!t.length)return;const e=[];for(let a=0;a<t.length;a++)t[a].disabled=t[a].status===0,c(t[a].children),e.push(t[a]);return e}function b(t="新增",e){Y({title:`${t}部门`,props:{formInline:{higherDeptOptions:c($(l.value)),parentId:(e==null?void 0:e.parentId)??0,name:(e==null?void 0:e.name)??"",principal:(e==null?void 0:e.principal)??"",phone:(e==null?void 0:e.phone)??"",email:(e==null?void 0:e.email)??"",sort:(e==null?void 0:e.sort)??0,status:(e==null?void 0:e.status)??1,remark:(e==null?void 0:e.remark)??""}},width:"40%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>x(C,{ref:m}),beforeSure:(a,{options:v})=>{const y=m.value.getRef(),I=v.props.formInline;function f(){o(`您${t}了部门名称为${I.name}的这条数据`,{type:"success"}),a(),s()}y.validate(k=>{k&&f()})}})}function D(t){o(`您删除了部门名称为${t.name}的这条数据`,{type:"success"}),s()}return R(()=>{s()}),{form:n,loading:i,columns:d,dataList:l,onSearch:s,resetForm:g,openDialog:b,handleDelete:D,handleSelectionChange:h}}export{V as useDept};