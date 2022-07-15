import Auth from "@/middlewares/auth";
import store from '@/store'
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

  // dashboard
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../modules/article/views/sidebar.vue"),
    meta:{
      middleware: [Auth],
    },
  },

   // setting
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../modules/article/views/setting.vue"),
    meta:{
      middleware: [Auth],
    },
  },

  // products
  {
    path: "/product",
    name: "Product",
    component: () => import("../modules/article/views/product.vue"),
    meta:{
      middleware: [Auth],
    },
  },

  // store
  {
    path: "/store",
    name: "Store",
    component: () => import("../modules/article/views/store.vue"),
    meta:{
      middleware: [Auth],
    },
  },
];

const emptyFn = () => { }
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(
	location,
	onComplete = emptyFn,
	onAbort = emptyFn,
) {
	return originalPush.call(this, location, onComplete, onAbort)
}

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const payload = { to, from, next , store };
    let preventNext = false;
    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload);
      if (!result) {
        preventNext = true;
        break;
      }
    }
    if (preventNext) {
      return;
    }
  }
  next();
});

export default router;
