import { useEffect, useRef, useState } from 'react';
/*
alrady i validate with submitted
Losing Focus Validation way -> when the user work on input i need to let him know
if he did i wrong thing in our case delete the input(leaving empty) 
 after he done and before click on submit i need to let him know the error
 he done
*/
/* 
//Key Strock
when the user re touch the input and write a valid input i want the validation handel when it was erroer to disapper
(if he enter a valid input then i need the error massege and styling disappere)
*/

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid!');
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //(if he enter a valid input then i need the error massege and styling disappere)
    // i need to use the updated statment so i can emditly know the change whitch is this ->event.target.value
    //if (enteredName.trim() !== '') { // not this becuse in will not update emeditly it will be schaduale untel the comp re evaluate so i use this
      // hew allow validation with every ketstrock
    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
      return;
    }
  };

/*
onBlur -->mean when the input lose fouces
1) i want setEnteredNameTouched to true becuse if the input lose foucse that mean it was touched
user have chanse to wotk on it
2) check for the validation -->
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
 */
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
  };
// if it invalid input but touched by the user i want the validation come to the user
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
/* 
onBlur -->mean when the input lose fouces
onBlur={nameInputBlurHandler}
*/
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
