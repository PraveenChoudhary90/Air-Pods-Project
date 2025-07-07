import { createSlice } from "@reduxjs/toolkit";


const mycart = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart:(state,actions)=>{

        }
    }
})


export const {Addtocart} = mycart.actions;
export default mycart.reducer;