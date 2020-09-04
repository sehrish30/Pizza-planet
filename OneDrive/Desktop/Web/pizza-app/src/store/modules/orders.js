import {firestoreAction} from 'vuexfire';
import {dbOrdersRef} from '../../firebase';

const state={
  orders: []
}

const mutations={
     // addOrder:(state,orders) => state.orders.push(orders)
}

// action binds between local state and firebase
// getter grabs the data 
const getters={
     numberOfOrders: state => state.orders.length,
     getOrders: state => state.orders
}

//  dbOrdersRef.orderBy('createdAt', 'desc')
const actions={
     setOrdersRef: firestoreAction(context=>{
          return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'))
      }),
      addNewOrder: async(context, order)=>{
           try{
             await dbOrdersRef.add(order)
           }
           catch(err){
             alert('Sorry there was a problem, please try again');
           }
      },
      removeOrder: async(context, id)=>{
           try{
              const order= await dbOrdersRef.doc(id);
              order.delete();
           }catch(err){
                alert(`Sorry there was a problem removing the order, ${err}`);
           }
      }
     
}


export default{
    state, 
    mutations,
    getters,
    actions
}