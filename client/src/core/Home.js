import React, { useState, useEffect } from "react";
import Base from "./Base";
import weather from '../img/weather.jpg';


export default function Home() {
  return (
    <Base
      title="WeatherApp"
      description="Get the weather of Hongkong"
      className="container"

    >
      <img class="image" src={weather} alt="Logo" />
    </Base>
  );
}
