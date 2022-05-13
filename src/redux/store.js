import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import favouriteSlice from "./features/favourite/favouriteSlice";
import orderSlice from "./features/order/orderSlice";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favourite: favouriteSlice,
    order: orderSlice,
    product: productSlice,
    user: userSlice,
  },
});
