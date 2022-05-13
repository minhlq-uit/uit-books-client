import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {},
});

export default favouriteSlice.reducer;
