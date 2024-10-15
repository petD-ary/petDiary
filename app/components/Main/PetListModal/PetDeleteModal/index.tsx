import React from 'react';
import { QueryObserverResult } from 'react-query';
import { useResetRecoilState } from 'recoil';

import { deletePet } from '@/apis/petData';
import Button from '@/components/Button';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useModal } from '@/hooks/view/useModal';
import { petInfoState } from '@/recoil/Account/atoms';

const PetDeleteModal = ({
  id,
  refetch,
}: {
  id?: number;
  refetch: () => Promise<QueryObserverResult<any, any>>;
}) => {
  const { removeModal } = useModal();
  const resetPetInfo = useResetRecoilState(petInfoState);

  const handleDeletePet = async () => {
    if (!id) return;
    const response = await deletePet(id);
    if (response?.status === 200) {
      resetPetInfo();
      // 삭제 확인 모달 종료
      removeModal();
      // 반려동물 수정 모달 종료
      removeModal();
      refetch();
    }
  };

  const handleReset = () => {
    resetPetInfo();
    removeModal();
  };

  return (
    <Modal type={MODAL_TYPE.PET_DELETE} variant={MODAL_VARIANT.CARD}>
      <p className='text-center pt-10 pb-6'>
        정말 삭제를 진행 하시겠어요?
        <br />
        삭제된 정보는 복구 불가합니다
      </p>
      <div className='flex w-full justify-between gap-3 p-4'>
        <Button variant='reset' type='reset' onClick={handleReset}>
          아니요
        </Button>
        <Button variant='outlined' type='button' onClick={handleDeletePet}>
          네
        </Button>
      </div>
    </Modal>
  );
};

export default PetDeleteModal;
