"use client";
import FilterCategory from "@/components/Board/Filter/FilterCategory";
const action = ["전체", "대변", "소변", "구토", "몸무게", "음수량", "수면 시 호흡 수"];

const Action = () => {
  return <FilterCategory filterItem={action} list="Action" />;
};

export default Action;
