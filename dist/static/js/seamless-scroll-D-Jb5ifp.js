import{d as ae,a as y,dn as N,p as a,dp as Ae,dq as Me,k as $,s as b,v as ie,S as Y,j as le,g as w,u as e,y as Oe,dr as Fe,f as F,Z as $e,r as He,b as Pe,w as S,e as H,i as A,h as je,l as De,t as qe,F as Be,C as Ee,D as Re,_ as We}from"./index-CiYMlfUr.js";const ze=()=>{window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(l){return window.clearTimeout(l)},window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l){return window.setTimeout(l,1e3/60)}}()},Le=(l,p)=>{if(l===p)return!0;if(l.length!==p.length)return!1;for(let u=0;u<l.length;++u)if(l[u]!==p[u])return!1;return!0};function re(){Array.isArray||(Array.isArray=function(x){return Object.prototype.toString.call(x)==="[object Array]"});let l,p,u,d,m,f,r=1,t=arguments[0]||{},i=!1,h=arguments.length;if(typeof t=="boolean"&&(i=t,t=arguments[1]||{},r++),typeof t!="object"&&typeof t!="function"&&(t={}),r===h)return t;for(;r<h;r++)if((p=arguments[r])!=null)for(l in p)u=t[l],d=p[l],m=Array.isArray(d),i&&d&&(typeof d=="object"||m)?(m?(m=!1,f=u&&Array.isArray(u)?u:[]):f=u&&typeof u=="object"?u:{},t[l]=re(i,f,d)):d!==void 0&&(t[l]=d);return t}const Ie=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:ze,arrayEqual:Le,copyObj:re},Symbol.toStringTag,{value:"Module"})),Ne=["innerHTML"],Ye=ae({name:"ReSeamlessScroll",__name:"index",props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(l,{expose:p,emit:u}){const{animationFrame:d,copyObj:m}=Ie;d();const f=l,r=u,t=y(0),i=y(0),h=y(0),x=y(0),v=y(0),_=y(0),P=y(0),j=y("");let C=null,V=null,D=null,U=null,X=null,q=!1,B="ease-in";f.classOption.key===void 0&&(f.classOption.key=0);const Z=N(`wrap${f.classOption.key}`,null),G=N(`slotList${f.classOption.key}`,null),J=N(`realBox${f.classOption.key}`,null),K=a(()=>e(t)<0),Q=a(()=>Math.abs(e(t))<e(_)-e(v)),ce=a(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),o=a(()=>m({},e(ce),f.classOption)),ue=a(()=>e(K)?"":e(o).switchDisabledClass),fe=a(()=>e(Q)?"":e(o).switchDisabledClass),de=a(()=>({position:"absolute",margin:`${e(x)/2}px 0 0 -${e(o).switchOffset}px`,transform:"translate(-100%,-50%)"})),pe=a(()=>({position:"absolute",margin:`${e(x)/2}px 0 0 ${e(v)+e(o).switchOffset}px`,transform:"translateY(-50%)"})),E=a(()=>e(o).direction!=="bottom"&&e(o).direction!=="top"),ee=a(()=>e(E)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),me=a(()=>({transform:`translate(${e(t)}px,${e(i)}px)`,transition:`all ${B} ${e(h)}ms`,overflow:"hidden"})),R=a(()=>e(o).navigation),W=a(()=>e(R)?!1:e(o).autoPlay),te=a(()=>f.data.length>=e(o).limitMoveNum),ne=a(()=>e(o).hoverStop&&e(W)&&e(te)),z=a(()=>e(o).openTouch),oe=a(()=>e(o).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),L=a(()=>e(o).singleWidth*e(oe)),I=a(()=>e(o).singleHeight*e(oe)),k=a(()=>{let n;const s=e(o).step;if(e(E)?n=e(L):n=e(I),n>0&&n%s>0)throw"如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";return s});function he(){t.value=0,i.value=0,M(),se()}function ve(){if(e(K)){if(Math.abs(e(t))<e(o).switchSingleStep){t.value=0;return}t.value+=e(o).switchSingleStep}}function we(){if(e(Q)){if(e(_)-e(v)+e(t)<e(o).switchSingleStep){t.value=e(v)-e(_);return}t.value-=e(o).switchSingleStep}}function M(){cancelAnimationFrame(V||"")}function ye(n){if(!e(z))return;let s;const c=n.targetTouches[0],{waitTime:g,singleHeight:O,singleWidth:Ce}=e(o);D={x:c.pageX,y:c.pageY},U=e(i),X=e(t),O&&Ce?(s&&clearTimeout(s),s=setTimeout(()=>{M()},g+20)):M()}function ge(n){if(!e(z)||n.targetTouches.length>1||n.scale&&n.scale!==1)return;const s=n.targetTouches[0],{direction:c}=e(o),g={x:s.pageX-D.x,y:s.pageY-D.y};n.preventDefault();const O=Math.abs(g.x)<Math.abs(g.y)?1:0;O===1&&c==="bottom"||O===1&&c==="top"?i.value=U+g.y:(O===0&&c==="left"||O===0&&c==="right")&&(t.value=X+g.x)}function Se(){if(!e(z))return;let n;const s=e(o).direction;if(h.value=50,s==="top")e(i)>0&&(i.value=0);else if(s==="bottom"){const c=e(P)/2*-1;e(i)<c&&(i.value=c)}else if(s==="left")e(t)>0&&(t.value=0);else if(s==="right"){const c=e(_)*-1;e(t)<c&&(t.value=c)}n&&clearTimeout(n),n=setTimeout(()=>{h.value=0,T()},e(h))}function be(){e(ne)&&Te()}function _e(){e(ne)&&ke()}function T(){q||(V=requestAnimationFrame(function(){const n=e(P)/2,s=e(_)/2,{direction:c,waitTime:g}=e(o);c==="top"?(Math.abs(e(i))>=n&&(r("scrollEnd"),i.value=0),i.value-=k.value):c==="bottom"?(e(i)>=0&&(r("scrollEnd"),i.value=n*-1),i.value+=k.value):c==="left"?(Math.abs(e(t))>=s&&(r("scrollEnd"),t.value=0),t.value-=k.value):c==="right"&&(e(t)>=0&&(r("scrollEnd"),t.value=s*-1),t.value+=k.value),C&&clearTimeout(C),e(I)?Math.abs(e(i))%e(I)<e(k)?C=setTimeout(()=>{T()},g):T():e(L)&&Math.abs(e(t))%e(L)<e(k)?C=setTimeout(()=>{T()},g):T()}))}function se(){Oe(()=>{const{switchDelay:n}=e(o);if(j.value="",e(E)){x.value=e(Z).offsetHeight,v.value=e(Z).offsetWidth;let s=e(G).offsetWidth;e(W)&&(s=s*2+1),e(J).style.width=s+"px",_.value=s}if(e(W))B="ease-in",h.value=0;else{B="linear",h.value=n;return}e(te)?(j.value=e(G).innerHTML,setTimeout(()=>{var s;P.value=(s=e(J))==null?void 0:s.offsetHeight,T()},0)):(M(),i.value=t.value=0)})}function ke(){q=!1,T()}function Te(){q=!0,C&&clearTimeout(C),M()}function xe(n){e(o).direction==="left"||e(o).direction==="right"||Fe(()=>{n.deltaY>0?i.value-=k.value:i.value+=k.value},50)()}return Ae(()=>{se()}),Me(()=>{M(),clearTimeout(C)}),p({reset:he}),(n,s)=>(F(),$("div",{ref:"wrap"+f.classOption.key},[R.value?(F(),$("div",{key:0,style:b(de.value),class:ie(ue.value),onClick:ve},[Y(n.$slots,"left-switch")],6)):le("",!0),R.value?(F(),$("div",{key:1,style:b(pe.value),class:ie(fe.value),onClick:we},[Y(n.$slots,"right-switch")],6)):le("",!0),w("div",{ref:"realBox"+f.classOption.key,style:b(me.value),onMouseenter:be,onMouseleave:_e,onTouchstartPassive:ye,onTouchmovePassive:ge,onTouchend:Se,onMousewheelPassive:xe},[w("div",{ref:"slotList"+f.classOption.key,style:b(ee.value)},[Y(n.$slots,"default")],4),w("div",{style:b(ee.value),innerHTML:j.value},null,12,Ne)],36)],512))}}),Ve=$e(Ye),Ue=l=>(Ee("data-v-ff2abade"),l=l(),Re(),l),Xe={class:"card-header"},Ze=Ue(()=>w("span",{class:"font-medium"},"无缝滚动",-1)),Ge={class:"item"},Je=["textContent"],Ke=ae({name:"SeamlessScroll",__name:"seamless-scroll",setup(l){const p=y(),u=y([{title:"无缝滚动第一行无缝滚动第一行！！！！！！！！！！"},{title:"无缝滚动第二行无缝滚动第二行！！！！！！！！！！"},{title:"无缝滚动第三行无缝滚动第三行！！！！！！！！！！"},{title:"无缝滚动第四行无缝滚动第四行！！！！！！！！！！"},{title:"无缝滚动第五行无缝滚动第五行！！！！！！！！！！"},{title:"无缝滚动第六行无缝滚动第六行！！！！！！！！！！"},{title:"无缝滚动第七行无缝滚动第七行！！！！！！！！！！"},{title:"无缝滚动第八行无缝滚动第八行！！！！！！！！！！"},{title:"无缝滚动第九行无缝滚动第九行！！！！！！！！！！"}]),d=He({direction:"top"});function m(f){e(p).reset(),e(d).direction=f}return(f,r)=>{const t=H("el-button"),i=H("el-link"),h=H("el-card"),x=H("el-space");return F(),Pe(x,{wrap:""},{default:S(()=>[A(h,{class:"box-card",shadow:"never"},{header:S(()=>[w("div",Xe,[Ze,A(t,{class:"button",link:"",type:"primary",onClick:r[0]||(r[0]=v=>m("top"))},{default:S(()=>[w("span",{style:b({color:d.direction==="top"?"red":""})}," 向上滚动 ",4)]),_:1}),A(t,{class:"button",link:"",type:"primary",onClick:r[1]||(r[1]=v=>m("bottom"))},{default:S(()=>[w("span",{style:b({color:d.direction==="bottom"?"red":""})}," 向下滚动 ",4)]),_:1}),A(t,{class:"button",link:"",type:"primary",onClick:r[2]||(r[2]=v=>m("left"))},{default:S(()=>[w("span",{style:b({color:d.direction==="left"?"red":""})}," 向左滚动 ",4)]),_:1}),A(t,{class:"button",link:"",type:"primary",onClick:r[3]||(r[3]=v=>m("right"))},{default:S(()=>[w("span",{style:b({color:d.direction==="right"?"red":""})}," 向右滚动 ",4)]),_:1})]),A(i,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/seamless-scroll.vue",target:"_blank"},{default:S(()=>[je(" 代码位置 src/views/components/seamless-scroll.vue ")]),_:1})]),default:S(()=>[A(e(Ve),{ref_key:"scroll",ref:p,data:u.value,"class-option":d,class:"warp"},{default:S(()=>[w("ul",Ge,[(F(!0),$(Be,null,De(u.value,(v,_)=>(F(),$("li",{key:_},[w("span",{class:"title",textContent:qe(v.title)},null,8,Je)]))),128))])]),_:1},8,["data","class-option"])]),_:1})]),_:1})}}}),et=We(Ke,[["__scopeId","data-v-ff2abade"]]);export{et as default};
