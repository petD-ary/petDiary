'use client';
import { PetInfoForm } from '@/components/Account/PetInfoForm';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React from 'react';

const AddPetModal = () => {
  return (
    <Modal type={MODAL_TYPE.PET_ADD} variant={MODAL_VARIANT.FULLCARD}>
      <Modal.Header title='반려동물 추가' titleType='center' />
    </Modal>
  );
};

export default AddPetModal;
