import { useEffect, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachWeekOfInterval,
  isToday,
  isSameMonth,
} from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const weeksInMonth = eachWeekOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <div>
      {/* <div className="flex items-center justify-between mb-4">
        <div className="px-2 py-1 rounded" onClick={prevMonth}>
          <IoIosArrowBack />
        </div>
        <span className="text-xl font-semibold">{format(currentMonth, "MMMM yyyy")}</span>
        <button className=" px-2 py-1 rounded" onClick={nextMonth}>
          <IoIosArrowForward />
        </button>
      </div> */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <th key={day} className=" p-2 text-center font-thin">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeksInMonth.map((week, index) => (
            <tr key={index}>
              {eachWeekOfInterval({ start: week, end: week }).map((day) => (
                <td
                  key={day.toString()}
                  className={`p-2 text-center ${
                    isToday(day)
                      ? "bg-blue-200"
                      : isSameMonth(day, currentMonth)
                      ? "bg-white"
                      : "bg-gray-200"
                  }`}
                >
                  {format(day, "d")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
