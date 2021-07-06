import { useEffect } from 'react';//

import QuoteList from '../components/quotes/QuoteList';//
import LoadingSpinner from '../components/UI/LoadingSpinner';//
import NoQuotesFound from '../components/quotes/NoQuotesFound';//
import useHttp from '../hooks/use-http';//
import { getAllQuotes } from '../lib/api';//getAllQuotes get all the qutes and transfare them to array so i can use
// i want to fetch the data "GET"
const AllQuotes = () => {
  // alias loadedQuotes to accses data
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );//getAllQuotes the function , true-> start isloading state spiner pending from the start 

  useEffect(() => {
    sendRequest();//send request when ever this comp reevaluate
  }, [sendRequest]);

  if (status === 'pending') { //if still loading
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }
// not loading and have no loaded qutes or we have empty array
  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
// here no errer , done loading ,have data
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
