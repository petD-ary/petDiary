"use client";
import TabMenu from "@/components/Board/TabMenu";
import Container from "@/components/Container";
import { tabState } from "@/recoil/Account/atoms";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const KnowledgeLayout = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useRecoilState(tabState);

  const tabList = [
    { id: 1, title: "질병사전" },
    { id: 2, title: "행동신호" },
    { id: 3, title: "위험음식" },
    { id: 4, title: "안심음식" },
  ];

  return (
    <React.Fragment>
      <div className="mx-auto max-w-[1000px] min-w-[300px]">
        <Container>
          <TabMenu tabList={tabList} selected={selected} setSelected={setSelected} />
          {children}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KnowledgeLayout;
