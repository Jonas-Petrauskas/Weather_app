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

  return <div className="App"></div>;
}

export default App;
