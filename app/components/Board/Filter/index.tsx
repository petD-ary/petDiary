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
    <div className="px-4 sm:px-0 py-6 sm:py-12 ">
      <div
        className={`flex gap-4 mx-auto px-5 py-3 border border-grayColor-200 rounded-lg h-12 max-w-[1000px] min-w-[300px]  
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
    </div>
  );
};

export default Filter;
