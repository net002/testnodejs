import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import viewTasksComponnet from '../components/viewTasksComponnet.vue'
import viewUsersComponnet from '../components/viewUsersComponnet.vue'
import createTasksComponnet from '../components/createTasksComponnet.vue'
import createUsersComponnet from '../components/createUsersComponnet.vue'
import EditTasksComponnet from '../components/editTasksComponnet.vue'
import EditUsersComponnet from '../components/editUsersComponnet.vue'
import FullCalendarComponents from '../components/FullCalendarComponents.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/viewTasksComponnet',
    name: 'viewTasksComponnet',
    component: viewTasksComponnet
  },
  {
    path: '/viewUsrsComponnet',
    name: 'viewUsrsComponnet',
    component: viewUsersComponnet
  },
  {
    path: '/createTasksComponnet',
    name: 'createTasksComponnet',
    component: createTasksComponnet
  },
  {
    path: '/createUsersComponnet',
    name: 'createUsersComponnet',
    component: createUsersComponnet
  },
  {
    path: '/EditTasksComponnet/:id',
    name: 'EditTasksComponnet',
    component: EditTasksComponnet
  },
  {
    path: '/EditUsersComponnet/:id',
    name: 'EditUsersComponnet',
    component: EditUsersComponnet
  },
  {
    path: '/FullCalendarComponents',
    name: 'FullCalendarComponents',
    component: FullCalendarComponents
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
