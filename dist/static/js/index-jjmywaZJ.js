var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&p(n,t,e[t]);if(i)for(var t of i(e))x.call(e,t)&&p(n,t,e[t]);return n};import{d as v,da as y,a as c,m as C,d3 as g,b,w as P,a6 as R,q as T,N as _,e as M,f as S,S as $,Z as k}from"./index-CiYMlfUr.js";const w=v({name:"ReText",__name:"index",props:{lineClamp:{type:[String,Number]},tippyProps:{type:Object,default:()=>({})}},setup(n){const e=n,t=y(),l=c(),a=c(),u=s=>e.lineClamp?s.scrollHeight>s.clientHeight:s.scrollWidth>s.clientWidth,r=()=>o({content:_(t.content||t.default)},e.tippyProps);function f(s){u(s.target)?(a.value.setProps(r()),a.value.enable()):a.value.disable()}return C(()=>{var s;a.value=g((s=l.value)==null?void 0:s.$el,r())}),(s,H)=>{const d=M("el-text");return S(),b(d,R(o({truncated:!n.lineClamp,lineClamp:n.lineClamp},s.$attrs),{ref_key:"textRef",ref:l,onMouseover:T(f,["self"])}),{default:P(()=>[$(s.$slots,"default")]),_:3},16)}}}),W=k(w);export{W as R};
