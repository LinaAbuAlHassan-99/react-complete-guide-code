import { useRef, useState, useEffect } from "react";
/* this way of Validation is the first way when the form is submitted */
/*Validation 
1) i dont submit when empty input (i need validate to the user and here waht i do now
  but in the futere i need to validated also to the server)
  */
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // to give the user feadback
  //const [enteredNameIsvalid, setEnteredNAmeIsValid] = useState(true);// to not see the p just when the page loaded i put it true but this is a proplem when i use it in some whre else
  //example
  /*
  useEffect(()=>{
    if (enteredNameIsvalid){
      //sent http request in real app
      console.log('Name Input valid!'); // beacuse i sent initialy to true this will print when just the beaging befure enter any thing and thats not good
    }
  },[enteredNameIsvalid])
  */
  // to mack useeffect work correct i need to set it to false and to make the p not shown when i just load the bage and not enter any thing i do this :
  const [enteredNameIsvalid, setEnteredNAmeIsValid] = useState(false);
  //this: whether the user had chnce to edit on it not just its empty(input valid or not)
  const [enteredNameTouched, setEnterdNameTouched] = useState(false); // if the user enter enterd name
  
  
  useEffect(() => {
    if (enteredNameIsvalid) {
      //sent http request in real app
      console.log("Name Input valid!"); // beacuse i sent initialy to true this will print when just the beaging befure enter any thing and thats not good
    }
  }, [enteredNameIsvalid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnterdNameTouched(true);//all the input are touch becuase user click submit
    // validate
    if (enteredName.trim() === "") {
      setEnteredNAmeIsValid(false); //feadback
      return; // like this i dont let the user know whats happend so i need to give hem feedback
    }
    setEnteredNAmeIsValid(true);
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };
 // to chech if invalid input and user touch the input // i need that user touch the input and not inter a valid state
  const nameInputIsInvalid=!enteredNameIsvalid && enteredNameTouched
  // if valid tack the form-control style else take form-control invalid style
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
