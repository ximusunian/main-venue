/*
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-27 09:23:54
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-18 15:52:53
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: { title: "11.27冬季抢货节-赢百万豪礼", showTab: true },
    component: () => import("@/views/index.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
