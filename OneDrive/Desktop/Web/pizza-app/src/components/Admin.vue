<template>
    <div class="admin-wrapper">
       <AdminContent v-if="currentUser!==null" />
      <Login v-if="currentUser == null" />
    </div>
</template>

<script>
import Login from './Login';
import {mapGetters} from 'vuex';

const AdminContent =()=> import('./AdminContent');

export default{
    name: 'admin',
    components: {
        Login,
        AdminContent
    },
    computed: {
        ...mapGetters(["currentUser"]) // getters come from store modules
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


  

</style>