import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes';
import {store} from './store/store'
import Accounting from 'accounting-js'


// Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to){
    if(to.hash){
      return {selector: to.hash}
    }else{
      return {x:0,y:0}
    }
  }
  // to, from, savedPosition   (arguments)
  // scrollBehavior(to, from, savedPosition){
  //   if(savedPosition){
  //     return savedPosition
  //   }else{
  //     return {x:0,y:0}
  //   }
  // }
})

// // In after each next fuction is not required
// router.beforeEach((to, from, next)=>{
//   if(to.path=== '/menu'){
//     next()
//   }else{
//     next(false);
//   }
// })

// format currency using accounting-js npm package
// global filter can be used in any component
// , { symbol: "BD"} after val for customized currency
Vue.filter('currency', val => Accounting.formatMoney(val));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')