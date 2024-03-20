import{i as e,e as i,h as r,aE as o}from"./index-CuWJll_k.js";var p={pkg:{name:"vue-pure-admin",version:"5.1.0",engines:{node:"^18.18.0 || ^20.9.0 || >=21.1.0",pnpm:">=8.6.10"},dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.1.3","@logicflow/core":"^1.2.22","@logicflow/extension":"^1.2.22","@pureadmin/descriptions":"^1.2.1","@pureadmin/table":"^3.1.2","@pureadmin/utils":"^2.4.7","@vue-flow/background":"^1.3.0","@vue-flow/core":"^1.33.4","@vueuse/core":"^10.9.0","@vueuse/motion":"^2.1.0","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@zxcvbn-ts/core":"^3.0.4","animate.css":"^4.1.1",axios:"^1.6.7","china-area-data":"^5.0.1",cropperjs:"^1.6.1",dayjs:"^1.11.10",echarts:"^5.5.0","el-table-infinite-scroll":"^3.0.3","element-plus":"^2.6.1","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsbarcode:"^3.11.6",localforage:"^1.10.0","mint-filter":"^4.0.3",mitt:"^3.0.1",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.1.7","pinyin-pro":"^3.19.6","plus-pro-components":"^0.0.2",qrcode:"^1.5.3",qs:"^6.12.0","responsive-storage":"^2.2.0",sortablejs:"^1.15.2",swiper:"^11.0.7",typeit:"^8.8.3","v-contextmenu":"^3.2.0","v3-infinite-loading":"^1.3.1","version-rocket":"^1.7.1",vue:"^3.4.21","vue-i18n":"^9.10.1","vue-json-pretty":"^2.3.0","vue-pdf-embed":"^2.0.2","vue-router":"^4.3.0","vue-tippy":"^6.4.1","vue-types":"^5.1.1","vue-virtual-scroller":"2.0.0-beta.8","vue-waterfall-plugin-next":"^2.4.3","vue3-danmaku":"^1.6.0",vuedraggable:"^4.1.0","vxe-table":"^4.5.21","wavesurfer.js":"^7.7.5",xgplayer:"^3.0.14",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^19.1.0","@commitlint/config-conventional":"^19.1.0","@commitlint/types":"^19.0.3","@eslint/js":"^8.57.0","@faker-js/faker":"^8.4.1","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.10","@iconify/vue":"^4.1.1","@intlify/unplugin-vue-i18n":"^2.0.0","@pureadmin/theme":"^3.2.0","@types/dagre":"^0.7.52","@types/gradient-string":"^1.1.5","@types/intro.js":"^5.1.5","@types/js-cookie":"^3.0.6","@types/node":"^20.11.27","@types/nprogress":"^0.2.3","@types/qrcode":"^1.5.5","@types/qs":"^6.9.12","@types/sortablejs":"^1.15.8","@typescript-eslint/eslint-plugin":"^7.2.0","@typescript-eslint/parser":"^7.2.0","@vitejs/plugin-vue":"^5.0.4","@vitejs/plugin-vue-jsx":"^3.1.0",autoprefixer:"^10.4.18",boxen:"^7.1.1",cloc:"^2.11.0",cssnano:"^6.1.0",dagre:"^0.8.5",eslint:"^8.57.0","eslint-config-prettier":"^9.1.0","eslint-define-config":"^2.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-vue":"^9.23.0","gradient-string":"^2.0.2",husky:"^9.0.11","lint-staged":"^15.2.2",postcss:"^8.4.35","postcss-html":"^1.6.0","postcss-import":"^16.0.1","postcss-scss":"^4.0.9",prettier:"^3.2.5",rimraf:"^5.0.5","rollup-plugin-visualizer":"^5.12.0",sass:"^1.72.0",stylelint:"^16.2.1","stylelint-config-recess-order":"^5.0.0","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard-scss":"^13.0.0","stylelint-prettier":"^5.0.0",svgo:"^3.2.0",tailwindcss:"^3.4.1",typescript:"^5.4.2",vite:"^5.1.6","vite-plugin-cdn-import":"^0.3.5","vite-plugin-compression":"^0.5.1","vite-plugin-fake-server":"^2.1.1","vite-plugin-remove-console":"^2.2.0","vite-plugin-router-warn":"^1.0.0","vite-svg-loader":"^5.1.0","vue-eslint-parser":"^9.4.2","vue-tsc":"^1.8.27"}},lastBuildTime:"2024-03-20 15:06:06"};function a(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!o(t)}function d(){const{pkg:t,lastBuildTime:n}=p,{version:s,engines:l}=t;return{columns:[{label:"当前版本",minWidth:100,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},a(s)?s:{default:()=>[s]})},{label:"最后编译时间",minWidth:120,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},a(n)?n:{default:()=>[n]})},{label:"推荐 node 版本",minWidth:140,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},{default:()=>[l.node]})},{label:"推荐 pnpm 版本",minWidth:140,cellRenderer:()=>e(i("el-tag"),{size:"large",class:"!text-base"},{default:()=>[l.pnpm]})},{label:"完整版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("完整版代码链接")])])},{label:"精简版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/pure-admin-thin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("精简版代码链接")])])},{label:"文档地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://yiming_chang.gitee.io/pure-admin-doc",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("文档链接")])])},{label:"预览地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://yiming_chang.gitee.io/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[r("预览链接")])])}]}}export{d as useColumns};
