import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import OperationsView from "../views/OperationsView.vue";
import ReportsView from "../views/ReportsView.vue";
import ContragentsView from "../views/ContragentsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import StatesView from "../views/StatesView.vue";
import WorkersView from "../views/WorkersView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/operations",
    name: "operations",
    component: OperationsView,
  },
  {
    path: "/reports",
    name: "reports",
    component: ReportsView,
  },
  {
    path: "/contragents",
    name: "contragents",
    component: ContragentsView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/states",
    name: "states",
    component: StatesView,
  },
  {
    path: "/workers",
    name: "workers",
    component: WorkersView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
