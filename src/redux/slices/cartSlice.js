import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, item) => {
        return sum + item.count;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
        state.totalCount = state.items.reduce((sum, item) => {
          return item.count + sum;
        }, 0);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
