import { createContext, useState } from "react";
//createContext return components the argument is initial value for the comp // it can be any thing i want
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

//comp will provide this context need this values, responceplr to update context value
function FavoritesContextProvider(props) {
  const [userFavo, setUserFave] = useState([]);

  function addFavoHandler(favoMeetup){
    setUserFave((PrevUserFavo)=>{//if i depend on previous state//becuse react scudual update so maby the prvious value not in yet
        return PrevUserFavo.concat(favoMeetup);//now we get the latest update 
    });//(userFavo.concat(favoMeetup));// concat  like push put return new array with the new values
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);// i need to remove the item with id (the return array will hold all put the removed)
    });
  }

  function itemIsFavoriteHandler(meetupId) {
      //some want function execute for every item return true all false so i can komw that if i have a meetup with that id in favoiret
    return userFavorites.some(meetup => meetup.id === meetupId);
  }
  //function itemIsFavoHandler(){} // to knoe if the item is favo or not


  // to other comp can update i need to pass the functions 
const context = {
  favorites: userFavorites,
  totalFavorites: userFavorites.length,
  addFavorite: addFavoriteHandler,
  removeFavorite: removeFavoriteHandler,
  itemIsFavorite: itemIsFavoriteHandler
}; //this object will passes as value so i can update the values in createContext

  // wrap this provider around children so when i wrap any comp with this comp it can use the data
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
