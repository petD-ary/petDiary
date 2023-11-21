"use client";
import Filter from "@/components/Board/Filter";
import Container from "@/components/Container";
import { useState } from "react";
let safe = ["전체", "강아지", "고양이"];
const Safe = () => {
  let [selected, setSelected] = useState("전체");
  return (
    <Container>
      <Filter filterItem={safe} selected={selected} />
      Safe
    </Container>
  );
};

export default Safe;
