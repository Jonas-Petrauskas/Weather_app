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

  return <div className="App"></div>;
}

export default App;
