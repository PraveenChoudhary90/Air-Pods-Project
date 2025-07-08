import { createSlice } from "@reduxjs/toolkit";


const mycart = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart:(state,actions)=>{
       console.log(actions.payload);
       const CartData = state.cart.filter(key=>key.id===actions.payload.id);
       if(CartData.length>=1)
        {
        alert("Product is Already Added")
       }
       else
       {
        state.cart.push(actions.payload);
       }
    },
    IncrementPro:(state,actions)=>{
     for(let i =0;i<state.cart.length;i++){
        if(state.cart[i].id==actions.payload.id){
            state.cart[i].qty++;
        }
     }

    },

    DecrementPro:(state,actions)=>{
    for(let i =0;i<state.cart.length;i++){
    if(state.cart[i].id==actions.payload.id){
        if(state.cart[i].qty<=1){
            alert("not less then one")
        }
        else{
            state.cart[i].qty--;
        }
    }

}
     

    },

    RemoveProduct:(state, actions)=>{
        state.cart=state.cart.filter(key=>key.id!=actions.payload.id);
        alert("Your Added Product is Deleted Successfully");
  },
  cartEmpty:(state,actions)=>{
    
    state.cart=[]

  }
}

       
});
    


export const {Addtocart,DecrementPro, IncrementPro ,RemoveProduct,cartEmpty} = mycart.actions;
export default mycart.reducer;