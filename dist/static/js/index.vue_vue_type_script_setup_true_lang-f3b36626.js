import{useColumns as d}from"./columns-3d7dbff3.js";import{d as _,r as f,c as n,f as g,e as w,w as k,i as y,g as C,u as e,aS as R}from"./index-0dd8d5e4.js";const V={class:"w-[600px] m-4"},v=_({__name:"index",setup(b){const t=f(),{columns:s,pagination:o,selectValue:a,tableDataEdit:c,rowStyle:r,onRowClick:i}=d(t);return(h,l)=>{const p=n("pure-table"),u=n("el-select");return g(),w(u,{ref_key:"selectRef",ref:t,modelValue:e(a),"onUpdate:modelValue":l[0]||(l[0]=m=>R(a)?a.value=m:null),placeholder:"请选择",clearable:""},{empty:k(()=>[y("div",V,[C(p,{height:"355","row-key":"id","header-cell-style":{background:"#f5f7fa",color:"#303133"},"row-style":e(r),data:e(c).slice((e(o).currentPage-1)*e(o).pageSize,e(o).currentPage*e(o).pageSize),columns:e(s),pagination:e(o),onRowClick:e(i)},null,8,["row-style","data","columns","pagination","onRowClick"])])]),_:1},8,["modelValue"])}}});export{v as _};
