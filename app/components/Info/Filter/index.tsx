import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { MODAL_TYPE } from '../../Modal';
import { useModal } from '@/hooks/view/useModal';
import { filterState } from '@/recoil/Info/atoms';
import { filterList, signalDepth } from './filterModalList';
import IconArrowDown from '@/assets/images/info/icon-arrowDown.svg';

const Filter = ({
  modalType,
  filter,
}: {
  modalType: MODAL_TYPE;
  filter: 'petType' | 'signal' | 'signalDepth';
}) => {
  const { addModal } = useModal();
  const isSelected = useRecoilValue(filterState);
  const filterData = filterList.filter(
    (item) => item.modalType === modalType,
  )[0];

  const selectedOption = useMemo(() => {
    if (modalType === MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH)
      return signalDepth.filter((item) => item.value === isSelected[filter])[0];

    return filterData.option.filter(
      (item) => item.value === isSelected[filter],
    )[0];
  }, [isSelected]);

  return (
    <div
      onClick={() => addModal(modalType)}
      className={`cursor-pointer
      border border-extra-border rounded-[4px]
      text-text-primary text-caption1 font-semibold
      flex justify-between items-center
      px-3 py-2 h-[32px]
      ${selectedOption.desc.length > 4 ? '' : 'w-[90px]'}
      `}
    >
      {selectedOption.desc}
      <span className='pl-3'>
        <IconArrowDown />
      </span>
    </div>
  );
};

export default Filter;
