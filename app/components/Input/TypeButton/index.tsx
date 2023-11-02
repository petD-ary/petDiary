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
    <button
      type="button"
      onClick={handleClick}
      className={
        selectedType === type
          ? "  flex-grow bg-black text-white py-9 px-8 rounded-xl"
          : " flex-grow bg-grayColor-100 py-9 px-8 rounded-xl"
      }
    >
      {type}
    </button>
  );
}

export default TypeButton;
