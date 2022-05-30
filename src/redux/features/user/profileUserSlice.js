import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../../services/user";

export const profileUserSlice = createSlice({
  name: "profileUser",
  initialState: {},
  reducers: {
    clearIsUpdated: (state, action) => {
      state.isUpdated = null;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
    clear: (state, action) => {
      state.isUpdated = null
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload.success;
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  },
});

export const updateInfo = createAsyncThunk(
  "profileUser/updateInfo",
  async ({ name, email }) => {
    const data = await UserDataService.updateInfo(name, email)
      .then((res) => res.data)
      .catch((err) => err);
    return data;
  }
);

export const updatePassword = createAsyncThunk(
  "profileUser/updatePassword",
  async ({ oldPassword, newPassword, confirmPassword }, { rejectWithValue }) => {
    try {
      const response = await UserDataService.updatePassword(oldPassword, newPassword, confirmPassword)
      return response.data;
    } catch (err) {
      if(!err.response) {
        throw err
      }
      console.log(err.response.data)
      return rejectWithValue(err.response.data)
    }
  }
);

export const { clear, clearIsUpdated, clearErrors } = profileUserSlice.actions;
export default profileUserSlice.reducer;
