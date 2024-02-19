import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { PetData } from '@/types/petData';

const PetEditModal = ({ data }: { data: PetData }) => {
  return (
    <Modal type={MODAL_TYPE.PETEDIT} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header title='반려동물 수정' titleType='center' />
      <div></div>
    </Modal>
  );
};

export default PetEditModal;
