import { useParams,Route } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
// i want to have data
const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Maximilian", text: "Learning React is great!" },
  ];
const QuoteDetail = () => {
  const parms = useParams();
  const quote =DUMMY_QUOTES.find(quote =>quote.id===parms.qouteId);
 //if i dont have a quote for id
  if (!quote)
  {
      return<p>No Quote Found!</p>
  }
  // <Route path={`/quotes/${parms.qouteId}/comments`}> i want to access this comment when i go from quotes to some id then the comment
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <p>{parms.qouteId}</p>
      <Route path={`/quotes/${parms.qouteId}/comments`}>
      <Comments/>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
