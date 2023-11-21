"use client";
import Filter from "@/components/Board/Filter";
import Container from "@/components/Container";
import { useState } from "react";

let disease = ["전체", "강아지", "고양이", " 위험도 낮은 순", "위험도 높은순"];
const Disease = () => {
  let [selected, setSelected] = useState("전체");
  return (
    <Container>
      <Filter filterItem={disease} selected={selected} />
      Disease
    </Container>
  );
};

export default Disease;
