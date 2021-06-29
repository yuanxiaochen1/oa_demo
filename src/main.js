import Vue from "vue";
// import mock from "../mock/index";
// Vue.use(mock)
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css
import "@riophae/vue-treeselect/dist/vue-treeselect.css"; //treeelselect css
import "@/assets/font/iconfont.css";
import App from "./App";
import store from "./store";
import router from "./router";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999,
  },
});
import * as d3 from "d3";

Vue.prototype.$d3 = d3;

import moment from "moment";
// 设置本地时区
moment.locale("zh-cn");
Vue.prototype.$moment = moment;

import "@/icons"; // icon
import "@/permission"; // permission control

//按钮权限指令
import directive from "@/directive";
Vue.use(directive);

//引入animate.css
import animated from "animate.css";
Vue.use(animated);
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === "production") {
//   const { mockXHR } = require("../mock");
//   mockXHR();
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale }) //英文版
Vue.use(ElementUI); //中文版
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
