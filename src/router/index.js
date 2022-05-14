import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/Slider.vue"),
  },
  {
    path: "/1",
    name: "pageOne",
    component: () => import("../views/PageOne.vue"),
  },
  {
    path: "/2",
    name: "pageTwo",
    component: () => import("../views/PageTwo"),
  },
  {
    path: "/3",
    name: "pageThree",
    component: () => import("../views/PageThree"),
  },
  {
    path: "/4",
    name: "pageFor",
    component: () => import("../views/PageFor"),
  },
  {
    path: "/5",
    name: "pageFive",
    component: () => import("../views/PageFive"),
  },
  {
    path: "/6",
    name: "pageSix",
    component: () => import("../views/PageSix"),
  },
  {
    path: "/7",
    name: "pageSeven",
    component: () => import("../views/PageSeven"),
  },
  {
    path: "/8",
    name: "pageEight",
    component: () => import("../views/PageEight"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
