import Vue from 'vue';
const VueRouter = require('vue-router');
const LoginComponent = require('../components/Login.vue');
const DashboardComponent = require('../components/Dashboard.vue');

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: LoginComponent,
    },
    {
      path: '/dashboard',
      component: DashboardComponent,
    },
  ],
});

module.exports = router;

