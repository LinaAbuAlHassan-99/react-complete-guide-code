import { useEffect } from 'react';//
import { useSelector } from 'react-redux';
/*
keep our logic in reducer and use other method(sideeffect and so on)out side it
but doing it in this way cose this 
It's a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there.
the solution is in 04
*/
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  //listion to all cart and then after update i store it 
  //where ever the data(state) change i send http request
  //use selectore state a subsicribe for us so every time caert change the new suvscribe so reevaluate the comp
  const cart = useSelector((state) => state.cart);// over all cart (item ,quantity)
  

  useEffect(() => {
    // send http request to firebase
    // keep our logic inside the reducer becuse we switch the order 
    //first ew update redux store then select the update store to send the request
    fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
      method: 'PUT',//put request (store data , but the the new data aill not just store in data no it will override the existing data )// over ride the cart with the existing data
      body: JSON.stringify(cart),
    });
  }, [cart]);//cart this use effect functon reexecute when ever the cart change

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
