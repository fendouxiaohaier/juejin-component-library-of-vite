import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'

import SButton from "./button";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

createApp({
    template: `
    <div>
         <SButton color="blue"  icon="search" >蓝色</SButton>
         <SButton color="green"  icon="edit" >绿色</SButton>
         <SButton color="gray"  icon="check" >灰色</SButton>
         <SButton color="yellow"  icon="message" >黄色</SButton>
         <SButton color="red"  icon="delete" >红色</SButton>
     </div>
    `
})
    .use(SmartyUI).mount("#app");