import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../../services/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = action.payload.success;
        state.user = action.payload.user;
        state.error = action.payload.message;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(registerRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = action.payload.success;
        state.user = action.payload.user;
        state.error = action.payload.message;
      })
      .addCase(logoutRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.status = action.payload.message;
      });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async ({ email, password }) => {
    const data = await UserDataService.login(email, password)
      .then((res) => res.data)
      .catch((err) => err);
    // const data = await res.json();
    console.log(data);
    return data;
  }
);

export const registerRequest = createAsyncThunk(
  "user/registerUserRequest",
  async ({ name, email, password }) => {
    const res = await fetch("http://localhost:5000/api/v2/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
  }
);

export const logoutRequest = createAsyncThunk(
  "user/logoutRequest",
  async () => {
    const res = await fetch("http://localhost:5000/api/v2/logout");
    const data = await res.json();
    console.log("logout", data);
    return data;
  }
);

// export const updateInfo = createAsyncThunk(
//   "profileUser/updateInfo",
//   async ({ userName, email }) => {
//     const res = await fetch("http://localhost:5000/api/v2/me/update/info", {
//       method: "PUT",
//       body: JSON.stringify({
//         name: userName,
//         email: email,
//       }),
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     const data = await res.json();
//     console.log("update", data);
//     return data;
//   }
// );

export const { clearErrors } = userSlice.actions;
export default userSlice.reducer;
