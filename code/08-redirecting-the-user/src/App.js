import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
// Redirect the user // if i visit my domai/ nothing then i dont see any page(i see the origin one) put i dont have erreor
//here we can / to welcom <Route path='/' exact>
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        // if i start nothinf '/' i will see the wlcome then rediricting to its rout the welcome 
        // from nothing i redirected to welcome  
        <Route path='/' exact>// not treded as start i need exact
            <Redirect to='/welcome' />//redirect the user to some where else
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
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
