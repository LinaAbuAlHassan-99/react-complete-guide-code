import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';//
import { getSingleQuote } from '../lib/api';//to send th actual request
import LoadingSpinner from '../components/UI/LoadingSpinner';//

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;//rather than params.quoteId

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );//true to start in loading mode

  useEffect(() => {
    sendRequest(quoteId);//want to know for witch quoteId fetch the data 
  }, [sendRequest, quoteId]);

  if (status === 'pending') {//we are loading // wating for responce
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }
// not have a quote // i need if loaded Qoute not have a text
  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
// here i have a quote 
// i use loadedQuote to output my load data
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
