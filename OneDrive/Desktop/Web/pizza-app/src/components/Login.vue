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

 label{
   color: #07689f;
   font-family: 'Libre Baskerville', serif;
 }

 .login-wrapper {
    margin: 10px;
    background-color: #e0ece4;
    text-align: center;
}

 form {
    display: block;
    margin-top: 0em;
}

 input, textarea {
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
    background: transparent;
    border: solid 1px #f79e38;
    font-family: 'Libre Baskerville', serif;
    color: #07689f;
}

.add-button {
    background: #ffc93c;
    border: 0;
    border-right: 5px solid #07689f;
    border-left: 5px solid #07689f;
    font-family: 'Libre Baskerville', serif;
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    cursor: pointer;
    color: #07689f;
    font-size: 1.5rem;
    margin: 1rem 0;
    transition: all .5s ease-in;
    outline: none;
}
</style>