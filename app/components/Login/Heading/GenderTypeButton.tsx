import React from "react";

interface genderType {
  gender: string;
  setGender: any;
  type: string;
}

function GenderTypeButton({ gender, setGender, type }: genderType) {
  const handleClick = () => {
    setGender(type);
  };

  return (
    <button type="button" onClick={handleClick} className={gender === type ? "active" : ""}>
      {type}
    </button>
  );
}

export default GenderTypeButton;
