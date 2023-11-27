import React from "react";
import Highlight from "../PetInfo/Highlight";

interface CardType {
  title: string;
  weather: string;
  addition?: React.ReactNode;
}

const WeatherCard = ({ title, weather, addition }: CardType) => {
  return (
    <div className="flex justify-between sm:w-1/2 md:w-full lg:w-1/2  h-full p-4 bg-grayColor-100 rounded-xl">
      <div className="flex flex-col justify-between ">
        <div className="text-2xl">
          <div className="text-lg">{title}</div>
          <Highlight content={weather} />
        </div>
        {addition}
      </div>
      <div className="flex items-end ">
        <div className="p-5 bg-grayColor-200 rounded-lg">img</div>
      </div>
    </div>
  );
};

export default WeatherCard;
