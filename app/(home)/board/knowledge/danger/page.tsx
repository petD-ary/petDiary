"use client";
import Filter from "@/components/Board/Filter";
import Container from "@/components/Container";
import { useState } from "react";
let danger = ["전체", "강아지", "고양이"];
const Danger = () => {
  let [selected, setSelected] = useState("전체");
  return (
    <Container>
      <Filter filterItem={danger} selected={selected} />
      Danger
    </Container>
  );
};

export default Danger;
