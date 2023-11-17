import React from "react";
import Highlight from "../PetInfo/Highlight";

const Temperatures = () => {
  return (
    <div className="text-sm ">
      <span className="mr-2">
        최저 <Highlight content="21°" />
      </span>
      <span>
        최고 <Highlight content="28°" />
      </span>
    </div>
  );
};

export default Temperatures;
