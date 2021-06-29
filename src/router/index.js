import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
//静态路由
export const selfRoutes = [
  {
    path: "/",
    redirect: "/page1",
    hidden: true,
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/page1",
    name: "page1",
    meta: {
      icon: "el-iconyanjing",
      title: "模块1",
    },
    hidden: false,
    component: Layout,
    redirect: "/page1/page1_1",
    children: [
      {
        path: "/page1/page1_1",
        name: "page1_1",
        hidden: false,
        meta: {
          icon: "el-iconyanjing",
          title: "模块1",
          affix: true,
        },
        component: () => import("@/views/page1/page1_1"),
      },
    ],
  },
  {
    path: "/page2",
    name: "page2",
    meta: {
      icon: "el-iconxiugai",
      title: "模块2",
    },
    hidden: false,
    component: Layout,
    redirect: "/page2/page2_1",
    children: [
      {
        path: "/page2/page2_1",
        name: "page2_1",
        hidden: false,
        meta: {
          icon: "el-iconxiugai",
          title: "模块2_1",
        },
        component: () => import("@/views/page2/page2_1"),
      },
      {
        path: "/page2/page2_2",
        name: "page2_2",
        hidden: false,
        meta: {
          icon: "el-iconxiugai",
          title: "模块2_2",
        },
        component: () => import("@/views/page2/page2_2"),
      },
    ],
  },
  {
    path: "page3",
    name: "page3",
    meta: {
      icon: "el-iconwodedingyue",
      title: "模块3",
    },
    hidden: false,
    component: Layout,
    redirect: "/page3/page3_1",
    children: [
      {
        path: "/page3/page3_1",
        name: "page3_1",
        hidden: false,
        meta: {
          icon: "el-iconwodedingyue",
          title: "模块3",
        },
        component: () => import("@/views/page3/page3_1"),
      },
    ],
  },
  {
    path: "page4",
    name: "page4",
    meta: {
      icon: "el-iconwendang",
      title: "模块4",
    },
    hidden: false,
    component: Layout,
    redirect: "/page4/page4_1",
    children: [
      {
        path: "/page4/page4_1",
        name: "page4_1",
        hidden: false,
        meta: {
          icon: "el-iconwendang",
          title: "模块4",
        },
        component: () => import("@/views/page4/page4_1"),
      },
    ],
  },
  //刷新tags-view
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("@/views/404"),
    hidden: true,
  },
  // 404 page 必须放在最后面 !!!
];
// 异步（动态）挂载的路由，根据权限展示
export const asyncRouteMap = [];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    base: "demo",
    routes: selfRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
