import {firestoreAction} from 'vuexfire'
import {dbMenuRef} from '../../firebase'
const state={
  menuItems: []
}

const getters={
     getMenuItems: state=> state.menuItems
}

const actions={
  // wrap it in firebase action. This wraps action so we can use vuefire.
  // keep data in sync and bind with menuItems state
  // it doesnot change state it just binds dispatch in App.vue
  // addMenu is dispatched from newPizza.vue
  setMenuRef: firestoreAction(context=>{
      return context.bindFirestoreRef('menuItems', dbMenuRef)
  }),
  addMenuItem: async(context, pizza)=>{
    try{
      await dbMenuRef.add(pizza);
    }catch(err){
         alert(`Err creating new pizza ${err}`)
    }
},
removeMenuItem: async(context, id)=>{
  try{
  const item = await dbMenuRef.doc(id);
  item.delete();
  }
  catch(err){
    alert(`Error removing menu item, ${err}`)
  }
}

}

export default{
    state,
    getters,
    actions
}