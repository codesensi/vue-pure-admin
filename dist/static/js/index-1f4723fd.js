import{t as I}from"./index-95b65695.js";import{d as ae,r as v,x as r,aj as Ae,ak as Me,k as O,A as g,ab as se,al as N,ae as le,i as h,u as e,n as Fe,am as $e,f as $,R as Oe,a7 as He,c as Y,e as Pe,w as T,g as F,l as je,C as qe,F as De,p as Re,q as Be,_ as Ee}from"./index-0dd8d5e4.js";const We=()=>{window.cancelAnimationFrame=(()=>window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(l){return window.clearTimeout(l)})(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l){return window.setTimeout(l,1e3/60)}}()},ze=(l,d)=>{if(l===d)return!0;if(l.length!==d.length)return!1;for(let a=0;a<l.length;++a)if(l[a]!==d[a])return!1;return!0};function re(){Array.isArray||(Array.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]"});let l,d,a,u,m,S,t=1,n=arguments[0]||{},p=!1,_=arguments.length;if(typeof n=="boolean"&&(p=n,n=arguments[1]||{},t++),typeof n!="object"&&typeof n!="function"&&(n={}),t===_)return n;for(;t<_;t++)if((d=arguments[t])!=null)for(l in d)a=n[l],u=d[l],m=Array.isArray(u),p&&u&&(typeof u=="object"||m)?(m?(m=!1,S=a&&Array.isArray(a)?a:[]):S=a&&typeof a=="object"?a:{},n[l]=re(p,S,u)):u!==void 0&&(n[l]=u);return n}const Le=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:We,arrayEqual:ze,copyObj:re},Symbol.toStringTag,{value:"Module"})),Ie=["innerHTML"],Ne=ae({name:"ReSeamlessScroll",__name:"index",props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(l,{expose:d,emit:a}){const u=l,{animationFrame:m,copyObj:S}=Le;m();const t=v(0),n=v(0),p=v(0),_=v(0),f=v(0),b=v(0),H=v(0),P=v("");let C=null,U=null,j=null,V=null,X=null,q=!1,D="ease-in";const{classOption:w}=u;w.key===void 0&&(w.key=0);const G=I(`wrap${w.key}`,null),J=I(`slotList${w.key}`,null),K=I(`realBox${w.key}`,null),Q=r(()=>e(t)<0),Z=r(()=>Math.abs(e(t))<e(b)-e(f)),ce=r(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),i=r(()=>S({},e(ce),w)),ue=r(()=>e(Q)?"":e(i).switchDisabledClass),fe=r(()=>e(Z)?"":e(i).switchDisabledClass),de=r(()=>({position:"absolute",margin:`${e(_)/2}px 0 0 -${e(i).switchOffset}px`,transform:"translate(-100%,-50%)"})),pe=r(()=>({position:"absolute",margin:`${e(_)/2}px 0 0 ${e(f)+e(i).switchOffset}px`,transform:"translateY(-50%)"})),R=r(()=>e(i).direction!=="bottom"&&e(i).direction!=="top"),ee=r(()=>e(R)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),me=r(()=>({transform:`translate(${e(t)}px,${e(n)}px)`,transition:`all ${D} ${e(p)}ms`,overflow:"hidden"})),B=r(()=>e(i).navigation),E=r(()=>e(B)?!1:e(i).autoPlay),te=r(()=>u.data.length>=e(i).limitMoveNum),ne=r(()=>e(i).hoverStop&&e(E)&&e(te)),W=r(()=>e(i).openTouch),oe=r(()=>e(i).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),z=r(()=>e(i).singleWidth*e(oe)),L=r(()=>e(i).singleHeight*e(oe)),k=r(()=>{let o;const s=e(i).step;if(e(R)?o=e(z):o=e(L),o>0&&o%s>0)throw"如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";return s});function he(){t.value=0,n.value=0,A(),ie()}function ve(){if(e(Q)){if(Math.abs(e(t))<e(i).switchSingleStep){t.value=0;return}t.value+=e(i).switchSingleStep}}function we(){if(e(Z)){if(e(b)-e(f)+e(t)<e(i).switchSingleStep){t.value=e(f)-e(b);return}t.value-=e(i).switchSingleStep}}function A(){cancelAnimationFrame(U||"")}function ye(o){if(!e(W))return;let s;const c=o.targetTouches[0],{waitTime:y,singleHeight:M,singleWidth:Ce}=e(i);j={x:c.pageX,y:c.pageY},V=e(n),X=e(t),M&&Ce?(s&&clearTimeout(s),s=setTimeout(()=>{A()},y+20)):A()}function ge(o){if(!e(W)||o.targetTouches.length>1||o.scale&&o.scale!==1)return;const s=o.targetTouches[0],{direction:c}=e(i),y={x:s.pageX-j.x,y:s.pageY-j.y};o.preventDefault();const M=Math.abs(y.x)<Math.abs(y.y)?1:0;M===1&&c==="bottom"||M===1&&c==="top"?n.value=V+y.y:(M===0&&c==="left"||M===0&&c==="right")&&(t.value=X+y.x)}function Se(){if(!e(W))return;let o;const s=e(i).direction;if(p.value=50,s==="top")e(n)>0&&(n.value=0);else if(s==="bottom"){const c=e(H)/2*-1;e(n)<c&&(n.value=c)}else if(s==="left")e(t)>0&&(t.value=0);else if(s==="right"){const c=e(b)*-1;e(t)<c&&(t.value=c)}o&&clearTimeout(o),o=setTimeout(()=>{p.value=0,x()},e(p))}function _e(){e(ne)&&xe()}function be(){e(ne)&&ke()}function x(){q||(U=requestAnimationFrame(function(){const o=e(H)/2,s=e(b)/2,{direction:c,waitTime:y}=e(i);c==="top"?(Math.abs(e(n))>=o&&(a("scrollEnd"),n.value=0),n.value-=k.value):c==="bottom"?(e(n)>=0&&(a("scrollEnd"),n.value=o*-1),n.value+=k.value):c==="left"?(Math.abs(e(t))>=s&&(a("scrollEnd"),t.value=0),t.value-=k.value):c==="right"&&(e(t)>=0&&(a("scrollEnd"),t.value=s*-1),t.value+=k.value),C&&clearTimeout(C),e(L)?Math.abs(e(n))%e(L)<e(k)?C=setTimeout(()=>{x()},y):x():e(z)&&Math.abs(e(t))%e(z)<e(k)?C=setTimeout(()=>{x()},y):x()}))}function ie(){Fe(()=>{const{switchDelay:o}=e(i);if(P.value="",e(R)){_.value=e(G).offsetHeight,f.value=e(G).offsetWidth;let s=e(J).offsetWidth;e(E)&&(s=s*2+1),e(K).style.width=s+"px",b.value=s}if(e(E))D="ease-in",p.value=0;else{D="linear",p.value=o;return}e(te)?(P.value=e(J).innerHTML,setTimeout(()=>{var s;H.value=(s=e(K))==null?void 0:s.offsetHeight,x()},0)):(A(),n.value=t.value=0)})}function ke(){q=!1,x()}function xe(){q=!0,C&&clearTimeout(C),A()}function Te(o){e(i).direction==="left"||e(i).direction==="right"||$e(()=>{o.deltaY>0?n.value-=k.value:n.value+=k.value},50)()}return Ae(()=>{ie()}),Me(()=>{A(),clearTimeout(C)}),d({reset:he}),(o,s)=>($(),O("div",{ref:"wrap"+e(w).key},[B.value?($(),O("div",{key:0,style:g(de.value),class:se(ue.value),onClick:ve},[N(o.$slots,"left-switch")],6)):le("",!0),B.value?($(),O("div",{key:1,style:g(pe.value),class:se(fe.value),onClick:we},[N(o.$slots,"right-switch")],6)):le("",!0),h("div",{ref:"realBox"+e(w).key,style:g(me.value),onMouseenter:_e,onMouseleave:be,onTouchstartPassive:ye,onTouchmovePassive:ge,onTouchend:Se,onMousewheelPassive:Te},[h("div",{ref:"slotList"+e(w).key,style:g(ee.value)},[N(o.$slots,"default")],4),h("div",{innerHTML:P.value,style:g(ee.value)},null,12,Ie)],36)],512))}}),Ye=Oe(Ne),Ue=l=>(Re("data-v-28c9d5d1"),l=l(),Be(),l),Ve={class:"card-header"},Xe=Ue(()=>h("span",null,"无缝滚动示例",-1)),Ge={class:"item"},Je=["textContent"],Ke=ae({name:"SeamlessScroll",__name:"index",setup(l){const d=v(),a=v([{title:"无缝滚动第一行无缝滚动第一行！！！！！！！！！！"},{title:"无缝滚动第二行无缝滚动第二行！！！！！！！！！！"},{title:"无缝滚动第三行无缝滚动第三行！！！！！！！！！！"},{title:"无缝滚动第四行无缝滚动第四行！！！！！！！！！！"},{title:"无缝滚动第五行无缝滚动第五行！！！！！！！！！！"},{title:"无缝滚动第六行无缝滚动第六行！！！！！！！！！！"},{title:"无缝滚动第七行无缝滚动第七行！！！！！！！！！！"},{title:"无缝滚动第八行无缝滚动第八行！！！！！！！！！！"},{title:"无缝滚动第九行无缝滚动第九行！！！！！！！！！！"}]),u=He({direction:"top"});function m(S){e(d).reset(),e(u).direction=S}return(S,t)=>{const n=Y("el-button"),p=Y("el-card"),_=Y("el-space");return $(),Pe(_,{wrap:""},{default:T(()=>[F(p,{class:"box-card",shadow:"never"},{header:T(()=>[h("div",Ve,[Xe,F(n,{class:"button",link:"",type:"primary",onClick:t[0]||(t[0]=f=>m("top"))},{default:T(()=>[h("span",{style:g({color:u.direction==="top"?"red":""})}," 向上滚动 ",4)]),_:1}),F(n,{class:"button",link:"",type:"primary",onClick:t[1]||(t[1]=f=>m("bottom"))},{default:T(()=>[h("span",{style:g({color:u.direction==="bottom"?"red":""})}," 向下滚动 ",4)]),_:1}),F(n,{class:"button",link:"",type:"primary",onClick:t[2]||(t[2]=f=>m("left"))},{default:T(()=>[h("span",{style:g({color:u.direction==="left"?"red":""})}," 向左滚动 ",4)]),_:1}),F(n,{class:"button",link:"",type:"primary",onClick:t[3]||(t[3]=f=>m("right"))},{default:T(()=>[h("span",{style:g({color:u.direction==="right"?"red":""})}," 向右滚动 ",4)]),_:1})])]),default:T(()=>[F(e(Ye),{ref_key:"scroll",ref:d,data:a.value,"class-option":u,class:"warp"},{default:T(()=>[h("ul",Ge,[($(!0),O(De,null,je(a.value,(f,b)=>($(),O("li",{key:b},[h("span",{class:"title",textContent:qe(f.title)},null,8,Je)]))),128))])]),_:1},8,["data","class-option"])]),_:1})]),_:1})}}});const et=Ee(Ke,[["__scopeId","data-v-28c9d5d1"]]);export{et as default};
