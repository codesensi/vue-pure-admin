import{t as s}from"./data-BfaOps1C.js";import{d as b,a as l,e as u,f as g,k as v,i as n,u as p,g as k,w as d,h as i}from"./index-yvJsfBgz.js";const w={style:{"margin-top":"20px"}},N=b({__name:"radio",setup(x){const o=l(),c=l(),a=t=>{const{setCurrentRow:e}=o.value.getTableRef();e(t)},f=t=>{c.value=t},m=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const C=u("pure-table"),r=u("el-button");return g(),v("div",null,[n(C,{ref_key:"tableRef",ref:o,data:p(s),columns:m,"highlight-current-row":"",onPageCurrentChange:f},null,8,["data"]),k("div",w,[n(r,{onClick:e[0]||(e[0]=_=>a(p(s)[1]))},{default:d(()=>e[2]||(e[2]=[i("Select second row")])),_:1}),n(r,{onClick:e[1]||(e[1]=_=>a())},{default:d(()=>e[3]||(e[3]=[i("Clear selection")])),_:1})])])}}});export{N as _};
