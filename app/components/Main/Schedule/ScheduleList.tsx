import React from "react";
import Temperatures from "../Weather/Temperatures";
import ScheduleItem from "./ScheduleItem";
import ScheduleItemDetail from "./ScheduleItemDetail";

const ScheduleList = () => {
  return (
    <div>
      <ScheduleItem
        date="23"
        day="토요일"
        detail={
          <ScheduleItemDetail work="사상충 약 먹으러!" location="프렌즈동물병원" time="14:00 ~ 15:00" />
        }
      />
    </div>
  );
};

export default ScheduleList;
