import { alignState, filterState } from '@/recoil/Info/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import Radio from '@/assets/images/buttons-radio-m.svg';
import RadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';

const AlignOption = ({
  option,
  type,
}: {
  option: { desc: string; value: string };
  type: 'risk' | 'importance';
}) => {
  const [align, setAlign] = useRecoilState(alignState);
  return (
    <div
      onClick={() => setAlign((prev) => ({ ...prev, [type]: option.value }))}
      className='px-3 py-4 border-b border-extra-deviders flex justify-between'
    >
      <span>{option.desc}</span>
      {align[type] === option.value ? <Radio /> : <RadioDisabled />}
    </div>
  );
};

export default AlignOption;
