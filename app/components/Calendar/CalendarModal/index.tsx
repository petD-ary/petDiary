import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';

const CalendarModal = () => {
  return (
    <Modal type={MODAL_TYPE.CALENDAR} variant={MODAL_VARIANT.HALFSLIDE}>
    <Modal.Header title='' titleType='left-X' />
    <div className='h-full p-5 flex justify-between items-center'>
         ss
      </div>
      <Modal.Button children='확인'/>
    </Modal>
  );
};

export default CalendarModal;
