import React from "react";
import Temperatures from "../Weather/Temperatures";
import WeatherCard from "../WeatherCard/WeatherCard";
let WalkData = {
  state: "좋음",
};
const Walk = () => {
  return <WeatherCard title="산책 지수" weather={WalkData.state} />;
};

export default Walk;
