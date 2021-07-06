import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';//

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();//return obj
  const params = useParams();

  //console.log(match);// i found the path as defined by us for react router /url :actual url /parms
  
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }
// i want to load the comment by link not manualy 
//to={`/quoted/${params.quoteId}/coments}  the current url id then comment and becuse the current url id is dynamic i need dynamic here
//i add nested routing so if i am in comment i want to show load comment else not show //to={`/guoted/${params.quoteId} exact}
// use url to conditanaly route some page rather than use state

// to make routing more flixable 
//in previous if i change the route path in one place i need to change it in any other place 
// so i use useRouteMatch hoc
//path has the dynamic one
//{match.path} rather than /quoted/${params.quoteId} becuse match pring it to us

//url has the exact id
//to={`${match.url}/comments`}>  becuse i use nested route so less work   

return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
