import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = {
  key: "11ee13fd472e951dfa116fd454568e46",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  
  let date = new Date().toDateString();
  
  const [weather, setWeather] = useState({});
  const [units, setUnits] = useState("imperial");
  const [query, setQuery] = useState('');

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&units=${units}&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp >= 50) ? 'app warm' : 'app') : 'app'}>
        <main>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={evt => setQuery(evt.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{date}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°F
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="weather-desc">({weather.weather[0].description})</div>
            </div>
          </div>
          ) : ("")}
        </main>
    </div>
  );
}

export default App;
