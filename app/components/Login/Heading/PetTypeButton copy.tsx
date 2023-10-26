import React from "react";

interface petType {
  petType: string;
  setPetType: any;
  type: string;
}

function PetTypeButton({ petType, setPetType, type }: petType) {
  const handleClick = () => {
    setPetType(type);
  };

  return (
    <button type="button" onClick={handleClick} className={petType === type ? "active" : ""}>
      {type}
    </button>
  );
}

export default PetTypeButton;
