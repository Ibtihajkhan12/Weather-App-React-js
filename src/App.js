import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  const API_KEY = '8a13df165f9099bdd3008e66764b2a56';

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    setSearchHistory(savedHistory);
  }, []);

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

      const updatedHistory = [city, ...searchHistory.filter((c) => c !== city)];
      setSearchHistory(updatedHistory);
      localStorage.setItem('weatherSearchHistory', JSON.stringify(updatedHistory));
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

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

      {/* Conditional Weather Image */}
      {weather && (
        <>
          {weather.main.temp > 35 ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
              alt="hot weather"
              className="weather-image"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
              alt="cool weather"
              className="weather-image"
            />
          )}

          <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </>
      )}

      <div style={{ marginTop: '30px' }}>
        <button className="history-button" onClick={() => navigate('/history')}>
          View Search History
        </button>
      </div>
    </div>
  );
};

export default App;
