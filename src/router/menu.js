import { ref } from "vue";
import { defineStore } from "pinia";


export const dashMenu = [
  {
    id: 1,
    path: "/dashboard",
    name: "dashboard",
    icon: "fa-solid fa-chart-simple",
    status: true,
    meta: {secure: true},
    component: () => import("@/views/dashboard.vue"),
  },
  {
    id: 2,
    path: "/persons",
    name: "persons",
    icon: "fa-solid fa-user-group",
    status: false,
    meta: {secure: true},
    component: () => import("@/views/persons.vue"),
  },
  {
    id: 3,
    path: "/wallet",
    name: "wallet",
    icon: "fa-solid fa-chart-pie",
    status: false,
    meta: {secure: true},
    component: () => import("@/views/wallet.vue"),
  },
  {
    id: 4,
    path: "/document",
    name: "document",
    icon: "fa-regular fa-file-lines",
    status: false,
    meta: {secure: true},
    component: () => import("@/views/document.vue"),
  },
  {
    id: 5,
    path: "/setting",
    name: "setting",
    icon: "fa-solid fa-gear",
    status: false,
    meta: {secure: true},
    component: () => import("@/views/setting.vue"),
  },
];


export const useMenuStore = defineStore("menu", () => {
  const menuStore = ref([
    {
      id: 1,
      path: "/dashboard",
      name: "dashboard",
      icon: "fa-solid fa-chart-simple",
      status: true,
      meta: { secure: true },
      component: () => import("@/views/dashboard.vue"),
    },
    {
      id: 2,
      path: "/persons",
      name: "persons",
      icon: "fa-solid fa-user-group",
      status: false,
      meta: { secure: true },
      component: () => import("@/views/persons.vue"),
    },
    {
      id: 3,
      path: "/wallet",
      name: "wallet",
      icon: "fa-solid fa-chart-pie",
      status: false,
      meta: { secure: true },
      component: () => import("@/views/wallet.vue"),
    },
    {
      id: 4,
      path: "/document",
      name: "document",
      icon: "fa-regular fa-file-lines",
      status: false,
      meta: { secure: true },
      component: () => import("@/views/document.vue"),
    },
    {
      id: 5,
      path: "/setting",
      name: "setting",
      icon: "fa-solid fa-gear",
      status: false,
      meta: { secure: true },
      component: () => import("@/views/setting.vue"),
    },
  ]);

  return { menuStore };
});
