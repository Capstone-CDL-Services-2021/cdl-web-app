import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reset/:token',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "service" */ '../views/Reset.vue')

  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import(/* webpackChunkName: "service" */ '../views/Forgot.vue')

  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/Register.vue')
  },
  {
    path: '/services',
    name: 'Service',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue')
  },
  {
    path: '/book',
    name: 'BookPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/BookPage.vue')
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/Testimonials.vue')
  },
  {
    path: '/managerTestimonials',
    name: 'ManagerTestimonials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerTestimonials.vue')
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/ContactPage.vue')
  },
  {
    path: '/managerHome',
    name: 'ManagerHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerHome.vue')
  },
  {
    path: '/managerService',
    name: 'ManagerService',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerService.vue')
  },
  {
    path: '/managerBookings',
    name: 'ManagerBookings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerBookings.vue')
  },
  {
    path: '/managerAddService',
    name: 'managerAddService',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerAddService.vue')
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../components/contactUs.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/Schedule')
  },
  {
    path: '/managerUserAccounts',
    name: 'ManagerUserAccounts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccounts" */ '../views/manager/managerUserAccounts.vue')
  },
  {
    path: '/managerEquipment',
    name: 'ManagerEquipment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccounts" */ '../views/manager/managerEquipment.vue')

  },
  {
    path: '/managerUserAccountHistory',
    name: 'ManagerUserAccountHistory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccountHistory" */ '../views/manager/managerUserAccountHistory.vue')
  },
  {
    path: '/managerEditServiceCard/:id',
    name: 'managerEditServiceCard',
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerEditServiceCard.vue')
  },
  {
    path: '/viewOrder',
    name: 'viewOrder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccountHistory" */ '../views/viewOrder.vue')
  },
  {
    path: '/managerReports',
    name: 'managerReports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccountHistory" */ '../views/manager/managerReports.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
