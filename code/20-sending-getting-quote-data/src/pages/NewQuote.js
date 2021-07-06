import { useEffect } from "react"; //so i can define side effect
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api"; // function to send it to usehttp
//store data (POST)
const NewQuote = () => {

  const { sendRequest, status } = useHttp(addQuote); // return obj -> send request func,status of request and there is more props but thats what i need her
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      //her also i can check if there is n error and only navigate if i dont have error
// here i navigate away as soon as request completed
      history.push("/quotes"); // if the state completed i want to navigate
    }
  }, [status, history]); //where ever the satus change i want to navigate away//history want actulay change but it needed to add here

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData); // call sendRequest and pass the data
  };
//QuoteForm has isLoading if stated === pending i want the loading spener shown
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
