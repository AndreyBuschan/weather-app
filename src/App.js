import React, { useState } from "react";
import Info from "./components/info";
import { FormCurrentWeather, FormDaysPerHoursWeather } from "./components/form";
import Weather from "./components/weather";
import Logo from "./components/logo";

const API_KEY = "ac66bbd04107fd16bb1cf24d77ad7091";

const App = () => {
  const [weatherData, setWeatherData] = useState(undefined);
  const [currentWeatherData, setCurrentWeatherData] = useState(undefined);
  const [showTypeOfWeather, setShowTypeOfWeather] = useState('currentWeather');

  const gettingWeatherForDays = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if(city) {
      const geo_data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}&units=metric`)
      .then(data => data.json());

      const {lat, lon} = geo_data[0];

      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      .then(data => data.json())
      .then(data => setWeatherData(data));
    }  
  }
  
  const gettingCurrentWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if(city) {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(data => data.json())
      .then(data => setCurrentWeatherData(data));
    }
  }
  
    return (
      <div className="containerMain">
        <div className="form">
          <Info />
          <Logo />
          <select className="input" name='name' id='5556'
            onChange={e => {
              setShowTypeOfWeather(e.target.value)
              setCurrentWeatherData(undefined)
              setWeatherData(undefined)
              }
            }>
            <option value='currentWeather'>Current Weather</option>
            <option value='weather5/3'>Weather 5 days per 3 hours</option>
          </select>
          {showTypeOfWeather === 'currentWeather'
            ? <FormCurrentWeather weatherMethod={gettingCurrentWeather} />
            : <FormDaysPerHoursWeather weatherMethod={gettingWeatherForDays} />
          }
            <Weather weatherData={weatherData} showTypeOfWeather={showTypeOfWeather} currentWeatherData={currentWeatherData} />
        </div>
      </div>
    )
}

export default App;
