// for large code lazy is very good for small its optinal

import React, {Suspense} from 'react';//
import { Route, Switch, Redirect } from 'react-router-dom';
//all this code loaded even if i route only when match but i import this filse in advance
//all this files loaded when bundel up
//we download all this code with its copm

//import AllQuotes from './pages/AllQuotes';
//import QuoteDetail from './pages/QuoteDetail';
//import NewQuote from './pages/NewQuote';// we want to loadit only when the user visit this eoute
//import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';



//we pass a function and pass the path throw import
const NewQuote = React.lazy(()=> import('./pages/NewQuote'));//executed by react when its needed
//download this code only when needed 
//this download tacke time so react can't apple to continue we can't download the comp untill downloade completed
//we need to define fallback    <Suspense fallback={}>
//fall back need jsx code
// this div will shown as a falback if loading the comp tacke time

const QuoteDetail = Reac.lazy(()=>import('./pages/QuoteDetail'));
const NotFound= React.lazy(()=>import('./pages/NotFound'));
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'));

//define our main route
function App() {
  return (
    <Layout>
    <Suspense fallback={<div className='centered'> <LoadingSpinner/></div>}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
