import { createSlice } from '@reduxjs/toolkit'
import Swal  from 'sweetalert2';

const initialState = {
  cartItems: [],

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state, action) =>{
      const existingItem = state.cartItems.find(x => x._id === action.payload._id);
      if(!existingItem){
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book saved successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      }else{
        Swal.fire({
          title: "Book already exists",
          icon: "error",
          draggable: true
        });
      }
    },
    removeFromCart: (state, action) =>{
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state) =>{
      state.cartItems = [];
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your cart has been cleared",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;