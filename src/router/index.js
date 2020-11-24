/*
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-27 09:23:54
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-24 21:13:00
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: { title: "冬棉约惠节-赢百万壕礼", showTab: true },
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
