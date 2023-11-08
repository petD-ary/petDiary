import React from "react";
import { BiEditAlt } from "react-icons/bi";

const EditBtn = () => {
  return (
    <div className="flex justify-end cursor-pointer ">
      <div className="inline-flex px-5 py-2 bg-grayColor-200 items-center rounded-lg ">
        <BiEditAlt />
        <div className="ml-1">편집</div>
      </div>
    </div>
  );
};

export default EditBtn;
