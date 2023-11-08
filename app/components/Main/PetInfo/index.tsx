import React from "react";
import EditBtn from "./EditBtn";
import PetData from "./PetData";

const PetInfo = () => {
  return (
    <div className="w-full h-4/6 p-4 bg-grayColor-100 rounded-xl">
      <EditBtn />
      <PetData />
    </div>
  );
};

export default PetInfo;
