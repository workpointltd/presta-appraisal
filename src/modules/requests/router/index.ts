const requestsRouter = [
  {
    path: "/requests",
    name: "Requests",
    component: () => import("../views/SingleRequest.vue"),
  },
];

export default requestsRouter;
