import './App.css';
import WeatherCard from './components/WeatherCard.jsx';
import {useState, useEffect} from 'react';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  // Data for El Paso weather
  const [weatherData, setWeatherData] = useState(null);
  useEffect(()=>{
    // Make API call to get El Paso weather data
    async function getWeatherData(){
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=El Paso&days=6&aqi=yes&alerts=no`);
      const json = await response.json();
      setWeatherData(json)
    }
    getWeatherData()
  }, []);
  return (
    <>
    {
      weatherData ?
        <WeatherCard weatherData={weatherData}/>
      :
      <p>Loading...</p>
    }
    </>
  )
}

export default App
