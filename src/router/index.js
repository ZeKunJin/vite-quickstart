import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("/src/views/home/index.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("/src/views/about/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
