const {REACT_APP_API_KEY} = process.env;
const API_BARCELONA = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${REACT_APP_API_KEY}`;
const API_LONDON = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${REACT_APP_API_KEY}`;

export const getBarcelonaWeather = () => fetchRequestBarcelona();
export const getLondonWeather = () => fetchRequestLondon();
export const searchCity = () => fetchRequestCity();

const fetchRequestBarcelona = () => {
  return fetch(API_BARCELONA)
    .then((res) => (res.status <= 400 ? res : res))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${API_BARCELONA}`);
    });
};

const fetchRequestLondon = () => {
  return fetch(API_LONDON)
    .then((res) => (res.status <= 400 ? res : res))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${API_LONDON}`);
    });
};

const fetchRequestCity = () => {
  return;
};
