import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { alignList } from '../Filter/filterModalList';
import AlignOption from '../Align/AlignOption';
import { useModal } from '@/hooks/view/useModal';
import Button from '@/components/Button';
import { RiskType, alignState } from '@/recoil/Info/atoms';

const RiskModal = () => {
  const { removeModal } = useModal();
  const modalData = alignList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_RISK,
  )[0];
  const [filter, setFilter] = useRecoilState(alignState);
  const [isSelected, setIsSelected] = useState<RiskType>(filter.risk);

  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_RISK}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title={modalData.title} titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {modalData.option.map((option) => (
          <AlignOption
            key={option.value}
            isSelected={isSelected === option.value}
            onClick={(value) => setIsSelected(value as RiskType)}
            option={option}
          />
        ))}
      </div>
      <div className='px-5 py-3'>
        <Button
          variant='contained'
          onClick={() => {
            setFilter((prev) => ({ ...prev, risk: isSelected }));
            removeModal();
          }}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default RiskModal;
