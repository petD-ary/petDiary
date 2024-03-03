import React, { useEffect, useMemo, useRef } from 'react';

interface WheelPickerProps {
  items: { value: number; label: string }[];
  value: number;
  onChange: (value: number) => void;
  containerHeight?: number;
  itemHeight?: number;
}

const WheelPickerComponent: React.FC<WheelPickerProps> = ({
  items,
  value,
  onChange: handleChange,
  containerHeight = 210,
  itemHeight = 32,
}) => {
  const itemsContRef = useRef<HTMLUListElement>(null);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  const itemsMap = useMemo(
    () =>
      items.reduce((map, item, index) => map.set(item.value, index), new Map()),
    [items],
  );
  const currentValue = useRef(itemsMap.get(value) ?? 0);

  useEffect(() => {
    const index = itemsMap.get(value);
    if (index !== currentValue.current) {
      currentValue.current = index;
      refs.current[index]?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [value]);

  return (
    <div
      className='container'
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <ul className='items' ref={itemsContRef}>
        {items.map((item, index) => (
          <li
            className='item'
            key={item.value}
            ref={(node) => (refs.current[index] = node)}
            style={{
              height: `${itemHeight}px`,
              lineHeight: `${itemHeight}px`,
            }}
          >
            <div>{item.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const WheelPicker = React.memo(WheelPickerComponent);
