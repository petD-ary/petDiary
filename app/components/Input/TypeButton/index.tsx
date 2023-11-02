import React from 'react';

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
      type='button'
      onClick={handleClick}
      className={`
      flex-grow
      rounded-lg
      h-[60px]
        ${selectedType === type ? 'bg-black text-white' : 'bg-grayColor-100'}
      `}
    >
      {type}
    </button>
  );
}

export default TypeButton;
