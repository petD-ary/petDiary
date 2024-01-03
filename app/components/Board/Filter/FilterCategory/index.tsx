'use client';
import Filter from '@/components/Board/Filter';
import { useState } from 'react';

interface ComponentProps {
  filterItem: string[];
}

const FilterCategory = ({ filterItem }: ComponentProps) => {
  const [selected, setSelected] = useState('전체');

  return (
    <Filter
      filterItem={filterItem}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

export default FilterCategory;
