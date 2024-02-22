import updatedPetData from '@/api/updatedPetDate';
import { PetObjProps } from '@/components/Account/PetInfoForm';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import PetInfo from '@/components/PetInfo';
import { INPUT_TYPE, PetObjValue } from '@/components/PetInfo/type';
import { useModal } from '@/hooks/useModal';
import { PetData } from '@/types/petData';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const PetEditModal = ({ data }: { data: PetData }) => {
  const [petInfo, setPetInfo] = useState<PetData>(data);
  const { removeModal } = useModal();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      id: petInfo.id,
      userId: 2,
      petType: petInfo.petType,
      breed: '코리안숏헤어',
      name: '탄이',
      gender: '남아',
      neutered: true,
      birthday: '2023-12-16',
      adoptionDate: '2024-01-08',
      weight: '5.5',
    };
    const updatedPetInfo = await updatedPetData(newData);
    // if (updatedPetInfo) {
    //   return removeModal();
    // } else {
    // }
  };

  useEffect(() => {
    setPetInfo(data);
  }, [data]);

  return (
    <>
      <Modal type={MODAL_TYPE.PETEDIT} variant={MODAL_VARIANT.SLIDE}>
        <Modal.Header title='반려동물 수정' titleType='center' />
        <div className='px-5 pt-10 overflow-y-auto scrollbar-none'>
          <PetInfo handleSubmit={handleSubmit} submitValue='저장' />
        </div>
      </Modal>
    </>
  );
};

export default PetEditModal;
