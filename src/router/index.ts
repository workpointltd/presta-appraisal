import { createRouter, createWebHistory } from "vue-router";
import userRoutes from "@users/router";
import overviewRoutes from "@/modules/overview/router";
import requestsRouter from "@/modules/requests/router";

const routes = [...userRoutes, ...overviewRoutes, ...requestsRouter];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
