const requestsRouter = [
  {
    path: "/requests/:slug",
    name: "Requests",
    component: () => import("../views/SingleRequest.vue"),
  },
];

export default requestsRouter;
