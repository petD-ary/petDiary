import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { filterList } from '../Filter/filterModalList';
import { useModal } from '@/hooks/view/useModal';
import Button from '@/components/Button';
import { PetType, filterState } from '@/recoil/Info/atoms';
import FilterOption from '../Filter/FilterOption';

const PetTypeModal = () => {
  const { removeModal } = useModal();

  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_PET_TYPE,
  )[0];
  const [fitler, setFilter] = useRecoilState(filterState);
  const [isSelected, setIsSelected] = useState<PetType>(fitler.petType);

  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_PET_TYPE}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title={modalData.title} titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {modalData.option.map((option) => (
          <FilterOption
            key={option.value}
            isSelected={isSelected === option.value}
            onClick={(value) => setIsSelected(value as PetType)}
            option={option}
          />
        ))}
      </div>
      <div className='px-5 py-3'>
        <Button
          variant='contained'
          onClick={() => {
            setFilter((prev) => ({ ...prev, petType: isSelected }));
            removeModal();
          }}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default PetTypeModal;
