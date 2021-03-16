import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <h1>Weather App</h1>
      <div className="weather-card">
        {/* WORK HERE !!!!*/}
        <input type="text" placeholder="search..." />
        <p>Date, Live time counter</p>
        <p>City, State</p>
        <p>Weather Icon</p>
        <p>Weather</p>
        <p>Radio button -- Toggle between F and C degrees</p>
      </div>
    </div>
  )
}

export default App;