import{d as P,a as I,ag as F,p as V,an as G,ao as Y,b,w as c,e as i,A as K,f as r,g as e,B as L,h as l,i as n,a3 as Q,t as N,k as j,u as d,v as W,q as X,j as B,T as ee,L as $,I as te,J as se,C as oe,D as ae,_ as ne}from"./index-CV7M57fm.js";import{S as le}from"./sortable.esm-CkCitmyH.js";import{_ as ie}from"./form.vue_vue_type_script_setup_true_lang-CuASwEkz.js";import{d as ce}from"./plus-C98eNXam.js";import"./mock-Bj2BxktM.js";const re="/vue-pure-admin/vue-pure-admin/static/jpg/1-CNu9tHLV.jpg",pe="/vue-pure-admin/vue-pure-admin/static/jpg/2-Dn7NyzRJ.jpg",de="/vue-pure-admin/vue-pure-admin/static/jpg/3-BNVYzMvF.jpg",ue={width:24,height:24,body:'<path fill="currentColor" d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9c-5.392 0-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3Zm0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19Zm0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"/>'},me={width:24,height:24,body:'<path fill="currentColor" d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3Zm1 2H6v12h12V8ZM9 4v2h6V4H9Z"/>'},u=h=>(oe("data-v-04dda22c"),h=h(),ae(),h),_e={class:"card-header"},ve=u(()=>e("p",{class:"mb-4"},[l(" 综合示例"),e("span",{class:"text-[14px]"},[l(" （ "),e("span",{class:"text-[red]"},"自动上传"),l(" 、拖拽上传、拖拽排序、设置请求头、上传进度、大图预览、多选文件、最大文件数量、文件类型限制、文件大小限制、删除文件） ")])],-1)),ge={key:0,class:"mt-[35%] m-auto"},he=u(()=>e("p",{class:"font-medium"},"文件上传中",-1)),fe=["onMouseenter"],xe=["src"],ye=["onClick"],be=["onClick"],we={title:"移除",class:"hover:text-[var(--el-color-danger)]"},ke={key:0,effect:"dark",round:"",size:"large",type:"info",class:"img-name"},Ce={class:"text-[#fff] dark:text-black"},Ie=u(()=>e("p",{class:"el-upload__tip"}," 可拖拽上传最多3张单个不超过2MB且格式为jpeg/png/gif的图片 ",-1)),je=u(()=>e("p",{class:"mb-4 mt-4"},[l(" 结合表单校验进行"),e("span",{class:"text-[red]"},"手动上传"),e("span",{class:"text-[14px]"}," （可先打开浏览器控制台找到Network，然后填写表单内容后点击点提交观察请求变化） ")],-1)),$e={class:"flex justify-between"},Se=u(()=>e("p",{class:"text-center"},"上传接口相关截图",-1)),ze={class:"flex flex-wrap"},Me={class:"text-[red] text-[12px] flex flex-auto items-center justify-end"},Ve=u(()=>e("span",{class:"font-bold text-[18x]"}," 请不要上传重要信息 ",-1)),Le=P({name:"PureUpload",__name:"index",setup(h){const o=I([]),E=F(),m=I(0),f=I(!1),U=V(()=>G(o.value,"url")),A=V(()=>Y(o.value,"name","size")),D=s=>new URL(Object.assign({"./imgs/1.jpg":re,"./imgs/2.jpg":pe,"./imgs/3.jpg":de})[`./imgs/${s}.jpg`],import.meta.url).href,S=Array.from({length:3}).map((s,t)=>D(t+1)),Z=s=>{if(!["image/jpeg","image/png","image/gif"].includes(s.type))return $("只能上传图片"),!1;if(s.size/1024/1024>2)return $("单个图片大小不能超过2MB"),!1},O=()=>{$("最多上传3张图片，请先删除在上传")},H=s=>{o.value.splice(o.value.indexOf(s),1)},J=s=>{m.value=o.value.findIndex(t=>t.uid===s.uid),f.value=!0},z=()=>document.querySelectorAll("#pure-upload-item"),R=s=>{var p,x,y;const t="el-upload-list",_=o.value.findIndex(v=>v.uid===s);(y=(x=(p=z())==null?void 0:p[_])==null?void 0:x.classList)==null||y.add(`${t}__item-actions`);const w=document.querySelector(`.${t}`);le.create(w,{handle:`.${t}__item`,onEnd:({newIndex:v,oldIndex:g})=>{const k=o.value[g];o.value.splice(g,1),o.value.splice(v,0,k),z().forEach(C=>{C.classList.remove(`${t}__item-actions`)})}})},T=()=>{[{name:"巴旦木.jpeg",type:"img"},{name:"恭喜发财.png",type:"img"},{name:"可爱动物.gif",type:"gif"},{name:"pure-upload.csv",type:"other"},{name:"pure-upload.txt",type:"other"}].forEach(s=>{te.get(`https://xiaoxian521.github.io/hyperlink/${s.type}/${s.name}`,{responseType:"blob"}).then(({data:t})=>{se(t,s.name)})})};return(s,t)=>{const _=i("el-link"),w=i("el-button"),p=i("IconifyIconOffline"),x=i("el-progress"),y=i("el-upload"),v=i("el-image-viewer"),g=i("el-divider"),k=i("el-image"),C=i("el-card"),q=K("tippy");return r(),b(C,{shadow:"never"},{header:c(()=>[e("div",_e,[L((r(),b(_,{href:"https://element-plus.org/zh-CN/component/upload.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:c(()=>[l(" 文件上传 ")]),_:1})),[[q,{content:"点击查看详细文档"}]])]),n(_,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/upload",target:"_blank"},{default:c(()=>[l(" 代码位置 src/views/components/upload ")]),_:1})]),default:c(()=>[n(w,{class:"mb-4",text:"",bg:"",onClick:T},{default:c(()=>[l(" 点击下载安全文件进行上传测试 ")]),_:1}),ve,L(e("p",{class:"mb-4"},N(A.value),513),[[Q,o.value.length>0]]),n(y,{"file-list":o.value,"onUpdate:fileList":t[0]||(t[0]=a=>o.value=a),drag:"",multiple:"",class:"pure-upload","list-type":"picture-card",accept:"image/jpeg,image/png,image/gif",action:"https://run.mocky.io/v3/3aa761d7-b0b3-4a03-96b3-6168d4f7467b",limit:3,headers:{Authorization:"eyJhbGciOiJIUzUxMiJ9.admin"},"on-exceed":O,"before-upload":Z},{file:c(({file:a})=>[a.status=="ready"||a.status=="uploading"?(r(),j("div",ge,[he,n(x,{class:"mt-2","stroke-width":2,"text-inside":!0,"show-text":!1,percentage:a.percentage},null,8,["percentage"])])):(r(),j("div",{key:1,onMouseenter:X(M=>R(a.uid),["stop"])},[e("img",{class:"el-upload-list__item-thumbnail select-none",src:a.url},null,8,xe),e("span",{id:"pure-upload-item",class:W(["el-upload-list__item-actions",o.value.length>1&&"!cursor-move"])},[e("span",{title:"查看",class:"hover:text-primary",onClick:M=>J(a)},[n(p,{icon:d(ue),class:"hover:scale-125 duration-100"},null,8,["icon"])],8,ye),e("span",{class:"el-upload-list__item-delete",onClick:M=>H(a)},[e("span",we,[n(p,{icon:d(me),class:"hover:scale-125 duration-100"},null,8,["icon"])])],8,be)],2)],40,fe))]),default:c(()=>[n(p,{icon:d(ce),class:"m-auto mt-4",width:"30"},null,8,["icon"])]),_:1},8,["file-list"]),f.value?(r(),b(v,{key:0,initialIndex:m.value,"url-list":U.value,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,onClose:t[1]||(t[1]=a=>f.value=!1),onSwitch:t[2]||(t[2]=a=>m.value=a)},null,8,["initialIndex","url-list"])):B("",!0),(r(),b(ee,{to:"body"},[o.value[m.value]&&f.value?(r(),j("div",ke,[e("p",Ce,N(o.value[m.value].name),1)])):B("",!0)])),Ie,n(g),je,e("div",$e,[n(ie),e("div",null,[Se,n(k,{class:"w-[200px] rounded-md",src:d(S)[0],"preview-src-list":d(S),fit:"cover"},null,8,["src","preview-src-list"])])]),n(g),e("div",ze,[e("p",null,[l(" 裁剪、上传头像请参考 "),e("span",{class:"font-bold text-[18x] cursor-pointer hover:text-[red]",onClick:t[3]||(t[3]=a=>d(E).push({name:"SystemUser"}))}," 系统管理-用户管理 "),l(" 表格操作栏中的上传头像功能 ")]),e("p",Me,[l(" 免责声明：上传接口使用免费开源的 "),n(_,{href:"https://designer.mocky.io/",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:c(()=>[l("  Mocky  ")]),_:1}),Ve,l("，如果造成任何损失，我们概不负责 ")])])]),_:1})}}}),De=ne(Le,[["__scopeId","data-v-04dda22c"]]);export{De as default};