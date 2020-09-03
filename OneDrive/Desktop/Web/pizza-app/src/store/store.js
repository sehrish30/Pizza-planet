import Vue from 'vue';
import Vuex from 'vuex';
import {firebaseAuth} from '../firebase';


// commit comes from context
// user is payload
// action helps with asynchronous code
Vue.use(Vuex);

export const store= new Vuex.Store({
    state:{
        menuItems:{
            1: {
                'name': 'Margherita',
                'description': 'A delicious tomato based pizza topped with mozzarella',
                'options': [{
                'size': 9,
                'price': 6.95
                }, {
                'size': 12,
                'price': 10.95
                }]
            },
            2: {
                'name': 'Pepperoni',
                'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                'options': [{
                'size': 9,
                'price': 7.95
                }, {
                'size': 12,
                'price': 12.95
                }]
                },
            3: {
                'name': 'Ham and Pineapple',
                'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                'options': [{
                'size': 9,
                'price': 7.95
                }, {
                'size': 12,
                'price': 12.95
                }]
                }
     },
     orders: [],
     currentUser: null
    },
     getters:{
         //getters are used to access state from store
         getMenuItems: state=> state.menuItems,
         numberOfOrders: state => state.orders.length,
         currentUser: state=> state.currentUser
     },

     mutations: {
      addOrder: (state,orders) => state.orders.push(orders),
      userStatus: (state, user) => {
          user === null? state.currentUser = null : state.currentUser =user.email
      }
     },
     actions: {
         // user is payload and context is context.commit
        signIn: async ({ commit }, user) => {
          try {
            const userData = await firebaseAuth.signInWithEmailAndPassword(
              user.email,
              user.password
            );
            commit('userStatus', userData.user)
          } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/wrong-password") {
              alert("Wrong password");
            } else {
              alert(errorMessage);
            }
          }
        },
        signOut: async ({ commit }) => {
          try {
            await firebaseAuth.signOut();
          } catch (error) {
            alert(`error signing out, ${error}`);
          }
          commit('userStatus', null)
        }
      }
})