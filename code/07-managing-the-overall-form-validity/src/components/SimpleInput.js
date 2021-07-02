import { useState, useEffect } from "react";
/*
this validation for one input in form 
so if there is more thanone what do  +
here if only one input invalid all the form become invalid so what to do 
// tow way with useEffect// but no need for here becuse ther is no side effect or on the other way ///
 */
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false); //

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
// where ever one of the form input change i need to updat setFormIsValid
  //
/* useEffect(()=>{
    if (enteredNameIsValid) //check if all input is valid if i have other input i put it here like age for example
   {
    setFormIsValid(true);
   } else {
    setFormIsValid(false);
   }
  },[enteredNameIsValid]);//for ex if i had ontherinput age i put it her// hre i enter all input so change the state when each one enter
 */
 /* Second way without useEffect /// */
   let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } // here i dont need the false becuse alyse false untel the condtion become true

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  // i free if i disable the button or not
   // <button disabled={!formIsValid}>Submit</button> the button is disable if the form invalid
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
