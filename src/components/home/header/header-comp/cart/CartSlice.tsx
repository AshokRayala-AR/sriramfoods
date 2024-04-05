import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../../../../utils/types/Types";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as CartItem[],
  } as CartState,
  reducers: {
    addItem: (state, action) => {
      const { itemOfferAmount, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => {
        return item.itemTitle === action.payload.itemTitle;
      });
      if (existingItemIndex === -1) {
        const amount = itemOfferAmount * quantity;
        state.items.push({ ...action.payload, quantity: 1, amount: amount });
        console.log(state.items, action.payload);
      } else {
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity++;
        existingItem.amount =
          existingItem.itemOfferAmount * existingItem.quantity;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.itemTitle !== action.payload.itemTitle
      );
    },
    emptyingCart: (state) => {
      state.items = [];
    },
    updateCartItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.itemTitle === action.payload.itemTitle) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    decrementingCartItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.itemTitle === action.payload.itemTitle) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.items = state.items.filter((item) => item.quantity !== 0);
    },
  },
});
export const {
  addItem,
  deleteItem,
  emptyingCart,
  updateCartItemQuantity,
  decrementingCartItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
