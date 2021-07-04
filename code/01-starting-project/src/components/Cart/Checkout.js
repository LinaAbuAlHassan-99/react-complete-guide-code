/*
check out form 
 */
import { useState, useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = (props) => {
  // const [name, setName] = useState('');// here i listen to every keystrock but in ref i tack all the input one time (only if i want to submit it)
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postaCodeInputRef = useRef();
  const cityInputRef = useRef();

  // if there is an error inside the form
  // i can use is touched byt he want to be short way
  const [formInputsValidity, setformInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    //event is automaticly come becuse i conect it with onSubmit
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postaCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    // here i check the
    setformInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    //Submit the card data and send it to the back end
    //send the submit data to card which also have data need to sumited and send it to server
    // on the server we should never trust the user so i need to validate insert data also in backend
    // and this server side code -> node js not now we will useit
    //since the function expect obj(one argument) i sen object to him
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
    });//from cart this function
  };
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;
  // when i click cansel i want it to have the same funcitnality of close in Cart so i pass to it
  // <button type="button"> Cancel </button> important to put its type to button so when i clich it not submit the form
  //i need to validate the form


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
    <div className={nameControlClasses}>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' ref={nameInputRef} />
      {!formInputsValidity.name && <p>Please enter a valid name!</p>}
    </div>
    <div className={streetControlClasses}>
      <label htmlFor='street'>Street</label>
      <input type='text' id='street' ref={streetInputRef} />
      {!formInputsValidity.street && <p>Please enter a valid street!</p>}
    </div>
    <div className={postalCodeControlClasses}>
      <label htmlFor='postal'>Postal Code</label>
      <input type='text' id='postal' ref={postalCodeInputRef} />
      {!formInputsValidity.postalCode && (
        <p>Please enter a valid postal code (5 characters long)!</p>
      )}
    </div>
    <div className={cityControlClasses}>
      <label htmlFor='city'>City</label>
      <input type='text' id='city' ref={cityInputRef} />
      {!formInputsValidity.city && <p>Please enter a valid city!</p>}
    </div>
    <div className={classes.actions}>
      <button type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button className={classes.submit}>Confirm</button>
    </div>
  </form>
   
  );
};

export default Checkout;
