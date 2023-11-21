"use client";
import ListHeader from "@/components/Board/BoardList/Header";
import BoardList from "@/components/Board/BoardList/List";
import FilterCategory from "@/components/Board/Filter/FilterCategory";
let disease = ["전체", "강아지", "고양이", " 위험도 낮은 순", "위험도 높은순"];
const Disease = () => {
  return (
    <>
      <FilterCategory filterItem={disease} />
      <ListHeader title="위험 음식" />
      <BoardList />
    </>
  );
};

export default Disease;
