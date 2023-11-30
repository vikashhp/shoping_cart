import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "./components/store/cartVisible";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";

let isinitial=true;

function App() {
  const cartVisible = useSelector((state) => state.cartVisible.isVisible);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.cartVisible.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart Data...",
        })
      );
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

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Successful...",
          message: "Successfully Sent data.",
        })
      );
    };

    if(isinitial){
      isinitial=false
      return;
      
    }

    sendCartData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Failed to Send Data",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <Fragment>
      <Layout>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
