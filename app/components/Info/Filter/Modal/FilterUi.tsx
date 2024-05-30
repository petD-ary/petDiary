import { filterState } from '@/recoil/Info/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import Radio from '@/assets/images/buttons-radio-m.svg';
import RadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';

const FilterUi = ({
  option,
  type,
}: {
  option: { desc: string; value: string };
  type: 'petType' | 'signal' | 'signalDepth';
}) => {
  const [filter, setFilter] = useRecoilState(filterState);
  return (
    <div
      onClick={() => setFilter((prev) => ({ ...prev, [type]: option.value }))}
      className='px-3 py-4 border-b border-extra-deviders flex justify-between'
    >
      <span>{option.desc}</span>
      {filter[type] === option.value ? <Radio /> : <RadioDisabled />}
    </div>
  );
};

export default FilterUi;
