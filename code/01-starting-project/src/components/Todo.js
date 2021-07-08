import { useState } from "react";
//react hooks can be used only in comp and coustom hoc
import Backdrop from "./Backdrop";
import Modal from "./Modal";
//start with capital
const Todo = (probs) => {
  // handel event (prefer to add handler to the name for handel event)
  const [modalIsOpen, setModalIsOpen] = useState(false); //i the modal is open or not
  // useState-> // to render sth depend in state // change what see in thesecreen dynamicly

  const deleteHandler = () => {
    //overlay 1) new comp ->Modal.js
    setModalIsOpen(true);
  };
  //when i click in the bck ground i want to close the modal
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  // i refaer to it without () beacuse if not will ececute the function when render comp and this early becuser i want it run when click not in load
  return (
    <div className="card">
      <h2>{probs.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};
export default Todo;
