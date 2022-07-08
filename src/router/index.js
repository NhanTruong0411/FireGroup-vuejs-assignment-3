import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Log in
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
      
    },
    component: () => import("../modules/auth/views/login.vue"),
  },

  // Register
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "auth",
    },
    component: () => import("../modules/auth/views/register.vue"),
  },

  // Log out

  // dashboard
  {
    path: "/",
    name: "dashboard",
    component: () => import("../modules/article/views/sidebar.vue"),
  },

   // setting
  {
    path: "/setting",
    name: "setting",
    component: () => import("../modules/article/views/setting.vue"),
  },

  // products
  {
    path: "/product",
    name: "product",
    component: () => import("../modules/article/views/product.vue"),
  },

  // store
  {
    path: "/store",
    name: "store",
    component: () => import("../modules/article/views/store.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
