import { useContext } from 'react';//allow us to establish connection between context and this comp

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';//
//i want when to favo button click to addd them to favo and update the text in button if it in faov or not
// and if it in favo i want to change the boutton to remove
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);//to connect FavoritesContext
//favoritesCtx return the obj 

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);// if item is faov or not
//props.id i pass the id of the metup i need to know if favo or not 
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {//if it favo i need to remove it
      favoritesCtx.removeFavorite(props.id);
    } else {//not faov yet i need to add it 
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
