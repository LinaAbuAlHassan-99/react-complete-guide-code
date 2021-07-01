import { useState } from 'react';
/* combine the 3 way i alrady use submitted and losing focus andEvery Keystroke
but i want to write it in a cleaner way 
*/
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
/* 
when new value is enter rhis comp will re evaluate
so this constant -> enteredNameIsValid will have the lates value and touch state
*/
// if the enterd name is valid -> here i delete ever update state for enteredName
  const enteredNameIsValid = enteredName.trim() !== '';
// its touched and not valid 
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };
// this function re created when comp re evaluate so i can use enteredNameIsValid here becuse it have the most updated value 

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
// if invalid
    if (!enteredNameIsValid) {
      return;
    }
// not need to set valid to true becuse noe already done 
    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');// after submiting this make enteredNameIsValid = false so invalid input  to fix it i need to do this:
    //this:
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
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
