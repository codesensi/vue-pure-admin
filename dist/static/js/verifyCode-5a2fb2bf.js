import{a7 as a,G as o,b4 as s,bk as p,bt as u,r as f,J as C}from"./index-0dd8d5e4.js";const d=/^\d{6}$/,v=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,$=a({password:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.passwordReg")))):v.test(r)?e():e(new Error(o(s("login.passwordRuleReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.verifyCodeReg")))):p().verifyCode!==r?e(new Error(o(s("login.verifyCodeCorrectReg")))):e()},trigger:"blur"}]}),h=a({phone:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.phoneReg")))):u(r)?e():e(new Error(o(s("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.verifyCodeReg")))):d.test(r)?e():e(new Error(o(s("login.verifyCodeSixReg"))))},trigger:"blur"}]}),I=a({phone:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.phoneReg")))):u(r)?e():e(new Error(o(s("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.verifyCodeReg")))):d.test(r)?e():e(new Error(o(s("login.verifyCodeSixReg"))))},trigger:"blur"}],password:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.passwordReg")))):v.test(r)?e():e(new Error(o(s("login.passwordRuleReg"))))},trigger:"blur"}]}),l=f(!1),t=f(null),g=f(""),A=()=>({isDisabled:l,timer:t,text:g,start:async(e,w,n=60)=>{if(!e)return;const R=C(n,!0);await e.validateField(w,E=>{E&&(clearInterval(t.value),t.value=setInterval(()=>{n>0?(g.value=`${n}`,l.value=!0,n-=1):(g.value="",l.value=!1,clearInterval(t.value),n=R)},1e3))})},end:()=>{g.value="",l.value=!1,clearInterval(t.value)}});export{I as a,$ as l,h as p,A as u};
