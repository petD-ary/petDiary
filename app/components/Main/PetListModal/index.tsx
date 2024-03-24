'use client';
import { useEffect, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '../../Modal';
import { PetData } from '@/types/petData';
import { getPetData } from '@/utils/getPetData';
import PetEditCard from './PetListCard';
import Button from '@/components/Button';
import { useModal } from '@/hooks/useModal';
import PetEditModal from './PetEditModal';
import PetAddModal from './PetAddModal';

const PetListModal = () => {
  const [petData, setPetData] = useState<PetData[]>([]);

  const [selectedData, setSelectedData] = useState<number | null>(null);
  const { addModal } = useModal();

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const petData = await getPetData();
        setPetData(petData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPetData();
  }, []);

  return (
    <Modal type={MODAL_TYPE.PET_EDIT_LIST} variant={MODAL_VARIANT.ALL}>
      <Modal.Header
        title='내 반려동물'
        desc={petData?.length}
        titleType='left'
      />
      <div className='px-5'>
        <div className='py-4 pt-5 flex flex-col gap-2'>
          {petData?.map((data) => (
            <PetEditCard
              key={data.id}
              data={data}
              setSelectedData={(id: number) => setSelectedData(id)}
            />
          ))}

          {selectedData ? (
            <PetEditModal
              data={petData?.filter((item) => item.id === selectedData)[0]}
            />
          ) : null}
        </div>

        <Button
          className='border-purple-600 mt-3'
          variant={'outlined'}
          onClick={() => addModal(MODAL_TYPE.PET_ADD)}
          isDisabled={petData?.length >= 5}
        >
          {petData?.length < 5
            ? '반려동물 추가'
            : '더 이상 반려동물을 추가할 수 없어요.'}
        </Button>

        <PetAddModal />
      </div>
    </Modal>
  );
};

export default PetListModal;
