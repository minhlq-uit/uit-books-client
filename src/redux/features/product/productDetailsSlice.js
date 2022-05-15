import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "productDetails";

const initialState = {
  loading: null,
  product: {},
  err: null,
};
export const getProductDetails = createAsyncThunk(
  `${namespace}/getProduct`,
  async (id) => {
    const { data } = await axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
    );
    console.log(data.book);
    return data.book;
  }
);
export const productDetailsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [getProductDetails.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default productDetailsSlice.reducer;
