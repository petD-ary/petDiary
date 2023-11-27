import React from "react";
import Temperatures from "../Weather/Temperatures";
import ScheduleItem from "./ScheduleItem";
import ScheduleItemDetail from "./ScheduleItemDetail";

const ScheduleList = () => {
  const ScheduleData = [
    {
      date: 23,
      day: "토요일",
      work: "사상충 약 먹으러!",
      location: "프렌즈동물병원",
      time: "14:00 ~ 15:00",
    },
    {
      date: 23,
      day: "토요일",
      work: "사상충 약 먹으러!",
      location: "프렌즈동물병원",
      time: "14:00 ~ 15:00",
    },
  ];

  return (
    <div>
      {ScheduleData.map((item, i) => {
        return (
          <ScheduleItem
            key={item.work}
            date={item.date}
            day={item.day}
            detail={<ScheduleItemDetail work={item.work} location={item.location} time={item.time} />}
          />
        );
      })}
    </div>
  );
};

export default ScheduleList;
