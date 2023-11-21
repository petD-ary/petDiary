"use client";
import Filter from "@/components/Board/Filter";
import Container from "@/components/Container";
import { useState } from "react";

interface ComponentProps {
  filterItem: string[];
  list: string;
}

const FilterCategory = ({ filterItem, list }: ComponentProps) => {
  const [selected, setSelected] = useState("전체");

  return (
    <Container>
      <Filter filterItem={filterItem} selected={selected} setSelected={setSelected} />
      {list}
    </Container>
  );
};

export default FilterCategory;
