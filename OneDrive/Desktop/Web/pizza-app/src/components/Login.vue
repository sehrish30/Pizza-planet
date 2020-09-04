<template>
    <div class="login-wrapper">
      <p class="admin-heading">Login for admin privilges!</p>
        <form>
           <div>
             <label for="email">Email address</label>
             <input type="email" v-model="email" id="email" placeholder="Enter email"/>
           </div>
           <div>
             <label for="password">Password</label>
             <input type="password" v-model="password" id="password" placeholder="Enter password"/>
           </div>
           <button type="button" class="add-button" @click.prevent='signIn'>Sign in</button>
        </form>
    </div>
</template>
<script>

import {store} from '../store/store'

export default {
    name: 'login',
    data(){
      return{
          email: "",
          password: ""
      }
    },
    methods: {
        signIn(){
          // user is the payload
          const user ={
            email: this.email,
            password: this.password
          }
          store.dispatch('signIn', user)
        }
    }
}
</script>

<style scoped>
 .admin-heading{
   color: #40a8c4;
   font-family: 'Niconne', cursive;
   font-size: 2.5rem;
 }
</style>