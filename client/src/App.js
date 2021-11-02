import "./scss/App.css";
import React, { useState, useEffect } from "react";

import * as ApiClient from "./Services/ApiClient";

function App() {
  // Search query
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");
  // Getting weather for Barcelona
  const [weatherBarcelona, setWeatherBarcelona] = useState(null);
  const [cityBarcelona, setCityBarcelona] = useState("");
  const [temperatureBarcelona, setTemperatureBarcelona] = useState(0);
  const [iconBarcelona, setIconBarcelona] = useState({});
  // Getting weather for London
  const [weatherLondon, setWeatherLondon] = useState(null);
  const [cityLondon, setCityLondon] = useState("");
  const [temperatureLondon, setTemperatureLondon] = useState(0);
  const [iconLondon, setIconLondon] = useState({});
  // Handring button state
  const [showBarcelone, setShowBarcelona] = useState(false);
  const [showLondon, setShowLondon] = useState(false);

  const { REACT_APP_API_KEY } = process.env;

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
        });
    }
  };

  useEffect(() => {
    ApiClient.getBarcelonaWeather().then((data) => {
      setWeatherBarcelona(data.weather[0].main);
      setCityBarcelona(data.name);
      setTemperatureBarcelona(data.main.temp);
      setIconBarcelona(data.weather[0].icon);
    });
  }, []);

  useEffect(() => {
    ApiClient.getLondonWeather().then((data) => {
      setWeatherLondon(data.weather[0].main);
      setCityLondon(data.name);
      setTemperatureLondon(data.main.temp);
      setIconLondon(data.weather[0].icon);
    });
  }, []);

  return (
    <div className="App">
      <div className="search-container">
        <input
          className="search-container__input"
          placeholder="Enter the city"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        {typeof weather.main !== "undefined" ? (
          <div className="search__info">
            <img
              className="search__image"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <div>{weather.weather[0].main}</div>
            <div>{weather.name}</div>
            <div>{Math.round(weather.main.temp)}°C</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
