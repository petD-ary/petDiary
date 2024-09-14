import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import DateScrollPicker from './DateScrollPicker';

const DateScrollPickerModal = () => {
  return (
    <Modal type={MODAL_TYPE.WHEEL_CALENDAR} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className='h-full p-5 flex flex-col justify-between items-center'>
        <DateScrollPicker />
        <Modal.Button>확인</Modal.Button>
      </div>
    </Modal>
  );
};

export default DateScrollPickerModal;
