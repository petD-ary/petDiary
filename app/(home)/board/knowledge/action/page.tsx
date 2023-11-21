"use client";
import Filter from "@/components/Board/Filter";
import Container from "@/components/Container";
import { useState } from "react";
let action = ["대변", "소변", "구토", "몸무게", "음수량", " 수면 시 호흡 수"];
const Action = () => {
  let [selected, setSelected] = useState("대변");
  return (
    <Container>
      <Filter filterItem={action} selected={selected} />
      Action
    </Container>
  );
};

export default Action;
