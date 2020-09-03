<template>
    <div class="contact-wrapper">
        <h4>Contact</h4>

        <address>
          <strong>Pizza Planet</strong>
          <br> Manama Street 3 
          <br> Adliya
          <br> Phone (+973) 31234567
        </address>
        <address>
          <strong>
          <br>
          <p>contact@pizzaplanet.com</p>
          </strong>
        </address>
    </div>
</template>

<script>
export default {
    name: 'contact'
}
</script>

<style scoped>
     .contact-wrapper{
         text-align: center;
         background: #d6e0f0;
         
         height: 100vh;
         margin: 10px auto;
         padding: 10px;
         color: #07689f;
     }

     h4{
       color: #ffc93c;
       text-decoration: underline;
     }
</style>