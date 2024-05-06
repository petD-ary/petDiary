import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import RepeatList from './RepeatList';
import { repeatList } from '../constants';

const ScheduleRepeatModal = () => {
  return (
    <Modal type={MODAL_TYPE.SCHEDULE_REPEAT} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='반복' titleType='left' />
      <ul className='h-full mx-5 my-5 overflow-y-scroll scrollbar-none '>
        {repeatList.map(({ key, content }) => {
          return <RepeatList key={key} content={content} keyword={key} />;
        })}
      </ul>
      <Modal.Button children='확인' />
    </Modal>
  );
};

export default ScheduleRepeatModal;
