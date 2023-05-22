import Vue from 'vue';
import VueRouter from 'vue-router';
import staticRoutes from "./staticRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: staticRoutes,
});

export default router;
