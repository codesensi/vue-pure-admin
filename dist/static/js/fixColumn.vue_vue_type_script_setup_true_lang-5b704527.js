import{a as e}from"./data-7bb4b374.js";import{d as m,c as n,f as u,e as _,w as a,g as i,h as r,u as t}from"./index-0dd8d5e4.js";const x=m({__name:"fixColumn",props:{height:{default:null}},setup(p){const o=p,s=[{label:"日期",prop:"date",width:"260",fixed:!0},{label:"姓名",prop:"name",width:"260"},{label:"地区",prop:"state",width:"260"},{label:"城市",prop:"city",width:"260"},{label:"地址",prop:"address",width:"260"},{label:"邮编",prop:"post-code",width:"260"},{label:"操作",width:"120",fixed:"right",slot:"operation"}];function f(c){}return(c,b)=>{const l=n("el-button"),d=n("pure-table");return u(),_(d,{data:o.height?t(e).concat(t(e)).concat(t(e)):t(e),columns:s,height:o.height},{operation:a(({row:h})=>[i(l,{link:"",type:"primary",size:"small",onClick:w=>void 0},{default:a(()=>[r(" Detail ")]),_:2},1032,["onClick"]),i(l,{link:"",type:"primary",size:"small"},{default:a(()=>[r("Edit")]),_:1})]),_:1},8,["data","height"])}}});export{x as _};
