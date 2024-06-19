import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React from 'react';
import { filterList } from '../Filter/filterModalList';
import Option from '../Filter/FilterOption';

const PetTypeModal = () => {
  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_PET_TYPE,
  )[0];

  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_PET_TYPE}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title={modalData.title} titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {modalData.option.map((option) => (
          <Option key={option.value} type='petType' option={option} />
        ))}
      </div>
    </Modal>
  );
};

export default PetTypeModal;
