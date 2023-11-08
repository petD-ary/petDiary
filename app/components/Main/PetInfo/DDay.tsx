import React from "react";
import Highlight from "./Highlight";

const DDay = () => {
  return (
    <div className="inline-block px-6 py-3 mb-3 bg-white items-center rounded-xl text-sm">
      <div className="mb-3">
        <Highlight content="김콩" />이 태어난지 <Highlight content="1,004일" />
      </div>
      <div>
        우리가 함께한 지 <Highlight content="1,004일" />
      </div>
    </div>
  );
};

export default DDay;
