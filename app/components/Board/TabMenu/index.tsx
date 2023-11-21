"use client";
import Container from "@/components/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface ChangePageBtnProps {
  tabList: { path: string; title: string }[];
}

const TabMenu = ({ tabList }: ChangePageBtnProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex mx-auto max-w-[1000px] min-w-[300px] justify-between gap-2
   `}
    >
      {tabList.map((tab) => (
        <Link
          key={tab.path}
          href={tab.path}
          className={`px-5 py-3 border-2 rounded-lg flex-1 ${
            pathname === tab.path ? " border-black bg-grayColor-100" : "border-grayColor-200"
          }`}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
};

export default TabMenu;
