import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "newProduct";

const initialState = {
  loading: null,
  products: {},
  success: null,
  err: null,
};

export const createProduct = createAsyncThunk(
  `${namespace}/createProduct`,
  async (productData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/new`,
      productData,
      config
    );
    console.log(data);
    return data;
  }
);
export const newProductSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    //createProduct
    [createProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.book;
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default newProductSlice.reducer;
