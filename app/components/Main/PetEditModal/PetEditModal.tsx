'use client';
import { ReactNode, useEffect, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '../../Modal';
import { PetData } from '@/types/petData';
import { getPetData } from '@/utils/getPetData';
import PetEditCard from './PetEditCard';

const PetEditModal = () => {
  const [petData, setPetData] = useState<PetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petData = await getPetData();
        setPetData(petData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal type={MODAL_TYPE.PET_EDIT} variant={MODAL_VARIANT.ALL}>
      <Modal.Header
        title='내 반려동물'
        desc={petData?.length}
        titleType='left'
      />
      <div className='px-5'>
        <div className='py-4 pt-5 flex flex-col gap-2'>
          {petData?.map((data) => <PetEditCard data={data} />)}
        </div>
        <div className='py-3'></div>
      </div>
    </Modal>
  );
};

export default PetEditModal;
