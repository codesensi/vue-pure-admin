var ne=Object.defineProperty;var O=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var P=(e,i,t)=>i in e?ne(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,$=(e,i)=>{for(var t in i||(i={}))re.call(i,t)&&P(e,t,i[t]);if(O)for(var t of O(i))ue.call(i,t)&&P(e,t,i[t]);return e};var L=(e,i,t)=>new Promise((T,c)=>{var x=o=>{try{s(t.next(o))}catch(h){c(h)}},g=o=>{try{s(t.throw(o))}catch(h){c(h)}},s=o=>o.done?T(o.value):Promise.resolve(o.value).then(x,g);s((t=t.apply(e,i)).next())});import{S as ie}from"./sortable.esm-Br3T5NCo.js";import{d as oe,a as v,ad as b,fE as ce,ab as se,ak as B,p as I,i as a,a3 as de,F as H,B as w,A as E,e as u,h as S,u as K,aa as m,fL as fe,fC as ve,aB as he,aL as be,y as ge,Z as pe,V as me}from"./index-yvJsfBgz.js";import{u as xe}from"./epTheme-ssu8RQgJ.js";import{E as ye,R as Ce,C as ke,D as we,S as Ee}from"./collapse-D5oIPhgm.js";function Re(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!he(e)}const Ae={title:{type:String,default:"列表"},tableRef:{type:Object},columns:{type:Array,default:()=>[]},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},De=oe({name:"PureTableBar",props:Ae,emits:["refresh"],setup(e,{emit:i,slots:t,attrs:T}){const c=v("default"),x=v(!1),g=v(!0),s=v(!1),o=v(!1),h=pe(),y=v(e.isExpandAll),M=b(e==null?void 0:e.columns).filter(l=>ce(l==null?void 0:l.hide)?!l.hide:!(se(l==null?void 0:l.hide)&&(l!=null&&l.hide())));let p=B(b(e==null?void 0:e.columns),"label");const R=v(B(b(M),"label")),d=v(b(e==null?void 0:e.columns)),z=I(()=>l=>({background:l===c.value?xe().epThemeColor:"",color:l===c.value?"#fff":"var(--el-text-color-primary)"})),C=I(()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"]),G=I(()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]);function U(){x.value=!0,i("refresh"),be(500).then(()=>x.value=!1)}function Z(){y.value=!y.value,N(e.tableRef.data,y.value)}function N(l,r){l.forEach(n=>{e.tableRef.toggleRowExpansion(n,r),n.children!==void 0&&n.children!==null&&N(n.children,r)})}function q(l){R.value=l?p:[],o.value=!1,d.value.map(r=>l?r.hide=!1:r.hide=!0)}function J(l){R.value=l;const r=l.length;g.value=r===p.length,o.value=r>0&&r<p.length}function Q(l,r){d.value.filter(n=>m(n.label)===m(r))[0].hide=!l}function W(){return L(this,null,function*(){g.value=!0,o.value=!1,d.value=b(e==null?void 0:e.columns),p=[],p=yield B(b(e==null?void 0:e.columns),"label"),R.value=B(b(M),"label")})}const X={dropdown:()=>a(u("el-dropdown-menu"),{class:"translation"},{default:()=>[a(u("el-dropdown-item"),{style:z.value("large"),onClick:()=>c.value="large"},{default:()=>[S("宽松")]}),a(u("el-dropdown-item"),{style:z.value("default"),onClick:()=>c.value="default"},{default:()=>[S("默认")]}),a(u("el-dropdown-item"),{style:z.value("small"),onClick:()=>c.value="small"},{default:()=>[S("紧凑")]})]})},Y=l=>{l.preventDefault(),ge(()=>{var n;const r=((n=h==null?void 0:h.proxy)==null?void 0:n.$refs[`GroupRef${K(e.tableKey)}`]).$el.firstElementChild;ie.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:k,oldIndex:f,item:ae})=>{const V=ae,j=V.parentNode,F=d.value[f],_=d.value[k];if(F!=null&&F.fixed||_!=null&&_.fixed){const D=j.children[f];k>f?j.insertBefore(V,D):j.insertBefore(V,D&&D.nextElementSibling);return}const te=d.value.splice(f,1)[0];d.value.splice(k,0,te)}})})},ee=l=>!!d.value.filter(r=>m(r.label)===m(l))[0].fixed,A=l=>({content:l,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),le={reference:()=>w(a(Ee,{class:["w-[16px]",C.value]},null),[[E("tippy"),A("列设置")]])};return()=>{var r;let l;return a(H,null,[a("div",de(T,{class:["w-[99/100]","px-2","pb-2","bg-bg_color",s.value?["!w-full","!h-full","z-[2002]","fixed","inset-0"]:"mt-2"]}),[a("div",{class:"flex justify-between w-full h-[60px] p-4"},[t!=null&&t.title?t.title():a("p",{class:"font-bold truncate"},[e.title]),a("div",{class:"flex items-center justify-around"},[t!=null&&t.buttons?a("div",{class:"flex mr-4"},[t.buttons()]):null,(r=e.tableRef)!=null&&r.size?a(H,null,[w(a(ye,{class:["w-[16px]",C.value],style:{transform:y.value?"none":"rotate(-90deg)"},onClick:()=>Z()},null),[[E("tippy"),A(y.value?"折叠":"展开")]]),a(u("el-divider"),{direction:"vertical"},null)]):null,w(a(Ce,{class:["w-[16px]",C.value,x.value?"animate-spin":""],onClick:()=>U()},null),[[E("tippy"),A("刷新")]]),a(u("el-divider"),{direction:"vertical"},null),w(a(u("el-dropdown"),{trigger:"click"},$({default:()=>[a(ke,{class:["w-[16px]",C.value]},null)]},X)),[[E("tippy"),A("密度")]]),a(u("el-divider"),{direction:"vertical"},null),a(u("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},$({default:()=>[a("div",{class:[G.value]},[a(u("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:g.value,"onUpdate:modelValue":n=>g.value=n,indeterminate:o.value,onChange:n=>q(n)},null),a(u("el-button"),{type:"primary",link:!0,onClick:()=>W()},{default:()=>[S("重置")]})]),a("div",{class:"pt-[6px] pl-[11px]"},[a(u("el-scrollbar"),{"max-height":"36vh"},{default:()=>[a(u("el-checkbox-group"),{ref:`GroupRef${K(e.tableKey)}`,modelValue:R.value,onChange:n=>J(n)},{default:()=>[a(u("el-space"),{direction:"vertical",alignment:"flex-start",size:0},Re(l=p.map((n,k)=>a("div",{class:"flex items-center"},[a(we,{class:["drag-btn w-[16px] mr-2",ee(n)?"!cursor-no-drop":"!cursor-grab"],onMouseenter:f=>Y(f)},null),a(u("el-checkbox"),{key:k,label:n,value:n,onChange:f=>Q(f,n)},{default:()=>[a("span",{title:m(n),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[m(n)])]})])))?l:{default:()=>[l]})]})]})])]},le)),a(u("el-divider"),{direction:"vertical"},null),w(a(u("iconifyIconOffline"),{class:["w-[16px]",C.value],icon:s.value?fe:ve,onClick:()=>s.value=!s.value},null),[[E("tippy"),s.value?"退出全屏":"全屏"]])])]),t.default({size:c.value,dynamicColumns:d.value})])])}}}),je=me(De),Fe={width:1024,height:1024,body:'<path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"/>'};export{je as P,Fe as d};
