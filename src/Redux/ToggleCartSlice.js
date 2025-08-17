import { createSlice } from "@reduxjs/toolkit";


const toggleCart=createSlice({
    name:'toggleCart',
    initialState:{
        isOpen:false,
    },
    reducers:{
      closeCart:(state)=>{state.isOpen=false},
      openCart:(state)=>{state.isOpen=true}
    }
});
export const {closeCart,openCart} =toggleCart.actions;
export default toggleCart.reducer;