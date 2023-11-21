"use client";
import ListHeader from "@/components/Board/BoardList/Header";
import BoardList from "@/components/Board/BoardList/List";
import FilterCategory from "@/components/Board/Filter/FilterCategory";
const action = ["전체", "대변", "소변", "구토", "몸무게", "음수량", "수면 시 호흡 수"];

const Action = () => {
  return (
    <>
      <FilterCategory filterItem={action} />
      <ListHeader title="행동 신호" />
      <BoardList />
    </>
  );
};

export default Action;
