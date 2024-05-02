import { addPetData } from '@/api/addPetData';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import PetInfo from '@/components/PetInfo';
import { useModal } from '@/hooks/useModal';
import { petInfoState } from '@/recoil/Account/atoms';
import { FormEvent } from 'react';
import { useRecoilValue } from 'recoil';

const PetAddModal = () => {
  const petInfo = useRecoilValue(petInfoState);
  const { removeModal } = useModal();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addPetData(petInfo);
    } finally {
      removeModal();
    }
  };

  return (
    <Modal type={MODAL_TYPE.PET_ADD} variant={MODAL_VARIANT.ALL}>
      <Modal.Header titleType='center' title='반려동물 추가' />
      <div className='h-[calc(100%_-_56px)] px-5 pt-10 overflow-y-auto scrollbar-none'>
        <PetInfo handleSubmit={(e) => handleSubmit(e)} submitValue='확인' />
      </div>
    </Modal>
  );
};

export default PetAddModal;
