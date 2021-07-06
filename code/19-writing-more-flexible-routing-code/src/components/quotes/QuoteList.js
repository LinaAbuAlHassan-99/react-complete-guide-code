import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';//

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

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
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
//history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc')}`)
// or i can manage it obj and change the query  path 
const changeSortingHandler = () => {
    history.push({// pathname hold the path
      pathname: location.pathname,//the path i want to navigate to for ex:/quots but here i want to stay in the samelocation so lication,pathname
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`// search key 
    });
  };

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
