import React from "react";

interface DayProps {
  day: string;
  monthYear: string;
}

const DayMark: React.FC<DayProps> = ({ day, monthYear }) => {
  return (
    <div className="p-4 flex justify-between font-semibold border-b border-grayColor-100">
      <div>{day}</div>
      <div>{monthYear}</div>
    </div>
  );
};

export default DayMark;
