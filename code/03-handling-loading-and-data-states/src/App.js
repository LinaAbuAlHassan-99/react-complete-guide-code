import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
// still async
function App() {
  const [movies, setMovies] = useState([]);
  // i want to tell the user that the data is come from some other plase and now we dp other thng until its come
  // i waite data loading  or not initaly false becuase on App comp run for the first time does not load data
  // data loading when fetchMoviesHandler start so i will change the state to tru
  const [isLoading, setIsLoading] = useState(false);

  /* we are sending i get(select) request whre ever the button clicked
    promise -> js feture . i can work with then 
    the secend then work then the first one 
    i can work with this in differant way which is 
    async and await
    async before the function and await before the fech and await return promise
    dose the same as i do then
    */
  /* rather 
   .then(response =>{
      return response.json();
    } i but
    const response = await fetch('https://swapi.dev/api/films/');
    and rather than the second then 
    then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {}
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseData: movieData.release_date,
          };
        }); i but 
        
const data = await response.json();
   const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
      */
  async function fetchMoviesHandler() {
    // here i change the state while i start loading
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
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
    setIsLoading(false); // i done loading so im not loading now
  }
  // i want to render the list if we are not loading  becuse now i have the data
  // {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
  // if not loading and movie is empty array  {!isLoading && movies.length === 0 && <p>Found no movies.</p>}L
  // if i looding  {isLoading && <p>Loading...</p>}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
