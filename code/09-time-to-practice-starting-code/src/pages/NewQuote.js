// shouls have form allow us to add quote
import QuoteForm from '../components/quotes/QuoteForm';
// tel react roter we want to switch pages(Programmatic Navigation)
import {useHistory} from 'react-router-dom'
const NewQuote =()=>{
    //useHistory return history obj can use to triger history actioning changes
    //and what change the history action->ex: navigate to new page
 const history = useHistory();

    // i want to pass function becuse form take function
    const addQuoteHandler=(quoteData)=>{
        console.log(quoteData);

        //history.push();//push new page to pages stack so to our history
        //Or replace but replace we can't back to the previos page while push can
        // replace is like redirect -> when we change this page push the new one
        //history.replace()

        history.push('/quotes');// when i click add button it navigate to ather page
    };
    return <QuoteForm onAddQuote={addQuoteHandler}/>
};
export default NewQuote;