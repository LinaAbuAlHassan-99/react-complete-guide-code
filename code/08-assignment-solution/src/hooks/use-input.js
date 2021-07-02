/*
hoc for manege the logic and state for input
i can mange the input by add new comp input but here i need to pass a props so i can validate 
all over the form becuse the input it self manege for one input 
so hooks is a bit easear
*/
import { useState } from "react";
const useInput =(validateValueFun)=>{
//1) i want to mange the value of input 
//2) i want to mange the touch state
//3)  i want to infere its validity with the touch state(if valid and touched)
//4)flixible (the concreat validate logic come from out side(pass) that some thing can build )

//1+2
// to make it more geniric i change the name to value
const [enteredValue, setEnteredValue] = useState('');
const [isTouched, setIsTouched] = useState(false);


//4
const valueIsValid= validateValueFun(enteredValue);//enteredValue.trim() !== ''; // here i want to be genric so i want to pass the logic from out side
//3
const hasError = !valueIsValid && isTouched;

// i want the copmonant use this hoc to set the enter value and set the touch state
const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);

  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

 //reset the form
  const reset= ()=>{
    setEnteredValue('');
    setIsTouched(false);
  };

return {
    value: enteredValue,
    isValid: valueIsValid,
    //hasError:hasError
    hasError,
    valueChangeHandler,// can be called where the comp use hoc
    inputBlurHandler,//
    reset,
};
};
export default useInput;