"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ChangePageBtnProps {
  filterItem: string[];
  selected: string;
  setSelected: (value: string) => void;
}

const Filter = ({ filterItem, selected, setSelected }: ChangePageBtnProps) => {
  const filterSelected = (item: string) => {
    setSelected(item);
  };
  return (
    <div
      className={`flex gap-4 px-5 py-3 mb-7 border border-grayColor-200 rounded-lg  
   `}
    >
      {filterItem.map((item, index) => (
        <React.Fragment key={item}>
          <div
            onClick={() => filterSelected(item)}
            className={`cursor-pointer ${selected === item ? "text-black" : "text-grayColor-200"}`}
          >
            {item}
          </div>
          {index < filterItem.length - 1 && <div className="w-px translate-y-0.5 bg-grayColor-200" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Filter;
