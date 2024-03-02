import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useState } from 'react';
import { DraggableItem, DroppableArea, ItemTypes } from './DragAndDropCalendar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const CalendarModal = () => {
  const [selectedItems, setSelectedItems] = useState<
    { type: string; value: string | number }[]
  >([]);

  const handleDrop = (item: { type: string; value: string | number }) => {
    // Handle the dropped item as needed
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Modal type={MODAL_TYPE.CALENDAR} variant={MODAL_VARIANT.HALFSLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className='h-full p-5 flex justify-between items-center'></div>
      <Modal.Button children='확인' />
    </Modal>
  );
};

export default CalendarModal;
