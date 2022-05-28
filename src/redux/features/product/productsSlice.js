import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";

const namespace = "products";

const initialState = {
  products: [],
};
// fix object
export const getProduct = createAsyncThunk(
  `${namespace}/getProduct`,
  async ({
    keyword = "",
    currentPage = 1,
    price = [0, 1000000],
    category,
    ratings = 0,
    author = "",
    publisher = "",
  }) => {
    // const { data } = await axios.get(
    //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}`
    // );
    // console.log(data);
    // return data;
    const data = await ProductDataService.getAllBook(
      keyword,
      currentPage,
      price,
      category,
      ratings,
      author,
      publisher
    )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log(err.response.data);
        return err.response.data;
      });
    return data;
  }
);
export const productsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    // resetState: (state, action) => {
    //   state.success = false;
    // },
  },
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.productsCount = action.payload.productsCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredProductsCount = action.payload.filteredProductsCount;
      state.error = action.payload.message;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors } = productsSlice.actions;

export default productsSlice.reducer;