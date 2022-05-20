import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
