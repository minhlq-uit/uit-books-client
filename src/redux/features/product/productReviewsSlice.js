import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "allReview";

const initialState = {
  loading: null,
  reviews: [],
  err: null,
};
// fix object
export const getAllReviews = createAsyncThunk(
  `${namespace}/getAllReviews`,
  async (id) => {
    const { data } = await axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/reviews?id=${id}`
    );
    console.log(data.reviews);
    return data.reviews;
  }
);
export const productReviewsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    [getAllReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    [getAllReviews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default productReviewsSlice.reducer;
