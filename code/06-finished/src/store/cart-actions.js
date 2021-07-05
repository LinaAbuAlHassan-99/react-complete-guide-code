/*
ction creater to fetch data(send retrive data not just store it)
i can do this as function in cart-slice but the file become begger so i seprate it
and i tack store data function with me
*/
import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
// fetch the data
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json'
      );//get request

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();//here is the data

      return data;// i return it here  becuse fetchData is separate nested function so i can use the return data where i call it
    };

    try {
      const cartData = await fetchData();//cartData contain the returned data // we don't need to transfare this data to what we have becuse already it has the same shape becuse i use the data i send it
     // and that becuse we use put not post so the same obj will send not changed
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [], // undefind i need to make sure not end with undefind item ensted [empty array] when i delete or data and retch it
          totalQuantity: cartData.totalQuantity,
        })//pass my cartData as a payload (cartData) just this
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};
// store the data
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({// insted of taking the all obj i need to not stre the changed props
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
