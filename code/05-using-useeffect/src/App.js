import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  /* when i send http req the error occure
  teqnical -> lose internet conection
  resopnse error ->400->404 or 500 // on wecebidia thire is information
 // if i but the link wrong way https://swapi.dev/api/film/  return 404 not found

  */
  const [error, setError] = useState(null); // handel the error initialy i dont have  one so null
/* becuse i but in the use effect deoendancy a function
so it re evalute  every time its created i need to manage that by callback 
now function will call in neccesary (need to run it ))not ever time  
*/
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    /*// when its loading no error */
    setError(null);
    // if i work with promises i need .catch but here i need try catch
    try {
      // here mayby an error occure so i but the code in try
      /* fetch api does not trear error as realy error so will not throw a tycnical error
      the error will occure in here
        const data = await response.json();
        and thats not right i want the error occure where its shuld be so i use throw (//**)  */
      const response = await fetch("https://swapi.dev/api/films/");
      //** */ ok is prop in response return if the request faild or not
      // is is not ok return error
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      //here will stop and go to catch if ther is an error
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message); //'Something went wrong!'
    }
    setIsLoading(false); // we done loading even if i have error
  }, []); // dependancy this function may have 
  /* 
 i want data fetch not when i click the button but
 just when the page loaded (emeditly) so  i use hoc (useEffect)
 becuse sent http request its a side effect otomecly change our compnant state
  /*useCallback
  if i dont callit its good no proplem
  if i call this fuction inside app comp so infinite loop will hapenf 
  every time the function called so i need to manege that 
    *
 so now when i click the button the data loaded but also when the copm re evaluate will loaded
and i need to re executed when [fetchMoviesHandler] change so i but it in dependancy else willmacke it in infinite loop
*/

  useEffect(() => {
    fetchMoviesHandler();// call it so emeditly load the data even if not click the button // and i but it in ue effect so on infinite loop
  }, [fetchMoviesHandler]);// if i use it like this will re evaluate becuse its an func s every time its called its change so i beed callback

  // before content
  //  i want to output something if there is an error
  //{!loading && error &&<p>{error}</p>} // if am not loading and error occure
  // and in not loading and len ===0 i need to put && !error
  // rather than this i want to wrapet in content and check on it and change it
  /*
  with server thre is and differant thing habend i need to check them
  1) having my data correctlr
  2)error when response
  3)loading the data
  4)the array is empty so no data found
   */
  let content = <p>Found no movies.</p>;
  // if haveing our data data is loading  loading
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
