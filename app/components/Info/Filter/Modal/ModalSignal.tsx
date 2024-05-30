import React from 'react';
import { filterList } from '../filterModalList';
import Modal, { MODAL_TYPE } from '@/components/Modal';
import FilterList from './FilterUi';

const ModalSignal = () => {
  const modalData = filterList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_PET_TYPE,
  )[0];

  return (
    <Modal type={MODAL_TYPE.INFO_FILTER_PET_TYPE}>
      <Modal.Header title={modalData.title} titleType='left-X' />
      {modalData.option.map((option) => (
        <FilterList key={option.value} type='petType' option={option} />
      ))}
    </Modal>
  );
};

export default ModalSignal;
