import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: FnameIsValid,
    hasError: FnameHasError,
    valueChangeHandler: FnameChangeHandler,
    inputBlurHandler: FnameBlurHandler,
    reset: FnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    isValid: LnameIsValid,
    hasError: LnameHasError,
    valueChangeHandler: LnameChangeHandler,
    inputBlurHandler: LnameBlurHandler,
    reset: LnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emaiHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredFName && enteredEmail && enteredLName) {
    formIsValid = true;
  }

  function onSubmitHandler() {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(enteredFName, enteredLName, enteredEmail);

    FnameReset();
    LnameReset();
    emailReset();
  }

  const firstNameClasses = FnameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = LnameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emaiHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={firstNameClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFName}
            onChange={FnameChangeHandler}
            onBlur={FnameBlurHandler}
          />
          {FnameHasError && <p className="error-text"> First Name Error.</p>}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLName}
            onChange={LnameChangeHandler}
            onBlur={LnameBlurHandler}
          />
          {LnameHasError && <p className="error-text"> Last Name Error.</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          on
          onBlur={emailBlurHandler}
        />
        {emaiHasError && <p className="error-text"> Email Error.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
