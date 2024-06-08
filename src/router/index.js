import { createRouter, createWebHistory } from "vue-router";
import { dashMenu } from "./menu";
import { useAuthStore } from "@/stores/auth/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layout/dashboard.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/views/dashboard.vue"),
        },
        ...dashMenu,
        {
          path: "/persons/:id",
          name: "/persons/:id",
          meta: { secure: true },
          component: () => import("@/views/more/personDetail.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/layout/auth.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path == "/regis") {
    useAuthStore().checkAdmin();
  }
  if (to.meta.secure) {
    useAuthStore().checkUser();
  }

  next();
});

export default router;
