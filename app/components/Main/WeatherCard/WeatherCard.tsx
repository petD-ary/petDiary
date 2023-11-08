import React from "react";
import Highlight from "../PetInfo/Highlight";

interface CardType {
  title: string;
  subTitle: string;
}

const WeatherCard = ({ title, subTitle }: CardType) => {
  return (
    <div className="flex justify-between w-1/2 h-full p-4 bg-grayColor-100 rounded-xl">
      <div className="flex flex-col justify-between ">
        <div className="text-2xl">
          <div className="text-lg">{title}</div>
          <Highlight content={subTitle} />
        </div>
        {/* <div className="text-sm ">
          <span className="mr-2">
            최저 <Highlight content="21°" />
          </span>
          <span>
            최고 <Highlight content="28°" />
          </span>
        </div> */}
      </div>
      <div className="flex items-end ">
        <div className="p-5 bg-grayColor-200 rounded-lg">img</div>
      </div>
    </div>
  );
};

export default WeatherCard;
