import React from "react";
import Calender from "./Calender";
import ScheduleList from "./ScheduleList";

const Schedule = () => {
  return (
    <div className=" h-full flex flex-col gap-5 p-4 bg-grayColor-100 rounded-xl ">
      <div className="text-lg font-semibold">이달의 일정</div>
      <Calender />
      <ScheduleList />
    </div>
  );
};

export default Schedule;
