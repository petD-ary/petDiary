import React from "react";

interface TypeButtonProps {
  type: string;
  selectedType: string;
  setType: (type: string) => void;
}

function TypeButton({ type, selectedType, setType }: TypeButtonProps) {
  const handleClick = () => {
    setType(type);
  };

  return (
    <button type="button" onClick={handleClick} className={selectedType === type ? "active" : ""}>
      {type}
    </button>
  );
}

export default TypeButton;
