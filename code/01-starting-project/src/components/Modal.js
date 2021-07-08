const Modal = (props) => {

    // i can execute the passing function like this or just set then in the {}
    const cancelHandler =()=>{
        props.onCancel();
    }
    const confirmHandler =() =>{
        props.onConfirm();
    }
    // or we can pass props.onCansel  two way
  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
};
export default Modal;
