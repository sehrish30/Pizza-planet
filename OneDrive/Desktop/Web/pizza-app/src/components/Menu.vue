<template>
 <div class="menu-wrapper">
     <!--menu-->
     <div class="menu">
         <h3>~ Get Pizza from Top Chefs ~</h3>
         
          <table v-for="item in getMenuItems" :key="item.name">
              <tbody class="menu-items">
                  <tr>
                      <td>
                          <strong>~ {{item.name}} ~</strong>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <small>~ {{item.description}} ~</small>
                      </td>
                  </tr>
                  <tr v-for="(option, index ) in item.options" :key="option[index]">
                      <td class="red-views"> {{ option.size}}" </td>
                      <td class="red-views"> {{option.price | currency}}</td>
                      <td>
                          <button type="button" class="btn-yellow" @click="addToBasket(item, option)">+</button>
                      </td>
                  </tr>
              </tbody>
              <hr>
          </table>
   </div>
    
     <!--Shopping cart-->
     <div class="basket basket-bg">
       <h3>~ CART ~</h3>
       <div v-if="basket.length>0">
          <table>
            <tbody v-for="(item, index) in basket" :key="index">
              <tr>
                <td>
                  <button class="btn-yellow" @click="decreaseQuantity(item)">−</button>
                  <span>{{ item.quantity }}</span>
                  <button class="btn-yellow" @click="increaseQuantity(item)">+</button>
                  
                </td>
                <td>{{item.name}} {{item.size}}"</td>
                <td>BHD {{item.price * item.quantity | currency }}</td>
              </tr>
            </tbody>
          </table>
       
       <p class="total-heading">Total: <span class="price">{{total | currency}}</span></p>
       <button class="btn-order" @click="addNewOrder">Place Order</button>
     </div>
     <div class="message-div" v-else>
        <p class="message">{{ basketText }}</p> 
      <img v-if="basketImage=='empty'" class="empty-cart" src="../assets/images/empty.svg">
      <img v-else class="empty-cart" src="../assets/images/success.svg"/>
        <!-- <img class="empty-cart" src="../assets/images/empty.svg" alt="empty cart"/> -->
      <div>   
     </div> 
 </div>
 </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import {store} from '../store/store'

export default {
    data(){
        return{
          basket: [],
          basketImage:'empty',
          basketText: 'Your basket is empty'
        }
    },
    computed:{
      ...mapGetters(["getMenuItems"]),
      total(){
        let totalCost=0;
        this.basket.map(item=> {
          totalCost += item.quantity * item.price
        })
        return totalCost;
      }
      //  getMenuItems(){
      //    return this.$store.getters.getMenuItems
      //  },
    },
    methods:{
      async addToBasket(item, option){
        const pizzaExists = await this.basket.find(
          pizza => pizza.name === item.name && pizza.size === option.size
        )

        if(pizzaExists){
          pizzaExists.quantity++;
          return
        }

        this.basket.push({
          name: item.name,
          price: option.price,
          size: option.size,
          quantity: 1,
        })
      },

      removeFromBasket(item){
        this.basket.splice(this.basket.indexOf(item),1);
      },
      
      decreaseQuantity(item){
        item.quantity--;
        if(item.quantity ===0){
          this.removeFromBasket(item);
        }
      },
      increaseQuantity(item){
        item.quantity++;
      },
      addNewOrder(){
        const order={
          pizzas: {...this.basket},
          createdAt: new Date(),
        };

        store.dispatch("addNewOrder", order);
        // this.basket is payload sending to store mutation
        // this.$store.commit('addOrder', this.basket);
        this.basket=[];
        this.basketImage='success',
        this.basketText= 'Thank you, your order has been placed :)';
      }

    },
}
</script>

<style scoped>
 h3{
     text-align: center;   
 }


 .menu-wrapper{
     display: flex;
     flex-direction: column;
 }

 

 .menu, .basket{
     background-image: radial-gradient( circle farthest-corner at 8.7% 73.8%,  rgba(64,168,196,1) 0%, rgba(162,213,242,1) 51.1% );
     border-radius: 3px;
     height: 100%;
     margin: 10px;
     padding: 10px;
 }

 .basket-bg{
   background-image: radial-gradient( circle 506px at 8.4% 17.5%,  rgba(162,213,242,1) 60.1%, rgba(64,168,196,1) 90% );
 }

 tr{
         font-family: 'Libre Baskerville', serif;
         color: #07689f;
     }

.menu-items{
  display: inline-block;
  margin: 10px;
  padding: 20px;
}

.bg-image{
  width: 20vw;
  left: -10%;
  position: relative;
  opacity: .5;
}

.red-views{
  color: #e94560;
  padding: 10px;
  border-bottom: 3px solid #40a8c4;
}

hr{
  width: 10%;
    height: 0;
    border: 0;
    border-top: 6px dotted #dfd3c3;
    margin: 1vh auto 1vh;
}

.message{
   color: #31112c;
 }

 .message-div{
   margin: 0 auto;
   text-align: center;
 }

.empty-cart{
  width: 20vh;
} 

.btn-order{
  position: relative;
	display: inline-block;
	font-size: 22px;
	padding: 15px 50px;
	color: white;
	margin: 20px 10px 10px;
	border-radius: 6px;
	text-align: center;
	transition: top .01s linear;
  background: #ff4b5c;
	text-shadow: 0 1px 0 rgba(0,0,0,0.15);
}

.btn-order:hover{
  background-color: #ff4b50;
  cursor: pointer;
}

.btn-order:active {
	top: 9px;
}

.btn-order {
	background: #ff4b5c;
	box-shadow: 0 0 0 1px #ff4b5c inset,
				0 0 0 2px rgba(255,75,92,0.15) inset,
				0 8px 0 0 rgba(237, 102, 99, .7),
				0 8px 0 1px rgba(0,0,0,.4),
				0 8px 8px 1px rgba(0,0,0,0.5);
}

.btn-order:active {
	box-shadow: 0 0 0 1px #ff4b5c inset,
				0 0 0 2px rgba(237,102,99,0.15) inset,
				0 0 0 1px rgba(0,0,0,0.4);
}

.btn-yellow{
  background-color: #e0ece4;
  color: #ff4b5c;
  border: 1px solid #ff4b5c;
  cursor: pointer;
}

.btn-yellow:focus{
  outline:none;
}

.total-heading{
   font-family: 'Niconne', cursive;
   font-size: 2rem;
   color: #07689f
}

.price{
  color: #111d5e;
  font-size: 4.5rem;
}


@media screen and (min-width: 900px){
     .menu-wrapper{
     flex-direction: row;
     justify-content: space-between;
     }

     .menu{
      width: 65vw;
     }   

     .basket{
  width: 35vw;
}   
 
}

</style>