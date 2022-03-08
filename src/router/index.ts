import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Fight from '@/views/Fight.vue';
import Home from '@/views/Home.vue';
import Roll from '@/views/Roll.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/roll/:user',
    name: 'Roll',
    component: Roll,
    props: true,
  },
  {
    path: '/fight',
    name: 'Fight',
    component: Fight,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
