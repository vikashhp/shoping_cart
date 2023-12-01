import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData,fetchCartData} from "./components/store/cartActions";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";

let isinitial=true;

function App() {
  const cartVisible = useSelector((state) => state.cartVisible.isVisible);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.cartVisible.notification);

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
   

    if(isinitial){
      isinitial=false
      return;
      
    }
    dispatch(sendCartData(cart))

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
