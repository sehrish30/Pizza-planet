<template>
    <div class="admin-wrapper">
        <section v-if="currentUser!==null">
        <div class="current-user-wrapper">
           <span>Logged in as:
           {{currentUser}}</span>
           <button type="button" class="btn-red" @click.prevent="signOut">Sign out</button>
        </div>
        <NewPizza />
            <div class="menu-wrapper">
                <h3>Menu:</h3>
                <table>
                    <thead>
                      <tr class="heading">
                          <th class="heading-item">Item</th>
                          <th class="heading-item">Remove from Menu</th>
                      </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" :key="item.id">
                        <tr class="content">
                            <td>{{item.name}}</td>
                            <td class="content-item">
                                <button type="button" class="btn-red" @click="removeMenuItem(item.id)">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
            <div class="orders-wrapper">
               <h3>Current orders ({{numberOfOrders}}):</h3>
               <table>
                   <thead class="heading">
                       <tr>
                           <th class="heading-item">Item</th>
                           <th class="heading-item">Size</th>
                           <th class="heading-item">Quantity</th>
                           <th class="heading-item">Price</th>
                       </tr>
                   </thead>
                   <tbody v-for="(order, index) in getOrders" :key="order.id">
                       <tr class="order-number">
                          <th colspan="4" class="order-number-item">
                              <strong>Order Number: {{index+1}}</strong>
                              <button type="button" class="btn-red" @click="removeOrder(order.id)">&times;</button>
                          </th>
                       </tr>
                       <tr v-for="orderItem in order.pizzas" :key="orderItem.id" class="content">
                           <td class="content-item">{{orderItem.name}}</td>
                           <td class="content-item">{{orderItem.size}}"</td>
                           <td class="content-item">{{orderItem.quantity}}</td>
                           <td class="content-item">BHD {{orderItem.price}}</td>
                       </tr>
                   </tbody>
               </table>
            </div>
        </section>
      <Login v-if="currentUser ==null" />
    </div>
</template>

<script>
import NewPizza from './NewPizza';
import Login from './Login';
import {store} from '../store/store'
import {mapGetters} from 'vuex';


export default {
    name: "admin",
    components: {
        NewPizza,
        Login
    },
    computed:{
        ...mapGetters([
         'getMenuItems',
         'numberOfOrders',
         'currentUser',
         "getOrders"          
        ])
    //    getMenuItems(){
    //      return this.$store.getters.getMenuItems
    //    },
    //    numberOfOrders(){
    //      return this.$store.getters.numberOfOrders
    //    },
    //    currentUser(){
    //        return this.$store.getters.currentUser
    //    }

        },
    // data(){
    //   return {
    //       name: 'Sehrish'
    //   }
    // },
    // beforeRouteEnter(to,from,next){
    //   //Once component is created we access the data model
    //   next(vm =>{
    //     alert(`Hi, ${vm.name}`);
    //   })
    // },
    methods: {
        async signOut(){
          store.dispatch('signOut');
        },
        removeMenuItem(id){
            store.dispatch('removeMenuItem', id);
        },
        removeOrder(id){
            store.dispatch('removeOrder', id);
        }
    }
 }

</script>

<style scoped>
  .admin-wrapper{
      margin: 10px;
      background-color: #e0ece4;
      background: url("../assets/images/bg.png");
      text-align: center;
  }


  .current-user-wrapper,
  .order-wrapper,
  .menu-wrapper{
      margin: 10px 0;
      padding: 10px;
      border: solid 1px #f79e38;
      justify-content: center;
      margin: 0 auto;
      
  }

  table{
      text-align: left;
      width: 70vw;
      text-align: center;
  }

  tr{
      align-items: center;
      text-align: center;
      margin: 0 auto;
  }

  .orders-wrapper{
      margin-bottom: 3rem;
  }

  .order-number th{
      background: #ddd;
      margin: 3rem;
  }

  .order-number-item{
        font-family: 'Libre Baskerville', serif;
       padding: 1.2rem;
       color: #43658b;
  }

  .order-number button{
      margin: 0 10px;
  }

  table{
      text-align: center;
      margin: 0 auto;
  }

  .heading{
      background-color: #a2d5f2;
      margin: 5rem;
  }
  .heading-item, .content-item{
       font-family: 'Libre Baskerville', serif;
       padding: 1.2rem;
       color: #07689f;
  }

  .content{
      background-color: #f5f1da;
      margin: 3rem;
      font-family: 'Libre Baskerville', serif;
      color: #07689f;
  }

  .btn-red{
      background-color: #f1f3de;
      color: #cd0a0a;
      padding: 5px;
      outline: none;
      border: 1px solid #cd0a0a;
      border-radius: 2px;
      cursor: pointer;
  }

  span{
      color: #8d93ab;
      font-family: 'Libre Baskerville', serif;
  }

</style>