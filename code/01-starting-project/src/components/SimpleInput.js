import { useState, useRef } from "react";

/* if i want the input value once so ref is better
if i need value after every keydtrock like for instance validation 
the state is better
reset the enterd input then state is better*/
const SimpleInput = (props) => {
  const nameInputRef = useRef();//Ref
  const [enteredName, setEnterdName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const formSubmitionHandler = (event) => {
    event.preventDefault(); //becuse automaticly onSubmit send http request and here we don't tack data from any where so no need
    //bage reloaded and we dont need that becuse we will lose our state(data)
    console.log(enteredName);
//Ref
    const enterdValu = nameInputRef.current.value;
    console.log(enterdValu);
    //reset the enter value so i need to make input in return have value att
    setEnterdName("");
//Ref
nameInputRef.current.value='';// not good practise becuse js manibulate the dom and React should be the one who manibulate so its not good

  };
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
