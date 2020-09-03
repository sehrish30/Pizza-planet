<template>
    <div class="background">
        <div class="background-overlay">
            <h2>Tired of waiting For a meal?</h2>
            <img src="../assets/images/roller.png">
            <h3>Feeling hungry?</h3>
            <button class="order-btn">Order Now!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>

<style>
h2,h3{
    margin: 2%;
    font-family: 'Libre Baskerville', serif;
    color: #07689f;
}

.background{
    background: url("../assets/images/dough.jpg") center;
    background-size: cover;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
}

.background-overlay{
    display: flex;
    flex-direction: column;
    background: #a2d5f2;
    opacity: .8;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
}

.background-overlay > img{
    max-width: 15%;
}

.order-btn{
   background: #ffc93c;
   border-radius: 3px;
   margin-bottom: 10px;
   padding: 10px;
   cursor: pointer;
   color: #07689f;
   border: none;
   border-left: 4px solid #07689f;
   border-right: 4px solid #07689f;
   transition: all .5s ease-in;
   width: 15rem;
   font-size: 1.5rem;
   font-family: 'Niconne', cursive;
   letter-spacing: .1rem;
}

.order-btn:hover{
    background: #07689f;
    color: #ffc93c;
}

</style>

