import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from "../ResultsView/ResultsView";
import FavoritesView from '../FavoritesView/FavoritesView'
import {ISongResults, allGenres} from '../common/Types'
import { useLocalStorage } from '../../utilities/useLocalStorage';
import NavBar from '../NavBar/NavBar';

function App() {
  const [userName, setUserName] = useLocalStorage("userName", '');
  const [songResults, setSongResults] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState<ISongResults[]>([]); // type the return for setFavoriteSongs for the error: Type 'undefined' is not assignable to type 'never'.ts(2322)
  const [localStorage, setLocalStorage] = useLocalStorage("favorites");
  const [moodName, setMoodName] = useState('');

  const getMoodyTunes = async (mood: string, decade: string) => {
    const arousal: string = mood.split(",")[0];
    const valence: string = mood.split(",")[1];
    // const excludedGenres: string = allGenres
    //   .filter(musicGenre => genre !== musicGenre)
    //   .join(",");
    setSongResults([]);
    const results = await getTracksByMoodAPI(valence, arousal, decade);
    setSongResults(results);
  };

  const updateMoodName = (moodWord: string) => {
    setMoodName(moodWord);
  }

  const addFavorite = (id: string) => {
    type AnyType = any;
//     const favorite = songResults.find(
//       (song: ISongResults) => song.id === id
//     ) as AnyType; // favorite needs to be set to any???
//     setFavoriteSongs([favorite, ...favoriteSongs]); // putting these params inside an array (error expected 1 arg but got 2+)
//   };

  const favorite = songResults.find((song:ISongResults) => song.id === id) as AnyType
    if (favoriteSongs === undefined) {
      setFavoriteSongs([favorite]);
      setLocalStorage(favoriteSongs);
    } else if (!favoriteSongs.includes(favorite)) {
      setFavoriteSongs([favorite, ...favoriteSongs]);
      setLocalStorage([favorite, ...favoriteSongs])
    }
  }

  const removeFavorite = (id: string) => {
    const favorites = favoriteSongs.filter((song:ISongResults) => song.id !== id) as any;
    setFavoriteSongs(favorites);
    setLocalStorage(favorites);
  }

  let storedFavs: any = localStorage;
  useEffect(() => {
    storedFavs = storedFavs ? storedFavs : [];
    setFavoriteSongs(storedFavs);
  }, []);

  const checkSongResults = () => {
    if (!songResults) {
      return (
        <h2>
          Sorry, there are no results for that selection.<br/>
          <p>Click the "Home" or "back" button to try again.
          </p>
        </h2>
      )
    } else if (songResults.length) {
      return (
        <ResultsView
          addFavorite={ addFavorite }
          songResults={ songResults }
          moodName={ moodName }
          favoriteSongs={ favoriteSongs as any }

        />
      )
    } else if (!songResults.length) {
      return (
        <h2>
          <br/>
          One moment while your song results load...
          <br/>
          {/* <br/> Please try again. */}
        </h2>
      )
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path='/favorites'
          render={props => (
          <FavoritesView
            removeFavorite={removeFavorite}
            favoriteSongs={favoriteSongs} {...props}

            />)}
        />
        <Route
          path="/results"
          render={props => (checkSongResults())}
        />
        <Route
          path="/"
          render={props => <Form
          getMoodyTunes={ getMoodyTunes }
          updateMood={ updateMoodName }{...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
