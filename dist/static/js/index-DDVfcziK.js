import{d as b,a as r,B as v,k as u,i as d,w as m,e as f,A as D,f as p,g as t,u as _,a3 as I,b as N,j as h,t as i,c$ as V,Z as j}from"./index-CiYMlfUr.js";import{R as z}from"./index-CMZCagFi.js";const A={"element-loading-background":"transparent"},$={class:"w-[18vw]"},E={class:"mt-1 text-center"},J={class:"flex flex-wrap justify-center items-center text-center"},M={key:1,class:"mt-1"},Z=b({name:"ReCropperPreview",__name:"index",props:{imgSrc:String},emits:["cropper"],setup(w,{expose:g,emit:C}){const k=w,x=C,e=r(),l=r(),R=r(),o=r(!1),s=r("");function y({base64:c,blob:n,info:a}){e.value=a,s.value=c,x("cropper",{base64:c,blob:n,info:a})}function B(){l.value.hide()}return g({hidePopover:B}),(c,n)=>{const a=f("el-image"),S=f("el-popover"),P=D("loading");return v((p(),u("div",A,[d(S,{ref_key:"popoverRef",ref:l,visible:o.value,placement:"right",width:"18vw"},{reference:m(()=>[t("div",$,[d(_(z),{ref_key:"refCropper",ref:R,src:k.imgSrc,circled:"",onCropper:y,onReadied:n[0]||(n[0]=q=>o.value=!0)},null,8,["src"]),v(t("p",E," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[I,o.value]])])]),default:m(()=>[t("div",J,[s.value?(p(),N(a,{key:0,src:s.value,"preview-src-list":Array.of(s.value),fit:"cover"},null,8,["src","preview-src-list"])):h("",!0),e.value?(p(),u("div",M,[t("p",null," 图像大小："+i(parseInt(e.value.width))+" × "+i(parseInt(e.value.height))+"像素 ",1),t("p",null," 文件大小："+i(_(V)(e.value.size))+"（"+i(e.value.size)+" 字节） ",1)])):h("",!0)])]),_:1},8,["visible"])])),[[P,!o.value]])}}}),H=j(Z);export{H as R};
