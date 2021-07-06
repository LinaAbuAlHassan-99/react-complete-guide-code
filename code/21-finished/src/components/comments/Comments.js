import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';//
import { getAllComments } from '../../lib/api';//
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';//

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();// i know i will use this comp where url hold this parameter

  const { quoteId } = params; //if i use params.qoutid i need to pass param as depebdancy
//error i added so if iwant to use it
  const { sendRequest, status, data: loadedComments ,error} = useHttp(getAllComments);//

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
// useCallback becuse addedCommentHandler is passesd and when it passed its dependancy put it there so i dont need to give here any dep 
// and to avoid this function not recurating every time this comp re evaluate so end with infinte loop 
const addedCommentHandler = useCallback(() => {
    //fetch the commant for sprsafic id
    sendRequest(quoteId);// when ever comment naed i want to add it
  }, [sendRequest, quoteId]);

  let comments;//

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }
//done fetching,and do having data
  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
// we dont have comments and done loading
  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className='centered'>No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm //
          quoteId={quoteId}//
          onAddedComment={addedCommentHandler}//
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
