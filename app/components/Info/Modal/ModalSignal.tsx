import React from 'react';
import { filterList } from '../Filter/filterModalList';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import FilterList from '../Filter/FilterOption';

const ModalSignal = () => {
  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_SIGNAL,
  )[0];

  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_SIGNAL}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title={modalData.title} titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {modalData.option.map((option) => (
          <FilterList key={option.value} type='signal' option={option} />
        ))}
      </div>
    </Modal>
  );
};

export default ModalSignal;
