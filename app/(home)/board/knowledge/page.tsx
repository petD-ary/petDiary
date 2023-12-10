"use client";
import Action from "@/components/Board/action";
import Danger from "@/components/Board/danger";
import Disease from "@/components/Board/disease";
import Safe from "@/components/Board/safe";
import { tabState } from "@/recoil/Account/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

const Knowledge = () => {
  const tabMenu = useRecoilValue(tabState);

  return (
    <React.Fragment>
      {tabMenu === "질병지식" ? (
        <Disease />
      ) : tabMenu === "행동신호" ? (
        <Action />
      ) : tabMenu === "위험음식" ? (
        <Danger />
      ) : (
        <Safe />
      )}
    </React.Fragment>
  );
};

export default Knowledge;
