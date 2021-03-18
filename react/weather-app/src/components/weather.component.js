import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/weather.style.css';

const Weather = () => {

  const API_KEY = "11ee13fd472e951dfa116fd454568e46";
  
  let date = new Date().toDateString();
  
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Providence");
  const [country, setCountry] = useState("US");
  const [temp, setTemp] = useState(0);
  const [units, setUnits] = useState("imperial");
    const [overcast, setOvercast] = useState();

  const getWeather = (city, country) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${units}`;
    axios.get(URL)
    .then(response => {
      console.log(response.data);
      setTemp(response.data.main.temp);
      setOvercast(response.data.weather[0].main);
    }).catch(e => {
      console.log(e)
    })
  }

  useEffect(() => {
    getWeather(city, country);
  }, [])

  return (
      <div className="weather-component">
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">{city}, {country}</div>
          <div className="date">{date}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(temp)}°F
          </div>
          <div className="weather">
            {overcast}
          </div>
        </div>
    </div>
  );
}

export default Weather;
