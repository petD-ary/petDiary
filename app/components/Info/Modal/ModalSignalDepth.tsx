import React from 'react';
import { filterList } from '../Filter/filterModalList';
import Modal, { MODAL_TYPE } from '@/components/Modal';
import FilterList from '../Filter/FilterOption';

const ModalSignalDepth = () => {
  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH,
  )[0];

  return (
    <Modal type={MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH}>
      <Modal.Header title={modalData.title} titleType='left' />
      {modalData.option.map((option) => (
        <FilterList key={option.value} type='signalDepth' option={option} />
      ))}
    </Modal>
  );
};

export default ModalSignalDepth;
