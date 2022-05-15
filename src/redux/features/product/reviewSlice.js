import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "review";

const initialState = {
  loading: null,
  isDeleted: null,
  err: null,
};
// fix object
export const deleteReviews = createAsyncThunk(
  `${namespace}/deleteReviews`,
  async (idData) => {
    const { reviewId, bookId } = idData;
    const { data } = await axios.delete(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/reviews?id=${reviewId}&bookId=${bookId}`
    );
    console.log(data);
    return data.success;
  }
);
export const reviewSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    [deleteReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    [deleteReviews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default reviewSlice.reducer;
