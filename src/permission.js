//此文件会被引入到main.js项目启动时加载，所以可以在此文件做路由拦截
import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken, getUser, removeToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/404",'/login'];
router.beforeEach(async (to, from, next) => {
  //拦截加载的路由
  // start progress bar
  NProgress.start();
  // set page title
  document.title = getPageTitle(to.meta.title); // 设置浏览器的标题
  // determine whether the user has logged in
  const hasToken = getToken();
  if (hasToken) {
    //有token直接放行
    next();
    NProgress.done();
  } else {
    if (whiteList.indexOf(to.path) >= 0) {
      next();
    } else {
     //未登录
     router.push('/login')
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
