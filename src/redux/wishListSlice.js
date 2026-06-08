import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const savedList = localStorage.getItem("wishList");
  return savedList
    ? JSON.parse(savedList)
    : {
        products: [],
        totalItems: 0,
      };
};

const initialState = getInitialState();

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action) {
      let newItem = action.payload;
      if (!state.products.some((item) => item.id == newItem.id)) {
        state.products.push(action.payload);
        state.totalItems += 1;
      }
    },

    removeFromWishList(state, action) {
      let removeItemId = action.payload;
      state.products = state.products.filter((item) => item.id != removeItemId);
      state.totalItems -= 1;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
