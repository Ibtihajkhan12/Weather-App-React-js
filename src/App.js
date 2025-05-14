// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
//   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

//   const fetchWeather = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(BASE_URL, {
//         params: {
//           q: city,
//           appid: API_KEY,
//           units: 'metric', // For Celsius; use 'imperial' for Fahrenheit
//         },
//       });
//       setWeather(response.data);
//       setError('');
//     } catch (err) {
//       setError('City not found or API error');
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Weather App</h1>
//       <form onSubmit={fetchWeather}>
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button type="submit">Get Weather</button>
//       </form>

//       {error && <p className="error">{error}</p>}

//       {weather && (
//         <div className="weather-info">
//           <h2>{weather.name}, {weather.sys.country}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '8a13df165f9099bdd3008e66764b2a56';

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      setError('Please enter a city name');
      return;
    }

    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <img
        src="https://cdn-icons-png.flaticon.com/512/1116/1116453.png"
        alt="weather icon"
        className="weather-image"
      />

      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
