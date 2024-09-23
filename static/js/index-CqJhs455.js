import{d as ou,a,ad as f,b as iu,w as t,e as d,ae as ru,f as du,g as k,h as n,i as e,u as D,af as i,W as su,ag as R,F as b,L as v,J as s,ah as m,ai as au}from"./index-yvJsfBgz.js";import{_ as fu}from"./formPrimitive.vue_vue_type_script_setup_true_lang-6oNv6hz4.js";import{_ as p}from"./form.vue_vue_type_script_setup_true_lang-DB0LEZ-j.js";const Cu={class:"card-header"},Fu={class:"font-medium"},ku=ou({name:"DialogPage",__name:"index",setup(Bu){const g=ru();function w(){i({title:"基础用法",contentRenderer:()=>e("p",null,[n("弹框内容-基础用法")])})}function $(){i({title:"可拖拽",draggable:!0,contentRenderer:()=>v("p","弹框内容-可拖拽")})}function x(){i({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function y(){i({title:"全屏按钮和全屏事件",fullscreenIcon:!0,fullscreenCallBack:({options:o,index:u})=>s(o.fullscreen?"全屏":"非全屏"),contentRenderer:()=>e("p",null,[n("弹框内容-全屏按钮和全屏事件")])})}function I(){i({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[n("弹框内容-无背景遮罩层")])})}function P(){i({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[n("弹框内容-自定义弹出位置")])})}const S=su(()=>i({title:"延时2秒打开弹框",openDelay:1400,contentRenderer:()=>e("p",null,[n("弹框内容-延时2秒打开弹框")])}),600);function O(){i({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[n("弹框内容-延时2秒关闭弹框")])})}function T(){i({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[n("弹框内容-不显示右上角关闭按钮图标")])})}function N(){i({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[n("弹框内容-禁止通过键盘ESC关闭")])})}function z(){i({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[n("弹框内容-禁止通过点击modal关闭")])})}function L(){i({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[n("弹框内容-隐藏底部取消、确定按钮")])})}function H(){i({title:"自定义头部",showClose:!1,headerRenderer:({close:o,titleId:u,titleClass:r})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:u,class:r},[n("自定义头部")]),e(d("el-button"),{type:"danger",onClick:o},{default:()=>[n("关闭")]})]),contentRenderer:()=>e("p",null,[n("弹框内容-自定义头部")])})}function M(){i({title:"自定义底部",footerRenderer:({options:o,index:u})=>e(d("el-button"),{onClick:()=>m(o,u)},{default:()=>[o.title,n("-"),u]}),contentRenderer:()=>e("p",null,[n("弹框内容-自定义底部")])})}function V(){i({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:o,index:u},button:r})=>{m(o,u)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:o,index:u},button:r})=>{m(o,u)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:o,index:u},button:r})=>{m(o,u)}}],contentRenderer:()=>e("p",null,[n("弹框内容-自定义底部按钮")])})}function U(){i({title:"打开后的回调",open:({options:o,index:u})=>s({options:o,index:u}),contentRenderer:()=>e("p",null,[n("弹框内容-打开后的回调")])})}function W(){i({title:"关闭后的回调",closeCallBack:({options:o,index:u,args:r})=>{let l="";(r==null?void 0:r.command)==="cancel"?l="您点击了取消按钮":(r==null?void 0:r.command)==="sure"?l="您点击了确定按钮":l="您点击了右上角关闭按钮或空白页或按下了esc键",s(l)},contentRenderer:()=>e("p",null,[n("弹框内容-关闭后的回调")])})}function j(){i({title:"嵌套的弹框",contentRenderer:({index:o})=>e(d("el-button"),{onClick:()=>i({title:`第${o+1}个子弹框`,width:"40%",contentRenderer:({index:u})=>e(d("el-button"),{onClick:()=>i({title:`第${u+1}个子弹框`,width:"30%",contentRenderer:()=>e(b,null,[e(d("el-button"),{round:!0,onClick:()=>au()},{default:()=>[n("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[n("点击打开第"),u+1,n("个子弹框")]})})},{default:()=>[n("点击打开第"),o+1,n("个子弹框")]})})}function J(){const o=a(1);i({title:`第${o.value}页`,contentRenderer:()=>e(b,null,[e(d("el-button"),{disabled:!(o.value>1),onClick:()=>{o.value-=1,R(`第${o.value}页`)}},{default:()=>[n("上一页")]}),e(d("el-button"),{onClick:()=>{o.value+=1,R(`第${o.value}页`)}},{default:()=>[n("下一页")]})])})}function _(){i({width:"30%",title:"popconfirm确认框示例",popconfirm:{title:"是否确认修改当前数据"},contentRenderer:()=>e("p",null,[n("点击右下方确定按钮看看效果吧")])})}function q(){i({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>p,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:o,args:u})=>{const{formInline:r}=o.props,l=`姓名：${r.user} 城市：${r.region}`;(u==null?void 0:u.command)==="cancel"?s(`您点击了取消按钮，当前表单数据为 ${l}`):(u==null?void 0:u.command)==="sure"?s(`您点击了确定按钮，当前表单数据为 ${l}`):s(`您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 ${l}`)}})}const C=a({user:"菜虚鲲",region:"浙江"}),G=f(C.value);function K(){i({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>v(p,{formInline:C.value}),closeCallBack:()=>{s(`当前表单数据为 姓名：${C.value.user} 城市：${C.value.region}`),C.value=f(G)}})}const F=a({user:"菜虚鲲",region:"浙江"}),Q=f(F.value);function X(){i({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(p,{formInline:F.value}),closeCallBack:()=>{s(`当前表单数据为 姓名：${F.value.user} 城市：${F.value.region}`),F.value=f(Q)}})}const B=a({user:"菜虚鲲",region:"浙江"}),Y=f(B.value);function Z(){i({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(p,{formInline:B.value},null),closeCallBack:()=>{s(`当前表单数据为 姓名：${B.value.user} 城市：${B.value.region}`),B.value=f(Y)}})}const c=a("Hello World"),h=a(c.value);function uu(){i({width:"30%",title:"子组件 prop 为 primitive 类型 demo",contentRenderer:()=>v(fu,{data:c.value,"onUpdate:data":o=>c.value=o}),closeCallBack:()=>{s(`当前表单内容：${c.value}`),c.value=h.value}})}function eu(){i({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[n("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(o,{options:u,index:r})=>{}})}function nu(){i({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[n("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）")]),beforeSure:(o,{options:u,index:r})=>{}})}function lu(){i({sureBtnLoading:!0,title:"点击底部确定按钮可开启按钮动画",contentRenderer:()=>e("p",null,[n("弹框内容-点击底部确定按钮可开启按钮动画")]),beforeSure:(o,{closeLoading:u})=>{setTimeout(()=>o(),800)}})}return(o,u)=>{const r=d("el-link"),l=d("el-button"),E=d("el-space"),A=d("el-divider"),tu=d("el-card");return du(),iu(tu,{shadow:"never"},{header:t(()=>[k("div",Cu,[k("span",Fu,[u[2]||(u[2]=n(" 二次封装 Element Plus 的 ")),e(r,{href:"https://element-plus.org/zh-CN/component/dialog.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:t(()=>u[1]||(u[1]=[n(" Dialog ")])),_:1}),u[3]||(u[3]=n(" ，采用函数式调用弹框组件（更多操作实例请参考 ")),k("span",{class:"cursor-pointer text-primary",onClick:u[0]||(u[0]=cu=>D(g).push({name:"SystemDept"}))}," 系统管理页面 "),u[4]||(u[4]=n(" ） "))])]),e(r,{href:"https://github.com/pure-admin/vue-pure-admin/tree/main/src/views/components/dialog",target:"_blank"},{default:t(()=>u[5]||(u[5]=[n(" 代码位置 src/views/components/dialog ")])),_:1})]),default:t(()=>[e(E,{wrap:""},{default:t(()=>[e(l,{onClick:w},{default:t(()=>u[6]||(u[6]=[n(" 基础用法 ")])),_:1}),e(l,{onClick:$},{default:t(()=>u[7]||(u[7]=[n(" 可拖拽 ")])),_:1}),e(l,{onClick:x},{default:t(()=>u[8]||(u[8]=[n(" 全屏 ")])),_:1}),e(l,{onClick:y},{default:t(()=>u[9]||(u[9]=[n(" 全屏按钮和全屏事件 ")])),_:1}),e(l,{onClick:I},{default:t(()=>u[10]||(u[10]=[n(" 无背景遮罩层 ")])),_:1}),e(l,{onClick:P},{default:t(()=>u[11]||(u[11]=[n(" 自定义弹出位置 ")])),_:1}),e(l,{onClick:D(S)},{default:t(()=>u[12]||(u[12]=[n(" 延时2秒打开弹框 ")])),_:1},8,["onClick"]),e(l,{onClick:O},{default:t(()=>u[13]||(u[13]=[n(" 延时2秒关闭弹框 ")])),_:1}),e(l,{onClick:T},{default:t(()=>u[14]||(u[14]=[n(" 不显示右上角关闭按钮图标 ")])),_:1}),e(l,{onClick:N},{default:t(()=>u[15]||(u[15]=[n(" 禁止通过键盘ESC关闭 ")])),_:1}),e(l,{onClick:z},{default:t(()=>u[16]||(u[16]=[n(" 禁止通过点击modal关闭 ")])),_:1}),e(l,{onClick:L},{default:t(()=>u[17]||(u[17]=[n(" 隐藏底部取消、确定按钮 ")])),_:1}),e(l,{onClick:H},{default:t(()=>u[18]||(u[18]=[n(" 自定义头部 ")])),_:1}),e(l,{onClick:M},{default:t(()=>u[19]||(u[19]=[n(" 自定义底部 ")])),_:1}),e(l,{onClick:V},{default:t(()=>u[20]||(u[20]=[n(" 自定义底部按钮 ")])),_:1}),e(l,{onClick:U},{default:t(()=>u[21]||(u[21]=[n(" 打开后的回调 ")])),_:1}),e(l,{onClick:W},{default:t(()=>u[22]||(u[22]=[n(" 关闭后的回调 ")])),_:1}),e(l,{onClick:j},{default:t(()=>u[23]||(u[23]=[n(" 嵌套的弹框 ")])),_:1}),e(l,{onClick:J},{default:t(()=>u[24]||(u[24]=[n(" 更改弹框自身属性值 ")])),_:1}),e(l,{onClick:_},{default:t(()=>u[25]||(u[25]=[n("popconfirm确认框")])),_:1})]),_:1}),e(A),e(E,{wrap:""},{default:t(()=>[e(l,{onClick:q},{default:t(()=>u[26]||(u[26]=[n(" 结合Form表单（第一种方式） ")])),_:1}),e(l,{onClick:K},{default:t(()=>u[27]||(u[27]=[n(" 结合Form表单（第二种方式） ")])),_:1}),e(l,{onClick:X},{default:t(()=>u[28]||(u[28]=[n(" 结合Form表单（第三种方式） ")])),_:1}),e(l,{onClick:Z},{default:t(()=>u[29]||(u[29]=[n(" 结合Form表单（第四种方式） ")])),_:1}),e(l,{onClick:uu},{default:t(()=>u[30]||(u[30]=[n(" 子组件 prop 为 primitive 类型 ")])),_:1})]),_:1}),e(A),e(E,{wrap:""},{default:t(()=>[e(l,{onClick:eu},{default:t(()=>u[31]||(u[31]=[n(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")])),_:1}),e(l,{onClick:nu},{default:t(()=>u[32]||(u[32]=[n(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口） ")])),_:1}),e(l,{onClick:lu},{default:t(()=>u[33]||(u[33]=[n(" 点击底部确定按钮可开启按钮动画 ")])),_:1})]),_:1})]),_:1})}}});export{ku as default};
