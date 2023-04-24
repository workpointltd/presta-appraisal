import { createRouter, createWebHistory } from "vue-router";
import userRoutes from "@users/router";

const routes = [
  {
    path: "/",
    name: "Overview",
    component: () => import("@/Views/Overview.vue"),
  },
  ...userRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
