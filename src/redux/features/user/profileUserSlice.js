import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../../services/user";


export const profileUserSlice = createSlice({
    name: "profileUser",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(updateInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = action.payload.succes;
          state.user = action.payload.user;
        });
    },
  });
  
    


export const updateInfo = createAsyncThunk(
  "profileUser/updateInfo",
  async ({ userName, email }) => {
    const res = await fetch("http://localhost:5000/api/v2/me/update/info", {
      method: "PUT",
      body: JSON.stringify({
        name: userName,
        email: email,
      }),
      headers: { "Content-Type": "multipart/form-data" },
    });
    const data = await res.json();
    console.log("update", data);
    return data;
  }
  );
  
//   export const { clearErrors } = userSlice.actions;
  export default profileUserSlice.reducer;
  