import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

import {cartActions} from "../store/cartVisible";
import { UseSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartBadge=useSelector(state => state.cart.totalQuantity)


  const cartVisibleHandler = () => {
    dispatch(cartActions.cartVisible());
  };
  return (
    <button className={classes.button} onClick={cartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartBadge}</span>
    </button>
  );
};

export default CartButton;
