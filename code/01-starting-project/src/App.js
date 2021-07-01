import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
// store data in state so i can update it and send it
const [movies,setMovies]=useState([])
  //send http request --> // conect data from Backend
 function fetchMoviesHanddler (){
    //fetch()-->
    // function browser make it avalabile to us 
    // fetch API peing used 
    //pass the url that i want to fetch data from, obj
    // obj i can send heder or body or change method
    // response i can name it any thing i want 
  
 fetch('https://swapi.dev/api/films/').then(response =>{//.catch;//fetch return promise allow us to react with responce or handel the error 
      return response.json();//Json translate from json to obj
      // its an obj have some proparuty // this api return obj in json format
      // promise -> obj ueild some data (Async method)
      // .then()-> to pass functionwill execte when we have the response becuse response take time (async)
      // .catch to handel any potantial error
    }).then(data =>{
      // transform the data with the name i want not as its come from DB
      // convirt every obj in result array to a new obj
      // the  [new obj] will store in transformedMovies
      const transformedMovies=data.results.map(movieData => {
        return {
          // here i map the names of the obj in array to this names i used in movie.js
          id: movieData.episode_id, //episode_id becomw id and so on
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date
        };
      });
      // set this array(results as a movies )
      setMovies(transformedMovies);//data.results);// result its an proparity in the obj and its an array
    });
    //json return promise so i need to return it and add the second then so will execute when json translate to obj(or any form i want to request) so i cane use this data here
  }
// when i clickbutton i want the data to apper so i pass fetchMoviesHanddler  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHanddler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
