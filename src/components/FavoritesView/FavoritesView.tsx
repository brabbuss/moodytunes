import React, {useEffect} from 'react';
import Favorite from '../Favorite/Favorite';
import './FavoritesView.css';

interface FavoritesViewProps {
  favoriteSongs: {
    id: string,
    artist_display_name: string,
    title: string,
    releasedate: string,
    genre: string
  }[];
  removeFavorite: Function;
}


const FavoritesView = ({favoriteSongs, removeFavorite}: FavoritesViewProps) => {
  useEffect(() => {
    document.title = `MoodyTunes - Favorites (${favoriteSongs.length})`
  }, [])
  
  if (favoriteSongs.length === 0) {
      return (
    <section className='no-favorites'>
      <h2>Favorites View</h2>
      <br/>
      <p>You currently do not have any favorite songs. <br/><br/>
      Click the '⭐️' to add a song to your Favorites.
      </p>
    </section>
   );
  } else {
  const favorites = favoriteSongs.map((fav: any) => {
    return (
      <Favorite
        key={`${fav.id}1`}
        id={fav.id}
        artist={fav.artist_display_name}
        title={fav.title}
        releaseDate={fav.releasedate}
        genre={fav.genre}
        favoriteSongs={favoriteSongs}
        removeFavorite={removeFavorite}
      />
    );
  });
  return (
    <section className='favorites-view'>
      <h2>Favorites View</h2>
      <article className='favs-container'>
        { favorites }
      </article>
    </section>
   );
  } 
}

export default FavoritesView;
