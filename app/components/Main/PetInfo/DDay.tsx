import { petInfoState } from "@/recoil/Main/atoms";
import React from "react";
import { useRecoilValue } from "recoil";
import Highlight from "./Highlight";

const DDay = () => {
  const petInfo = useRecoilValue(petInfoState);

  return (
    <div className="inline-block px-6 py-3 mb-3 bg-white items-center rounded-xl text-sm">
      <div className="mb-3">
        <Highlight content={petInfo.name} />이 태어난지 <Highlight content={petInfo.born} />
      </div>
      <div>
        우리가 함께한 지 <Highlight content={petInfo.together} />
      </div>
    </div>
  );
};

export default DDay;
