import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart
    ? JSON.parse(savedCart)
    : {
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
        totalItems:0
      };
};

const initialState = getInitialState();

const cartSlice=createSlice({
  name:"cart",
  initialState,
  reducers:{
    AddToCart(state,action){
      let newItem=action.payload
      state.totalPrice+=newItem.price
      const existingItem=state.products.find(item=>item.id==newItem.id)
      if(existingItem){
        existingItem.count+=1
      }
      else{
        state.products.push({...newItem,count:1})
        state.totalQuantity+=1
      }
      state.totalItems+=1

    },

    RemoveFromCart(state,action){
      let removeItem=action.payload
      let item=state.products.find(it=>it.id==removeItem.id)
      state.products = state.products.filter(it => it.id !== removeItem.id);
      state.totalQuantity-=1
      state.totalItems-=item.count
      state.totalPrice-=item.price*item.count
    },

    DecrementCount(state,action){
      let decrementItem=action.payload
      let item=state.products.find(it=>it.id==decrementItem.id)
      item.count-=1
      state.totalPrice-=item.price 
      if(item.count===0){
        state.products = state.products.filter(it => it.id !== decrementItem.id);
        state.totalQuantity-=1
      }
      
      state.totalItems-=1
      
    },

    ResetCart: () => ({
      products: [],
      totalPrice: 0,
      totalQuantity: 0,
      totalItems: 0
    }),



  }
})

export const {AddToCart,RemoveFromCart,DecrementCount,ResetCart}=cartSlice.actions
export default cartSlice.reducer