import { useContext } from "react"; //

import FavoritesContext from "../store/favorites-context"; //to have the object
import MeetupList from "../components/meetups/MeetupList"; //
//output my favorets from the context i need the data
function FavoritesPage() {
  //our contaxt only store in memory so if i reload the page will lost to solve that i can use local storge (browser storage) Or in server
  const favoritesCtx = useContext(FavoritesContext); //this is the obj
  //current context
  let content; //

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    //if their is faoverts
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
