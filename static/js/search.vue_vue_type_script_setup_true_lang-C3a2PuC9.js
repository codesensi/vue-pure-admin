var M=Object.defineProperty,O=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(t,l,o)=>l in t?M(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,g=(t,l)=>{for(var o in l||(l={}))X.call(l,o)&&x(t,o,l[o]);if(R)for(var o of R(l))Y.call(l,o)&&x(t,o,l[o]);return t},k=(t,l)=>O(t,W(l));var C=(t,l,o)=>new Promise((d,u)=>{var i=s=>{try{r(o.next(s))}catch(h){u(h)}},c=s=>{try{r(o.throw(s))}catch(h){u(h)}},r=s=>s.done?d(s.value):Promise.resolve(s.value).then(i,c);r((o=o.apply(t,l)).next())});import{_ as Z}from"./_plugin-vue_export-helper-C_DISmKY.js";import{u as ee,f as B,P as ae,g as le,a as oe,b as se}from"./plus-form-CjMorKxL.js";import{d as q,a as w,aU as te,p as N,u as a,n as re,f as m,b as v,an as ne,l as U,w as p,Q as y,ao as F,bj as $,dn as ue,dh as E,dp as de,h as D,t as I,j as L,i as j,dq as pe,dr as ie,ds as ce,dt as fe,du as he,a3 as me}from"./index-yvJsfBgz.js";import{o as ve}from"./orderBy-B7PxCadU.js";var be=q({name:"PlusSearch",__name:"index",props:{modelValue:{default:()=>({})},defaultValues:{default:()=>({})},columns:{default:()=>[]},hasFooter:{type:Boolean,default:!0},hasReset:{type:Boolean,default:!0},hasUnfold:{type:Boolean,default:!0},searchText:{default:""},resetText:{default:""},retractText:{default:""},expandText:{default:""},searchLoading:{type:Boolean,default:!1},inline:{type:Boolean,default:!0},showNumber:{default:2},labelPosition:{default:void 0},rowProps:{default:()=>({gutter:20})},colProps:{default:()=>({xs:24,sm:12,md:8,lg:8,xl:6})},needValidate:{type:Boolean,default:!1}},emits:["update:modelValue","search","change","reset","collapse"],setup(t,{expose:l,emit:o}){const d=t,u=o,{t:i}=ee(),c=w(),r=w(!1),s=w({}),h=te(),z=B(h,le()),Q=B(h,oe()),A=B(h,se()),V=N(()=>{const e=d.columns.filter(n=>a(n.hideInSearch)!==!0).map(n=>k(g({},n),{hideInForm:!1})).map(n=>k(g({},n),{order:n!=null&&n.order?a(n.order):0}));return ve(e,["order"],["desc"])}),G=N(()=>d.hasUnfold&&!r.value?V.value.slice(0,d.showNumber):V.value);re(()=>d.modelValue,e=>{s.value=e},{immediate:!0});const H=(e,n)=>C(this,null,function*(){u("update:modelValue",e),u("change",e,n)}),J=()=>{u("search",s.value)},K=()=>C(this,null,function*(){var e;(yield(e=c.value)==null?void 0:e.handleSubmit())&&u("search",s.value)}),P=N(()=>d.needValidate?K:J),_=()=>{s.value=g({},d.defaultValues),u("update:modelValue",s.value),u("reset",s.value)},T=e=>{e.preventDefault(),r.value=!r.value,u("collapse",r.value)};return l({plusFormInstance:c,handleReset:_,handleSearch:P.value,handleUnfold:T}),(e,n)=>(m(),v(a(ae),me({ref_key:"plusFormInstance",ref:c},e.$attrs,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=S=>s.value=S),inline:e.inline,"label-position":e.labelPosition,"row-props":e.rowProps,"col-props":e.colProps,columns:G.value,class:"plus-search","has-footer":!1,onChange:H}),ne({"search-footer":p(()=>[e.hasFooter?(m(),v(a(ue),{key:0,class:"plus-search__button__wrapper",label:e.labelPosition==="top"?"placeholder":""},{default:p(()=>[y(e.$slots,"footer",{isShowUnfold:r.value,handleReset:_,handleSearch:P.value,handleUnfold:T},()=>[e.hasReset?(m(),v(a(E),{key:0,icon:a(de),onClick:_},{default:p(()=>[D(I(e.resetText||a(i)("plus.search.resetText")),1)]),_:1},8,["icon"])):L("v-if",!0),j(a(E),{type:"primary",loading:e.searchLoading,icon:a(pe),onClick:P.value},{default:p(()=>[D(I(e.searchText||a(i)("plus.search.searchText")),1)]),_:1},8,["loading","icon","onClick"]),e.hasUnfold&&V.value.length>e.showNumber?(m(),v(a(ie),{key:1,class:"plus-search__unfold",type:"primary",underline:!1,href:"javaScript:;",onClick:T},{default:p(()=>[D(I(r.value?e.retractText||a(i)("plus.search.retract"):e.expandText||a(i)("plus.search.expand"))+" ",1),j(a(ce),null,{default:p(()=>[r.value?(m(),v(a(fe),{key:0})):(m(),v(a(he),{key:1}))]),_:1})]),_:1})):L("v-if",!0)])]),_:3},8,["label"])):L("v-if",!0)]),_:2},[U(a(z),(S,f)=>({name:f,fn:p(b=>[y(e.$slots,f,F($(b)))])})),U(a(Q),(S,f)=>({name:f,fn:p(b=>[y(e.$slots,f,F($(b)))])})),U(a(A),(S,f)=>({name:f,fn:p(b=>[y(e.$slots,f,F($(b)))])})),e.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:p(()=>[y(e.$slots,"tooltip-icon")]),key:"0"}:void 0]),1040,["modelValue","inline","label-position","row-props","col-props","columns"]))}}),ye=Z(be,[["__file","index.vue"]]);const Se=ye,Te=q({__name:"search",setup(t){const l=w({status:"0",time:new Date().toString()}),o=[{label:"名称",prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"城市",prop:"city",valueType:"cascader",options:[{value:"0",label:"陕西",children:[{value:"0-0",label:"西安",children:[{value:"0-0-0",label:"新城区"},{value:"0-0-1",label:"高新区"},{value:"0-0-2",label:"灞桥区"}]}]},{value:"1",label:"山西",children:[{value:"1-0",label:"太原",children:[{value:"1-0-0",label:"小店区"},{value:"1-0-1",label:"古交市"},{value:"1-0-2",label:"万柏林区"}]}]}]},{label:"地区",prop:"place",tooltip:"请精确到门牌号",fieldProps:{placeholder:"请精确到门牌号"}},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择",endPlaceholder:"请选择"}},{label:"奖励",prop:"price"},{label:"提成",prop:"percentage"}],d=c=>{},u=c=>{},i=()=>{};return(c,r)=>(m(),v(a(Se),{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=s=>l.value=s),columns:o,"show-number":2,"label-width":"80","label-position":"right",onChange:d,onSearch:u,onReset:i},null,8,["modelValue"]))}});export{Te as _};
