import React from "react";

const Weather = props => {
  const { weatherData, currentWeatherData} = props;

  return (
    <div className="infoWeath"> 
      {currentWeatherData && (
        <div className="infoWeath">
            <h3 className="">{currentWeatherData.name}, {currentWeatherData.sys.country}</h3>
            <img
              className="imgCurrentWeather"
              alt='weather icon'
              src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`} />
            <p className="infoWeath__p">{Math.round(currentWeatherData.main.temp)} °C</p>
            <p>{currentWeatherData.weather[0].description}</p>
            <p>Feels like {Math.round(currentWeatherData.main.feels_like)} °C</p>
            <p>min.: {Math.round(currentWeatherData.main.temp_min)}°C --- max.: {Math.round(currentWeatherData.main.temp_max)}°C</p>
        </div>
      )}
      {weatherData && (
        <div>
          {weatherData?.list?.map((el, index) => 
            <div className="infoWeath5day" key={index}>
              <p>{el.dt_txt}</p>
              <div className="containerIcon">
                <img
                  className="imgHourlyWeather"
                  alt='weather icon'
                  src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`} />
                <p>min.: {Math.round(el.main.temp_min)}° --- max.: {Math.round(el.main.temp_max)}°</p>
              </div>
            </div>
          )}
        </div> 
      )}
    </div> )
};

export default Weather;
