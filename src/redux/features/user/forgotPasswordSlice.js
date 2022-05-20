import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../../services/user";

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      });
  },
});

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async ({ email }) => {
    const data = await UserDataService.forgotPassword(email)
      .then((res) => res.data)
      .catch((err) => err);

    return data;
  }
);

export default forgotPasswordSlice.reducer;
