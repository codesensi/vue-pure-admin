import{m as a}from"./message-ac5811da.js";import{d as Q,r as k,K as d,c as r,e as U,w as l,f as W,i as p,h as u,g as e,a0 as o,L as _,a1 as f,F as X,a2 as Y}from"./index-0dd8d5e4.js";import{_ as B}from"./form.vue_vue_type_script_setup_true_lang-e871bdbd.js";const Z={class:"card-header"},ee={class:"font-medium"},ie=Q({name:"Dialog",__name:"index",setup(ue){function D(){o({title:"基本使用",contentRenderer:()=>e("p",null,[u("弹框内容-基本使用")])})}function R(){o({title:"可拖拽",draggable:!0,contentRenderer:()=>_("p","弹框内容-可拖拽")})}function h(){o({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function A(){o({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-无背景遮罩层")])})}function b(){o({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[u("弹框内容-自定义弹出位置")])})}function v(){o({title:"延时2秒打开弹框",openDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒打开弹框")])})}function w(){o({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒关闭弹框")])})}function g(){o({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[u("弹框内容-不显示右上角关闭按钮图标")])})}function $(){o({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过键盘ESC关闭")])})}function x(){o({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过点击modal关闭")])})}function y(){o({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[u("弹框内容-隐藏底部取消、确定按钮")])})}function I(){o({title:"自定义头部",showClose:!1,headerRenderer:({close:i,titleId:t,titleClass:c})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:t,class:c},[u("自定义头部")]),e(r("el-button"),{type:"danger",onClick:i},{default:()=>[u("关闭")]})]),contentRenderer:()=>e("p",null,[u("弹框内容-自定义头部")])})}function S(){o({title:"自定义底部",footerRenderer:({options:i,index:t})=>e(r("el-button"),{onClick:()=>f(i,t)},{default:()=>[i.title,u("-"),t]}),contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部")])})}function O(){o({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:i,index:t},button:c})=>{f(i,t)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:i,index:t},button:c})=>{f(i,t)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:i,index:t},button:c})=>{f(i,t)}}],contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部按钮")])})}function N(){o({title:"打开后的回调",open:({options:i,index:t})=>a({options:i,index:t}),contentRenderer:()=>e("p",null,[u("弹框内容-打开后的回调")])})}function T(){o({title:"关闭后的回调",closeCallBack:({options:i,index:t,args:c})=>{let n="";(c==null?void 0:c.command)==="cancel"?n="您点击了取消按钮":(c==null?void 0:c.command)==="sure"?n="您点击了确定按钮":n="您点击了右上角关闭按钮或者空白页",a(n)},contentRenderer:()=>e("p",null,[u("弹框内容-关闭后的回调")])})}function z(){o({title:"嵌套的弹框",contentRenderer:({index:i})=>e(r("el-button"),{onClick:()=>o({title:`第${i+1}个子弹框`,width:"40%",contentRenderer:({index:t})=>e(r("el-button"),{onClick:()=>o({title:`第${t+1}个子弹框`,width:"30%",contentRenderer:()=>e(X,null,[e(r("el-button"),{round:!0,onClick:()=>Y()},{default:()=>[u("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[u("点击打开第"),t+1,u("个子弹框")]})})},{default:()=>[u("点击打开第"),i+1,u("个子弹框")]})})}function M(){o({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>B,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:i,args:t})=>{const{formInline:c}=i.props,n=`姓名：${c.user} 城市：${c.region}`;(t==null?void 0:t.command)==="cancel"?a(`您点击了取消按钮，当前表单数据为 ${n}`):(t==null?void 0:t.command)==="sure"?a(`您点击了确定按钮，当前表单数据为 ${n}`):a(`您点击了右上角关闭按钮或者空白页，当前表单数据为 ${n}`)}})}const s=k({user:"菜虚鲲",region:"浙江"}),V=d(s.value);function H(){o({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>_(B,{formInline:s.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${s.value.user} 城市：${s.value.region}`),s.value=d(V)}})}const C=k({user:"菜虚鲲",region:"浙江"}),K=d(C.value);function j(){o({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(B,{formInline:C.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${C.value.user} 城市：${C.value.region}`),C.value=d(K)}})}const F=k({user:"菜虚鲲",region:"浙江"}),L=d(F.value);function P(){o({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(B,{formInline:F.value},null),closeCallBack:()=>{a(`当前表单数据为 姓名：${F.value.user} 城市：${F.value.region}`),F.value=d(L)}})}function q(){o({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(i,{options:t,index:c})=>{}})}function G(){o({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口）")]),beforeSure:(i,{options:t,index:c})=>{}})}return(i,t)=>{const c=r("el-link"),n=r("el-button"),E=r("el-space"),m=r("el-divider"),J=r("el-card");return W(),U(J,{shadow:"never"},{header:l(()=>[p("div",Z,[p("span",ee,[u(" 二次封装 element-plus 的 "),e(c,{href:"https://element-plus.org/zh-CN/component/dialog.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:l(()=>[u(" Dialog ")]),_:1}),u(" ，采用函数式调用弹框组件（更多操作实例请参考 "),p("span",{class:"cursor-pointer text-primary",onClick:t[0]||(t[0]=ne=>i.$router.push({name:"Dept"}))},"系统管理页面"),u(" ） ")])])]),default:l(()=>[e(E,{wrap:""},{default:l(()=>[e(n,{onClick:D},{default:l(()=>[u(" 基本使用 ")]),_:1}),e(n,{onClick:R},{default:l(()=>[u(" 可拖拽 ")]),_:1}),e(n,{onClick:h},{default:l(()=>[u(" 全屏 ")]),_:1}),e(n,{onClick:A},{default:l(()=>[u(" 无背景遮罩层 ")]),_:1}),e(n,{onClick:b},{default:l(()=>[u(" 自定义弹出位置 ")]),_:1}),e(n,{onClick:v},{default:l(()=>[u(" 延时2秒打开弹框 ")]),_:1}),e(n,{onClick:w},{default:l(()=>[u(" 延时2秒关闭弹框 ")]),_:1}),e(n,{onClick:g},{default:l(()=>[u(" 不显示右上角关闭按钮图标 ")]),_:1}),e(n,{onClick:$},{default:l(()=>[u(" 禁止通过键盘ESC关闭 ")]),_:1}),e(n,{onClick:x},{default:l(()=>[u(" 禁止通过点击modal关闭 ")]),_:1}),e(n,{onClick:y},{default:l(()=>[u(" 隐藏底部取消、确定按钮 ")]),_:1}),e(n,{onClick:I},{default:l(()=>[u(" 自定义头部 ")]),_:1}),e(n,{onClick:S},{default:l(()=>[u(" 自定义底部 ")]),_:1}),e(n,{onClick:O},{default:l(()=>[u(" 自定义底部按钮 ")]),_:1}),e(n,{onClick:N},{default:l(()=>[u(" 打开后的回调 ")]),_:1}),e(n,{onClick:T},{default:l(()=>[u(" 关闭后的回调 ")]),_:1}),e(n,{onClick:z},{default:l(()=>[u(" 嵌套的弹框 ")]),_:1})]),_:1}),e(m),e(E,{wrap:""},{default:l(()=>[e(n,{onClick:M},{default:l(()=>[u(" 结合Form表单（第一种方式） ")]),_:1}),e(n,{onClick:H},{default:l(()=>[u(" 结合Form表单（第二种方式） ")]),_:1}),e(n,{onClick:j},{default:l(()=>[u(" 结合Form表单（第三种方式） ")]),_:1}),e(n,{onClick:P},{default:l(()=>[u(" 结合Form表单（第四种方式） ")]),_:1})]),_:1}),e(m),e(E,{wrap:""},{default:l(()=>[e(n,{onClick:q},{default:l(()=>[u(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")]),_:1}),e(n,{onClick:G},{default:l(()=>[u(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口） ")]),_:1})]),_:1})]),_:1})}}});export{ie as default};
