import Modal, { MODAL_TYPE } from '@/components/Modal';
import React from 'react';
import { alignList } from '../filterModalList';

const ModalImportance = () => {
  const modalData = alignList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_IMPORTANCE,
  )[0];
  return (
    <Modal type={MODAL_TYPE.INFO_FILTER_IMPORTANCE}>
      <Modal.Header title={modalData.title} titleType='left-X' />
    </Modal>
  );
};

export default ModalImportance;
