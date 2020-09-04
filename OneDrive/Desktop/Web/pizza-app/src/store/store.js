import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as getters from './getters';
// import * as mutations from './mutations';
import menu from './modules/menu';
import users from './modules/users';
import orders from './modules/orders';
import {vuexfireMutations} from 'vuexfire';


// commit comes from context
// user is payload
// action helps with asynchronous code
Vue.use(Vuex);

export const store= new Vuex.Store({

    // inject mutations in to the root of the store
    mutations: vuexfireMutations, 

   modules: {
       menu,
       orders,
       users
   }
})