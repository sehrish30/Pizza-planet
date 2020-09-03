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
</style>
