<template>
    <div class="admin-wrapper">
        <div class="current-user-wrapper">
           <span>Logged in as:</span>
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
                    <tbody>
                        <tr class="content">
                            <td>Magherita</td>
                            <td class="content-item">
                                <button type="button" class="btn-red">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
            <div class="orders-wrapper">
               <h3>Current orders (3):</h3>
               <table>
                   <thead class="heading">
                       <tr>
                           <th class="heading-item">Item</th>
                           <th class="heading-item">Size</th>
                           <th class="heading-item">Quantity</th>
                           <th class="heading-item">Price</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr class="order-number">
                          <th colspan="4" class="order-number-item">
                              <strong>Order Number: 4</strong>
                              <button type="button" class="btn-red">&times;</button>
                          </th>
                       </tr>
                       <tr class="content">
                           <td class="content-item">Sehrish Waheed</td>
                           <td class="content-item">9"</td>
                           <td class="content-item">2</td>
                           <td class="content-item">BHD 50</td>
                       </tr>
                   </tbody>
               </table>
            </div>
        
        <Login />
    </div>
</template>

<script>
import NewPizza from './NewPizza';
import Login from './Login';
import {firebaseAuth} from '../firebase'

export default {
    name: "admin",
    components: {
        NewPizza,
        Login
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
          try{
            await firebaseAuth.signOut();
          }catch(err){
            alert(`error signing out ${err.message}`);
          }
        }
    }
}
</script>

<style scoped>
  .admin-wrapper{
      margin: 10px;
      background-color: #d6e0f0;
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