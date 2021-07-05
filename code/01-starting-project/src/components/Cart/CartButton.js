import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(satate => satate.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); // give () becuse its need to execute and its return action obj
    //we dispatchit
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
