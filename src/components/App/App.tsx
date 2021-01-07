import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from '../ResultsView/ResultsView';

function App() {
  const [userName, setUserName] = useState('');
  const [songResults, setSongResults] = useState([]);

  const getMoodyTunes = async(mood: string, decade: string) => {
    console.log("clicked!");
    const arousal: string = mood.split(',')[0];
    const valence: string = mood.split(',')[1];
    setSongResults(await getTracksByMoodAPI(valence, arousal, decade));
  };

  return (
    <div className="App-header">
      Generate a list of songs that fit you're mood.
      <Form
        getMoodyTunes={getMoodyTunes}
      />
      <ResultsView 
        songResults={songResults} 
      />
    </div>
  );
}

export default App;
