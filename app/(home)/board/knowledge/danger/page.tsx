"use client";
import ListHeader from "@/components/Board/BoardList/Header";
import BoardList from "@/components/Board/BoardList/List";
import FilterCategory from "@/components/Board/Filter/FilterCategory";

let danger = ["전체", "강아지", "고양이"];
const Danger = () => {
  return (
    <>
      <FilterCategory filterItem={danger} />
      <ListHeader title="위험 음식" />
      <BoardList />
    </>
  );
};

export default Danger;
