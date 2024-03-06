import{useRole as E}from"./hook-CYQyJEL2.js";import{g as F}from"./utils-NlcLu7mC.js";import{R as O,P as $}from"./refresh-BK6RGapH.js";import{u as m}from"./hooks-BDTFEesq.js";import{D as q}from"./delete-BUVqmax5.js";import{d as G,r as C,b as a,j as H,e as b,k as v,i as o,w as t,u as e,h as s,m as J,f as x,B as K,C as M,_ as Q}from"./index-DZLwq52W.js";import"./system-BZo6H3gE.js";import"./hooks-BU0NEE0Y.js";import"./epTheme-BAYbo66i.js";import"./sortable.esm-6WsHlDA5.js";const W={class:"main"},X={key:0,class:"bg-[var(--el-fill-color-light)] w-full h-[46px] mb-2 pl-4 flex items-center"},Y={class:"flex-auto"},Z={style:{"font-size":"var(--el-font-size-base)"},class:"text-[rgba(42,46,54,0.5)] dark:text-[rgba(220,220,242,0.5)]"},ee=G({name:"OperationLog",__name:"index",setup(oe){const p=C(),d=C(),{form:r,loading:u,columns:k,dataList:y,pagination:V,selectedNum:f,onSearch:_,clearAll:S,resetForm:R,onbatchDel:w,handleSizeChange:P,onSelectionCancel:B,handleCurrentChange:D,handleSelectionChange:z}=E(d);return(te,n)=>{const N=a("el-input"),c=a("el-form-item"),g=a("el-option"),T=a("el-select"),U=a("el-date-picker"),i=a("el-button"),I=a("el-form"),h=a("el-popconfirm"),L=a("pure-table"),j=H("motion-fade");return b(),v("div",W,[o(I,{ref_key:"formRef",ref:p,inline:!0,model:e(r),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:t(()=>[o(c,{label:"所属模块",prop:"module"},{default:t(()=>[o(N,{modelValue:e(r).module,"onUpdate:modelValue":n[0]||(n[0]=l=>e(r).module=l),placeholder:"请输入所属模块",clearable:"",class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),o(c,{label:"操作状态",prop:"status"},{default:t(()=>[o(T,{modelValue:e(r).status,"onUpdate:modelValue":n[1]||(n[1]=l=>e(r).status=l),placeholder:"请选择",clearable:"",class:"!w-[150px]"},{default:t(()=>[o(g,{label:"成功",value:"1"}),o(g,{label:"失败",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(c,{label:"操作时间",prop:"operatingTime"},{default:t(()=>[o(U,{modelValue:e(r).operatingTime,"onUpdate:modelValue":n[2]||(n[2]=l=>e(r).operatingTime=l),shortcuts:e(F)(),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期时间","end-placeholder":"结束日期时间"},null,8,["modelValue","shortcuts"])]),_:1}),o(c,null,{default:t(()=>[o(i,{type:"primary",icon:e(m)("ri:search-line"),loading:e(u),onClick:e(_)},{default:t(()=>[s(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(m)(e(O)),onClick:n[3]||(n[3]=l=>e(R)(p.value))},{default:t(()=>[s(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e($),{title:"操作日志（仅演示，操作后不生效）",columns:e(k),onRefresh:e(_)},{buttons:t(()=>[o(h,{title:"确定要删除所有日志数据吗？",onConfirm:e(S)},{reference:t(()=>[o(i,{type:"danger",icon:e(m)(e(q))},{default:t(()=>[s(" 清空日志 ")]),_:1},8,["icon"])]),_:1},8,["onConfirm"])]),default:t(({size:l,dynamicColumns:A})=>[e(f)>0?J((b(),v("div",X,[x("div",Y,[x("span",Z," 已选 "+K(e(f))+" 项 ",1),o(i,{type:"primary",text:"",onClick:e(B)},{default:t(()=>[s(" 取消选择 ")]),_:1},8,["onClick"])]),o(h,{title:"是否确认删除?",onConfirm:e(w)},{reference:t(()=>[o(i,{type:"danger",text:"",class:"mr-1"},{default:t(()=>[s(" 批量删除 ")]),_:1})]),_:1},8,["onConfirm"])])),[[j]]):M("",!0),o(L,{ref_key:"tableRef",ref:d,"row-key":"id","align-whole":"center","table-layout":"auto",loading:e(u),size:l,adaptive:"",adaptiveConfig:{offsetBottom:108},data:e(y),columns:A,pagination:e(V),paginationSmall:l==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(z),onPageSizeChange:e(P),onPageCurrentChange:e(D)},null,8,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}}),ue=Q(ee,[["__scopeId","data-v-177752e5"]]);export{ue as default};
