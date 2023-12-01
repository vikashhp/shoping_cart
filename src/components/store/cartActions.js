import { cartActions } from "./cartVisible";
import { cartManagerActions } from "./cartManager";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://expensetracker-2cf7d-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could Not Fetch Data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
   
      dispatch(cartManagerActions.replaceCart(cartData))
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Failed to Send Data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart Data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://expensetracker-2cf7d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending request failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Successful...",
          message: "Successfully Sent data.",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Failed to Send Data",
        })
      );
    }
  };
};
