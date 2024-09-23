import{i as e,e as i,h as r,aB as o}from"./index-yvJsfBgz.js";var p={pkg:{name:"vue-pure-admin",version:"5.8.0",engines:{node:"^18.18.0 || ^20.9.0 || >=21.1.0",pnpm:">=9"},dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.1.6","@infectoone/vue-ganttastic":"^2.3.2","@logicflow/core":"^1.2.28","@logicflow/extension":"^1.2.28","@pureadmin/descriptions":"^1.2.1","@pureadmin/table":"^3.2.1","@pureadmin/utils":"^2.4.8","@vue-flow/background":"^1.3.0","@vue-flow/core":"^1.41.2","@vueuse/core":"^11.1.0","@vueuse/motion":"^2.2.5","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@zxcvbn-ts/core":"^3.0.4","animate.css":"^4.1.1",axios:"^1.7.7","china-area-data":"^5.0.1",cropperjs:"^1.6.2",dayjs:"^1.11.13",echarts:"^5.5.1","el-table-infinite-scroll":"^3.0.6","element-plus":"^2.8.3","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsbarcode:"^3.11.6",localforage:"^1.10.0","mint-filter":"^4.0.3",mitt:"^3.0.1",mqtt:"4.3.7",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.2.2","pinyin-pro":"^3.24.2","plus-pro-components":"^0.1.16",qrcode:"^1.5.4",qs:"^6.13.0","responsive-storage":"^2.2.0",sortablejs:"^1.15.3",swiper:"^11.1.14",typeit:"^8.8.5","v-contextmenu":"^3.2.0","v3-infinite-loading":"^1.3.2","version-rocket":"^1.7.3",vue:"^3.5.7","vue-i18n":"^10.0.1","vue-json-pretty":"^2.4.0","vue-pdf-embed":"^2.1.0","vue-router":"^4.4.5","vue-tippy":"^6.4.4","vue-types":"^5.1.3","vue-virtual-scroller":"2.0.0-beta.8","vue-waterfall-plugin-next":"^2.6.0","vue3-danmaku":"^1.6.1","vue3-puzzle-vcode":"^1.1.7",vuedraggable:"^4.1.0","vxe-table":"4.6.19","wavesurfer.js":"^7.8.6",xgplayer:"^3.0.20",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^19.5.0","@commitlint/config-conventional":"^19.5.0","@commitlint/types":"^19.5.0","@eslint/js":"^9.11.0","@faker-js/faker":"^8.4.1","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.10","@iconify/vue":"^4.1.2","@intlify/unplugin-vue-i18n":"^5.0.0","@pureadmin/theme":"^3.2.0","@types/dagre":"^0.7.52","@types/gradient-string":"^1.1.6","@types/intro.js":"^5.1.5","@types/js-cookie":"^3.0.6","@types/node":"^20.16.5","@types/nprogress":"^0.2.3","@types/qrcode":"^1.5.5","@types/qs":"^6.9.16","@types/sortablejs":"^1.15.8","@typescript-eslint/eslint-plugin":"^7.18.0","@typescript-eslint/parser":"^7.18.0","@vitejs/plugin-vue":"^5.1.4","@vitejs/plugin-vue-jsx":"^4.0.1",autoprefixer:"^10.4.20",boxen:"^8.0.1",cssnano:"^7.0.6",dagre:"^0.8.5",eslint:"^9.11.0","eslint-config-prettier":"^9.1.0","eslint-define-config":"^2.1.0","eslint-plugin-prettier":"^5.2.1","eslint-plugin-vue":"^9.28.0","gradient-string":"^2.0.2",husky:"^9.1.6","lint-staged":"^15.2.10",postcss:"^8.4.47","postcss-html":"^1.7.0","postcss-import":"^16.1.0","postcss-scss":"^4.0.9",prettier:"^3.3.3",rimraf:"^6.0.1","rollup-plugin-visualizer":"^5.12.0",sass:"1.77.8",stylelint:"^16.9.0","stylelint-config-recess-order":"^5.1.0","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard-scss":"^13.1.0","stylelint-prettier":"^5.0.2",svgo:"^3.3.2",tailwindcss:"^3.4.12",typescript:"^5.6.2",vite:"^5.4.7","vite-plugin-cdn-import":"^1.0.1","vite-plugin-checker":"^0.8.0","vite-plugin-compression":"^0.5.1","vite-plugin-fake-server":"^2.1.2","vite-plugin-remove-console":"^2.2.0","vite-plugin-router-warn":"^1.0.0","vite-plugin-vue-inspector":"^5.2.0","vite-svg-loader":"^5.1.0","vue-eslint-parser":"^9.4.3","vue-tsc":"^2.1.6"}},lastBuildTime:"2024-09-23 06:53:05"};function a(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!o(t)}function d(){const{pkg:t,lastBuildTime:n}=p,{version:s,engines:l}=t;return{columns:[{label:"当前版本",minWidth:100,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},a(s)?s:{default:()=>[s]})},{label:"最后编译时间",minWidth:120,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},a(n)?n:{default:()=>[n]})},{label:"推荐 node 版本",minWidth:140,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},{default:()=>[l.node]})},{label:"推荐 pnpm 版本",minWidth:140,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},{default:()=>[l.pnpm]})},{label:"完整版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("完整版代码链接")])])},{label:"精简版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/pure-admin-thin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("精简版代码链接")])])},{label:"文档地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://pure-admin.github.io/pure-admin-doc",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("文档链接")])])},{label:"预览地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://pure-admin.github.io/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("预览链接")])])}]}}export{d as useColumns};
