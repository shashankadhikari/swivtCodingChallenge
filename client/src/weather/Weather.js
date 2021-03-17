import React, { useState,useEffect } from 'react'
import Base from '../core/Base';
import { fetchWeather } from './fetchweather';
import "./weather.css";


const Weather = () => {
    const [weather, setWeather] = useState();
  useEffect(() => {
    fetchWeather().then(async data=>{
       await setWeather(data)
        console.log(weather);
    })
  })
    return (
        <Base
        title="Weather Report Hongkong"
        description="Current Weather Report of Hongkong"
      >
        <div className="main-container">
     
      {weather && (
        <div className="city">
          <h2 className="city-name">
            {/* <span>{weather.name}</span> */}
            <span>{weather[0].main}</span>
            <sup>Hk</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather[0].temp)}
            
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <p>{weather[0].description}</p> 
          </div>
        </div>
       )}
    </div>
    </Base>
    );
  };
  
  export default Weather;