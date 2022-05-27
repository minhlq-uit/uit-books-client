import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import favouriteSlice from "./features/favourite/favouriteSlice";
import orderSlice from "./features/order/orderSlice";
import newProductSlice from "./features/product/newProductSlice";
import newReviewSlice from "./features/product/newReviewSlice";
import productDetailsSlice from "./features/product/productDetailsSlice";
import productReviewsSlice from "./features/product/productReviewsSlice";
import productSlice from "./features/product/productSlice";
import productsSlice from "./features/product/productsSlice";
import reviewSlice from "./features/product/reviewSlice";
import userSlice from "./features/user/userSlice";
import forgotPasswordSlice from "./features/user/forgotPasswordSlice";
import profileUserSlice from "./features/user/profileUserSlice";
import newsProductsSlice from "./features/product/newsProductsSlice";
import popularProductsSlice from "./features/product/popularProductsSlice";
import productsAdminSlice from "./features/product/productsAdminSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favourite: favouriteSlice,
    order: orderSlice,
    products: productsSlice,
    product: productSlice,
    productsAdmin: productsAdminSlice,
    newProduct: newProductSlice,
    newsProducts: newsProductsSlice,
    popularProducts: popularProductsSlice,
    productDetails: productDetailsSlice,
    newReview: newReviewSlice,
    productReviews: productReviewsSlice,
    review: reviewSlice,
    user: userSlice,
    profileUser: profileUserSlice,
    forgotPassword: forgotPasswordSlice,
  },
});
