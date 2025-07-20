import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
  loading:true,
  products:[],
  error:null
}

export const fetchProducts=createAsyncThunk('products/fetchProducts',async(_,thunkAPI)=>{
  try {
    let response= await fetch("https://fakestoreapi.com/products")
    if(!response.ok){
      return thunkAPI.rejectWithValue("Failed to fetch products");
    }
    response=await response.json()
    return response
  } 
  catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  

})



const productSlice=createSlice({
  name:"products",
  initialState,
  reducers:{

  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})


export default productSlice.reducer