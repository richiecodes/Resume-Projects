import React, { useEffect, useState } from 'react';

const API = {
  key: "11ee13fd472e951dfa116fd454568e46",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  
  let date = new Date().toDateString();
  let degree = "F";
  
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');
  let [isCelsius, setIsCelsius] = useState();
  let [temperature, setTemp] = useState();

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setTemp(result.main.temp);
          setQuery('');
          console.log(result);
          console.log(temperature);
        });
    }
  }

  function convertTemp(t) {
    if(!isCelsius) {
      setTemp((t - 273.15) * (9/5) - 32);
    } else {
      setTemp(t - 273.15);
    }
  }

  if(isCelsius ? degree = 'C' : degree = 'F');


  return (
      <div className={(typeof weather.main != "undefined") ? ((temperature >= 50) ? 'app warm' : 'app') : 'app'}>
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
              <div className="temp" onMouseOver={setIsCelsius = true}>
                {Math.round(temperature)}°{degree} 
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
