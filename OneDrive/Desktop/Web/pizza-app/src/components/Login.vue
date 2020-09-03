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

import {firebaseAuth} from '../firebase'


export default {
    name: 'login',
    data(){
      return{
          email: "",
          password: ""
      }
    },
    methods: {
        async signIn(){
          try{
            await firebaseAuth.signInWithEmailAndPassword(
                this.email,
                this.password
            )
          }catch(err){
            const errorCode= err.code;
            const errorMessage = err.message;

            if(errorCode === 'auth/wrong-password'){
                alert('Incorrect password');
            }else{
                alert(errorMessage)
            }
          }
        }
    }
}
</script>