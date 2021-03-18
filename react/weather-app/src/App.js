import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const API_KEY = "11ee13fd472e951dfa116fd454568e46";

  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");


  const getTemp = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    axios.get(url)
    .then(response => {
      console.log(response.data);
      setTemp(response.data.main.temp);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <input type="text" placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />
      <input type="text" placeholder="Enter Country" onChange={(e) => setCountry(e.target.value)} />
      <button onClick={() => {
        getTemp(city, country)
        }}>Click</button>
      <h1 className="city-header">{city}, {country.toUpperCase()} <br/>Weather</h1>
      <h2>{temp} degrees fahrenheit</h2>
    </div>
  );
}

export default App;
``