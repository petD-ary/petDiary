import React from 'react';

import { PetType, SignalType, signalDepthType } from '@/recoil/Info/atoms';
import Radio from '@/assets/images/buttons-radio-m.svg';
import RadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';

const FilterOption = ({
  isSelected,
  onClick,
  option,
}: {
  isSelected: boolean;
  onClick: (value: SignalType | PetType | signalDepthType) => void;
  option: { desc: string; value: SignalType | PetType | signalDepthType };
}) => {
  return (
    <div
      onClick={() => onClick(option.value)}
      className='cursor-pointer px-3 py-4 border-b border-extra-deviders flex justify-between'
    >
      <span>{option.desc}</span>
      {isSelected ? <Radio /> : <RadioDisabled />}
    </div>
  );
};

export default FilterOption;
