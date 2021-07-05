import { useDispatch, useSelector } from 'react-redux';
// the code in vidio 14 by all / 7 in vidios  // no need to it becuse i need to prebare the data before send it and doing this inside comp not the parfect sol (her reducer doesnt do any thing)
// i need useSelectore to select the entire cart (item,totalquantity)
// first better sol is use effect and use dispatch and the logic stil in reducer not in the comp
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
/*
the first method to handel side effect or async is to do it in componant
*/
// here  can't update by mutate becuse this is not redux
// so any update will not recicnise by redux-> cart.totalQuantity++;
const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    //make the reducer done its work and then sue useeffect here or in app file 
    //now  i will use App file(root comp)
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
