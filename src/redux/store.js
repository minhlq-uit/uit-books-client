import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import favouriteSlice from "./features/favourite/favouriteSlice";
import orderSlice from "./features/order/orderSlice";
import allOrdersSlice from "./features/order/allOrdersSlice";
import orderDetailsSlice from "./features/order/orderDetailsSlice";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";
import forgotPasswordSlice from "./features/user/forgotPasswordSlice";
import profileUserSlice from "./features/user/profileUserSlice";
import allUsersSlice from "./features/user/allUsersSlice";
import userDetailsSlice from "./features/user/userDetailsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favourite: favouriteSlice,
    order: orderSlice,
    allOrders: allOrdersSlice,
    orderDetails: orderDetailsSlice,
    product: productSlice,
    user: userSlice,
    profileUser: profileUserSlice,
    forgotPassword: forgotPasswordSlice,
    allUsers: allUsersSlice,
    userDetails: userDetailsSlice
  },
});
