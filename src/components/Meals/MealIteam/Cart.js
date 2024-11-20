import Model from "../../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  console.log(cartCtx.items[0]);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  let totalAmt = 0;
  cartCtx.items.forEach((item) => {
    totalAmt = totalAmt + item.price * item.itemAmt;
  });
  return (
    <Model onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmt.toFixed(2)}</span>
      </div>
      <div>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
