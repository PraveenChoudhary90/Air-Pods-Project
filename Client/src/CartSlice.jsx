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
       

    },

    RemoveProduct:(state, actions)=>{
        state.cart=state.cart.filter(key=>key.id!=actions.payload.id);
        alert("Your Added Product is Deleted Successfully");
  },
}
});
    


export const {Addtocart,DecrementPro, IncrementPro ,RemoveProduct} = mycart.actions;
export default mycart.reducer;