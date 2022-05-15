import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "newReview";

const initialState = {
  loading: null,
  success: null,
  err: null,
};
// fix object
export const newReview = createAsyncThunk(
  `${namespace}/newReview`,
  async (reviewData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/review`,
      reviewData,
      config
    );
    console.log(data);
    return data.success;
  }
);
export const newReviewSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    [newReview.pending]: (state, action) => {
      state.loading = true;
    },
    [newReview.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    [newReview.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default newReviewSlice.reducer;
