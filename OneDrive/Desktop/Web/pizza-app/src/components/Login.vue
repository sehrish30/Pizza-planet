<template>
    <div class="login-wrapper">
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