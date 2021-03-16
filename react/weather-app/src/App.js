import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <h1>Weather App</h1>
      <div className="weather-card">
        {/* WORK HERE !!!!*/}
        <input className="search-bar" type="text" placeholder="Enter a city/state" />
        <button type="submit">Search</button>
        <p>Date, Live time counter</p>
        <p>City, State</p>
        <p>Weather Icon</p>
        <p className="temp">TEMP</p>
        <p>Radio button -- Toggle between F and C degrees</p>
      </div>
    </div>
  )
}

export default App;