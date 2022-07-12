import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Log in
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",

    },
    component: () => import("../modules/auth/views/login.vue"),
  },

  // Register
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import("../modules/auth/views/register.vue"),
  },

  // Log out

  // dashboard
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../modules/article/views/sidebar.vue"),
  },

   // setting
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../modules/article/views/setting.vue"),
  },

  // products
  {
    path: "/product",
    name: "Product",
    component: () => import("../modules/article/views/product.vue"),
  },

  // store
  {
    path: "/store",
    name: "Store",
    component: () => import("../modules/article/views/store.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
