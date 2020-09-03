<template>
<header>
    <div class="header_logo">
       <img src="../assets/images/planet.png" alt="pizza planet">
       <h1 href="/">PIZZA PLANET</h1>
    </div>
    <nav>
        <ul>
 
                <router-link :to="{name: 'homeLink'}" tag="li">
                  <a>Home</a>
                </router-link>
                <!-- <a href="/">Home</a> -->
            <span>~</span>
                <router-link :to="{name: 'menuLink'}" tag="li">
                  <a>Menu</a>
                </router-link>
                <!-- <a href="/menu">Menu</a> -->

            <span>~</span>
                <router-link :to="{name: 'contactLink'}" tag="li">
                  <a>Contact us</a>
                </router-link>
                <!-- <a href="/contact">Contact us</a> -->

            <span>~</span>
                <router-link :to="{name: 'aboutLink'}" tag="li">
                  <a>About us</a>
                </router-link>
                <!-- <a href="/about">About us</a> -->

        </ul>
    </nav>
</header>
</template>

<script>
export default {
    name: 'appHeader',
    // data(){
    //     return{
    //         homeLink: "/",
    //         menuLink: "/menu",
    //         contactLink: "/contact",
    //         aboutLink: "/about"
    //     }
    // }
}
</script>

<style scoped>
a{
    color: #ff4b5c;
}

span{
    color: #056674;
}

h1{
    font-size: 1.3rem;
    font-family: 'Libre Baskerville', serif;
    color: #ea5455;
}

.header_logo{
    background-image: radial-gradient( circle farthest-corner at 3.1% 8.2%,  rgba(248,250,107,1) 0%, rgba(238,148,148,1) 98.2% );
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    }
.header_logo img{
    max-width: 25vw;
    }   
ul{
    padding: 10px 0;
}

li{
    display: inline-block;
}

@media screen and(min-width: 900px){
    .header_logo img{
    max-width: 20vw;
    } 
}

</style>