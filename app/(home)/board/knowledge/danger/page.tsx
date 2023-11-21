"use client";
import FilterCategory from "@/components/Board/Filter/FilterCategory";

let danger = ["전체", "강아지", "고양이"];
const Danger = () => {
  return <FilterCategory filterItem={danger} list="danger" />;
};

export default Danger;
