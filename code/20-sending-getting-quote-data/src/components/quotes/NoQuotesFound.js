import { Link } from 'react-router-dom';

import classes from './NoQuotesFound.module.css';
/*
  <Link className='btn' to='/new-quote'>
        Add a Quote
      </Link>
      should be link not a so i can use it to go to /new-quote so i can add new quote
*/
const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to='/new-quote'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
