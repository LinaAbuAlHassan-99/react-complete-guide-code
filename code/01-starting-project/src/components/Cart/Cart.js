import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // i need state to render the chco out list only when button cliked
  const [orderCheck, setOrderCheck] = useState(false);
  // he name it [isChecout, setIsCheckout]

  // i want when i submit the order clear and the form clear and message tel the user that sumited good to the server
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setOrderCheck(true);
  };
  //userData come from checkout form
  const sumitOrderHandler = async (userData) => {
    // i want when i submit the order clear and the form clear and message tel the user that sumited good to the server
    setisSubmitting(true);
    // in reality i need the error handler so i need await and astinc so const and throw and so on
    await fetch("https://react-http-6b4a6.firebaseio.com/meals.json", {
      method: "POST",
      body: JSON.stringify({ user: userData, orderItems: cartCtx.items }),
    });
    setisSubmitting(false);
    setDidSubmit(true);
    //to clear cart when i submit i change the 2 file in store directory
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  // just when i click on order button i want this form to appere Checkout
  // form to render our data <Checkout/>
  // i want to hide order and Close button when i click oreder so i use{}
  /*
  {!orderCheck &&
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>}
*/ //Or
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {orderCheck && (
        <Checkout onConfirm={sumitOrderHandler} onCansel={props.onClose} />
      )}
      {!orderCheck && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sendeing order data...</p>;
  const didSubmitModalContent = (
    <Rect.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Rect.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
