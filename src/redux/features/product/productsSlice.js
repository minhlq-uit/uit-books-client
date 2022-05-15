import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "products";

const initialState = {
  loading: null,
  products: [],
  productsCount: 0,
  resultPerPage: 0,
  err: null,
};
// fix object
export const getProduct = createAsyncThunk(
  `${namespace}/getProduct`,
  async (
    keyword = "",
    currentPage = 1,
    price = [0, 25000],
    category,
    ratings = 0
  ) => {
    const { data } = await axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}`
    );
    console.log(data);
    return data;
  }
);
export const productsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
