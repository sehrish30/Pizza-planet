import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes';
import {store} from './store/store'


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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')