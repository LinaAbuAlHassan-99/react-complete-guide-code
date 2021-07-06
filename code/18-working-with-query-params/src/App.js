import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
// quary parameter find it at the end of url
// in some path i found this ? and after it i can pass some data(parameter)
// The regular parameter like /:quoteId arr manditory only if we have id (this segmant /:quoteId)
//where quary parameter are optinal and its not affect the route match but if found a match will has access the quary data and could change the pehavier
// ex of changing pehavire 
/*
might implemant sort my quote by id as assending or desending
save if i sort it assending or dessinding in url if the user use the url without the quary will get the dufult (unsort page)
*/
// i first start in QuteList.js

function App() {


  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
