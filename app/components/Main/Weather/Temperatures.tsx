import React from "react";
import Highlight from "../PetInfo/Highlight";

interface TemperaturProps {
  low: string;
  high: string;
}
const Temperatures: React.FC<TemperaturProps> = ({ low, high }) => {
  return (
    <div className="text-sm mt-20">
      <span className="mr-2">
        최저 <Highlight content={low} />
      </span>
      <span>
        최고 <Highlight content={high} />
      </span>
    </div>
  );
};

export default Temperatures;
