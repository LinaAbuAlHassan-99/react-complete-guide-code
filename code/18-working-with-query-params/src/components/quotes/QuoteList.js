import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';// ro reade quary in url

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
// sort function 
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  //Read the quary parameter and act depend on it -> asc or desc
  const location = useLocation();
// search hold quary data 
//URLSearchParams bulid in constructer (defult js class)
  const queryParams = new URLSearchParams(location.search);//its value here asc or desc
//sort becuse we have it as key in our quary parameter
  const isSortingAscending = queryParams.get('sort') === 'asc';
// to sort it i call sort function (data (quots)from props, order asc or desc(boll))
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
// when sort button clicked
  const changeSortingHandler = () => {
    //update the quary paramter in url
    //update shared url
    //set our new path 
    //sort-> i can name it what i name
    //push this state make the comp re render
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));// if i sorting in asc i want to swich to desc else asc
  // beacuse this will re eva luate every time the path change so will re evaluate the comp so sortedQuotes changed --> have the correct sort value
  };
  //Sort {isSortingAscending ? 'Descending' : 'Ascending'} if i asc i want to change it to desinding when i click the button and the revverce if i am descinding
  // {sortedQuotes.map((quote) =>  i use sorted data
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
