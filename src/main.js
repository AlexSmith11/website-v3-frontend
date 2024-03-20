import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Cv from "./views/CV.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/about", component: About, meta: { title: "About" } },
  { path: "/projects", component: Projects, meta: { title: "Projects" } },
  { path: "/cv", component: Cv, meta: { title: "CV" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "My Vue App"; // Update page title
  next();
});

createApp(App).use(router).mount("#app");
