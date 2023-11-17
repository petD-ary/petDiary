import React from "react";

interface ScheduleDay {
  date: string;
  day: string;
  detail: React.ReactNode;
}

const ScheduleItem = ({ date, day, detail }: ScheduleDay) => {
  return (
    <div className="p-7 flex items-center bg-white rounded-xl ">
      <div className="w-1/5 text-center  pr-7 mr-7 flex flex-col border-r-4 border-grayColor-200">
        <div className="text-3xl font-bold">{date}</div>
        <div className="font-semibold">{day}</div>
      </div>
      {detail}
    </div>
  );
};

export default ScheduleItem;
