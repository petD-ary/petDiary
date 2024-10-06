import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { signalDepth } from '../Filter/filterModalList';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import FilterList from '../Filter/FilterOption';
import { useModal } from '@/hooks/view/useModal';
import { filterState, SignalDepthType } from '@/recoil/Info/atoms';
import Button from '@/components/Button';

const SignalDepthModal = () => {
  const { removeModal } = useModal();

  const [filter, setFilter] = useRecoilState(filterState);
  const [isSelected, setIsSelected] = useState<SignalDepthType>(
    filter.signalDepth,
  );

  return (
    <Modal
      type={MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH}
      variant={MODAL_VARIANT.HALF_SLIDE}
    >
      <Modal.Header title='신호' titleType='left' />
      <div className='px-5 pt-1 pb-5'>
        {signalDepth.map((option) => (
          <FilterList
            key={option.value}
            isSelected={isSelected === option.value}
            onClick={(value) => setIsSelected(value as SignalDepthType)}
            option={option}
          />
        ))}
      </div>
      <div className='px-5 py-3'>
        <Button
          variant='contained'
          onClick={() => {
            setFilter((prev) => ({ ...prev, signalDepth: isSelected }));
            removeModal();
          }}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default SignalDepthModal;
