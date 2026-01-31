import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"
import cartSlice from "./cartSlice";
import wishListSlice from "./wishListSlice";

export const store=configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice,
    wishList:wishListSlice
  }
})