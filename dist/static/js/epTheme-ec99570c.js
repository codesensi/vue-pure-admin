import{ar as s,as as o,at as r,au as m,av as h}from"./index-0dd8d5e4.js";const p=s({id:"pure-epTheme",state:()=>{var e,t;return{epThemeColor:((e=o().getItem(`${r()}layout`))==null?void 0:e.epThemeColor)??m().EpThemeColor,epTheme:((t=o().getItem(`${r()}layout`))==null?void 0:t.theme)??m().Theme}},getters:{getEpThemeColor(e){return e.epThemeColor},fill(e){return e.epTheme==="light"?"#409eff":e.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(e){const t=o().getItem(`${r()}layout`);this.epTheme=t==null?void 0:t.theme,this.epThemeColor=e,t&&(t.epThemeColor=e,o().setItem(`${r()}layout`,t))}}});function l(){return p(h)}export{l as u};
