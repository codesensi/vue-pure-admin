import{useRole as T}from"./hook-CWTwlFA1.js";import{R as U,P as I}from"./refresh-BK6RGapH.js";import{u as s}from"./hooks-BDTFEesq.js";import{D as N}from"./delete-BUVqmax5.js";import{d as E}from"./edit-pen-Ci7W0xNM.js";import{d as F}from"./menu-DpbF6EVM.js";import{d as L}from"./add-circle-line-DOJqVT3s.js";import{d as M,r as O,b as t,e as j,k as q,i as o,w as l,u as e,h as m,_ as A}from"./index-DZLwq52W.js";import"./form.vue_vue_type_script_setup_true_lang-00vSZdXp.js";import"./system-BZo6H3gE.js";import"./hooks-BU0NEE0Y.js";import"./epTheme-BAYbo66i.js";import"./sortable.esm-6WsHlDA5.js";const G={class:"main"},H=M({name:"SystemRole",__name:"index",setup(J){const d=O(),{form:r,loading:u,columns:h,dataList:b,pagination:k,onSearch:f,resetForm:y,openDialog:_,handleMenu:v,handleDelete:x,handleSizeChange:V,handleCurrentChange:S,handleSelectionChange:R}=T();return(K,a)=>{const g=t("el-input"),p=t("el-form-item"),C=t("el-option"),w=t("el-select"),i=t("el-button"),$=t("el-form"),P=t("el-popconfirm"),B=t("pure-table");return j(),q("div",G,[o($,{ref_key:"formRef",ref:d,inline:!0,model:e(r),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:l(()=>[o(p,{label:"角色名称：",prop:"name"},{default:l(()=>[o(g,{modelValue:e(r).name,"onUpdate:modelValue":a[0]||(a[0]=n=>e(r).name=n),placeholder:"请输入角色名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"角色标识：",prop:"code"},{default:l(()=>[o(g,{modelValue:e(r).code,"onUpdate:modelValue":a[1]||(a[1]=n=>e(r).code=n),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"状态：",prop:"status"},{default:l(()=>[o(w,{modelValue:e(r).status,"onUpdate:modelValue":a[2]||(a[2]=n=>e(r).status=n),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:l(()=>[o(C,{label:"已启用",value:"1"}),o(C,{label:"已停用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(p,null,{default:l(()=>[o(i,{type:"primary",icon:e(s)("ri:search-line"),loading:e(u),onClick:e(f)},{default:l(()=>[m(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(s)(e(U)),onClick:a[3]||(a[3]=n=>e(y)(d.value))},{default:l(()=>[m(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(I),{title:"角色管理（仅演示，操作后不生效）",columns:e(h),onRefresh:e(f)},{buttons:l(()=>[o(i,{type:"primary",icon:e(s)(e(L)),onClick:a[4]||(a[4]=n=>e(_)())},{default:l(()=>[m(" 新增角色 ")]),_:1},8,["icon"])]),default:l(({size:n,dynamicColumns:D})=>[o(B,{"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(u),size:n,adaptive:"",adaptiveConfig:{offsetBottom:108},data:e(b),columns:D,pagination:e(k),paginationSmall:n==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(R),onPageSizeChange:e(V),onPageCurrentChange:e(S)},{operation:l(({row:c})=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(E)),onClick:z=>e(_)("修改",c)},{default:l(()=>[m(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(F)),onClick:e(v)},{default:l(()=>[m(" 菜单权限 ")]),_:2},1032,["size","icon","onClick"]),o(P,{title:`是否确认删除角色名称为${c.name}的这条数据`,onConfirm:z=>e(x)(c)},{reference:l(()=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(N))},{default:l(()=>[m(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}}),se=A(H,[["__scopeId","data-v-5c644f7c"]]);export{se as default};