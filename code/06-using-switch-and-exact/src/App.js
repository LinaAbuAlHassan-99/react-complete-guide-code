import { Route, Switch } from 'react-router-dom';/// switch this to not active all the all route at the same time 
//just what i want to active

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch> // the first match(start) will render it
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>// will render this when click any products beacuse the start path of them is /products/
          //just i want to structer out path just (i want the pefor path then another path come after it)
          //to fix it i can change the order  
          <Products />
          </Route>
          ///products/ its the start
          <Route path='/products/:productId'>
          //or i can add exact prop so only if i had the exact match load it
          // i want from products to onether page 
          
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
