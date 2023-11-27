"use client";

import PetInfo from "@/components/Main/PetInfo";
import Schedule from "@/components/Main/Schedule";
import Weather from "@/components/Main/Weather";
import Walk from "@/components/Main/Walk";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { petInfoState } from "@/recoil/Main/atoms";

export default function Home() {
  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  useEffect(() => {
    setPetInfo({ name: "김콩", born: "1,004", together: "1,004" });
  }, []);

  return (
    <div className="max-w-[1200px] min-w-[300px] mx-auto p-14 ">
      <div className={`flex flex-row flex-wrap gap-6`}>
        <div className="flex-1 flex flex-col gap-6 ">
          <PetInfo />
          <div className="flex gap-6 sm:flex-row md:flex-col lg:flex-row">
            <Weather />
            <Walk />
          </div>
        </div>
        <div className={`flex-2`}>
          <Schedule />
        </div>
      </div>
    </div>
  );
}
