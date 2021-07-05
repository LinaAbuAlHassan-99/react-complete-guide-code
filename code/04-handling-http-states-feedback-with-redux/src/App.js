import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';//comp
// to not see the notification when just the  pagr load but when i add something tomy card
let isInitial = true;//if initial i don't want to send card data(cart reqest)

function App() {
  const dispatch = useDispatch();
   
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart);
  // i want to use the notifivation here
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      // when i start sendeing the data, end sending(done) , have erreor i want to dispatch notifiction action
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
     
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        // i can dispatch error here but this not geniric 
        /*
        //throw new Error('Sending cart data failed.');
         dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
         */
        throw new Error('Sending cart data failed.');
      }
//done sending the data
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };
//to check if it initial i don't want to send my card data 
    if (isInitial) {
      isInitial = false;
      return;
    }
//execute this function here and since it return promise i can use .catch
    sendCartData().catch((error) => {
      //have error
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch]);// dispatch is a dependancy (create by useDespatch) but react redux make sure that this will never change so only cart will make use effect re evaluated


  return (
    <Fragment>
    // if i hane notification i want to render it 
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
