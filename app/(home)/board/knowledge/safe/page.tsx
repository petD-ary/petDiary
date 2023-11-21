"use client";

import ListHeader from "@/components/Board/BoardList/Header";
import BoardList from "@/components/Board/BoardList/List";
import FilterCategory from "@/components/Board/Filter/FilterCategory";

let safe = ["전체", "강아지", "고양이"];
const Safe = () => {
  return (
    <>
      <FilterCategory filterItem={safe} />
      <ListHeader title="안심 음식" />
      <BoardList />
    </>
  );
};

export default Safe;
