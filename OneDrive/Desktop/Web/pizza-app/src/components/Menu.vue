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
                      <td class="red-views">BHD {{option.price}}</td>
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
                  <button class="btn-yellow" @click="decreaseQuantity(item)">+</button>
                  <span>{{ item.quantity }}</span>
                  <button class="btn-yellow" @click="increaseQuantity(item)">−</button>
                </td>
                <td>{{item.name}} {{item.size}}"</td>
                <td>BHD {{item.price * item.quantity}}</td>
              </tr>
            </tbody>
          </table>
       
       <p>Order total:</p>
       <button class="btn-yellow">Place Order</button>
     </div>
     <div class="message-div" v-else>
        <p class="message">{{ basketText }}</p> 
        <img class="empty-cart" src="../assets/images/empty.svg" alt="empty cart"/>
      <div>   
     </div> 
 </div>
 </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          basket: [],
          basketText: 'Your basket is empty',
            getMenuItems:{
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
            }
        }
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
      }

    }
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
     background-image: radial-gradient( circle 571px at 80.7% 35.3%,  rgba(162,213,242,1) 33.6%, rgba(64,168,196,1) 61.1% );
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