import React, { useState, useEffect, useCallback } from 'react';
/*
i want get data from user and use it and store it in data base (post->insert)
so i use api servese firebase 
firebase is servese profide by google and i can use it without write any code
go to console in the site not dev tool
we will use a littel componant from firebase
i need realtime DB here start in test mode 
url to firebase api call DB

 */
/*React able to take to bake ende by API (Back end) but not DB
API or axios library */
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json'); // i tack this link from firebase and add /movies.json so i can use it to send data
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
// after i use post then will not add to the [] so i need to change map to this
      const loadedMovies = [];
// for each id (key)
      for (const key in data) {
        loadedMovies.push({
          id: key,// will added automaticly by firebase
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


/* i needasynic await becuse i want wait response and i
 can add ry catch and  useeffect callback*/
  async function addMovieHandler(movie) {
    // i use fetch also to add data by defult its get to insert i need post
    const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json', {
      method: 'POST',// create resorce in data base 
      body: JSON.stringify(movie),// stringfy->i use it bec=acuseits need json data to change data betwen FE and BE
      headers: { 
        'Content-Type': 'application/json'//not require of data base ut other api want it // it description of what i do
      }
    });
    const data = await response.json();
    console.log(data); 
  }

  let content = <p>Found no movies.</p>;

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
