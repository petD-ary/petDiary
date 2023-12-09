import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ListHeader = ({ title }: { title: string }) => {
  return (
    <div className="py-2 flex justify-between mb-6 border-b border-black">
      <div className="text-lg font-bold">{title}</div>
      <div className="flex items-center gap-2 text-sm">
        <div>맨 위로</div>
        <IoIosArrowUp />
      </div>
    </div>
  );
};

export default ListHeader;
