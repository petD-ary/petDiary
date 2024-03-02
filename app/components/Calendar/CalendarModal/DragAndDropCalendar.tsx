import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  YEAR: 'year',
  MONTH: 'month',
};

const DraggableItem = ({ type, value, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type, value },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDrop(item, dropResult);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ opacity, cursor: 'move' }}>
      {value}
    </div>
  );
};

const DroppableArea = ({ selectedItems }) => {
  const [, drop] = useDrop({
    accept: [ItemTypes.YEAR, ItemTypes.MONTH],
    drop: (item) => {
      // Handle the dropped item
      console.log(`Dropped ${item.type}: ${item.value}`);
    },
  });

  return (
    <div style={{ border: '1px solid #ccc', minHeight: '100px' }} ref={drop}>
      <h2>Selected Items:</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

const DragAndDropCalendar = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDrop = (item, dropResult) => {
    // Handle the dropped item as per your requirements
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <h2>Draggable Years:</h2>
          <DraggableItem type={ItemTypes.YEAR} value={2022} onDrop={handleDrop} />
          <DraggableItem type={ItemTypes.YEAR} value={2023} onDrop={handleDrop} />
          {/* Add more years as needed */}
        </div>
        <div>
          <h2>Draggable Months:</h2>
          <DraggableItem type={ItemTypes.MONTH} value="January" onDrop={handleDrop} />
          <DraggableItem type={ItemTypes.MONTH} value="February" onDrop={handleDrop} />
          {/* Add more months as needed */}
        </div>
        <DroppableArea selectedItems={selectedItems} />
      </div>
    </DndProvider>
  );
};

export default DragAndDropCalendar;
