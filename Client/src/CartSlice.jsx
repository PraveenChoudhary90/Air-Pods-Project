import { createSlice } from "@reduxjs/toolkit";


const mycart = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart:(state,actions)=>{
            console.log(actions);
       const CartData = state.cart.filter(key=>key.id==actions.payload.id);
       if(CartData.length>=1)
        {
        alert("Product is Already Added")
       }
       else{
        state.cart.push(actions.payload);
       }
    }
}
})


export const {Addtocart} = mycart.actions;
export default mycart.reducer;