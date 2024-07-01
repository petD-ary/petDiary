'use client';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { filterList } from '../Filter/filterModalList';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import FilterList from '../Filter/FilterOption';
import { useModal } from '@/hooks/view/useModal';
import Button from '@/components/Button';
import { SignalType, filterState } from '@/recoil/Info/atoms';

const SignalModal = () => {
  const { removeModal } = useModal();

  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_SIGNAL,
  )[0];
  const [filter, setFilter] = useRecoilState(filterState);
  const [isSelected, setIsSelected] = useState<SignalType>(filter.signal);

  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_SIGNAL}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title={modalData.title} titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {modalData.option.map((option) => (
          <FilterList
            key={option.value}
            isSelected={isSelected === option.value}
            onClick={(value) => setIsSelected(value as SignalType)}
            option={option}
          />
        ))}
      </div>
      <div className='px-5 py-3'>
        <Button
          variant='contained'
          onClick={() => {
            setFilter((prev) => ({ ...prev, signal: isSelected }));
            removeModal();
          }}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default SignalModal;
