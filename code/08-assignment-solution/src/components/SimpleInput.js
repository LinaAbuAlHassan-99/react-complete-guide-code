//import { useState } from "react";
import useInput from "../hooks/use-input";
/*
here i check validation for more than one input 
*/
/*
here i rebait the same structere 
the var dufferant but the logic the same 
i need to check the validation and if it touch  or not
 */
// copied to hoc
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasEror,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reser: resetNameInput,
  } = useInput((value) => value.trim() !== ""); // define here but execute in hoc and the value pass to this function is enterdValue

  //const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasEror,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@")); // define here but execute in hoc and the value pass to this function is enterdValue

  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //const enteredEmailIsValid = enteredEmail.includes("@");
  //const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    //reset the form
    //setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput();

    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
    resetEmailInput();
  };

  // const nameInputClasses = nameInputIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";
  const nameInputClasses = nameInputHasEror
    ? "form-control invalid"
    : "form-control";

  // const emailInputClasses = enteredEmailIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";
  const emailInputClasses = emailInputHasEror
    ? "form-control invalid"
    : "form-control";

  // onChange={nameInputChangeHandler}
  // onBlur={nameInputBlurHandler}
  // {nameInputIsInvalid && (
  //   <p className="error-text">Name must not be empty.</p>
  // )}


  // onChange={emailInputChangeHandler}
  // onBlur={emailInputBlurHandler} 
  // {enteredEmailIsInvalid && (
  //   <p className="error-text">Please enter a valid email.</p>
  // )}
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasEror && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasEror && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
