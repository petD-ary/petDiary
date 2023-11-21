"use client";
import TabMenu from "@/components/Board/TabMenu";
import Container from "@/components/Container";
import React from "react";

const KnowledgeLayout = ({ children }: { children: React.ReactNode }) => {
  const tabList = [
    { path: "/board/knowledge/disease", title: "질병사전" },
    { path: "/board/knowledge/action", title: "행동신호" },
    { path: "/board/knowledge/danger", title: "위험음식" },
    { path: "/board/knowledge/safe", title: "안심음식" },
  ];

  return (
    <React.Fragment>
      <div className="mx-auto max-w-[1000px] min-w-[300px]">
        <Container>
          <TabMenu tabList={tabList} />
          {children}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KnowledgeLayout;
