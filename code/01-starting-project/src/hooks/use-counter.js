//Custom hooks ->logic i want to reuse
// the name must start with use so react deal with it lick normal hoc
// so not useit in forbiden place just inside coustom hok and componant (kust like forbiden use of normal hoc)
import { useState, useEffect } from 'react';
// to make it change it to work with dif logic i can pass parameter
// i can make it very flexable bu counterUpdateFun as parameter and change this
// setCounter(counterUpdateFun); exept function 
//or pass flag forwards add if true sub if false
const useCounter = (forwards = true ) => {
  // add logic i want to reuse
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // start counting up and every 1 sec setnew counter state
    const interval = setInterval(() => {
      if (forwards)
      {setCounter((prevCounter) => prevCounter + 1);} 
      else {
        setCounter((prevCounter) => prevCounter - 1); // now backword
      }
    }
    , 1000);

    return () => clearInterval(interval);
  }, [forwards]);// new dependancy becuse the parameter not define inside or out side the function
  //its value we get it as a parameter // so useEffect will re run if state change 
  // i want to utalise it in forword and backword // by call it as function
// i can return any thing i want so am return counter state
  return counter;
};

export default useCounter;
