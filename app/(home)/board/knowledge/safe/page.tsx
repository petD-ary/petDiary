"use client";

import FilterCategory from "@/components/Board/Filter/FilterCategory";

let safe = ["전체", "강아지", "고양이"];
const Safe = () => {
  return <FilterCategory filterItem={safe} list="safe" />;
};

export default Safe;
