import { configureStore } from "@reduxjs/toolkit";
import cartVisible from "./cartVisible";
import cartSlice from "./cartManager";

const store = configureStore({
  reducer: { cartVisible: cartVisible, cart: cartSlice },
});

export default store;
