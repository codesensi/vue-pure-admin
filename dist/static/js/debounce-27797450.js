import{m}from"./message-ac5811da.js";import{d as h,c as d,k as f,g as t,w as e,f as p,u as c,h as a,i as o,N as _,S as k}from"./index-0dd8d5e4.js";const C=o("div",null,"防抖：debounce",-1),b=o("div",{class:"mb-5"}," 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。 ",-1),v=o("div",null,"节流：throttle",-1),w=o("div",{class:"mb-5"}," 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。 ",-1),D=h({name:"Debounce",__name:"debounce",setup(x){const n=()=>m("恭喜你，这是一条成功消息",{type:"success"}),i=_(n,1e3,!0),r=_(n,1e3),u=k(n);return(N,B)=>{const s=d("el-button"),l=d("el-card");return p(),f("div",null,[t(l,{class:"mb-5",shadow:"never"},{header:e(()=>[C]),default:e(()=>[b,t(s,{onClick:c(i)},{default:e(()=>[a(" 连续点击我，只会执行第一次点击事件，立即执行 ")]),_:1},8,["onClick"]),t(s,{onClick:c(r)},{default:e(()=>[a(" 连续点击我，只会执行最后一次点击事件，延后执行 ")]),_:1},8,["onClick"])]),_:1}),t(l,{shadow:"never"},{header:e(()=>[v]),default:e(()=>[w,t(s,{onClick:c(u)},{default:e(()=>[a(" 连续点击我，每一秒只会执行一次点击事件 ")]),_:1},8,["onClick"])]),_:1})])}}});export{D as default};
