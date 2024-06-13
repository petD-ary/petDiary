import React, { useMemo } from 'react';
import { MODAL_TYPE } from '../../Modal';
import { useModal } from '@/hooks/view/useModal';
import { useRecoilValue } from 'recoil';
import { filterState } from '@/recoil/Info/atoms';
import { filterList } from './filterModalList';
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
      w-[90px] h-[32px] px-3 py-2
      `}
    >
      {selectedOption.desc}
      <span>
        <IconArrowDown />
      </span>
    </div>
  );
};

export default Filter;
