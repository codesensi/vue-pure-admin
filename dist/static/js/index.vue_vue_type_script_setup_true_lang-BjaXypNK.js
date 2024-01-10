import{R as s}from"./index-HeCVjKIy.js";import{aj as B,dA as D,dD as S,d as q,r as b,b as d,g as i,c as _,w as t,u,j as e,k as c,F as E,z as N,n as g,t as x,h as O,ah as j}from"./index-FZTP20Zj.js";import{u as z}from"./hooks-qaeZOW2b.js";const L=B({nickname:[{required:!0,message:"用户昵称为必填项",trigger:"blur"}],username:[{required:!0,message:"用户名称为必填项",trigger:"blur"}],password:[{required:!0,message:"用户密码为必填项",trigger:"blur"}],phone:[{validator:(v,m,r)=>{m===""||D(m)?r():r(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(v,m,r)=>{m===""||S(m)?r():r(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),P={key:0},G=q({__name:"index",props:{formInline:{default:()=>({title:"新增",higherDeptOptions:[],parentId:0,nickname:"",username:"",password:"",phone:"",email:"",sex:"",status:1,remark:""})}},setup(v,{expose:m}){const r=v,w=[{value:0,label:"男"},{value:1,label:"女"}],V=b(),{switchStyle:k}=z(),l=b(r.formInline);function h(){return V.value}return m({getRef:h}),(A,o)=>{const p=d("el-input"),n=d("el-form-item"),y=d("el-option"),U=d("el-select"),I=d("el-cascader"),R=d("el-switch"),C=d("el-row"),F=d("el-form");return i(),_(F,{ref_key:"ruleFormRef",ref:V,model:l.value,rules:u(L),"label-width":"82px"},{default:t(()=>[e(C,{gutter:30},{default:t(()=>[e(u(s),{value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"用户昵称",prop:"nickname"},{default:t(()=>[e(p,{modelValue:l.value.nickname,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value.nickname=a),clearable:"",placeholder:"请输入用户昵称"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"用户名称",prop:"username"},{default:t(()=>[e(p,{modelValue:l.value.username,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value.username=a),clearable:"",placeholder:"请输入用户名称"},null,8,["modelValue"])]),_:1})]),_:1}),l.value.title==="新增"?(i(),_(u(s),{key:0,value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"用户密码",prop:"password"},{default:t(()=>[e(p,{modelValue:l.value.password,"onUpdate:modelValue":o[2]||(o[2]=a=>l.value.password=a),clearable:"",placeholder:"请输入用户密码"},null,8,["modelValue"])]),_:1})]),_:1})):c("",!0),e(u(s),{value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"手机号",prop:"phone"},{default:t(()=>[e(p,{modelValue:l.value.phone,"onUpdate:modelValue":o[3]||(o[3]=a=>l.value.phone=a),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"邮箱",prop:"email"},{default:t(()=>[e(p,{modelValue:l.value.email,"onUpdate:modelValue":o[4]||(o[4]=a=>l.value.email=a),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"用户性别"},{default:t(()=>[e(U,{modelValue:l.value.sex,"onUpdate:modelValue":o[5]||(o[5]=a=>l.value.sex=a),placeholder:"请选择用户性别",class:"w-full",clearable:""},{default:t(()=>[(i(),g(E,null,N(w,(a,f)=>e(y,{key:f,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"归属部门"},{default:t(()=>[e(I,{modelValue:l.value.parentId,"onUpdate:modelValue":o[6]||(o[6]=a=>l.value.parentId=a),class:"w-full",options:l.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择归属部门"},{default:t(({node:a,data:f})=>[O("span",null,x(f.name),1),a.isLeaf?c("",!0):(i(),g("span",P," ("+x(f.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),l.value.title==="新增"?(i(),_(u(s),{key:1,value:12,xs:24,sm:24},{default:t(()=>[e(n,{label:"用户状态"},{default:t(()=>[e(R,{modelValue:l.value.status,"onUpdate:modelValue":o[7]||(o[7]=a=>l.value.status=a),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:j(u(k))},null,8,["modelValue","style"])]),_:1})]),_:1})):c("",!0),e(u(s),null,{default:t(()=>[e(n,{label:"备注"},{default:t(()=>[e(p,{modelValue:l.value.remark,"onUpdate:modelValue":o[8]||(o[8]=a=>l.value.remark=a),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{G as _};
