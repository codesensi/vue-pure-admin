var ve=Object.defineProperty,be=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var O=(r,a,n)=>a in r?ve(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,E=(r,a)=>{for(var n in a||(a={}))xe.call(a,n)&&O(r,n,a[n]);if(M)for(var n of M(a))ye.call(a,n)&&O(r,n,a[n]);return r},F=(r,a)=>be(r,he(a));var X=(r,a,n)=>new Promise((b,g)=>{var h=p=>{try{i(n.next(p))}catch(c){g(c)}},x=p=>{try{i(n.throw(p))}catch(c){g(c)}},i=p=>p.done?b(p.value):Promise.resolve(p.value).then(h,x);i((n=n.apply(r,a)).next())});import{useRole as ke}from"./hook-BkgIUpU7.js";import{d as Ce,P as we}from"./refresh-Betw9d5K.js";import{u as f}from"./hooks-BcXS4Gxy.js";import{d as Ve,p as Re,a as v,m as Se,aK as $e,y as Ie,aL as De,gj as Pe,e as d,A as Ue,f as H,k as K,i as l,w as s,u as e,h as _,g as m,v as w,X as Q,B as W,t as q,aD as V,j as Be,_ as ze}from"./index-yvJsfBgz.js";import{d as Te}from"./delete-Ce0TSdK5.js";import{d as je}from"./edit-pen-Ci7W0xNM.js";import{d as Ne,a as Ae}from"./close-CObHKOmY.js";import{d as Le}from"./add-circle-line-DOJqVT3s.js";import{d as Me}from"./check-CIQVCvCT.js";import"./form.vue_vue_type_script_setup_true_lang-CEP7UQCe.js";import"./hooks-BhiComsO.js";import"./system-DapZcS9i.js";import"./sortable.esm-Br3T5NCo.js";import"./epTheme-ssu8RQgJ.js";import"./collapse-D5oIPhgm.js";const Oe={class:"main"},Ee={key:0,class:"!min-w-[calc(100vw-60vw-268px)] w-full mt-2 px-2 pb-2 bg-bg_color ml-2 overflow-auto"},Fe={class:"flex justify-between w-full px-3 pt-5 pb-4"},Xe={class:"flex"},He={class:"font-bold truncate"},Ke={class:"flex flex-wrap"},Qe=Ve({name:"SystemRole",__name:"index",setup(r){const a=Re(()=>["w-[22px]","h-[22px]","flex","justify-center","items-center","outline-none","rounded-[4px]","cursor-pointer","transition-colors","hover:bg-[#0000000f]","dark:hover:bg-[#ffffff1f]","dark:hover:text-[#ffffffd9]"]),n=v(),b=v(),g=v(),h=v(),x=v(),{form:i,isShow:p,curRow:c,loading:P,columns:G,rowStyle:J,dataList:Y,treeData:Z,treeProps:ee,isLinkage:y,pagination:oe,isExpandAll:R,isSelectAll:S,treeSearchValue:$,onSearch:U,resetForm:le,openDialog:B,handleMenu:z,handleSave:te,handleDelete:ne,filterMethod:ae,transformI18n:se,onQueryChanged:re,handleSizeChange:ie,handleCurrentChange:de,handleSelectionChange:pe}=ke(n);return Se(()=>{$e(h,()=>X(this,null,function*(){yield Ie(),De(60).then(()=>{x.value=parseFloat(Pe(g.value.getTableDoms().tableWrapper.style.height,"px"))})}))}),(We,o)=>{var A;const I=d("el-input"),k=d("el-form-item"),T=d("el-option"),me=d("el-select"),u=d("el-button"),ce=d("el-form"),ue=d("el-popconfirm"),fe=d("pure-table"),j=d("IconifyIconOffline"),D=d("el-checkbox"),_e=d("el-tree-v2"),N=Ue("tippy");return H(),K("div",Oe,[l(ce,{ref_key:"formRef",ref:b,inline:!0,model:e(i),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:s(()=>[l(k,{label:"角色名称：",prop:"name"},{default:s(()=>[l(I,{modelValue:e(i).name,"onUpdate:modelValue":o[0]||(o[0]=t=>e(i).name=t),placeholder:"请输入角色名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),l(k,{label:"角色标识：",prop:"code"},{default:s(()=>[l(I,{modelValue:e(i).code,"onUpdate:modelValue":o[1]||(o[1]=t=>e(i).code=t),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),l(k,{label:"状态：",prop:"status"},{default:s(()=>[l(me,{modelValue:e(i).status,"onUpdate:modelValue":o[2]||(o[2]=t=>e(i).status=t),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:s(()=>[l(T,{label:"已启用",value:"1"}),l(T,{label:"已停用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),l(k,null,{default:s(()=>[l(u,{type:"primary",icon:e(f)("ri:search-line"),loading:e(P),onClick:e(U)},{default:s(()=>o[9]||(o[9]=[_(" 搜索 ")])),_:1},8,["icon","loading","onClick"]),l(u,{icon:e(f)(e(Ce)),onClick:o[3]||(o[3]=t=>e(le)(b.value))},{default:s(()=>o[10]||(o[10]=[_(" 重置 ")])),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),m("div",{ref_key:"contentRef",ref:h,class:w(["flex",e(Q)()?"flex-wrap":""])},[l(e(we),{class:w([e(p)&&!e(Q)()?"!w-[60vw]":"w-full"]),style:{transition:"width 220ms cubic-bezier(0.4, 0, 0.2, 1)"},title:"角色管理（仅演示，操作后不生效）",columns:e(G),onRefresh:e(U)},{buttons:s(()=>[l(u,{type:"primary",icon:e(f)(e(Le)),onClick:o[4]||(o[4]=t=>e(B)())},{default:s(()=>o[11]||(o[11]=[_(" 新增角色 ")])),_:1},8,["icon"])]),default:s(({size:t,dynamicColumns:ge})=>[l(fe,{ref_key:"tableRef",ref:g,"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(P),size:t,adaptive:"","row-style":e(J),adaptiveConfig:{offsetBottom:108},data:e(Y),columns:ge,pagination:F(E({},e(oe)),{size:t}),"header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(pe),onPageSizeChange:e(ie),onPageCurrentChange:e(de)},{operation:s(({row:C})=>[l(u,{class:"reset-margin",link:"",type:"primary",size:t,icon:e(f)(e(je)),onClick:L=>e(B)("修改",C)},{default:s(()=>o[12]||(o[12]=[_(" 修改 ")])),_:2},1032,["size","icon","onClick"]),l(ue,{title:`是否确认删除角色名称为${C.name}的这条数据`,onConfirm:L=>e(ne)(C)},{reference:s(()=>[l(u,{class:"reset-margin",link:"",type:"primary",size:t,icon:e(f)(e(Te))},{default:s(()=>o[13]||(o[13]=[_(" 删除 ")])),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"]),l(u,{class:"reset-margin",link:"",type:"primary",size:t,icon:e(f)(e(Ne)),onClick:L=>e(z)(C)},{default:s(()=>o[14]||(o[14]=[_(" 权限 ")])),_:2},1032,["size","icon","onClick"])]),_:2},1032,["loading","size","row-style","data","columns","pagination","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["class","columns","onRefresh"]),e(p)?(H(),K("div",Ee,[m("div",Fe,[m("div",Xe,[m("span",{class:w(a.value)},[W(l(j,{class:"dark:text-white",width:"18px",height:"18px",icon:e(Ae),onClick:e(z)},null,8,["icon","onClick"]),[[N,{content:"关闭"}]])],2),m("span",{class:w([a.value,"ml-2"])},[W(l(j,{class:"dark:text-white",width:"18px",height:"18px",icon:e(Me),onClick:e(te)},null,8,["icon","onClick"]),[[N,{content:"保存菜单权限"}]])],2)]),m("p",He," 菜单权限 "+q(`${(A=e(c))!=null&&A.name?`（${e(c).name}）`:""}`),1)]),l(I,{modelValue:e($),"onUpdate:modelValue":o[5]||(o[5]=t=>V($)?$.value=t:null),placeholder:"请输入菜单进行搜索",class:"mb-1",clearable:"",onInput:e(re)},null,8,["modelValue","onInput"]),m("div",Ke,[l(D,{modelValue:e(R),"onUpdate:modelValue":o[6]||(o[6]=t=>V(R)?R.value=t:null),label:"展开/折叠"},null,8,["modelValue"]),l(D,{modelValue:e(S),"onUpdate:modelValue":o[7]||(o[7]=t=>V(S)?S.value=t:null),label:"全选/全不选"},null,8,["modelValue"]),l(D,{modelValue:e(y),"onUpdate:modelValue":o[8]||(o[8]=t=>V(y)?y.value=t:null),label:"父子联动"},null,8,["modelValue"])]),l(_e,{ref_key:"treeRef",ref:n,"show-checkbox":"",data:e(Z),props:e(ee),height:x.value,"check-strictly":!e(y),"filter-method":e(ae)},{default:s(({node:t})=>[m("span",null,q(e(se)(t.label)),1)]),_:1},8,["data","props","height","check-strictly","filter-method"])])):Be("",!0)],2)])}}}),co=ze(Qe,[["__scopeId","data-v-1e71a5d8"]]);export{co as default};
