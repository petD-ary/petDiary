import React, { useState } from "react";
import Calender from "./Calender";
import DayMark from "./DayMark";
import ScheduleList from "./ScheduleList";

let dayData = { day: "20일, 수요일", monthYear: "9월 2023년" };
const Schedule = () => {
  let [day, setDay] = useState(dayData);
  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 bg-grayColor-100 rounded-xl">
      <div className="text-lg font-semibold">이달의 일정</div>
      <div className=" bg-white rounded-xl">
        <DayMark day={day.day} monthYear={day.monthYear} />
        <Calender />
      </div>

      <ScheduleList />
    </div>
  );
};

export default Schedule;
