export default [
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('../modules/auth/page/AuthPage.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../modules/main/page/MainPage.vue'),
  },
];
