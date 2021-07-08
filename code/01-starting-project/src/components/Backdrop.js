//backdrop i want when i click the uton some gray back ground come

const Backdrop = (probs) => {
  //i pass a function to it (forwordthe function)
  return <div className="backdrop" onClick={probs.onCancel} />;
};
export default Backdrop;
