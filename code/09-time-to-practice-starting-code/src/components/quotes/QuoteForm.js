import { useRef,useState,Fragment } from 'react';//
//showing a warning to user when try to go out of the page //prevent unwanted transitions
import {Prompt} from 'react-router-dom';//

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering,setIsEntering] = useState(false);//

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

//finishEnteingHandler before it when i click add qute the give me the prompt i dont want that so i add it 
  const finishEnteingHandler=()=>{
    // set this inside the submitFormHandler to late becuse will not go throw before we tregger the navigation action(trigerd in onAddQuote)//will not process when i try to go away
    setIsEntering(false);//react is sync so the above line execute first then this so here i make sure that the form is touched
  
  }


// when the user start working with this form(form is active) (form get focus) -> onFocus
  const formFocusHandler =()=>{
    //want store the information inside the form and navigation if the user go away
    // know when user work in form
    setIsEntering(true);
  }
 
//if i navigate away from our form a want to tell the user if he sure of that
// when the user start working with this form(form is active) (form get focus) -> onFocus
// if is entering true i want to show prompt <Prompt when={isEntering} />
// location hold the place that i try to go to(path)
return (
  <Fragment>
  <Prompt when={isEntering} message={(location)=>'Are you sure you want to leave all yore data will lost! '} />
    <Card>
      <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={finishEnteingHandler}>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
