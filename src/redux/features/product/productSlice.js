import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "product";

const initialState = {
  loading: null,
  product: {},
  isDeleted: null,
  isUpdated: null,
  err: "",
};
// export const updateProduct = createAsyncThunk(
//   `${namespace}/updateProduct`,
//   async (id, product) => {
//     // const config = {
//     //   headers: { "Content-Type": "application/json" },
//     // };
//     // const { data } = await axios.put(
//     //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
//     //   productData,
//     //   config
//     // );
//     const { data } = await axios.put(
//       `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
//       product
//     );
//     console.log(data);
//     return data.success;
//   }
// );
export const updateProduct = createAsyncThunk(
  `${namespace}/updateProduct`,
  async (productData) => {
    const { id, info } = productData;
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
      info,
      config
    );
    console.log(data);
    return data.success;
  }
);
export const deleteProduct = createAsyncThunk(
  `${namespace}/deleteProduct`,
  async (id, { rejectWithValue }) => {
    // const { data } = await axios.delete(
    //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
    // );
    await axios
      .delete(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data.message);
        return err.response.data.message;
        // return err.response.data
        // console.log(rejectWithValue(err.response.data));
        // return rejectWithValue(err.response.data);
        // (book is not found with this id)
      });
    // console.log({ data });
    // return data;
  }
);
export const productSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: {
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.isDeleted = action.payload;
      state.err = action.payload;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      // state.err = action.payload;
      console.log(action.payload);
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.err = action.payload.errorMessage;
      } else {
        state.err = action.error.message;
      }
    },
  },
});

export default productSlice.reducer;
