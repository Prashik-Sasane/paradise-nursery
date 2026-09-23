import React from "react";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: []
};


const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    // Add a plant to the cart
    addToCart: (state, action) => {

      const product = action.payload;


      const existingItem =
        state.items.find(
          (item) =>
            item.id === product.id
        );


      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({

          ...product,

          quantity: 1

        });

      }

    },


    // Remove a plant completely
    removeFromCart: (state, action) => {

      state.items =
        state.items.filter(
          (item) =>
            item.id !== action.payload
        );

    },


    // Increase quantity
    increaseQuantity: (state, action) => {

      const item =
        state.items.find(
          (item) =>
            item.id === action.payload
        );


      if (item) {

        item.quantity += 1;

      }

    },


    // Decrease quantity
    decreaseQuantity: (state, action) => {

      const item =
        state.items.find(
          (item) =>
            item.id === action.payload
        );


      if (
        item &&
        item.quantity > 1
      ) {

        item.quantity -= 1;

      }

    },


    // Clear entire cart
    clearCart: (state) => {

      state.items = [];

    }

  }

});


export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;


export default cartSlice.reducer;