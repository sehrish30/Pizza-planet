<template>
    <form>
        <h3>Add new pizza:</h3>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="newPizza.name"/>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea type="text" id="description"  v-model="newPizza.description" rows="5"></textarea>
        </div>
        <p>
         <strong>Option 1:</strong>
        </p>
        <div class="form-group">
          <label for="size1">Size (")</label>
          <input type="text" id="size1" v-model="newPizza.options[0].size"/>
        </div>
        <div class="form-group">
          <label for="price1">Price</label>
          <textarea type="text" id="price1" v-model="newPizza.options[0].price"></textarea>
        </div>

         <p>
         <strong>Option 2:</strong>
        </p>
        <div class="form-group">
          <label for="size2">Size (")</label>
          <input type="text" id="size2" v-model="newPizza.options[1].size">
        </div>
        <div class="form-group">
          <label for="price2">Price</label>
          <input type="text" id="price2" v-model="newPizza.options[1].price">
        </div>
        <button type="button" @click="add" class="add-button">Add</button>
    </form>
</template>

<script>

import {store} from '../store/store'


export default {
    name: 'addNewPizza',
    data(){
        return{
            newPizza: {
                'name': 'Eg. Margherita',
                'description': 'Eg. A delicious tomato based pizza topped with mozzarella',
                'options': [{
                    'size': 9,
                    'price': 6.95
                }, {
                    'size': 12,
                    'price': 10.95
                }]
            }
        }
    },
    methods: {
        add(){
           store.dispatch('addMenuItem', this.newPizza)
        }
    }
}
</script>

<style>
.form-group{
    margin: 10px 0;
}

label{
    display: block;
    margin: 0 0 10px 0;
}

input, textarea{
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
    background: transparent;
    border: solid 1px #f79e38;
    font-family: 'Libre Baskerville', serif;
    color: #07689f;
}

.add-button{
    background: #ffc93c;
    border:0;
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
     outline:none;
}

input:focus, textarea:focus{
  background: #e8ded2;
  border: solid 1px #f79e38;
  outline: none;
}

.add-button:hover{
    color: #ffc93c;
    background-color:#07689f; 
    
}

label{
   color: #07689f; 
   font-family: 'Libre Baskerville', serif;
}
strong{
    font-family: 'Niconne', cursive;
    color: #515070;
    font-size: 1.5rem;
}

</style>