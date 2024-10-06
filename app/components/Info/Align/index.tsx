import React, { useMemo } from 'react';

import IconArrowDown from '@/assets/images/info/icon-arrowDown.svg';
import { alignState } from '@/recoil/Info/atoms';
import { useRecoilValue } from 'recoil';
import { MODAL_TYPE } from '@/components/Modal';
import { useModal } from '@/hooks/view/useModal';
import { alignList, AlignType } from '../Filter/filterModalList';

const Align = ({
  modalType,
  align,
}: {
  modalType: MODAL_TYPE;
  align: AlignType;
}) => {
  const { addModal } = useModal();
  const isSelected = useRecoilValue(alignState);
  const alignData = alignList.filter((item) => item.modalType === modalType)[0];

  const selectedOption = useMemo(() => {
    return alignData.option.filter(
      (item) => item.value === isSelected[align],
    )[0];
  }, [isSelected]);

  return (
    <div
      onClick={() => addModal(modalType)}
      className={`cursor-pointer
      rounded-[4px]
      text-text-primary text-caption1 font-semibold
      flex justify-between items-center gap-1
      `}
    >
      {selectedOption.desc}
      <span>
        <IconArrowDown />
      </span>
    </div>
  );
};

export default Align;
