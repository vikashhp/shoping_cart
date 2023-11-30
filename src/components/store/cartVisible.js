import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = { isVisible: false, notification: false };

const cartVisibleState = createSlice({
  name: "cartVisible",
  initialState: cartInitialState,
  reducers: {
    cartVisible(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const cartActions = cartVisibleState.actions;
export default cartVisibleState.reducer;
