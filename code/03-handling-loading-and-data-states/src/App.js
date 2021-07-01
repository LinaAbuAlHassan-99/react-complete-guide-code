import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
// still async
function App() {
  const [movies, setMovies] = useState([]);
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
    setIsLoading(false);
  }

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
