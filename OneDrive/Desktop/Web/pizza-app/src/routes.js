import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About'
import Contact from './components/Contact'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'


export const routes = [
  { path: '/', name:'homeLink', components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      'delivery': Delivery,
      'history': History
  } },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/contact', name: 'contactLink', component: Contact },
  { path: '/admin', name: 'adminLink', component: Admin },
  {
    path: '/about', name: 'aboutLink', component: About, children: [
      { path: '/history',  name: 'historyLink', component: History },
      { path: '/delivery',  name: 'deliveryLink' , component: Delivery },
      { path: '/ordering-guide',  name: 'orderingGuideLink', component: OrderingGuide },
    ]
  },
  { path: '*', redirect: '/' }
]
