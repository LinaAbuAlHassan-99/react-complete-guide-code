import { useRef, useEffect } from "react";

import useHttp from "../../hooks/use-http"; //
import { addComment } from "../../lib/api"; //
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewCommentForm.module.css";
// send our comment data to the server
const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment); //

  const { onAddedComment } = props; // i need it to extract this func

  // i want to let know that finished adding comment
  useEffect(() => {
    if (status === "completed" && !error) {
      //once we done adding a comment i want to call it
      onAddedComment(); //to note the parent comp(Comments.js) that we done added ne comment
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value; //get the enterd value from form

    // optional: Could validate here

    //pass obj with comment data, i send the qoute id
    // to accsess this id i can use use Params -> thats mean when the path have the qoute id i can see comment else not but i ned to make it reusable so i use it throw props
    //if i need super flixable i use props if i want restrect but when url hold the id so i use params
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };
  //if penndeing (data still loading -> the request its on its way )
  /*
     {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
  */
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
