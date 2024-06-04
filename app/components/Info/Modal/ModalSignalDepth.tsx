import React from 'react';
import { signalDepth } from '../Filter/filterModalList';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import FilterList from '../Filter/FilterOption';

const ModalSignalDepth = () => {
  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title='신호' titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {signalDepth.map((option) => (
          <FilterList key={option.value} type='signalDepth' option={option} />
        ))}
      </div>
    </Modal>
  );
};

export default ModalSignalDepth;
