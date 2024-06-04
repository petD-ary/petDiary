import React from 'react';
import { filterList } from '../Filter/filterModalList';
import Modal, { MODAL_TYPE } from '@/components/Modal';
import FilterList from '../Filter/FilterOption';

const ModalSignal = () => {
  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_SIGNAL,
  )[0];

  return (
    <Modal type={MODAL_TYPE.INFO_FILTER_SIGNAL}>
      <Modal.Header title={modalData.title} titleType='left' />
      {modalData.option.map((option) => (
        <FilterList key={option.value} type='signal' option={option} />
      ))}
    </Modal>
  );
};

export default ModalSignal;
