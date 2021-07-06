import classes from './QuoteItem.module.css';
import {Link} from 'react-router-dom';//
const QuoteItem = (props) => {

  /*
   i want when i click this button to load the QuoteDetail
      <a className='btn'>
        View Fullscreen
      </a>
  */
 // to access QuoteDetail we have dinamic sigmant i need to make to dinamic so i give here `` and becuse i have id in quote list i use props .id
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
