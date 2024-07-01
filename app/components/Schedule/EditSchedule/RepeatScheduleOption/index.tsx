'use client';
import React from 'react';
import OptionButton from './OptionButton';
import { ScheduleOption } from '@/apis/schedules';

const RepeatScheduleOption = ({
  selected,
  setSelected,
}: {
  selected: ScheduleOption;
  setSelected: (value: ScheduleOption) => void;
}) => {
  return (
    <div className={`flex flex-col justify-between gap-3 pb-4`}>
      <OptionButton
        selected={selected === 'onlyOne'}
        onClick={() => {
          setSelected('onlyOne');
        }}
      >
        선택된 일정만
      </OptionButton>

      <OptionButton
        selected={selected === 'since'}
        onClick={() => {
          setSelected('since');
        }}
      >
        이후 일정
      </OptionButton>
      <OptionButton
        selected={selected === 'all'}
        onClick={() => {
          setSelected('all');
        }}
      >
        모든 일정
      </OptionButton>
    </div>
  );
};

export default RepeatScheduleOption;
