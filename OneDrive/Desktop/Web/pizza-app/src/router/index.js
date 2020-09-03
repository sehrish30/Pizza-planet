import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home';

import Admin from '../components/Admin'
// import Menu from '../components/Menu'
import About from '../components/About'
import Contact from '../components/Contact'
import History from '../components/History'
import Delivery from '../components/Delivery'
import OrderingGuide from '../components/OrderingGuide'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {path: '/contact',
   component: Contact},
    {path: '/admin', component: Admin},
    {path: '/*', redirect: '/'},

    {path: '/about', component: About, children:[
        {path: '/history', component: History},
        {path: '/delivery', component: Delivery},
        {path: '/ordering-guide', component: OrderingGuide}
    ]}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
