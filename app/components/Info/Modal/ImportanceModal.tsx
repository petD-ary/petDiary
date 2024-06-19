import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React from 'react';
import { alignList } from '../Filter/filterModalList';
import AlignOption from '../Align/AlignOption';

const ImportanceModal = () => {
  const modalData = alignList.filter(
    (item) => item.modalType === MODAL_TYPE.INFO_FILTER_IMPORTANCE,
  )[0];
  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_IMPORTANCE}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title={modalData.title} titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {modalData.option.map((option) => (
          <AlignOption key={option.value} type='importance' option={option} />
        ))}
      </div>
    </Modal>
  );
};

export default ImportanceModal;
