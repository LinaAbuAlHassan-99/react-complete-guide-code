// install this npm install react-router-dom
import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
//Dynamic route so depend on what i click i want the product page change
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        // to render it i can use this but becuse we have differant produc i
        want to load this page with differant data /*
        <Route path="/product-detail/:productId">// we can have mor than one /:another sigmant
          // dynamic path /: (any name i want) idintifer (sigmant) and i use it as a key
          //our-domain.com/product/detail/any value (dynamic)
          // what ever i write after / it will render in the page if i render it in the page <P>{params.productId}</P> like this in ProductDetail
          <ProductDetail />
        </Route>
        */
      </main>
    </div>
  );
}

export default App;

//our-domain.com/welcome then <Route path='/welcome'/> shold be active
//(shulde tel hem what will active)<Welcome/>
// will render welcome only if our path have welcome
//our-domain.com/welcome => load welcome componant A
//our-domain.com/products => load products  componant B

//conditinaly render the componant
//our-domain.com/ => load(render) componant A
//our-domain.com/products => load(render) componant B
