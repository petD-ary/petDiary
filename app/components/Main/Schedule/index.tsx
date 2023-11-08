import React from "react";
import Calender from "./Calender";

const Schedule = () => {
  return (
    <div className="w-3/6 p-4 bg-grayColor-100 rounded-xl ">
      <div className="mb-4 text-lg font-semibold">이달의 일정</div>
      <Calender />
    </div>
  );
};

export default Schedule;
