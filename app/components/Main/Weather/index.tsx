import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import Temperatures from "./Temperatures";

const Weather = () => {
  let weatherDate = {
    weather: "22° 흐림",
    low: "21°",
    high: "28°",
  };
  return (
    <WeatherCard
      title="오늘의 날씨"
      weather={weatherDate.weather}
      addition={<Temperatures low={weatherDate.low} high={weatherDate.high} />}
    />
  );
};

export default Weather;
