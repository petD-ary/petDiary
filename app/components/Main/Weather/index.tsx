import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import Temperatures from "./Temperatures";

const Weather = () => {
  return <WeatherCard title="오늘의 날씨" subTitle="22° 흐림" addition={<Temperatures />} />;
};

export default Weather;
