import React from "react";

interface ScheduleDay {
  date: number;
  day: string;
  detail: React.ReactNode;
}

const ScheduleItem = ({ date, day, detail }: ScheduleDay) => {
  return (
    <div className="mb-5 p-5 flex items-center bg-white rounded-xl ">
      <div className="w-1/5 text-center  pr-3 mr-3 flex flex-col border-r-2 border-grayColor-200">
        <div className="text-2xl font-bold">{date}</div>
        <div className="text-sm font-semibold">{day}</div>
      </div>
      {detail}
    </div>
  );
};

export default ScheduleItem;
