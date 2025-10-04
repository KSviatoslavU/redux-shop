import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const inCart = state.cart.find(
        (item) => item.id === action.payload.product.id
      );

      if (inCart) {
        inCart.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    changeQuanity: (state, action) => {
      const changeItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (changeItem) {
        changeItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, changeQuanity } = cartSlice.actions;
export default cartSlice.reducer;
