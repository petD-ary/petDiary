import React from "react";

interface ScheduleItem {
  work: string;
  location: string;
  time: string;
}

const ScheduleItemDetail = ({ work, location, time }: ScheduleItem) => {
  return (
    <div className="w-4/5 flex justify-between">
      <div>
        <div className="mb-3 font-semibold">{work}</div>
        <div className="flex">
          <div className="mr-2 w-5 h-5 bg-grayColor-100 rounded-xl"></div>
          <div className="text-sm">{location}</div>
        </div>
      </div>
      <div>{time}</div>
    </div>
  );
};

export default ScheduleItemDetail;
