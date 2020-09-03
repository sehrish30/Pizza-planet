<template>
  <div id="app">
      <app-header />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link>|
      <router-link to="/contact">Contact us</router-link>|
      <router-link to="/about">About us</router-link> -->
    </div>
    <router-view/>
    <div class="info-block-wrapper">
      <router-view name="ordering-guide"></router-view>
      <router-view name="delivery"></router-view>
      <router-view name="history"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>

<style>
 body{
     font-family: 'Libre Baskerville', serif;
     margin: 0;
     font-size: 1.5rem;
 }

 a{
     text-decoration: none;
     color: inherit;
 }

 ul{
     display: flex;
     justify-content: center;
     margin: 0;
     padding: 10px 0;
     background: #f1e6da;
 }

 li{
     list-style: none;
 }
 span{
   margin: 0 5px;
 }

 .info-block-wrapper{
   display: flex;
   flex-direction: column;
   background: #e0ece4;
   background-image: url("./assets/images/bg.png");
   
 }

 .info-block{
    text-align: center;
    padding: 5rem;
    margin: 10px auto;
    color: #ffc93c;
    font-family: 'Niconne', cursive;
 }

 .info-block-content p{
   font-size: 2rem;
 }

 .info-block h3{
   text-align: center
 }

 .info-block-content{
   display: flex;
   align-items: center;
 }

 .info-block img{
   width: 30%;
 }

 @media (min-width: 900px){
   .info-block{
     max-width: 100%;
   }

   .info-block-wrapper{
     flex-direction: row;
   }

   .info-block:nth-child(2){
   margin:10px;
 }

 .info-block:nth-child(2) img{
   order: -1;
 }

   .info-block-content{
     flex-direction: column;
     align-items: center;
   }

   .info_block img{
     max-width: 100%;
   }
 }
</style>
