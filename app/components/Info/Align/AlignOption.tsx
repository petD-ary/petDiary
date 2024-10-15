import React from 'react';

import { RiskType } from '@/recoil/Info/atoms';
import Radio from '@/assets/images/buttons-radio-m.svg';
import RadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';

const AlignOption = ({
  isSelected,
  onClick,
  option,
}: {
  isSelected: boolean;
  onClick: (value: RiskType) => void;
  option: { desc: string; value: RiskType };
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

export default AlignOption;
