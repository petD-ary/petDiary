import React from "react";
import DDay from "./DDay";
import Highlight from "./Highlight";
import PetImg from "./PetImg";

export interface PetInfoProps {
  name: string;
  born: string;
  together: string;
}

let petInfo: PetInfoProps = {
  name: "김콩",
  born: "1,004",
  together: "1,004",
};

const PetData = () => {
  return (
    <div className="flex justify-center mt-2">
      <div>
        <DDay petInfo={petInfo} />
        <PetImg />
        <div className="text-center">
          <span className="bg-white px-5 py-2 rounded-2xl text-sm">
            <Highlight content={petInfo.name} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetData;
